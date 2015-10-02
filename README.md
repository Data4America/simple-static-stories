# Data4America Simple Static Stories

## To view:

1. Install [npm](https://www.npmjs.com/)

2. Run `npm install` from this folder

3. Run `npm start`

4. Go to http://localhost:8080/

## To deploy:

1. [Install `s3cmd`](https://github.com/s3tools/s3cmd/blob/master/INSTALL) and configure it by running `s3cmd --configure`.

2. Run `npm run deploy-test` to deploy to test.data4america.org, or `npm run deploy` to deploy to stories.data4america.org.