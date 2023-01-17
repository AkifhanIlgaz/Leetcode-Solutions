let urlMap = new Map();
const base = "http://tinyurl.com";

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  const shortUrl = base + generateHash(longUrl);
  urlMap.set(shortUrl, longUrl);
  return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return urlMap.get(shortUrl);
};

var generateHash = function (url) {
  let hash = 5831;

  for (ch of url) {
    hash = (hash << 5) + hash + ch;
  }

  return hash;
};
