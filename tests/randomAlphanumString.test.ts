import test from "ava";
import { randomAlphanumString } from "../src/randomAlphanumString.js";

test("randomAlphanumString", async (t) => {
  const string = await randomAlphanumString(27);

  t.is(string.length, 27);
  t.assert(/^[a-zA-Z0-9]+$/.test(string));
});
