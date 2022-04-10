import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { AppError, AppErrorCode } from '../shared';

import { appRootDir } from './../app';
import { DataResult } from './../shared/model/data-result.model';

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
      const imageExistenceInFull = fs.existsSync(path.join(appRootDir + `/assets/full/${filename}.jpg`));
      const imageExistenceInThumb = fs.existsSync(path.join(appRootDir + `/assets/thumb/thumb_` + filename + '.jpg'));

      //#region validation
      if (!imageExistenceInFull) {
        result.validationErrors = [
          {
            code: AppErrorCode.IsRequired,
            source: `${filename}.jpg`,
            title: AppError.IsRequired,
            detail: `Ooh, this image ${filename}.jpg not exist in full folder.`,
          },
        ];
        return result;
      } else if (imageExistenceInThumb) {
        result.validationErrors = [
          {
            code: AppErrorCode.ValueExists,
            source: `${filename}.jpg`,
            title: AppError.ValueExists,
            detail: 'Ooh, this image processed before please use a new one.',
          },
        ];
        return result;
      } else if (width <= 0 || height <= 0) {
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

      result.isNotFound = !imageExistenceInFull;

      result.data = await sharp(appRootDir + `/assets/full/${filename}.jpg`)
        .withMetadata()
        .resize(width, height /* , { withoutEnlargement: true } */)
        .toFile(path.join(appRootDir + `/assets/thumb/thumb_` + filename + '.jpg'));
    } catch (error) {
      result.error = error;
    }
    return result;
  }
}
