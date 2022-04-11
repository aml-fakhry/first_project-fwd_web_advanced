import path from 'path';
import fs from 'fs';
import supertest from 'supertest';

import { appRootDir, app } from '../app';
import { imageProcessDataAccess } from './../data/image-processing.data';

const imageExtinction = 'jpg';

const [fullPic1Path, thumbPic1Path] = [
  path.join(appRootDir + `/assets/full/pic1.${imageExtinction}`),
  path.join(appRootDir + `/assets/thumb/thumb_pic1.${imageExtinction}`),
];

/**
 * unit test.
 */
describe('Check if image exist in full or thumb folders.', () => {
  it('Pass when image exist in full folder.', () => {
    const result = fs.existsSync(fullPic1Path);
    expect(result).toBeTruthy();
  });

  it('Pass when image not exist in full folder.', () => {
    const result = fs.existsSync(thumbPic1Path);
    expect(result).not.toBeTruthy();
  });
});

describe('Check if returned data from resizeImage().', () => {
  it('Pass returned data from resizeImage().', async () => {
    const result = await imageProcessDataAccess.resizeImage('pic1', 300, 300);

    expect(result.data).toBeTruthy();
    expect(result.data.format).toBe('jpeg');
    expect(result.data.width).toBe(300);
    expect(result.data.width).toBe(300);
    expect(result.validationErrors).toBeUndefined();
    expect(result.isNotFound).toBeFalsy();
  });
});

/**
 * integration test.
 */
const request = supertest(app);
describe('Test image processing API', () => {
  it('Pass when response status equal 200', async () => {
    const response = await request.get('/api/images?filename=pic2&width=300&height=300');
    expect(response.status).toBe(200);
  });

  it('Pass when it fails because it is already processed.', async () => {
    const response = await request.get('/api/images?filename=pic2&width=300&height=300');
    expect(response.status).toBe(400);
    expect(response.text).toBe('Ooh, this image processed before please use a new one.');
  });
});
