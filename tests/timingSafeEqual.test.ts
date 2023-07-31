import test from "ava";
import { timingSafeEqual } from "../src/timingSafeEqual.js";
import { randomString } from "../src/randomString.js";

test("timingSafeEqual", async (t) => {
  t.is(timingSafeEqual(Buffer.from("foo"), Buffer.from("bar")), false);
  t.is(timingSafeEqual(Buffer.from("foo"), Buffer.from("foo")), true);

  t.is(timingSafeEqual(Buffer.from("1"), Buffer.from([])), false);

  const str1 = await randomString(4096);
  const str2 = await randomString(4096);

  t.is(timingSafeEqual(Buffer.from(str1), Buffer.from(str2)), false);
  t.is(timingSafeEqual(Buffer.from(str1), Buffer.from(str1)), true);
});
