const fs = require('fs');
const path = require('path');
const rootPath = require('../../root');
const metadata = require('../data/metadata.json');

const buildMeta = () => {
  let meta = fs.readFileSync(path.join(__dirname, 'metaTemp.html'), 'utf8');
  meta = meta.replace('__TITLE__', metadata.title);
  meta = meta.replace('__DESCRIPTION__', metadata.description);
  meta = meta.replace('__KEYWORDS__', metadata.keywords);
  meta = meta.replace('__AUTHOR__', metadata.author);
  meta = meta.replace('__CANONICAL__', metadata.canonical);
  meta = meta.replace('__THEME_COLOR__', metadata.themeColor);

  meta = meta.replace('__GPLUS_NAME__', metadata.gPlus.name);
  meta = meta.replace('__GPLUS_DESCRIPTION__', metadata.gPlus.description);
  meta = meta.replace('__GPLUS_IMAGE__', metadata.gPlus.image);

  meta = meta.replace('__TWITTER_CARD__', metadata.twitter.card);
  meta = meta.replace('__TWITTER_SITE__', metadata.twitter.site);
  meta = meta.replace('__TWITTER_CREATOR__', metadata.twitter.creator);
  meta = meta.replace('__TWITTER_TITLE__', metadata.twitter.title);
  meta = meta.replace('__TWITTER_DESCRIPTION__', metadata.twitter.description);
  meta = meta.replace('__TWITTER_IMAGE__', metadata.twitter.image);

  meta = meta.replace('__OG_TITLE__', metadata.og.title);
  meta = meta.replace('__OG_TYPE__', metadata.og.type);
  meta = meta.replace('__OG_URL__', metadata.og.url);
  meta = meta.replace('__OG_IMAGE__', metadata.og.image);
  meta = meta.replace('__OG_IMAGE_SECURE_URL__', metadata.og.image_secure_url);
  meta = meta.replace('__OG_IMAGE_WIDTH__', metadata.og.image_width);
  meta = meta.replace('__OG_IMAGE_HEIGHT__', metadata.og.image_height);
  meta = meta.replace('__OG_IMAGE_ALT__', metadata.og.image_alt);
  meta = meta.replace('__OG_DESCRIPTION__', metadata.og.description);
  meta = meta.replace('__OG_SITE_NAME__', metadata.og.site_name);

  meta = meta.replace('__VERIFICATION_GOOGLE__', metadata.verification.google);
  return meta;
};

const buildHtml = () => {
  let template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
  let metaString = buildMeta();
  return template.replace('__METADATA__', metaString);
};

const fileToCreate = 'index.html';
const stream = fs.createWriteStream(path.join(rootPath.PROJECT_DIR, fileToCreate));

stream.once('open', () => {
  let html = buildHtml();

  stream.end(html);
});
