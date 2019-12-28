import { Plugins } from '@capacitor/core';
import * as CapacitorSQLPlugin from 'capacitor-data-storage-sqlite';
const { CapacitorDataStorageSqlite, Device } = Plugins;

export const setStorage = async (): Promise<any>=> {
  const info = await Device.getInfo();
  console.log('platform ',info.platform)
  if (info.platform === "ios" || info.platform === "android") {
    return {plugin:CapacitorDataStorageSqlite, platform:info.platform};
  }  else {
    return {plugin:CapacitorSQLPlugin.CapacitorDataStorageSqlite, platform:"web"};     
  } 
}