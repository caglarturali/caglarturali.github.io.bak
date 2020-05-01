import React from 'react';
import { Helmet } from 'react-helmet';
import { siteMetadata, metadata } from '../../data';

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
  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s • ${siteMetadata.title}`}
      meta={[
        ...metadata,
        {
          name: 'description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
