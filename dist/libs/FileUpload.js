"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _libStorage = require("@aws-sdk/lib-storage");
var _clientS = require("@aws-sdk/client-s3");
const dotenv = require('dotenv');
dotenv.config();
const region = "ap-south-1";
const Bucket = "decode-age-staging";
const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRECT_ACCESS_KEY;
const FileUpload = async (filename, PDF) => {
  const Key = filename;
  const Body = PDF;
  try {
    const client = new _clientS.S3Client({
      credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
      },
      region: region
    });
    const parallelUploads3 = new _libStorage.Upload({
      client,
      params: {
        Bucket,
        Key,
        Body
      }
    });
    parallelUploads3.on("httpUploadProgress", progress => {});
    const response = await parallelUploads3.done();
    return response.Location;
  } catch (e) {
    return e;
  }
};
var _default = FileUpload;
exports.default = _default;