import { Component } from '@angular/core';
import { NavController , Platform} from 'ionic-angular';
import { Plugins } from '@capacitor/core';
import { CapacitorDataStorageSqlite } from 'capacitor-data-storage-sqlite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform) {

  }
  async testPlugin(){ 
    let storage: any;
    if(this.platform.is('ios') || this.platform.is('android')) {
      const { CapacitorDataStorageSqlite } = Plugins;
      storage = CapacitorDataStorageSqlite;
    } else {
      storage = CapacitorDataStorageSqlite;     
    }
    //populate some data
    //string
    let retpopulate: boolean = false;
    let retiskey = false;
    let retkeys = false;
    let retvalues = false;
    let retkeysvalues = false;
    let retremove = false;
    let retclear = false;
    let result:any = await storage.set({key:"session", value:"Session Opened"});
    console.log("Save Data : " + result.result);
    result = await storage.get({key:"session"})
    console.log('result ',result)
    console.log("Get Data : " + result.value);
    let ret1: boolean = false;
    if (result.value === "Session Opened") ret1 = true;
    // json
    let data:any = {'a':20,'b':'Hello World','c':{'c1':40,'c2':'cool'}}
    await storage.set({key:'testJson',value:JSON.stringify(data)})
    result = await storage.get({key:"testJson"})
    console.log("Get Data : " + result.value);
    let ret2: boolean = false;
    if (result.value === JSON.stringify(data)) ret2 = true;
    // number
    let data1: any = 243.567
    await storage.set({key:'testNumber',value:data1.toString()})
    result = await storage.get({key:"testNumber"})
    console.log("Get Data : " + result.value);
    let ret3: boolean = false;
    if (result.value === data1.toString()) ret3 = true;
    if (ret1 && ret2 && ret3) retpopulate = true;
    if (retpopulate) document.querySelector('.populate').classList.remove('hidden');

    result = await storage.iskey({key:"testNumber"})
    console.log("isKey testNumber " + result.result)
    ret1 = result.result
    result = await storage.iskey({key:"foo"})
    console.log("isKey foo " + result.result)
    ret2 = result.result
    if (ret1 && !ret2) retiskey = true
    if (retiskey) document.querySelector('.iskey').classList.remove('hidden');
    
    result = await storage.keys()
    console.log("Get keys : " + result.keys);
    console.log("Keys length " + result.keys.length)
    if(result.keys.length === 3 && result.keys[0] === "session"
        && result.keys[1] === "testJson" && result.keys[2] === "testNumber") {
      retkeys = true;
      document.querySelector('.keys').classList.remove('hidden');
    }
    result = await storage.values()
    console.log("Get values : " + result.values);
    console.log("Values length " + result.values.length)
    if(result.values.length === 3 && result.values[0] === "Session Opened"
        && result.values[1] === JSON.stringify(data) && result.values[2] === data1.toString()) {
      retvalues = true;
      document.querySelector('.values').classList.remove('hidden');
    }

    storage.keysvalues().then((result) => {
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
        storage.remove({key:"testJson"}).then((result) => {
          if(result.result) {
            storage.keysvalues().then(async (res) => {
              if(res.keysvalues.length === 2 && 
                res.keysvalues[0].key === "session" && res.keysvalues[0].value === "Session Opened" &&
                res.keysvalues[1].key === "testNumber" && res.keysvalues[1].value === data1.toString()) {
                retremove = true;
                document.querySelector('.remove').classList.remove('hidden');
              }
              result = await storage.clear()
              if(result.result) {
                let res = await storage.keysvalues()
                console.log("after clear res.keysvalues.length " + res.keysvalues.length)
                if(res.keysvalues.length === 0) {
                  retclear = true;
                  document.querySelector('.clear').classList.remove('hidden');
                }
                if(retpopulate && retiskey && retkeys && retvalues && retkeysvalues && retremove && retclear) {
                  document.querySelector('.success').classList.remove('hidden');
                } else {
                  document.querySelector('.failure').classList.remove('hidden');
                }
              } else {
                document.querySelector('.failure').classList.remove('hidden');
              }
            });
          } else {
            document.querySelector('.failure').classList.remove('hidden');
          }
        });
      } else {
        document.querySelector('.failure').classList.remove('hidden');
      }
    });
  }

}
