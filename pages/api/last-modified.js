import AWS from 'aws-sdk';

export default async function handler(req, res) {
  // Initialize the S3 client
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  // Get the last modified value of the S3 object
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: process.env.AWS_FILE_KEY,
  };
  
  try {
    const response = await s3.headObject(params).promise();
    const lastModified = response.LastModified;
    res.status(200).json({ lastModified });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting S3 object last modified value' });
  }
}

