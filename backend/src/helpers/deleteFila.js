const AWS = require("aws-sdk");

const s3 = new AWS.S3();

const defleteFile = async (key) => {
  AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: key,
  };

  try {
    return await s3.deleteObject(params).promise();
  } catch (error) {
    throw new Error(error, 5000);
  }
};
module.exports = { defleteFile };
