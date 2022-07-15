import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '@Lib/utils/constants';

const TWITTER_CREATOR = '@_SrAnder';
const SITE_AUTHOR = 'anderb';
const SITE_LANGUAGE = 'en';

export type SeoMetaTagsProps = {
  title: string;
  description: string;
  url?: string;
  noindex?: boolean;
};

const SeoMetaTags: FC<SeoMetaTagsProps> = ({
  title,
  description,
  url,
  noindex = false,
}) => {
  return (
    <Helmet>
      <title>Weather please</title>
      <title>{`${title} | Weather please`}</title>
      <meta name="lang" content={SITE_LANGUAGE} />
      <meta name="author" content={SITE_AUTHOR} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="web" />
      <meta property="og:site_name" content="ShareRecipes" />

      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={TWITTER_CREATOR} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Disable search engine indexing */}
      <link rel="canonical" href={url || SITE_URL} />
      <meta name="robots" content={noindex ? 'noindex' : 'index,follow'} />
    </Helmet>
  );
};

export default SeoMetaTags;
