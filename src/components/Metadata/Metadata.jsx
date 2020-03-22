import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

function Metadata(props) {
  const { title, description, image, pathname, template } = props;
  const query = graphql`
    query Metadata {
      site {
        siteMetadata {
          defaultTitle: title
          defaultTemplate: template
          defaultDescription: description
          siteUrl: url
          defaultImage: image
        }
      }
    }
  `;
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const { site } = data || {};
        const { siteMetadata } = site || {};
        const { defaultTitle,
          defaultTemplate,
          defaultDescription,
          siteUrl,
          defaultImage } = siteMetadata || {};

        const merged = {
          title: title || defaultTitle,
          template: template || defaultTemplate,
          description: description || defaultDescription,
          image: `${siteUrl}${image || defaultImage}`,
          url: `${siteUrl}${pathname || '/'}`,
        };

        return (
          <Helmet title={merged.title} titleTemplate={`%s | ${merged.template}`} defaultTitle={defaultTitle}>
            <meta name='description' content={merged.description} />
            <meta name='image' content={merged.image} />
            {merged.url && <meta property='og:url' content={merged.url} />}
            <meta property='og:type' content='website' />
            {merged.title && <meta property='og:title' content={merged.title} />}
            {merged.description && (
              <meta property='og:description' content={merged.description} />
            )}
            {merged.image && <meta property='og:image' content={merged.image} />}
          </Helmet>
        );
      }}
    />
  );
}

Metadata.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  template: PropTypes.string,
};

Metadata.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  template: null,
};

export default Metadata;
