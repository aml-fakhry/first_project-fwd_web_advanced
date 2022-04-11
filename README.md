# image processing Api

Create an image processing API that resizes and saves images to user specifications

## Description

Create an image processing API that resizes and saves images to user specifications when visiting a URL

## Getting Started

### Dependencies

- Describe any prerequisites, libraries, OS version, etc., needed before installing program.
- ex. Windows 10

### Installing

- You cane download my project.

```
git clone https://github.com/aml-fakhry/first_project-fwd_web_advanced.git
```

- project requires having node installed https://nodejs.org/en/download/

```
  run npm install to install the dependencies
```

### Executing program (scripts)

- Install all dependencies

```
Install all dependencies npm install
```

- Run the program in development environment.

```
npm run dev
```

- Run compiled code (build).

```
npm run start:build
```

- Run test program.

```
npm run test
```

- Lint script.

```
npm run lint
```

- Format script.

```
npm run formate
```

- clear thumb images script.

```
npm run clearThumb
```

## Endpoints

1- Resize image endpoint http://localhost:3000/api/images?filename=pic1&width=200&height=200

- [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/125bacc47857a5b173da?action=collection%2Fimport)

## Authors

Contributors names and contact info

ex. Aml fakhri
ex. [@aml_fakhri](amlfakhry13@gmail.com)

## Functionality

1- Resize image

- resizeImage() method to resize images.
- @param filename the file name to be processed.
- @param width the width of image.
- @param height the height of image.
- @returns promise of data result.

```
(method) resizeImage(filename: string, width: number, height: number): Promise<DataResult>
```

## Unit tests.

1- Check if image exist in full or thumb folders.

```javascript
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
```

2- Check if returned data from resizeImage().

```javascript
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
```

2- Test image processing API.

```javascript
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
```

## License

This project is licensed under the Aml Fakhri License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.

- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [lint-staged](https://www.npmjs.com/package/lint-staged)
- [sharp](https://www.npmjs.com/package/sharp)
- [jasmine](https://jasmine.github.io/)
- [supertest](https://www.npmjs.com/package/supertest)

## Project structure.

```
**C:\\skills\\project_fwd_advanced\\first_project\-fwd_web_advanced**

- [LICENSE](LICENSE)
- [README.md](README.md)
- **config**
  - [custom\-environment\-variables.ts](config/custom-environment-variables.ts)
- [dir\-struct.txt](dir-struct.txt)
- **dist**
  - **config**
    - [custom\-environment\-variables.js](dist/config/custom-environment-variables.js)
  - **src**
    - [app.js](dist/src/app.js)
    - **assets**
      - **full**
        - [pic1.jpg](dist/src/assets/full/pic1.jpg)
        - [pic2.jpg](dist/src/assets/full/pic2.jpg)
        - [pic3.jpg](dist/src/assets/full/pic3.jpg)
      - **thumb**
        - [thumb_pic1.jpg](dist/src/assets/thumb/thumb_pic1.jpg)
    - **data**
      - [image\-processing.data.js](dist/src/data/image-processing.data.js)
      - [index.js](dist/src/data/index.js)
    - **routes**
      - **api**
        - [image.routes.js](dist/src/routes/api/image.routes.js)
        - [index.js](dist/src/routes/api/index.js)
      - [index.js](dist/src/routes/index.js)
    - **server**
      - [index.js](dist/src/server/index.js)
      - [server.js](dist/src/server/server.js)
    - **shared**
      - [index.js](dist/src/shared/index.js)
      - **middleware**
        - [error\-handler.middleware.js](dist/src/shared/middleware/error-handler.middleware.js)
        - [index.js](dist/src/shared/middleware/index.js)
      - **model**
        - [app\-error\-code.model.js](dist/src/shared/model/app-error-code.model.js)
        - [app\-error\-model.js](dist/src/shared/model/app-error-model.js)
        - [app\-http\-response\-error.model.js](dist/src/shared/model/app-http-response-error.model.js)
        - [app\-http\-response.model.js](dist/src/shared/model/app-http-response.model.js)
        - [data\-result.model.js](dist/src/shared/model/data-result.model.js)
        - [index.js](dist/src/shared/model/index.js)
      - **utils**
        - [http\-response.util.js](dist/src/shared/utils/http-response.util.js)
        - [index.js](dist/src/shared/utils/index.js)
        - [logger.util.js](dist/src/shared/utils/logger.util.js)
    - **tests**
      - [app.spec.js](dist/src/tests/app.spec.js)
      - **helpers**
        - [reporter.js](dist/src/tests/helpers/reporter.js)
- **logs**
  - [errors.log](logs/errors.log)
  - [logs.log](logs/logs.log)
- [node_modules](node_modules)
- [package\-lock.json](package-lock.json)
- [package.json](package.json)
- **spec**
  - **support**
    - [jasmine.json](spec/support/jasmine.json)
- **src**
  - [app.ts](src/app.ts)
  - **assets**
    - **full**
      - [pic1.jpg](src/assets/full/pic1.jpg)
      - [pic2.jpg](src/assets/full/pic2.jpg)
      - [pic3.jpg](src/assets/full/pic3.jpg)
    - **thumb**
  - **data**
    - [image\-processing.data.ts](src/data/image-processing.data.ts)
    - [index.ts](src/data/index.ts)
  - **routes**
    - **api**
      - [image.routes.ts](src/routes/api/image.routes.ts)
      - [index.ts](src/routes/api/index.ts)
    - [index.ts](src/routes/index.ts)
  - **server**
    - [index.ts](src/server/index.ts)
    - [server.ts](src/server/server.ts)
  - **shared**
    - [index.ts](src/shared/index.ts)
    - **middleware**
      - [error\-handler.middleware.ts](src/shared/middleware/error-handler.middleware.ts)
      - [index.ts](src/shared/middleware/index.ts)
    - **model**
      - [app\-error\-code.model.ts](src/shared/model/app-error-code.model.ts)
      - [app\-error\-model.ts](src/shared/model/app-error-model.ts)
      - [app\-http\-response\-error.model.ts](src/shared/model/app-http-response-error.model.ts)
      - [app\-http\-response.model.ts](src/shared/model/app-http-response.model.ts)
      - [data\-result.model.ts](src/shared/model/data-result.model.ts)
      - [index.ts](src/shared/model/index.ts)
    - **utils**
      - [http\-response.util.ts](src/shared/utils/http-response.util.ts)
      - [index.ts](src/shared/utils/index.ts)
      - [logger.util.ts](src/shared/utils/logger.util.ts)
  - **tests**
    - [app.spec.ts](src/tests/app.spec.ts)
    - **helpers**
      - [reporter.ts](src/tests/helpers/reporter.ts)
- [tsconfig.json](tsconfig.json)
```
