import test from "ava";
import { randomBits } from "../src/randomBits.js";

test("randomBits", async (t) => {
  t.is((await randomBits(4)).length, 1);
  t.is((await randomBits(8)).length, 1);
  t.is((await randomBits(16)).length, 2);
  t.is((await randomBits(42)).length, 6);
});

test("randomBits failure", async (t) => {
  t.plan(1);

  try {
    await randomBits(-1);
  } catch (error) {
    t.assert(error instanceof Error);
  }
});
