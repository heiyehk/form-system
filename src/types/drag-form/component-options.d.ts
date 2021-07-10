import { AutoCompleteOptions } from './component/AutoComplete';
import { BytemdOptions } from './component/Bytemd';
import { CascaderOptions } from './component/Cascader';
import { CheckboxOptions } from './component/Checkbox';
import { DatePickerOptions } from './component/DatePicker';
import { DividerOptions } from './component/Divider';
import { InputOptions } from './component/Input';
import { InputNumberOptions } from './component/InputNumber';
import { InputPasswordOptions } from './component/InputPassword';
import { MentionsOptions } from './component/Mentions';
import { RadioOptions } from './component/Radio';
import { RateOptions } from './component/Rate';
import { SelectOptions } from './component/Select';
import { SliderOptions } from './component/Slider';
import { SwitchOptions } from './component/Switch';
import { TextareaOptions } from './component/Textarea';
import { TimePickerOptions } from './component/TimePicker';
import { TinymceOptions } from './component/Tinymce';
import { TransferOptions } from './component/Transfer';
import { TreeSelectOptions } from './component/TreeSelect';
import { UploadOptions } from './component/Upload';
/**
 * 输入型组件名
 */
type FormItemInputTag = 'Input' | 'Textarea' | 'AutoComplete' | 'InputNumber' | 'Mentions';
/**
 * 位置
 */
type TooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';
/**
 * 控制型组件名
 */
type FormItemControlTag =
  | 'Cascader'
  | 'Checkbox'
  | 'DatePicker'
  | 'Radio'
  | 'Rate'
  | 'Select'
  | 'Slider'
  | 'Switch'
  | 'TimePicker'
  | 'Transfer'
  | 'TreeSelect'
  | 'Upload';
/**
 * 辅助型组件名
 */
type FormItemHelperTag = 'Divider';
type FormItemTag = FormItemInputTag | FormItemControlTag | FormItemHelperTag;

export declare type AntdvComponentOptions = {
  /**
   * Input类型
   */
  Input: Partial<InputOptions>;
  /**
   * 多行文本
   */
  Textarea: Partial<TextareaOptions>;
  /**
   * 自动完成
   */
  AutoComplete: Partial<AutoCompleteOptions>;
  /**
   * 提及
   */
  Mentions: Partial<MentionsOptions>;
  /**
   * 数字输入框
   */
  InputNumber: Partial<InputNumberOptions>;
  /**
   * 密码输入框
   */
  InputPassword: Partial<InputPasswordOptions>;
  /**
   * 富文本
   */
  Tinymce: Partial<TinymceOptions>;
  /**
   * markdown
   */
  Bytemd: Partial<BytemdOptions>;
  /**
   * 级联选择器
   */
  Cascader: Partial<CascaderOptions>;
  /**
   * 多选框
   */
  Checkbox: Partial<CheckboxOptions>;
  /**
   * 日期选择器
   */
  DatePicker: Partial<DatePickerOptions>;
  /**
   * 单选框
   */
  Radio: Partial<RadioOptions>;
  /**
   * 评分
   */
  Rate: Partial<RateOptions>;
  /**
   * 选择器
   */
  Select: Partial<SelectOptions>;
  /**
   * 滑动输入条
   */
  Slider: Partial<SliderOptions>;
  /**
   * 开关
   */
  Switch: Partial<SwitchOptions>;
  /**
   * 时间选择器
   */
  TimePicker: Partial<TimePickerOptions>;
  /**
   * 穿梭框
   */
  Transfer: Partial<TransferOptions>;
  /**
   * 树选择
   */
  TreeSelect: Partial<TreeSelectOptions>;
  /**
   * 上传
   */
  Upload: Partial<UploadOptions>;
  /**
   * 分割线
   */
  Divider: Partial<DividerOptions>;
};
