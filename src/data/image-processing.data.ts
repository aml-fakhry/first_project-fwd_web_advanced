import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

import { appRootDir } from './../app';

export class imageProcessDataAccess {
  static async getMetaData(filename: string, width: number, height: number) {
    try {
      const imageExistence = fs.existsSync(path.join(appRootDir + `/assets/thumb/thumb_` + filename + '.jpg'));
      if (!imageExistence) {
        await sharp(appRootDir + `/assets/full/${filename}.jpg`)
          .withMetadata()
          .resize(width, height /* , { withoutEnlargement: true } */)
          .toFile(path.join(appRootDir + `/assets/thumb/thumb_` + filename + '.jpg'));
      } else {
        console.log('exist before');
      }
    } catch (error) {
      console.log(error);
    }
  }
  static async resize(filename: string, width: number, height: number): Promise<boolean> {
    const imageExistence = fs.existsSync(path.join(appRootDir + `/assets/full/${filename}.jpg`));
    if (imageExistence && width > 0 && height > 0) {
      await this.getMetaData(filename, width, height);
      return true;
    } else {
      return false;
    }
  }
}
