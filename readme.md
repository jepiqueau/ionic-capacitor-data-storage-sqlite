# Ionic App to test the capacitor-data-storage-sqlite plugin
Example of a Ionic Application to test and validate the Capacitor Data Storage SQLite Plugin with database encryption

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

### init capacitor

```bash
npx cap init IonicCapacitorDataStorageSqlite com.example.ioniccapacitordatastoragesqlite
```

### first project build

```bash
npm run build
```

### Adding IOS Platforms
```bash
npx cap add ios
```

### Building App for Targeted Platforms

```bash
npx cap update
npm run build
npx cap copy
```

### running on IOS

```bash
npx cap open ios
``` 

Xcode will be opened with your project and will index the files. When completed, clean the build folder, create the build, select your apple device or emulator and click on the run button. The application should display four buttons. Click on them

### running on Android

```bash
npx cap open android
``` 
Android Studio will be opened with your project and will sync the files.
In Android Studio go to the file MainActivity in app/src/main/java/com/example/ioniccapacitordatastoragesqlite and modified as follows

```
package com.example.ioniccapacitordatastoragesqlite;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.jeep.plugin.capacitor.CapacitorDataStorageSqlite;


import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(CapacitorDataStorageSqlite.class);
    }});
  }
}

```
Sync Project with Gradle Files
Build Clean Project
Build Rebuild Project
Setup the SDK, i used the Android API 27 platform
and make Update when asked

When all this is done and your buid is successful, click on the run project button and select your device or emulator, the application will launch and display four buttons.

### running on Web

```bash
npx cap copy web
ng serve
``` 

open your browser on http://localhost:4200/

### running on Electron
```bash
npx cap open electron
```

```bash
cd electron
npm run electron:start
``` 

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


