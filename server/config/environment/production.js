'use strict';

// Production specific configuration
// =================================
module.exports = {
    // Server IP
    ip: process.env.OPENSHIFT_NODEJS_IP ||
        process.env.IP ||
        undefined,

    // Server port
    port: process.env.OPENSHIFT_NODEJS_PORT ||
        process.env.PORT ||
        8080,

    // MongoDB connection options
    mongo: {
        uri: process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL +
            process.env.OPENSHIFT_APP_NAME ||
            'mongodb://admin:123456a@ds143211.mlab.com:43211/heroku_972jdrx1'
    },
    s3: {
        bucketName: 'pcmtopair-produccion',
        accessKeyId: 'AKIAIJHWB2KDERNRNXUA',
        secretKey: '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',
        region: 'sa-east-1'
    }
};
