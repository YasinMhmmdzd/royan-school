import S3 from "aws-sdk/clients/s3.js";
import { v4 } from "uuid";

export const s3Upload = async (file) => {
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
                Key: `${v4()}-${file.originalname}`,
                Body: file.buffer,
            })
            .promise();
    } catch (error) {
        console.log(error);
    }
};
