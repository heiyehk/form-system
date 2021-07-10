import { TooltipPlacement } from '../component-options';

export declare interface SliderOptions {
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
     * 自动获取焦点
     */
    autofocus: boolean;
    /**
     * 是否禁用
     * @default ```false```
     */
    disabled: boolean;
    /**
     * 是否只能拖拽到刻度上
     * @default ```false```
     */
    dots: boolean;
    /**
     * `marks` 不为空对象时有效，值为 `true` 时表示值为包含关系，`false` 表示并列
     * @default true
     */
    included: boolean;
    /**
     * 刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式
     */
    marks:
      | { number: string | VNode }
      | { number: { style: Record<any, any>; label: string | VNode } }
      | { number: () => VNode };
    /**
     * 最大值
     */
    max: number;
    /**
     * 最小值
     */
    min: number;
    /**
     * 双滑块模式
     * @default ```false```
     */
    range: boolean;
    /**
     * 反向坐标轴
     * @default ```false```
     */
    reverse: boolean;
    /**
     * 步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。
     * @default ```1```
     */
    step: number | null;
    /**
     * 输入框内容
     */
    value: number | number[];
    /**
     * Slider 会把当前值传给 tipFormatter，并在 Tooltip 中显示 tipFormatter 的返回值，若为 null，则隐藏 Tooltip。
     */
    // tipFormatter: () => void | null;
    /**
     * 值为 `true` 时，Slider 为垂直方向
     */
    vertical: boolean;
    /**
     * 设置 Tooltip 展示位置
     */
    tooltipPlacement: TooltipPlacement;
    /**
     * 值为 `true` 时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时。
     * @default ```undefined```
     */
    tooltipVisible: boolean;
    /**
     * Tooltip 渲染父节点，默认渲染到 body 上。
     */
    // getTooltipPopupContainer: () => void;
  }>;
}
