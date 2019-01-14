const fs = require('fs');
const path = require('path');
const rootPath = require('../../root');
const metadata = require('../data/metadata.json');

const buildMeta = () => {
  let meta = '';
  meta += `<title>${metadata.title}</title>`;
  meta += `<meta name="description" content="${metadata.description}" />`;
  meta += `<meta name="keywords" content="${metadata.keywords}" />`;
  meta += `<meta name="author" content="${metadata.author}" />`;
  meta += `<link rel="canonical" href="${metadata.og.url}" />`;
  meta += `<meta name="theme-color" content="${metadata.themeColor}" />`;

  meta += `<!-- Schema.org markup for Google+ -->`;
  meta += `<meta itemprop="name" content="${metadata.gPlus.name}" />`;
  meta += `<meta itemprop="description" content="${metadata.gPlus.description}" />`;
  meta += `<meta itemprop="image" content="${metadata.gPlus.image}" />`;

  meta += `<!-- Twitter Card data -->`;
  meta += `<meta name="twitter:card" content="${metadata.twitter.card}" />`;
  meta += `<meta name="twitter:site" content="${metadata.twitter.site}" />`;
  meta += `<meta name="twitter:creator" content="${metadata.twitter.creator}" />`;
  meta += `<meta name="twitter:title" content="${metadata.twitter.title}" />`;
  meta += `<meta name="twitter:description" content="${metadata.twitter.description}" />`;
  meta += `<meta name="twitter:image" content="${metadata.twitter.image}" />`;

  meta += `<!-- Open Graph data -->`;
  meta += `<meta property="og:title" content="${metadata.og.title}" />`;
  meta += `<meta property="og:type" content="${metadata.og.type}" />`;
  meta += `<meta property="og:url" content="${metadata.og.url}" />`;
  meta += `<meta property="og:image" content="${metadata.og.image}" />`;
  meta += `<meta property="og:image:secure_url" content="${metadata.og.image_secure_url}" />`;
  meta += `<meta property="og:image:width" content="${metadata.og.image_width}" />`;
  meta += `<meta property="og:image:height" content="${metadata.og.image_height}" />`;
  meta += `<meta property="og:image:alt" content="${metadata.og.image_alt}" />`;
  meta += `<meta property="og:description" content="${metadata.og.description}" />`;
  meta += `<meta property="og:site_name" content="${metadata.og.site_name}" />`;

  meta += `<!-- Google site verification -->`;
  meta += `<meta name="google-site-verification" content="${metadata.verification.google}" />`;
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
