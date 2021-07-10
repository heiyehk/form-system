import { DatePickerMode, RangePickerPropsTypes } from 'ant-design-vue/lib/date-picker/interface';
import { PropsSize } from '../forms';
export declare interface DatePickerOptions {
  /**
   * 是否显示标签label
   */
  label: boolean;
  /**
   * 组件宽度
   */
  wrapperColSpan: number;
  /**
   * 作用域插槽，自定义日期单元格的内容
   */
  // dateRender: #dateRender = '{current, today}';
  /**
   * 	增加时间选择功能
   */
  // showTime: Record<any, any> | boolean;
  /**
   * 	在面板中添加额外的页脚
   * @default-[TimePicker Options](https://2x.antdv.com/components/time-picker-cn/#API)
   */
  // renderExtraFooter: #renderExtraFooter = 'mode';
  /**
   * 绑定的props
   */
  props: Partial<{
    /**
     * 是否展示清除按钮
     */
    allowClear: boolean;
    /**
     * 自动获取焦点
     */
    autofocus: boolean;
    /**
     * 是否禁用状态，默认为 `false`
     */
    disabled: boolean;
    /**
     * 最大长度
     */
    maxlength: number;
    /**
     * 不可选择的日期
     */
    // disabledDate: (currentDate: moment) => boolean;
    locale: any;
    /**
     * 日期面板的状态
     */
    mode: DatePickerMode;
    /**
     * 控制弹层是否展开
     * @default ```undefined```
     */
    open: boolean;
    /**
     * 输入框提示文字
     */
    placeholder: string | RangePickerPropsTypes[];
    /**
     * 	额外的弹出日历样式
     */
    popupStyle: CSSProperties;
    /**
     * 额外的弹出日历 class
     */
    dropdownClassName: string;
    /**
     * 输入框大小，large 高度为 40px，small 为 24px，默认是 32px
     */
    size: PropsSize;
    /**
     * 自定义的选择框后缀图标
     */
    // suffixIcon: VNode | slot;
    /**
     * 设置输入框为只读（避免在移动设备上打开虚拟键盘）
     */
    inputReadOnly: boolean;
    /**
     * 该值将合并到 placement 的配置中，设置参考 [dom-align](https://github.com/yiminghe/dom-align)
     */
    // align: Record<any, any>;
    /**
     * 可选，绑定值的格式，对 value、defaultValue、defaultPickerValue 起作用。不指定则绑定值为 moment 对象[具体格式](https://momentjs.com/docs/#/displaying/format/)
     */
    valueFormat: string;
    /**
     * 默认面板日期[moment](http://momentjs.com/)
     */
    // defaultPickerValue: moment;
    /**
     * 不可选择的时间
     */
    // disabledTime: (date) => void;
    /**
     * 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 [moment.js](http://momentjs.com/)
     */
    format: string | string[];
    /**
     * 是否展示“今天”按钮
     * @default ```true```
     */
    showToday: boolean;
    /**
     * 输入框内容
     */
    value: string;
  }>;
}
