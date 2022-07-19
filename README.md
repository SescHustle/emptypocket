# Empty Pocket App

## Overview

This application is a simple but feature rich (in the future) money tracker.

## Features

- Add your spendings and track them in a table.

## Local deployment

### Set up

1. Clone Git Repository by executing

```sh
git clone https://github.com/SescHustle/emptypocket
```

2. Open `index.html` file.
3. That's it, you can browse the application.

### Working with database

The repository contains test DB named `db.json` in the root. In general, this is simply an array of JSON strings. On `expenses` page you can click `Upload button` to see how they will be displayed. The spendings will be first added to your browser Local Storage. Once you add a new spending, it will be added there as well. This is done to be able keep your updates synced with DB - if you want save them, just click corresponding button - all new spendings will be fetched and saved.
