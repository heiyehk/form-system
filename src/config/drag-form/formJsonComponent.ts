import { AntdvComponentOptions } from '@/types/drag-form/component-options';
import zh_CN from 'ant-design-vue/es/date-picker/locale/zh_CN';

const componentNameOptions = [
  {
    title: '输入型组件',
    components: [
      {
        name: '单行',
        component: 'Input'
      },
      {
        name: '数字',
        component: 'InputNumber'
      },
      {
        name: '密码',
        component: 'InputPassword'
      },
      {
        name: '多行',
        component: 'Textarea'
      },
      {
        name: '自动完成',
        component: 'AutoComplete'
      },
      {
        name: '提及',
        component: 'Mentions'
      },
      {
        name: '富文本',
        tips: '自定义组件，请注意引入使用',
        component: 'Tinymce'
      },
      {
        name: 'markdown',
        tips: '自定义组件，请注意引入使用',
        component: 'Bytemd'
      }
    ]
  },
  {
    title: '控制型组件',
    components: [
      {
        name: '级联选择',
        component: 'Cascader'
      },
      {
        name: '选择器',
        component: 'Select'
      },
      {
        name: '日期选择框',
        component: 'DatePicker'
      },
      {
        name: '时间选择框',
        component: 'TimePicker'
      },
      {
        name: '单选框',
        component: 'Radio'
      },
      {
        name: '多选框',
        component: 'Checkbox'
      },
      {
        name: '评分',
        component: 'Rate'
      },
      {
        name: '开关',
        component: 'Switch'
      },
      {
        name: '滑动输入条',
        component: 'Slider'
      },
      {
        name: '穿梭框',
        component: 'Transfer'
      },
      {
        name: '树选择',
        component: 'TreeSelect'
      },
      {
        name: '上传',
        component: 'Upload'
      }
    ]
  },
  {
    title: '辅助型组件',
    components: [
      {
        name: '分割线',
        component: 'Divider'
      }
    ]
  }
];

