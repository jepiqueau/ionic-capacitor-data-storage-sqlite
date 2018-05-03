# Ionic App to test the capacitor-data-storage-sqlite plugin
Example of a Ionic Application to test and validate the Capacitor Data Storage SQLite Plugin

[capacitor-data-storage-sqlite](https://github.com/jepiqueau/capacitor-data-storage-sqlite)

## To run this Project
### Clone the project

clone this repo to a new directory:

```bash
git clone https://github.com/jepiqueau/ionic-capacitor-data-storage-sqlite.git ionic-capacitor-data-storage-sqlite
cd ionic-capacitor-data-storage-sqlite
git remote rm origin
npm install
```

### warning *** 
As there is currently a misfunctionning of the Capacitor npm publish process for the IOS plugin, just after the installation you should open your favorite code editor and move the file ./node_modules/capacitor-data-storage-sqlite/ios/Plugin/CapacitorDataStorageSqlite.podspec to ./node_modules/capacitor-data-storage-sqlite/CapacitorDataStorageSqlite.podspec

### buid the project

```bash
npx cap update
npm run build
npx cap copy
npx cap open ios
``` 
Now you are in xcode so select your device or emulator
Press on build and then run the current scheme

### In the App

Click on Test Plugin button

you should see the output of the test:

```
    Storing data successful
    Iskey successful
    Get keys succesful
    Get values successful
    Get keys/values successful
    Remove key successful
    Clear Keys successful
    The test was successful
```
