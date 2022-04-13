import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

import { AppError, AppErrorCode, DataResult } from '../shared';
import { appRootDir } from './../app';

export class imageProcessDataAccess {
  /**
   * resizeImage() method to resize images.
   * @param filename the file name to be processed.
   * @param width the width of image.
   * @param height the height of image.
   * @returns data result.
   */
  static async resizeImage(filename: string, width: number, height: number): Promise<DataResult> {
    const result: DataResult = {} as DataResult;
    try {
      /**
       * Get data to be validate.
       */
      const [imageExistenceInFull, imageExistenceInThumb] = [
        fs.existsSync(path.join(appRootDir + `/assets/full/${filename}.jpg`)),
        fs.existsSync(path.join(appRootDir + `/assets/thumb/thumb_${this.getFileSuffix(filename, width, height)}.jpg`)),
      ];

      //#region validation
      if (!imageExistenceInFull) {
        /* Check if image exist in 'full' folder. */
        result.validationErrors = [
          {
            code: AppErrorCode.IsRequired,
            source: `${filename}.jpg`,
            title: AppError.IsRequired,
            detail: `Ooh, this image ${filename}.jpg not exist in full folder.`,
          },
        ];
        return result;
      } else if (width <= 0 || height <= 0) {
        /* Check if image height and width not equal 0 . */
        result.validationErrors = [
          {
            code: AppErrorCode.IncorrectValue,
            source: `${filename}.jpg`,
            title: AppError.IncorrectValue,
            detail: 'Ooh, height or width are not allowed to equal 0.',
          },
        ];
        return result;
      }
      //#endregion

      /** Check existence of image. */
      if (!imageExistenceInThumb) {
        await sharp(appRootDir + `/assets/full/${filename}.jpg`)
          .withMetadata()
          .resize(width, height /* , { withoutEnlargement: true } */)
          .toFile(path.join(appRootDir + `/assets/thumb/thumb_${this.getFileSuffix(filename, width, height)}.jpg`));
      }

      result.data = `/assets/thumb/thumb_${this.getFileSuffix(filename, width, height)}.jpg`;

      result.isNotFound = !imageExistenceInFull;
    } catch (error) {
      result.error = error;
    }
    return result;
  }

  /*  Get File suffix. */
  static getFileSuffix(filename: string, width: number, height: number) {
    return `${filename}_${width}_${height}`;
  }
}
