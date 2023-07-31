import test from "ava";
import { randomBytes } from "../src/randomBytes.js";

test("randomBytes", async (t) => {
  const buffer = await randomBytes(32);

  t.is(buffer.length, 32);
});

test("randomBytes failure", async (t) => {
  t.plan(1);

  try {
    await randomBytes(-1);
  } catch (error) {
    t.assert(error instanceof RangeError);
  }
});
