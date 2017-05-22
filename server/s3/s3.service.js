'use strict';

var AWS = require('aws-sdk');
AWS.config.setPromisesDependency(require('bluebird'));
var config = require('../config/environment');

// Levanta cliente s3 Bucket
var s3Bucket = new AWS.S3({
    accessKeyId: config.s3.accessKeyId,
    secretKey: config.s3.secretKey,
    region: config.s3.region,
    params: {
        Bucket: config.s3.bucketName
    }
});

// Metodo para enviar imagen a server 
function uploadImage(keyName, imagen) {
    var buf = new Buffer(imagen.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    return s3Bucket.putObject({
        ContentEncoding: 'base64',
        ContentType: 'image/jpeg',
        Key: keyName,
        Body: buf,
        ACL: 'public-read'
    }).promise();
}

//Metodo para obtener url imagen
function getUrlImage(id, prefix) {
    return 'https://s3-' + config.s3.region + '.amazonaws.com/' + config.s3.bucketName + '/' + prefix + id + '.jpg';
}

exports.uploadImage = uploadImage;
exports.getUrlImage = getUrlImage;