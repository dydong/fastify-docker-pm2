FROM keymetrics/pm2:latest-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --registry=https://registry.npm.taobao.org
COPY . .
ENV APP_SETTINGS_FILE_PATH '/usr/src/app/config/appSettings.json'
EXPOSE 9000
RUN ls -al -R
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]