const componentDefaultAttrOptions = {
  /**
   * 字段名
   */
  name: '',
  /**
   * 标题
   */
  label: '',
  /**
   * 格栅宽度
   */
  collabelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

const componentAttrOptions: AntdvComponentOptions = {
  Input: {
    prefix: '',
    suffix: '',
    label: true,
    wrapperColSpan: 24,
    props: {
      addonAfter: '',
      addonBefore: '',
      disabled: false,
      maxlength: undefined,
      value: '',
      allowClear: true,
      placeholder: '请输入内容',
      size: 'default'
    }
  },
  Textarea: {
    label: true,
    wrapperColSpan: 24,
    props: {
      disabled: false,
      maxlength: undefined,
      value: '',
      allowClear: true,
      autoSize: {
        minRows: 2,
        maxRows: 4
      },
      showCount: false,
      placeholder: '请输入内容'
    }
  },
  AutoComplete: {
    label: true,
    wrapperColSpan: 24,
    props: {
      allowClear: false,
      autofocus: false,
      backfill: false,
      options: [],
      disabled: false,
      defaultActiveFirstOption: true,
      filterOption: true,
      defaultOpen: false,
      open: false,
      placeholder: '请输入内容'
    }
  },
  Mentions: {
    label: true,
    wrapperColSpan: 24,
    props: {
      autofocus: false,
      rows: '1',
      defaultValue: '1,2,3',
      placement: 'bottom',
      value: '',
      placeholder: '请输入内容'
    }
  },
  InputNumber: {
    label: true,
    wrapperColSpan: 24,
    props: {
      disabled: false,
      maxlength: undefined,
      value: '',
      placeholder: '请输入数字'
    }
  },
  InputPassword: {
    label: true,
    wrapperColSpan: 24,
    props: {
      addonAfter: '',
      addonBefore: '',
      disabled: false,
      maxlength: undefined,
      value: '',
      allowClear: true,
      placeholder: '请输入密码'
    }
  },
  Tinymce: {
    label: true,
    wrapperColSpan: 24,
    props: {
      disabled: false,
      placeholder: '请输入内容',
      value: '',
      width: '100%',
      height: 300,
      branding: false,
      menubar: true,
      toolbar:
        'formatselect | bold italic | alignleft aligncenter alignright alignjustify | link image | outdent indent | table | removeformat preview',
      images_upload_url: ''
    }
  },
  Bytemd: {
    label: true,
    wrapperColSpan: 24,
    props: {
      disabled: false,
      maxlength: undefined,
      value: ''
    }
  },
  Cascader: {
    label: true,
    wrapperColSpan: 24,
    props: {
      allowClear: true,
      maxlength: undefined,
      expandTrigger: 'click',
      notFoundContent: '无内容',
      placeholder: '请选择',
      popupClassName: '',
      popupStyle: {},
      popupPlacement: 'bottomLeft',
      popupVisible: false,
      showSearch: false,
      size: 'default',
      value: ''
    }
  },
  Checkbox: {
    label: true,
    wrapperColSpan: 24,
    props: {
      autofocus: false,
      checked: false,
      disabled: false,
      indeterminate: false,
      value: false,
      size: 'default'
    }
  },
  DatePicker: {
    label: true,
    wrapperColSpan: 24,
    props: {
      allowClear: true,
      autofocus: false,
      disabled: false,
      mode: 'date',
      locale: zh_CN,
      value: '',
      format: 'YYYY/MM/DD HH:mm:ss',
      valueFormat: 'YYYY/MM/DD HH:mm:ss',
      placeholder: '请选择时间',
      size: 'default',
      inputReadOnly: true
    }
  },
  Radio: {
    label: true,
    wrapperColSpan: 24,
    props: {
      defaultValue: '',
      disabled: false,
      name: '',
      options: ['a', 'c'],
      size: 'default',
      value: false,
      buttonStyle: 'outline'
    }
  },
  Rate: {
    label: true,
    wrapperColSpan: 24,
    props: {
      allowClear: true,
      allowHalf: false,
      autofocus: false,
      character: undefined,
      count: 5,
      disabled: false,
      tooltips: undefined,
      value: 1
    }
  },
  Select: {
    label: true,
    wrapperColSpan: 24,
    props: {
      allowClear: true,
      bordered: true,
      defaultActiveFirstOption: true,
      disabled: false,
      dropdownClassName: '',
      dropdownMatchSelectWidth: true,
      mode: undefined,
      notFoundContent: '没有数据',
      optionFilterProp: '',
      placeholder: '请选择内容',
      showSearch: false,
      showArrow: true,
      size: 'default',
      value: undefined,
      options: [
        {
          label: '选项1',
          value: 1
        },
        {
          label: '选项2',
          value: 2
        }
      ],
      defaultOpen: undefined,
      open: undefined
    }
  },
  Slider: {
    label: true,
    wrapperColSpan: 24,
    props: {
      disabled: false,
      dots: false,
      included: true,
      max: 100,
      min: 1,
      range: false,
      step: 1,
      value: 1,
      vertical: false,
      tooltipPlacement: 'top',
      tooltipVisible: undefined
    }
  },
  Switch: {
    label: true,
    wrapperColSpan: 24,
    props: {
      checked: false,
      checkedChildren: '',
      disabled: false,
      loading: false,
      size: 'default',
      unCheckedChildren: ''
    }
  },
  TimePicker: {
    label: true,
    wrapperColSpan: 24,
    props: {
      allowClear: true,
      clearText: '清除',
      value: '',
      disabled: false,
      format: 'HH:mm:ss',
      valueFormat: 'HH:mm:ss',
      placeholder: '请选择时间'
    }
  },
  Transfer: {
    label: true,
    wrapperColSpan: 24,
    props: {
      value: '',
      disabled: false,
      titles: ['', ''],
      showSearch: false,
      showSelectAll: true
    }
  },
  TreeSelect: {
    label: true,
    wrapperColSpan: 24,
    props: {
      allowClear: false,
      defaultValue: '',
      disabled: false,
      dropdownClassName: '',
      dropdownMatchSelectWidth: true,
      placeholder: '请选择内容',
      size: 'default',
      value: ''
    }
  },
  Upload: {
    label: true,
    wrapperColSpan: 24,
    props: {
      accept: '',
      action: '',
      method: 'post',
      directory: false,
      listType: 'text',
      name: 'file',
      showUploadList: true
    }
  },
  Divider: {
    dashed: false,
    orientation: 'center'
  }
};

export { componentNameOptions, componentAttrOptions, componentDefaultAttrOptions };
