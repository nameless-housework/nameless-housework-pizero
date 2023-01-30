import Ambient from "ambient-lib";
import {
  AMBIENT_CHANNEL_ID,
  AMBIENT_READ_KEY,
  AMBIENT_WRITE_KEY,
} from "./constants.js";

let am;
export const init = async () => {
  am = new Ambient(AMBIENT_CHANNEL_ID, AMBIENT_WRITE_KEY, AMBIENT_READ_KEY);
};

// data 例　{ d1: 1, d2: 2 }
// data: {d1?: number, d2?: number, d3?: number}
export const write = async (data) => {
  return new Promise((resolve) => {
    am.send(data, (response) => {
      resolve(response.status);
    });
  });
};

// 直近n件のデータを取る
export const read = async (n = 10) => {
  return new Promise((resolve) => {
    am.read({ n }, (response) => {
      resolve(response.data);
    });
  });
};
