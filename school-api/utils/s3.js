import S3 from "aws-sdk/clients/s3.js";

export const s3Upload = async (file, name) => {
    try {
        const s3 = new S3({
            endpoint: process.env.LIARA_ENDPOINT,
            accessKeyId: process.env.LIARA_ACCESS_KEY,
            secretAccessKey: process.env.LIARA_SECRET_KEY,
            region: "default",
        });
        return await s3
            .putObject({
                Bucket: process.env.LIARA_BUCKET_NAME,
                Key: `${name}.mp4`,
                Body: file.buffer,
            })
            .promise();
    } catch (error) {
        throw error;
    }
};

export const s3Download = async (name) => {
    try {
        const s3 = new S3({
            endpoint: process.env.LIARA_ENDPOINT,
            accessKeyId: process.env.LIARA_ACCESS_KEY,
            secretAccessKey: process.env.LIARA_SECRET_KEY,
            region: "default",
        });
        return await s3.getSignedUrlPromise("getObject", { Bucket: process.env.LIARA_BUCKET_NAME, Key: `${name}.mp4`, Expires: 60 });
    } catch (error) {
        throw error;
    }
};

export const s3Delete = async (name) => {
    try {
        const s3 = new S3({
            endpoint: process.env.LIARA_ENDPOINT,
            accessKeyId: process.env.LIARA_ACCESS_KEY,
            secretAccessKey: process.env.LIARA_SECRET_KEY,
            region: "default",
        });

        await s3.deleteObject({ Bucket: process.env.LIARA_BUCKET_NAME, Key: `${name}.mp4` }).promise();
    } catch (error) {
        throw error;
    }
};
