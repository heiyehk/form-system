import fs from 'fs-extra';
import path from 'path';

export default function myExample() {
  return {
    name: 'build-end',
    closeBundle() {
      console.log('\r\n----------------------\r\n');
      fs.copySync(path.resolve(__dirname, '../dist'), path.resolve(__dirname, '../../nest-service/views/project'));
    }
  };
}
