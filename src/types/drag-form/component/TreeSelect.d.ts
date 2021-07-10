import { Slot, VNode } from 'vue';
import { PropsSize } from '../forms';

export declare interface TreeSelectOptions {
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
     * 指定默认选中的条目
     */
    defaultValue: string | string[];
    /**
     * 是否禁用
     * @default ```false```
     */
    disabled: boolean;
    /**
     * 下拉菜单的 `className` 属性
     */
    dropdownClassName: string;
    /**
     * 下拉菜单和选择器同宽
     * @default ```	true```
     */
    dropdownMatchSelectWidth: boolean;
    dropdownStyle: Record<any, any>;
    /**
     * 是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值
     */
    // filterTreeNode: boolean | ((inputValue: string, treeNode: TreeNode) => boolean);
    /**
     * 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。
     */
    // getPopupContainer
    /**
     * 是否把每个选项的 `label` 包装到 `value` 中，会把 `value` 类型从 `string` 变为 ```{value: string, label: VNode, halfChecked(treeCheckStrictly 时有效): string[] }``` 的格式
     * @default ```false```
     */
    labelInValue: boolean;
    /**
     * 异步加载数据
     */
    // loadData: () => void;
    /**
     * 最多显示多少个 `tag`
     */
    maxTagCount: number;
    /**
     * 隐藏 `tag` 时显示的内容
     */
    // maxTagPlaceholder: slot | function(omittedValues);
    /**
     * 支持多选（当设置 treeCheckable 时自动变为 true）
     * @default ```false```
     */
    multiple: boolean;
    /**
     * 选择框默认文字
     */
    placeholder: string | Slot;
    /**
     * 搜索框默认文字
     */
    searchPlaceholder: string | Slot;
    /**
     * 搜索框的值，可以通过 `search` 事件获取用户输入
     */
    searchValue: string;
    /**
     * 是否展示 `TreeNode title` 前的图标，没有默认样式，如设置为 `true`，需要自行定义图标相关样式
     * @default ```false```
     */
    treeIcon: boolean;
    /**
     * 定义选中项回填的方式。TreeSelect.SHOW_ALL: 显示所有选中节点(包括父节点). TreeSelect.SHOW_PARENT: 只显示父节点(当父节点下所有子节点都选中时). 默认只显示子节点.
     */
    // showCheckedStrategy: enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD };
    /**
     * 在下拉中显示搜索框(仅在单选模式下生效)
     */
    showSearch: boolean;
    /**
     * 选择框大小
     * @default ```default```
     */
    size: PropsSize;
    /**
     * 自定义的选择框后缀图标
     */
    suffixIcon: VNode | Slot;
    /**
     * 显示 checkbox
     * @default ```false```
     */
    treeCheckable: boolean;
    /**
     * checkable 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 `labelInValue` 强制为 `true`
     */
    treeCheckStrictly: boolean;
    /**
     * treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一）
     */
    treeData: Partial<{
      value: any;
      label: any;
      children: any;
      disabled: boolean;
      disableCheckbox: boolean;
      selectable: boolean;
    }>[];
    /**
     * 替换 treeNode 中 title,value,key,children 字段为 treeData 中对应的字段
     * @default
     * ```
     * {
     *    children:'children',
     *    title:'title',
     *    key:'key',
     *    value: 'value'
     * }
     * ```
     */
    replaceFields: Record<any, any>;
    /**
     * 使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:'1', label:"test1",...},...], pId 是父节点的 id)
     */
    treeDataSimpleMode: false | Array<{ id: string; pId: string; rootPId: null }>;
    /**
     * 默认展开所有树节点
     */
    treeDefaultExpandAll: boolean;
    /**
     * 默认展开的树节点
     */
    treeDefaultExpandedKeys: (string | number)[];
    /**
     * 设置展开的树节点
     */
    treeExpandedKeys: (string | number)[];
    /**
     * 输入项过滤对应的 treeNode 属性
     * @default ```title```
     */
    treeNodeFilterProp: string;
    /**
     * 作为显示的 prop 设置
     * @default ```title```
     */
    treeNodeLabelProp: string;
    /**
     * 指定当前选中的条目
     */
    value: string | string[];
  }>;
}

// selectable	是否可选	boolean	true
// checkable	当树为 checkable 时，设置独立节点是否展示 Checkbox	boolean	-
// disableCheckbox	禁掉 checkbox	boolean	false
// disabled	是否禁用	boolean	false
// isLeaf	是否是叶子节点	boolean	false
// key	此项必须设置（其值在整个树范围内唯一）	string | number	-
// title	树节点显示的内容	string|slot	'---'
// value	默认根据此属性值进行筛选（其值在整个树范围内唯一）	string	-
// scopedSlots	使用 treeData 时，可以通过该属性配置支持 slot 的属性，如 scopedSlots: { title: 'XXX'}	object	-
