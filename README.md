# Empty Pocket - Simple React and NodeJS money tracker.

## Description

This application is a simple money tracker written with [React](https://react.dev/) and [NodeJS](https://nodejs.org/). At this moment, you can add spendings and review them in a table on homepage. However, lots of features, such as personal account, spendings edit and deletion, reports, statistics etc., are on the roadmap!

## Overview

### Technology stack

- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [React JS](https://react.dev/)
- [Bootstrap CSS](https://getbootstrap.com)
- [Webpack](https://webpack.js.org/)
- [NPM](https://www.npmjs.com/)
- [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/)

### Project structure

The repository consist of two main folders - **server** and **client**, where corresponding code is stored. These parts are independent and could be launched and developed separately (they were unified in a single repository for convenience). Each folder contains its' own package.json, configs etc. Client folder contains frontend application source code and server is a simple API instance.

## Local deployment

1. Clone the repository by executing

```
git clone https://github.com/SescHustle/emptypocket
```

### Server

2. Add `config.json` file in `config` folder and provide any port (see `config.example.json` for the reference).
3. Install [npm](https://www.npmjs.com/) if necessary and run command below from root server folder.

```
npm install
```

4. In `src/Model/` folder, add `spendings.json` file which will be used as a local database. This file should contain array of json objects. Each object is a spending and can contain _date_, _name_, _amount_, _category_ and _comment_ fields. Any other fields will not break anything, but they are not supported yet.
5. To run the server in development mode, execute command below from root server folder. You can see other useful scripts in `package.json`

```
npm run start:dev
```

5. That's it, your server is ready! Go to `localhost:PORT` to see the hello message.

### Client

6. Go to client root folder and execute

```
npm install
```

7. To start the application, run

```
npm start
```

8. That's it, your application should be opened automatically in new browser tab, the URL is `localhost:3000`.

## Credits

Contact the author by writing to [Pavel Lovkii](mail://plovkiy@yandex.ru).
