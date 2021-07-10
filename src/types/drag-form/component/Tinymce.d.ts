export declare interface TinymceOptions {
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
     * 是否禁用状态，默认为 `false`
     */
    disabled: boolean;
    /**
     * 占位
     */
    placeholder: string;
    /**
     * 输入框内容
     */
    value: string;
    /**
     * 宽度
     * @default ```100%```
     */
    width: string | number;
    /**
     * 高度
     * @default ```300```
     */
    height: string | number;
    /**
     * 现实tinymce的标识
     * @default ```false```
     */
    branding: boolean;
    /**
     * 现实顶部菜单
     *
     * [文件 编辑 插入 格式 表格]
     * @default ```'file edit insert view format table'```
     */
    menubar: boolean | string;
    /**
     * 菜单的配置信息
     *
     * 配置每个菜单栏的子菜单项（如下是默认配置）
     */
    menu: Record<
      string,
      {
        title: string;
        items: string;
      }
    >;
    /**
     * 工具栏
     * @default ```'formatselect | bold italic | alignleft aligncenter alignright alignjustify | link image | outdent indent | table | removeformat preview'```
     */
    toolbar: string;
    /**
     * 使用toolbar部分工具需要引入插件
     */
    plugins: string;
    /**
     * 默认图片上传地址
     */
    images_upload_url: string;
  }>;
}
