import test from "ava";
import { pbkdf2 } from "../src/pbkdf2.js";

const password = "password123";
const salt = "salt123";
const iterations = 1000;
const keylen = 64;
const digests = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"] as const;

digests.forEach((digest) => {
  test(`returns consistent output for same salts with ${digest} digest`, async (t) => {
    const key1 = await pbkdf2(password, salt, iterations, keylen, digest);
    const key2 = await pbkdf2(password, salt, iterations, keylen, digest);

    t.deepEqual(key1, key2);
  });

  test(`returns different output for different salts with ${digest} digest`, async (t) => {
    const salt2 = "salt124";

    const key1 = await pbkdf2(password, salt, iterations, keylen, digest);
    const key2 = await pbkdf2(password, salt2, iterations, keylen, digest);

    t.notDeepEqual(key1, key2);
  });

  test(`returns different output for different passwords with ${digest} digest`, async (t) => {
    const password2 = "password124";

    const key1 = await pbkdf2(password, salt, iterations, keylen, digest);
    const key2 = await pbkdf2(password2, salt, iterations, keylen, digest);

    t.notDeepEqual(key1, key2);
  });
});
