/* eslint-disable quotes */
import { AntdvComponentOptions } from '@/types/drag-form/component-options';
import { FormOptions } from '@/types/drag-form/forms';
import { getAccessType } from '@/utils';
import { RuleItem } from 'async-validator';

let currentIdFormAttr: FormOptions;
let needImport: `a-${keyof AntdvComponentOptions}`[];

const scriptStringInit = (params: FormOptions) => {
  currentIdFormAttr = params;
  needImport = currentIdFormAttr.__attr__.map((item) => item.component);
  parseFormModel();
};
// TODO
/**
 * 判断是ts还是js
 * @param value
 * @param lang
 * @returns
 */
const lang = (value: string, lang?: 'ts') => {
  return `
<script${lang ? ' lang="ts"' : ''}>
${value}
</script>
`;
};

/**
 * 一系列的import
 */
const importString = () => {
  let importStr = `import { defineComponent, reactive, ref, toRaw, UnwrapRef } from 'vue';
import { ValidateErrorEntity } from 'ant-design-vue/lib/form/interface';`;
  if (needImport.includes('a-Bytemd')) {
    // 换行
    importStr += `\nimport Bytemd from '@/components/Bytemd/editor.vue'`;
  }
  if (needImport.includes('a-Tinymce')) {
    importStr += `\nimport Tinymce from '@/components/Tinymce.vue'`;
  }
  return importStr;
};

/**
 * 组件处理
 * @returns
 */
const componentString = () => {
  const componentStr = (comp: string) => {
    return `\n  components: {
    ${comp}
  },`;
  };
  let comp = '';
  if (needImport.includes('a-Tinymce')) {
    comp += `'a-Tinymce': Tinymce`;
  }
  console.log(comp, componentStr(comp));
  if (needImport.includes('a-Bytemd')) {
    if (comp !== '') comp += ',\n';
    comp += `    'a-Bytemd': Bytemd`;
  }
  return comp === '' ? '' : componentStr(comp);
};

const typescriptTypeObject: Record<string, any> = {};
/**
 * ``` js
 * {
 *    key: [
        {
          required: true,
          message: '请输入name'
        }
      ],
      ...
    }
  ```
 */
const rulesObject: Partial<Record<string, RuleItem[]>> = {};
const parseFormModel = () => {
  for (const item of currentIdFormAttr.__attr__) {
    // 插入typescript类型
    if (item.component !== 'a-Divider') {
      typescriptTypeObject[item._key] = getAccessType(item.options.props?.value).toLowerCase();
    }
    // 插入rules验证
    if (item.rules && item.component !== 'a-Divider') {
      rulesObject[item._key] = item.rules;
    }
  }
};

/**
 * ts声明的类型
 */
const typescriptTypeString = () => {
  return `
interface FormModelType ${JSON.stringify(typescriptTypeObject, null, 2)
    .replace(/"/g, '')
    .replace(/: (.*)/gm, ': $1;')
    .replace(/,;/g, ';')
    .replace(/(undefined);/g, '$1 | string;')
    .replace(/(boolean|number)/g, 'undefined | $1;')}`;
};
const jsonFormatStringValue = (json: Record<any, any>, space = 2) => {
  return JSON.stringify(json, null, space)
    .replace(/\n/g, '\n    ')
    .replace(/"(.+)":/g, '$1:');
};

const resetString = () => {
  console.log(123);
};

/**
 * 导出的js模板模块
 */
const scriptString = () => {
  return `${importString()}
${typescriptTypeString()}

export default defineComponent({${componentString()}
  setup() {
    const formRef = ref();

    /**
     * 表单model
     */
    const ${currentIdFormAttr.model}: UnwrapRef<FormModelType> = reactive(${jsonFormatStringValue(
    typescriptTypeObject,
    2
  )
    .replace(/"(number|boolean|undefined)"/g, 'undefined')
    .replace(/"string"/g, "''")});

    /**
     * 表单rules验证
     */
    const ${currentIdFormAttr.rules} = reactive(${jsonFormatStringValue(rulesObject, 2).replace(/"/g, "'")});

    /**
     * 表单提交
     */
    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          console.log('values', ${currentIdFormAttr.model}, toRaw(${currentIdFormAttr.model}));
        })
        .catch((error: ValidateErrorEntity<FormModelType>) => {
          console.log('error', error);
        });
    };

    return {
      formRef,
      ${currentIdFormAttr.model},
      ${currentIdFormAttr.rules},
      onSubmit
    };
  }
});`;
};

export const script = (params: FormOptions) => {
  scriptStringInit(params);
  return lang(scriptString(), 'ts');
};
