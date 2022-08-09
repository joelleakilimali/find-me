const { v4: uuid } = require("uuid");
const AWS = require("aws-sdk");

const s3 = new AWS.S3();
const uploadFile = async (file) => {
  const filename = file.name;
  const lastDot = filename.lastIndexOf(".");
  const extension = filename.substring(lastDot + 1);
  const newfileKey = uuid().concat(".").concat(extension);

  AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: newfileKey,
    Body: Buffer.from(file.data, "binary"),
  };

  try {
    return await s3.upload(params).promise();
  } catch (error) {
    throw new Error(error, 5000);
  }
};
module.exports = { uploadFile };
