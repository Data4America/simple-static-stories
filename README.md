# Data4America Simple Static Stories

## To view:

1. Install [npm](https://www.npmjs.com/)

2. Run `npm install` from this folder

3. Run `npm start`

4. Go to http://localhost:8080/

## To deploy:

1. Install and configure `s3cmd`. On Ubuntu, you can do `sudo apt-get install s3cmd` and then `s3cmd --configure`. If you get an error while configuring, [maybe this is happening](http://stackoverflow.com/a/25637457/786644).

2. Run `npm run deploy-test` to deploy to test.data4america.org, or `npm run deploy` to deploy to stories.data4america.org.