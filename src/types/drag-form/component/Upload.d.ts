export declare interface UploadOptions {
  /**
   * 是否显示标签label
   */
  label: boolean;
  /**
   * 组件宽度
   */
  wrapperColSpan: number;
  props: Partial<{
    /**
     * 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)
     */
    accept: string;
    /**
     * 上传的地址
     */
    action: string | ((file: File) => Promise<any>);
    /**
     * 上传请求的 http method
     * @default ```post```
     */
    method: string;
    /**
     * 支持上传文件夹（[caniuse](https://caniuse.com/#feat=input-file-directory)）
     * @default ```false```
     */
    directory: boolean;
    /**
     * 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 File 或 Blob 对象则上传 resolve 传入对象）。注意：IE9 不支持该方法。
     */
    // beforeUpload
    /**
     * 通过覆盖默认的上传行为，可以自定义自己的上传实现
     */
    // customRequest
    /**
     * 上传所需参数或返回上传参数的方法
     */
    data: Record<any, any> | ((file: File) => Record<any, any>);
    /**
     * 是否禁用
     * @default ```false```
     */
    disabled: boolean;
    /**
     * 已经上传的文件列表（受控）
     */
    fileList: Record<any, any>;
    /**
     * 设置上传的请求头部，IE10 以上有效
     */
    headers: Record<any, any>;
    /**
     * 上传列表的内建样式，支持三种基本样式 `text`, `picture` 和 `picture-card`
     * @default ```text```
     */
    listType: 'text' | 'picture' | 'picture-card';
    /**
     * 是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。
     * @default ```false```
     */
    multiple: boolean;
    /**
     * 发到后台的文件参数名
     * @default ```file```
     */
    name: string;
    /**
     * 自定义文件预览逻辑
     */
    previewFile: (file: File | Blob) => Promise<{ dataURL: string }>;
    /**
     * 是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon 和 showRemoveIcon
     * @default ```true```
     */
    showUploadList: boolean;
    /**
     * 服务端渲染时需要打开这个
     */
    supportServerRender: boolean;
    /**
     * 上传请求时是否携带 cookie
     */
    withCredentials: boolean;
    /**
     * 点击打开文件对话框
     */
    openFileDialogOnClick: boolean;
    /**
     * 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。
     */
    remove: (file: File) => boolean | Primise<boolean>;
    /**
     * 在上传之前转换文件。支持返回一个 Promise 对象
     */
    transformFile: string | Blob | File | Promise<string | Bolb | File>;
  }>;
}
