const dotenv = require('dotenv');
dotenv.config();
const region = "ap-south-1";
const Bucket = "decode-age-staging";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";
const accessKeyId = process.env.ACCESS_KEY_ID
const secretAccessKey = process.env.SECRECT_ACCESS_KEY



const FileUpload = async (filename, PDF) => {

    const Key = filename;
    const Body = PDF;

    try {
        const client = new S3Client({
            credentials: {
                accessKeyId: accessKeyId,
                secretAccessKey: secretAccessKey,
            },
            region: region,
        });
        const parallelUploads3 = new Upload({
            client,
            params: { Bucket, Key, Body },
        });

        parallelUploads3.on("httpUploadProgress", (progress) => {

        });

        const response = await parallelUploads3.done()

        return response.Location

    } catch (e) {
        return e
    }
}


export default FileUpload
