const fs = require('fs');
const path = require('path');
const rootPath = require('../root');
const metadata = require('../src/data/metadata.json');

const metaMap = {
  __TITLE__: metadata.title,
  __DESCRIPTION__: metadata.description,
  __KEYWORDS__: metadata.keywords,
  __AUTHOR__: metadata.author,
  __CANONICAL__: metadata.canonical,
  __THEME_COLOR__: metadata.themeColor,
  __GPLUS_NAME__: metadata.gPlus.name,
  __GPLUS_DESCRIPTION__: metadata.gPlus.description,
  __GPLUS_IMAGE__: metadata.gPlus.image,
  __TWITTER_CARD__: metadata.twitter.card,
  __TWITTER_SITE__: metadata.twitter.site,
  __TWITTER_CREATOR__: metadata.twitter.creator,
  __TWITTER_TITLE__: metadata.twitter.title,
  __TWITTER_DESCRIPTION__: metadata.twitter.description,
  __TWITTER_IMAGE__: metadata.twitter.image,
  __OG_TITLE__: metadata.og.title,
  __OG_TYPE__: metadata.og.type,
  __OG_URL__: metadata.og.url,
  __OG_IMAGE__: metadata.og.image,
  __OG_IMAGE_SECURE_URL__: metadata.og.image_secure_url,
  __OG_IMAGE_WIDTH__: metadata.og.image_width,
  __OG_IMAGE_HEIGHT__: metadata.og.image_height,
  __OG_IMAGE_ALT__: metadata.og.image_alt,
  __OG_DESCRIPTION__: metadata.og.description,
  __OG_SITE_NAME__: metadata.og.site_name,
  __VERIFICATION_GOOGLE__: metadata.verification.google,
};

const buildMeta = () => {
  let meta = fs.readFileSync(path.join(__dirname, 'metaTemp.html'), 'utf8');

  for (const key in metaMap) {
    meta = meta.replace(key, metaMap[key]);
  }

  return meta;
};

const buildHtml = () => {
  let template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
  let metaString = buildMeta();
  return template.replace('__METADATA__', metaString);
};

const fileToCreate = 'index.html';
const stream = fs.createWriteStream(
  path.join(rootPath.PROJECT_DIR, fileToCreate),
);

stream.once('open', () => {
  let html = buildHtml();
  stream.end(html);
});
