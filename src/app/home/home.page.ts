
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import * as CapacitorSQLPlugin from 'capacitor-data-storage-sqlite';

const { CapacitorDataStorageSqlite, Device } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  storage: any = {};
//  storage1: any = {};
  constructor() {

  }
  async testPlugin(){ 
    const info = await Device.getInfo();
    console.log('platform ',info.platform)
    if (info.platform === "ios" || info.platform === "android") {
      this.storage = CapacitorDataStorageSqlite;
//      this.storage1 = CapacitorDataStorageSqlite;
      console.log('storage ',this.storage)
    }  else {
      this.storage = CapacitorSQLPlugin.CapacitorDataStorageSqlite;     
//      this.storage1 = CapacitorSQLPlugin.CapacitorDataStorageSqlite;     
    }
    await this.testFirstStore();
    await this.testSecondStore();
    await this.testThirdStore();

  }
  async testFirstStore(): Promise<boolean> {
    //populate some data
    //string
    let retTest1: boolean = false;
    let retpopulate: boolean = false;
    let retiskey = false;
    let retkeys = false;
    let retvalues = false;
    let retkeysvalues = false;
    let retremove = false;
    let retclear = false;
    let result:any = await this.storage.openStore({});
    console.log('storage retCreate ',result.result)
    // store data in the first store
    result = await this.storage.set({key:"session", value:"Session Opened"});
    console.log("Save Data : " + result.result);
    result = await this.storage.get({key:"session"})
    console.log('result ',result)
    console.log("Get Data : " + result.value);
    let ret1: boolean = false;
    if (result.value === "Session Opened") ret1 = true;
    // json
    let data: any = {'a':20,'b':'Hello World','c':{'c1':40,'c2':'cool'}}
    await this.storage.set({key:'testJson',value:JSON.stringify(data)})
    result = await this.storage.get({key:"testJson"})
    console.log("Get Data : " + result.value);
    let ret2: boolean = false;
    if (result.value === JSON.stringify(data)) ret2 = true;
    // number
    let data1: any = 243.567
    await this.storage.set({key:'testNumber',value:data1.toString()})
    result = await this.storage.get({key:"testNumber"})
    console.log("Get Data : " + result.value);
    let ret3: boolean = false;
    if (result.value === data1.toString()) ret3 = true;
    if (ret1 && ret2 && ret3) retpopulate = true;
    if (retpopulate) document.querySelector('.populate').classList.remove('hidden');

    result = await this.storage.iskey({key:"testNumber"})
    console.log("isKey testNumber " + result.result)
    ret1 = result.result
    result = await this.storage.iskey({key:"foo"})
    console.log("isKey foo " + result.result)
    ret2 = result.result
    if (ret1 && !ret2) retiskey = true
    if (retiskey) document.querySelector('.iskey').classList.remove('hidden');
    
    result = await this.storage.keys()
    console.log("Get keys : " + result.keys);
    console.log("Keys length " + result.keys.length)

    if(result.keys.length === 3 && result.keys[0] === "session"
        && result.keys[1] === "testJson" && result.keys[2] === "testNumber") {
      retkeys = true;
      document.querySelector('.keys').classList.remove('hidden');
    }
    result = await this.storage.values()
    console.log("Get values : " + result.values);
    console.log("Values length " + result.values.length)
    if(result.values.length === 3 && result.values[0] === "Session Opened"
        && result.values[1] === JSON.stringify(data) && result.values[2] === data1.toString()) {
      retvalues = true;
      document.querySelector('.values').classList.remove('hidden');
    }

    result = await this.storage.keysvalues();
    result.keysvalues.forEach(element => {
      console.log(element)
    });
    console.log("KeysValues length " + result.keysvalues.length)
    if(result.keysvalues.length === 3 &&
        result.keysvalues[0].key === "session" && result.keysvalues[0].value === "Session Opened" &&
        result.keysvalues[1].key === "testJson" && result.keysvalues[1].value === JSON.stringify(data) &&
        result.keysvalues[2].key === "testNumber" && result.keysvalues[2].value === data1.toString()) {
      retkeysvalues = true;
      document.querySelector('.keysvalues').classList.remove('hidden');
    }
    result = await this.storage.remove({key:"testJson"});
    if(result.result) {
      let res: any = await this.storage.keysvalues();
      if(res.keysvalues.length === 2 && 
        res.keysvalues[0].key === "session" && res.keysvalues[0].value === "Session Opened" &&
        res.keysvalues[1].key === "testNumber" && res.keysvalues[1].value === data1.toString()) {
        retremove = true;
        document.querySelector('.remove').classList.remove('hidden');
      }
    }
    result = await this.storage.clear();
    if(result.result) {
      let res: any = await this.storage.keysvalues();
      console.log("after clear res.keysvalues.length " + res.keysvalues.length)
      if(res.keysvalues.length === 0) {
        retclear = true;
        document.querySelector('.clear').classList.remove('hidden');
        if(retpopulate && retiskey && retkeys && retvalues && retkeysvalues && retremove && retclear) {
          retTest1 = true;
          document.querySelector('.success').classList.remove('hidden');
        } else {
          document.querySelector('.failure').classList.remove('hidden');
        }
      }
    } else {
        document.querySelector('.failure').classList.remove('hidden');
    }
    return retTest1;
  }

  async testSecondStore(): Promise<boolean> { 
    // open a second store
    let result: any = await this.storage.openStore({database:"myStore",table:"saveData"});
    result = await this.storage.clear();
    // store data in the second store
    result = await this.storage.set({key:"app", value:"App Opened"});
    console.log("Save Data : " + result.result);
    let data:any = {'age':40,'name':'jeep','email':'jeep@example.com'}
    await this.storage.set({key:'user',value:JSON.stringify(data)});
    return true;
  }
  async testThirdStore(): Promise<boolean> { 
    let result: any;
    // open a third store
    result = await this.storage.setTable({table:"otherData"});
    console.log('storage2 retCreate ',result.result.toString())
    result = await this.storage.clear();
    // store data in the third store
    result = await this.storage.set({key:"key1", value:"Hello World!"});
    console.log("Other Data : " + result.result);
    let data:any = {'a':60,'pi':'3.141516','b':'cool'}
    await this.storage.set({key:'key2',value:JSON.stringify(data)});

    // store data in the second store
    result = await this.storage.setTable({table:"saveData"});    
    result = await this.storage.set({key:"message", value:"Welcome from Jeep"});
    console.log("Save Data : " + result.result);
    return true;
  }}
