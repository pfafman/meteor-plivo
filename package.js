Package.describe({
  summary: "Plivo telephony framework wrapper for Meteor",
  version: "1.1.0",
  git: "http://github.com/pfafman/meteor-plivo.git"
});

Npm.depends({ "plivo": "0.1.0" });

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files('plivo_npm.js', 'server');
  if(api.export)
    api.export('Plivo');
});

