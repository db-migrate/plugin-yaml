
module.exports = {

  loadPlugin: function() {

    module.exports = Object.assign(module.exports, {

      'init:config:overwrite:require': function(fileName) {

        /**
          * Always delay requires, otherwise your plugin will cause trouble
          * with db-migrates performance and generates issues to your users.
          */
        var yaml = require('js-yaml');
        var fs = require('fs');

        return yaml.safeLoad(fs.readFileSync(fileName, 'utf8'));
      }
    });

    delete module.exports.loadPlugin;
  },
  name: 'test',
  hooks: [
    'init:config:overwrite:require'
  ]
};
