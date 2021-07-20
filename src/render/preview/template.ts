/**
 * 从上到下分别是
 * - 工具函数
 * - template模板
 * - form模板
 * - formitem模板
 */
import { FormOptions } from '@/types/drag-form/forms';
import { getAccessType } from '@/utils';
let currentIdFormAttr: FormOptions;

/**
 * 标签属性转换
 * @param attr
 * @param modelValueKey
 * @returns
 */
const parseTagAttr = (attr: Record<any, any>, modelValueKey?: string[], ignore?: string[]) => {
  if (!attr) return '';
  let tagAttr = '';
  for (const key of Object.keys(attr)) {
    // 过滤空的值
    if (attr[key] === undefined || attr[key] === null || attr[key] === '') continue;

    // 忽略处理的key，一般是区别switch的checked和value
    if (ignore && ignore.includes(key)) continue;

    if (getAccessType(attr[key]) === 'Object' && getAccessType(attr[key] === 'Array')) {
      tagAttr += `:${key}=${JSON.stringify(attr[key]).replace(/"(.+)":/, '$1:')} `;
      continue;
    }

    if (getAccessType(attr[key]) === 'Boolean' || modelValueKey?.includes(key)) {
      tagAttr += `:${key}="${attr[key]}" `;
    } else {
      tagAttr += `${key}="${attr[key]}" `;
    }
  }
  // 处理最后一个空格
  return tagAttr.substr(0, tagAttr.length - 1);
};

/**
 * template主模板节点
 * @param value
 * @returns
 */
const templateString = (value: string) => {
  return `<template>
  ${value}
</template>
`;
};

/**
 * form 模板
 * @returns
 */
const formTemplate = () => {
  const formAttr = {
    ref: 'formRef',
    name: currentIdFormAttr.name,
    model: currentIdFormAttr.model,
    rules: currentIdFormAttr.rules,
    validateOnRuleChange: currentIdFormAttr.validateOnRuleChange,
    scrollToFirstError: currentIdFormAttr.scrollToFirstError,
    validateTrigger: currentIdFormAttr.validateTrigger,
    hideRequiredMark: currentIdFormAttr.hideRequiredMark,
    labelCol: currentIdFormAttr.labelCol,
    labelAlign: currentIdFormAttr.labelAlign,
    layout: currentIdFormAttr.layout
  };
  return `<a-form ${parseTagAttr(formAttr, ['rules', 'model'])}>
  ${formItemTemplate()}
  </a-form>`;
};

/**
 * 解析formitem
 * @returns
 */
const parseFormItemTemplate = () => {
  let formitem = '';

  for (const item of currentIdFormAttr.__attr__) {
    const label = item.options.label ? ` label="${item.label}` : '';
    const name = item.required ? ` name="${item._key}"` : '';
    const size = 'size' in currentIdFormAttr ? ` size="${currentIdFormAttr.size}"` : '';
    const modelKey = item.component === 'a-Switch' ? 'checked' : 'value';

    // 处理分割线
    if (item.component === 'a-Divider') {
      formitem += `<${item.component} ${parseTagAttr(item.options.props)} />
    `;
    } else {
      // 处理 label 和 必选 formitem
      // component start
      formitem +=
        `<a-form-item${label}"${name}>` +
        // 处理组件
        `
      <${item.component} v-model:${modelKey}="${currentIdFormAttr.model}.${item._key}"${size} ${parseTagAttr(
          item.options.props,
          [],
          ['value', 'size', 'checked']
        )} />` +
        // component end
        `</a-form-item>
    `;
    }
  }
  return formitem.substr(0, formitem.length - 5);
};

/**
 * 解析formitem按钮
 * @returns
 */
const parseFormItemBtns = () => {
  if (!currentIdFormAttr.submitBtns) return '';
  let btnsTemplate = `  <a-button type="primary" @click="onSubmit">${currentIdFormAttr.confirmText}</a-button>`;
  /**
   * 提交按钮
   * @param value
   * @returns
   */
  const formitemBtns = (value: string) => {
    return `
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
    ${value}
    </a-form-item>`;
  };
  /**
   * 取消按钮
   */
  if (currentIdFormAttr.cancel) {
    btnsTemplate += `
      <a-button style="margin-left: 10px">${currentIdFormAttr.cancelText}</a-button>`;
  }
  /**
   * 重置按钮
   */
  if (currentIdFormAttr.reset) {
    btnsTemplate += `
      <a-button style="margin-left: 10px">${currentIdFormAttr.resetText}</a-button>`;
  }
  return formitemBtns(btnsTemplate);
};

/**
 * 返回表单模板
 * @returns
 */
const formItemTemplate = () => {
  return `  ${parseFormItemTemplate()}${parseFormItemBtns()}`;
};

export const template = (params: FormOptions) => {
  currentIdFormAttr = params;
  return templateString(formTemplate());
};
