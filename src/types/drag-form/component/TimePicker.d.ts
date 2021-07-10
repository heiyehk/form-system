import { Moment } from 'moment';
export declare interface TimePickerOptions {
  /**
   * 是否显示标签label
   */
  label: boolean;
  /**
   * 组件宽度
   */
  wrapperColSpan: number;
  /**
   * 绑定的props
   */
  props: Partial<{
    /**
     * 是否展示清除按钮
     */
    allowClear: boolean;
    /**
     * 自动获得焦点
     */
    autofocus: boolean;
    /**
     * 清除按钮的提示文案
     * @default ```clear```
     */
    clearText: string;
    /**
     * 是否禁用状态，默认为 `false`
     */
    disabled: boolean;
    /**
     * 最大长度
     */
    maxlength: number;
    /**
     * 输入框内容
     */
    value: string;
    /**
     * 当 `defaultValue/value` 不存在时，可以设置面板打开时默认选中的值
     */
    defaultOpenValue: string | Moment;
    /**
     * 	默认时间
     */
    defaultValue: string | Moment;
    /**
     * 禁止选择部分小时选项
     */
    disabledHours: () => void;
    /**
     * 禁止选择部分分钟选项
     */
    disabledMinutes: (selectedHour) => void;
    /**
     * 禁止选择部分秒选项
     */
    disabledSeconds: (selectedHour, selectedMinute) => void;
    /**
     * 展示的时间格式
     * @default ```HH:mm:ss```
     */
    format: string;
    // getPopupContainer
    /**
     * 隐藏禁止选择的选项
     * @default ```false```
     */
    hideDisabledOptions: boolean;
    /**
     * 小时选项间隔
     */
    hourStep: number;
    /**
     * 分钟选项间隔
     */
    minuteStep: number;
    /**
     * 秒选项间隔
     */
    secondStep: number;
    /**
     * 设置输入框为只读（避免在移动设备上打开虚拟键盘）
     */
    inputReadOnly: boolean;
    /**
     * 	面板是否打开
     */
    open: boolean;
    /**
     * 没有值的时候显示的内容
     * @default ```请选择时间```
     */
    placeholder: string;
    /**
     * 弹出层类名
     */
    popupClassName: string;
    /**
     * 弹出层样式对象
     */
    popupStyle: Record<any, any>;
    /**
     * 自定义的选择框后缀图标
     */
    // suffixIcon
    /**
     * 自定义的清除图标
     */
    // clearIcon
    /**
     * 使用 12 小时制，为 `true` 时 `format` 默认为 `h:mm:ss a`
     */
    use12Hours: boolean;
    /**
     * 该值将合并到 `placement` 的配置中，设置参考 [dom-align](https://github.com/yiminghe/dom-align)
     */
    // align: Record<any, any>;
    /**
     * 可选，绑定值的格式，对 `value、defaultValue` 起作用。不指定则绑定值为 `moment` 对象
     */
    valueFormat: string;
  }>;
}
