import { FormLayout } from 'ant-design-vue/lib/form/Form';
import { FormLabelAlign } from 'ant-design-vue/lib/form/interface';
import { RuleItem } from 'async-validator';
import { AntdvComponentOptions } from './component-options';
/**
 * 首页表单类型
 */
interface MakingType {
  title: string;
  _id: string;
}

/**
 * 格栅
 */
interface FormLayoutCol {
  span?: number;
  offset?: number;
}

export declare interface FormItemOptions {
  [key: string]: any;
  props: Partial<Record<string, any>>;
}

/**
 * making-content表单内容组件类型
 */
export declare interface FormItemComponentAttr {
  /**
   * ```comp``` + 3位字符串
   *
   * 用于model的值
   */
  _key: string;
  /**
   * 需要重新渲染的参数，如富文本等等
   */
  renderKey?: string;
  label: string;
  component: `a-${keyof AntdvComponentOptions}`;
  /**
   * 用于记录当前组件的标记
   */
  _id: string;
  /**
   * 是否必填
   */
  required: boolean;
  /**
   * 放当前组件的属性
   *
   * options.props 放可以被绑定的值
   */
  options: FormItemOptions;
  rules?: RuleItem[];
}

export declare type PropsSize = 'large' | 'default' | 'small';
export declare type PropsAlign = 'left' | 'center' | 'right';
/**
 * 右侧表单属性
 */
export declare interface RightFormAttrType {
  /**
   * ---------------
   * 基础属性
   * ---------------
   */
  /**
   * 表单名称，会作为表单字段 id 前缀使用
   */
  name: string;
  /**
   * 数据对象名
   */
  model: string;
  /**
   * 规则名
   */
  rules: string;
  /**
   * 是否在 rules 属性改变后立即触发一次验证
   */
  validateOnRuleChange: boolean;
  /**
   * 提交失败自动滚动到第一个错误字段
   */
  scrollToFirstError: boolean;
  /**
   * 统一设置字段校验规则
   */
  validateTrigger: 'change';

  /**
   * ---------------
   * 表单布局
   * ---------------
   */

  /**
   * 隐藏所有表单项的必选标记
   */
  hideRequiredMark: boolean;
  /**
   * 组件大小
   */
  size: PropsSize;
  /**
   * label 标签的文本对齐方式
   */
  labelAlign: FormLabelAlign;
  /**
   * 表单布局
   */
  layout: FormLayout;
  /**
   * label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}
   */
  labelCol: FormLayoutCol;
  /**
   * 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol
   */
  // wrapperCol: FormLayoutCol;
  /**
   * 配置 Form.Item 的 colon 的默认值 (只有在属性 layout 为 horizontal 时有效)
   */
  colon: boolean;

  /**
   * ---------------
   * 提交按钮
   * ---------------
   */
  /**
   * 是否启用默认提交
   */
  submitBtns: boolean;
  /**
   * 确认按钮文案
   */
  confirmText: string;
  /**
   * 取消按钮
   */
  cancel: boolean;
  /**
   * 取消按钮文案
   */
  cancelText: string;
  /**
   * 是否显示重置按钮
   */
  reset: boolean;
  /**
   * 重置按钮文案
   */
  resetText: string;
  /**
   * 提交按钮布局
   */
  btnsAlign: PropsAlign;
  /**
   * 是否悬浮在底部
   */
  suspend: boolean;
  __attr__: FormItemComponentAttr[];
}

/**
 * 整体表单类型
 */
export declare type FormOptions = MakingType & RightFormAttrType;
