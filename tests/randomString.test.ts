import test from "ava";
import { randomString } from "../src/randomString.js";

test("randomString", async (t) => {
  const string = await randomString(27);

  t.is(string.length, 27);
});
