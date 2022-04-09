import fs from 'fs';
import path from 'path';
import { appRootDir } from './../app';

export class imageProcessDataAccess {
  static async resize(filename: string /* width: number, height: number */): Promise<boolean> {
    const imageExistence = fs.existsSync(path.join(appRootDir + `/assets/full/${filename}.jpg`));
    return imageExistence ? true : false;
  }
}
