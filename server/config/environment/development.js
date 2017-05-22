'use strict';

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
        //uri: 'mongodb://localhost/pcmadministrador-dev'
        uri: 'mongodb://admin:123456a@ds143211.mlab.com:43211/heroku_972jdrx1'
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
    seedDB: false,
    s3: {
        bucketName: 'pcmtopair-produccion',
        accessKeyId: 'AKIAIJHWB2KDERNRNXUA',
        secretKey: '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',
        region: 'sa-east-1'
    }
};
