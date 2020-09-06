import React from 'react';
import { Helmet } from 'react-helmet';
import metadata from '../../data/json/metadata.json';

export interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: HTMLMetaElement[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  lang = 'en',
  meta = [],
}) => {
  const metaDescription = description || metadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s • ${metadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: metadata.keywords,
        },
        {
          name: 'canonical',
          content: metadata.homepage,
        },
        {
          name: 'theme-color',
          content: metadata.themeColor,
        },
        {
          property: `og:title`,
          content: metadata.title,
        },
        {
          property: `og:description`,
          content: metadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: metadata.homepage,
        },
        {
          property: `og:image`,
          content: metadata.image,
        },
        {
          property: `og:image:width`,
          content: '320',
        },
        {
          property: `og:image:height`,
          content: '320',
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: metadata.homepage,
        },
        {
          name: `twitter:title`,
          content: metadata.title,
        },
        {
          name: `twitter:description`,
          content: metadata.description,
        },
        {
          name: `twitter:image`,
          content: metadata.image,
        },
        {
          name: `google-site-verification`,
          content: metadata.verification.google,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
