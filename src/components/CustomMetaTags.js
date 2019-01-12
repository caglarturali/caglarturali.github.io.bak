import React from 'react';
import MetaTags from 'react-meta-tags';
import metadata from '../data/metadata.json';

const CustomMetaTags = () => (
  <MetaTags>
    <title>{metadata.title}</title>
    <meta name="theme-color" content="#21252b" />
    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={metadata.keywords} />
    <meta name="author" content={metadata.author} />

    {/*<!-- Schema.org markup for Google+ -->*/}
    <meta itemProp="name" content={metadata.gPlus.name} />
    <meta itemProp="description" content={metadata.gPlus.description} />
    <meta itemProp="image" content={metadata.gPlus.image} />

    {/*<!-- Twitter Card data -->*/}
    <meta name="twitter:card" content={metadata.twitter.card} />
    <meta name="twitter:site" content={metadata.twitter.site} />
    <meta name="twitter:creator" content={metadata.twitter.creator} />
    <meta name="twitter:title" content={metadata.twitter.title} />
    <meta name="twitter:description" content={metadata.twitter.description} />
    <meta name="twitter:image" content={metadata.twitter.image} />

    {/*<!-- Open Graph data -->*/}
    <meta property="og:title" content={metadata.og.title} />
    <meta property="og:type" content={metadata.og.type} />
    <meta property="og:url" content={metadata.og.url} />
    <meta property="og:image" content={metadata.og.image} />
    <meta property="og:image:secure_url" content={metadata.og.image_secure_url} />
    <meta property="og:image:width" content={metadata.og.image_width} />
    <meta property="og:image:height" content={metadata.og.image_height} />
    <meta property="og:image:alt" content={metadata.og.image_alt} />
    <meta property="og:description" content={metadata.og.description} />
    <meta property="og:site_name" content={metadata.og.site_name} />
  </MetaTags>
);

export default CustomMetaTags;
