const assetLib = require('/lib/enonic/asset');
const thymeleafLib = require('/lib/thymeleaf');

exports.get = () => {
  const view = resolve('content-type-manager.html');

  const model = {
    favicon: {
      svg: assetLib.assetUrl({ path: 'img/favicon.svg' }),
      png: assetLib.assetUrl({ path: 'img/favicon.png' }),
    },
    loadingIcon: assetLib.assetUrl({ path: 'img/spinning-loader.gif' }),
    scripts: {
      vendor: assetLib.assetUrl({ path: 'js/vendor.js' }),
      app: assetLib.assetUrl({ path: 'js/app.js' }),
    },
  };

  return { body: thymeleafLib.render(view, model) };
};
