export default function vitePlugin() {
  // 定义vite插件唯一id
  const virtualFileId = '@my-virtual-plugin';
  // 返回插件对象
  return {
    // 必须的，将会显示在 warning 和 error 中
    name: 'vite-plugin',

    // *以下钩子函数按照实际执行顺序排列*

    /**
     * config 可以在被解析之前修改 Vite 配置
     * Vite独有钩子
     * https://cn.vitejs.dev/guide/api-plugin.html#config
     * @param config vite配置信息
     * @param env 描述配置环境的变量
     */
    config: (config, env) => ({}),

    /**
     * configResolved 解析 Vite 配置后调用,使用这个钩子读取和存储最终解析的配置
     * Vite独有钩子
     * https://cn.vitejs.dev/guide/api-plugin.html#configresolved
     * @param config vite配置信息
     */
    configResolved: (config) => ({}),

    /**
     * options 替换或操作传递给rollup.rollup()的选项
     * 通用钩子
     * https://rollupjs.org/guide/en/#options
     * @param options rollup配置信息
     */
    options: (options) => ({}),

    /**
     * configureServer 用于配置开发服务器
     * Vite独有钩子
     * https://cn.vitejs.dev/guide/api-plugin.html#configureserver
     * @param server ViteDevServer配置信息
     * https://cn.vitejs.dev/guide/api-javascript.html#vitedevserver
     */
    configureServer: (server) => ({}),

    /**
     * buildStart 在每个rollup.rollup()构建时被调用
     * 通用钩子
     * https://rollupjs.org/guide/en/#buildstart
     * @param options rollup配置信息
     */
    buildStart: (options) => ({}),

    /**
     * 此时 Vite dev server is running
     */

    /**
     * transformIndexHtml 转换 index.html 的专用钩子
     * Vite独有钩子
     * https://cn.vitejs.dev/guide/api-plugin.html#transformindexhtml
     * @param html html字符串
     * @param ctx 转换上下文; 在开发期间会额外暴露ViteDevServer实例; 在构建期间会额外暴露Rollup输出的包
     */
    transformIndexHtml: (html, ctx) => ({}),

    /**
     * resolveId 用户自定义解析器
     * 通用钩子 会在每个传入模块请求时被调用
     * https://rollupjs.org/guide/en/#resolveid
     * @param source 源导入者 例子: import { foo } from '../bar.js', '../bar.js' 为source
     * @param importer 导入者所在文件绝对路径
     */
    resolveId: (source, importer) => ({}),

    /**
     * load 用户自定义加载器
     * 通用钩子 会在每个传入模块请求时被调用
     * https://rollupjs.org/guide/en/#load
     * @param id 同resolveId source
     */
    load: (id) => ({}),

    /**
     * transform 可以用来转换单个模块
     * 通用钩子 会在每个传入模块请求时被调用
     * https://rollupjs.org/guide/en/#transform
     * @param code 模块代码
     * @param id 同resolveId source
     */
    transform: (code, id) => ({})
  };
}
