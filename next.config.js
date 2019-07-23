module.exports = {
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/aboutme': { page: '/aboutme' },
    };
  }
};

const withPages = require('@primer/next-pages/plugin')
module.exports = withPages(module.exports)
