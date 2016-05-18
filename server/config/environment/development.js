'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    //uri: 'mongodb://localhost/pcmadministrador-dev'
    uri: 'mongodb://pcm:123456a@jello.modulusmongo.net:27017/u2ronuVa'
  },
  sequelize: {
    uri: 'sqlite://',
    options: {
      logging: false,
      storage: 'dev.sqlite',
      define: {
        timestamps: false
      }
    }
  },
  seedDB: true
};
