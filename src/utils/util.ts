import { Plugins } from '@capacitor/core';
import * as CapacitorSQLPlugin from 'capacitor-data-storage-sqlite';
const { CapacitorDataStorageSqlite, Device } = Plugins;

export const setStorage = async (): Promise<any>=> {
  const info = await Device.getInfo();
  console.log('platform ',info.platform)
  if (info.platform === "ios" || info.platform === "android") {
    return CapacitorDataStorageSqlite;
  }  else {
    return CapacitorSQLPlugin.CapacitorDataStorageSqlite;     
  } 
}


export const wrapperToCapacitorSqliteStorage = (storage:any) => {

  return {
    openStore: async (options:any): Promise<boolean> => {
        const {result} = await storage.openStore(options);
        return result;
    },
    setTable: async (table:any): Promise<any> => {
      const {result,message} = await storage.setTable(table);
      return Promise.resolve([result,message]);
    },
    setItem: async (key:string, value:string): Promise<void> => {
      await storage.set({ key, value });
      return;
    },
    getItem: async (key:string): Promise<string> => {
      const {value} = await storage.get({ key });
      return value;
    },
    getAllKeys: async (): Promise<Array<string>> => {
      const {keys} = await storage.keys();
      return keys;
    },
    removeItem: async (key:string): Promise<void> => {
      await storage.remove({ key });
      return;
    },
    clear: async (): Promise<void> => {
      await storage.clear();
      return;
    },

  }
}
