import { requestI2CAccess } from "./../node_modules/node-web-i2c/index.js";
import ADS1015 from "@chirimen/ads1015";
import * as ambient from "./ambient.js";

let ads1015;
let vl;
export const init = async () => {
  const i2cAccess = await requestI2CAccess();
  const adsPort = i2cAccess.ports.get(1);
  ads1015 = await new ADS1015(adsPort, 0x48);
  await ads1015.init();
};

export const get = async () => {
  try {
    const weight = await ads1015.read(1);
    return { d3: weight };
  } catch (error) {
    console.error("error: code:" + error.code + " message:" + error.message);
    return false;
  }
};
