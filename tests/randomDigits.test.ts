import test from "ava";
import { randomDigits } from "../src/randomDigits.js";

test("randomDigits", async (t) => {
  const string = await randomDigits(14);

  t.is(string.length, 14);
  t.assert(/^[0-9]+$/.test(string));
});
