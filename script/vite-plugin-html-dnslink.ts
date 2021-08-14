import path from 'path';
import { external } from '../vite.config';
import packageJson from '../package.json';

let config = null;

const htmlDnsLink = (code: string, src: string) => {
  if (!Object.keys(external).length) {
    return {
      code
    };
  }
  if (src.includes('index.html')) {
    if ((path.resolve(src), path.resolve(config.root, 'index.html'))) {
      const externalVersion = {};
      const dependencies = packageJson.dependencies;
      const devDependencies = packageJson.devDependencies;
      for (const key of Object.keys(dependencies)) {
        if (key in external) {
          externalVersion[key] = dependencies[key];
        }
      }
      for (const key of Object.keys(devDependencies)) {
        if (key in external) {
          externalVersion[key] = devDependencies[key];
        }
      }
      code = code.replace('<!-- cdnlink', '').replace('cdnlink -->', '');
      for (const key of Object.keys(externalVersion)) {
        code = code.replace(RegExp(`{${key}}`, 'gm'), externalVersion[key]);
      }
      return {
        code
      };
    }
  }
};

const exportDefault = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const virtualFileId = '@html-dnslink';
  return {
    name: 'html-dnslink',

    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },

    // 在其他钩子中使用存储的配置
    transform(code: string, src: string) {
      // serve: config.command === 'serve' 由开发服务器调用的插件
      // build: 由 Rollup 调用的插件
      if (config.command !== 'serve') {
        return htmlDnsLink(code, src);
      }
    }
  };
};

export default exportDefault;
