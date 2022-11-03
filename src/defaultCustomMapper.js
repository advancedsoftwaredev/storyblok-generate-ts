module.exports = function defaultCustomMapper(key, obj) {
  switch (obj.field_type) {
    case 'seo-metatags':
      return {
        [key]: {
          type: 'object',
          properties: {
            _uid: {
              type: 'string',
            },
            title: {
              type: 'string',
            },
            plugin: {
              type: 'string',
            },
            og_image: {
              type: 'string',
            },
            og_title: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            twitter_image: {
              type: 'string',
            },
            twitter_title: {
              type: 'string',
            },
            og_description: {
              type: 'string',
            },
            twitter_description: {
              type: 'string',
            },
          },
        },
      };
    default:
      return {};
  }
};
