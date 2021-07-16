type FunctionalControl = (this: any, fn: any, delay?: number) => (...args: any) => void;
type DebounceEvent = FunctionalControl;
type ThrottleEvent = FunctionalControl;

// 防抖函数
export const debounce: DebounceEvent = function (fn, delay = 1000) {
  let timer: number | null = null;
  return (...args: any) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

// 节流函数
export const throttle: ThrottleEvent = function (fn, delay = 500) {
  let flag = true;
  return (...args: any) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
};

/**
 * file转化base64
 * @param file 文件
 */
export const fileReaderToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (res: ProgressEvent<FileReader>) => {
      resolve((res.currentTarget as FileReader).result as string);
    };
    reader.onerror = (e) => reject(e);
  });
};

/**
 * base64转文件格式
 * @param urlData base64
 * @param type 类型`file`，`blob`
 * @param filename 如果选了`file`必须使用`filename`
 */
export const convertBase64UrlToBlob = (urlData: string, type?: 'file', filename?: string): Blob | File => {
  const arr = urlData.split(',');
  const mime = (arr[0].match(/:(.*?);/) as string[])[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  if (type === 'file' && filename) {
    return new File([u8arr], filename, { type: mime });
  }
  return new Blob([u8arr], {
    type: mime
  });
};

/**
 * 流文件下载
 * @param data 流
 * @param type 类型，比如`application/json;charset=UTF-8`，`image/jpeg`
 * @param filename 文件名
 */
export const downloadFile = (data: Blob, type: string, filename = 'download'): void => {
  const blob = new Blob([data], { type });
  const objectUrl = URL.createObjectURL(blob);
  let elA: HTMLAnchorElement | null = document.createElement('a');
  elA.href = objectUrl;
  elA.download = filename;
  // elA.click();
  // 下面这个写法兼容火狐
  elA.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
  elA = null;
  window.URL.revokeObjectURL(objectUrl);
};

/**
 * 图片压缩
 * @param file 图片文件
 * @param quality 压缩比率，0.8是正常，越小图片可能不清晰
 * @return 返回一个Promise类型的Blob文件
 */
export const compressImage = async (file: File, quality = 0.8): Promise<Blob> => {
  const base64 = await fileReaderToBase64(file);
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = base64;
    image.onload = (e) => {
      console.log(e);
      const imageTarget = (e as any).path[0];
      const { width, height } = imageTarget;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;
      context?.clearRect(0, 0, width, height);
      context?.drawImage(imageTarget, 0, 0, width, height);
      canvas.toBlob(
        (blob) => {
          resolve(blob as Blob);
        },
        'image/jpeg',
        quality
      );
      return;
    };

    image.onerror = (e) => reject(e);
  });
};

type AccessType =
  | 'String'
  | 'Object'
  | 'Number'
  | 'Boolean'
  | 'Symbol'
  | 'Undefined'
  | 'Null'
  | 'Function'
  | 'Date'
  | 'Array'
  | 'RegExp'
  | 'Error'
  | 'HTMLDocument'
  | 'global';

/**
 * 类型获取
 * @param access 参数
 */
export const getAccessType = (access: any): AccessType => {
  return Object.prototype.toString.call(access).slice(8, -1) as AccessType;
};

/**
 * 过滤不需要的内容
 * @param data 数据
 * @param validation 过滤值
 */
export const filterParamsEmpty = <T extends Record<string, any>>(
  data: T,
  validation?: (null | undefined | '' | number)[]
): T => {
  const newObj: Record<string, any> = {};
  for (const key of Object.keys(data)) {
    if (!validation) {
      if (data[key] !== '' && data[key] !== undefined && data[key] !== null) {
        newObj[key] = data[key];
      }
    } else {
      if (!validation.includes(data[key])) {
        newObj[key] = data[key];
      }
    }
  }
  return newObj as T;
};

/**
 * 是否ie
 * @returns
 */
export const ieIE = (): boolean => navigator.userAgent.toLowerCase().indexOf('trident') > -1;

/**
 * 随机字符
 * @returns
 */
export const randomChar = (fix = '', substr?: number) => {
  const str = Math.random().toString(32).replace('0.', '');
  if (!substr) return fix + str;
  return fix + str.substr(0, substr);
};

/**
 * 无横杠uuid
 * @returns
 */
export const uuid = () => {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4();
};

/**
 * 获取本地储存总容量，单位`kb`
 * @returns
 */
export const totalCapacity = () => {
  return ((1024 * 1024 * 5 - unescape(encodeURIComponent(JSON.stringify(localStorage))).length) / 1024).toFixed(2);
};

/**
 * 当前使用的容量，单位`kb`
 * @returns
 */
export const useCapacity = () => {
  let size = 0;
  for (const key in Object.keys(window.localStorage)) {
    if (key in window.localStorage) {
      size += window.localStorage.getItem(key)!.length;
    }
  }
  return (size / 1024).toFixed(2);
};

export const copyText = (text: string) => {
  return new Promise((resolve) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.cssText = 'position: fixed;z-index:-999;width: 0;height: 0;opacity: 0;';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    resolve('success');
  });
};
