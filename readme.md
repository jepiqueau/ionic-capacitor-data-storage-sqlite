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

### build the project

```bash
npx cap update
npm run build
npx cap copy
``` 

### running on IOS

```bash
npx cap open ios
``` 

Now you are in xcode so select your device or emulator
Press on build and then run the current scheme

### running on Android

```bash
npx cap open android
``` 

Now you are in android studio so select your device or emulator
Press run App

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
