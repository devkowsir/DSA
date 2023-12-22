// https://leetcode.com/problems/encode-and-decode-tinyurl/
const data = {};
const key = 0;
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const n = chars.length;
const prefix = "https://tinyurl.com/";

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  let key = "";
  const randStr = Math.random().toString();
  for (let i = 2; i <= 12; i += 2) {
    const index = Number(randStr[i] + randStr[i + 1]) % n;
    key += chars[index];
  }
  data[key] = longUrl;
  return prefix + key;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  const key = shortUrl.slice(-6);
  return data[key];
};

console.log(decode(encode("https://leetcode.com/problems/design-tinyurl")));
