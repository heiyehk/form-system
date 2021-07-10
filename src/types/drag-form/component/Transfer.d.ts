export declare interface TransferOptions {
  /**
   * 是否显示标签label
   */
  label: boolean;
  /**
   * 组件宽度
   */
  wrapperColSpan: number;
  /**
   * 可以设置为一个 作用域插槽
   */
  // footer
  /**
   * 每行数据渲染函数，该函数的入参为 dataSource 中的项，返回值为 element。或者返回一个普通对象，其中 label 字段为 element，value 字段为 title
   */
  // render
  /**
   * 绑定的props
   */
  props: Partial<{
    dataSource: [
      {
        key: string;
        title: string;
        description: string;
        disabled: boolean;
      }
    ][];
    /**
     * 是否禁用状态，默认为 `false`
     */
    disabled: boolean;
    /**
     * 接收 `inputValue option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。
     */
    filterOption: (inputValue: string, option) => boolean;
    lazy:
      | {
          height: number;
          offset: number;
        }
      | boolean;
    /**
     * 两个穿梭框的自定义样式
     */
    listStyle: Record<any, any>;
    /**
     * 各种语言
     * @default
     * ``` js
     * {
        itemUnit: '项',
        itemsUnit: '项',
        notFoundContent: '列表为空',
        searchPlaceholder: '请输入搜索内容'
      }
      ```
     */
    locale: {
      itemUnit: string;
      itemsUnit: string;
      notFoundContent: string;
      searchPlaceholder: string;
    };
    /**
     * 操作文案集合，顺序从上至下
     * @default ```	['>', '<']```
     */
    operations: string[];
    /**
     * 设置哪些项应该被选中
     */
    selectedKeys: string[];
    /**
     * 是否显示搜索框
     */
    showSearch: boolean;
    /**
     * 是否展示全选勾选框
     */
    showSelectAll: boolean;
    /**
     * 显示在右侧框数据的 key 集合
     */
    targetKeys: string[];
    /**
     * 标题集合，顺序从左至右
     */
    titles: string[];
    value: string;
  }>;
}
