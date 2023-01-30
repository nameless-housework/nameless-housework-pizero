import * as towel from "./src/towel.js";
import * as ambient from "./src/ambient.js";
import { INTERVAL_SECOND } from "./src/constants.js";

(async () => {
  await ambient.init();
  await towel.init();
  const data = { d1: 0, d2: 0 };
  // d3 以降が増えることを想定し書き込み回数を抑えるため data で保持する実装にしました

  setInterval(async () => {
    const result = await towel.get();
    if (result) {
      console.log(`距離: ${result.d1}mm / 圧力: ${result.d2}`);
      data.d1 = result.d1;
      data.d2 = result.d2;
    }
  }, 1000);

  setInterval(async () => {
    console.log("ambient write");
    await ambient.write(data);
  }, INTERVAL_SECOND * 1000);

  // console.log(await ambient.write({d1: 0, d2: 1}));
  // console.log(await ambient.read());
})();
