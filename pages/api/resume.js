// import AWS from 'aws-sdk';

// export default async function handler(req, res) {
//   const { file } = req.query;

//   const s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION,
//   });

//   const s3Params = {
//     Bucket: process.env.AWS_S3_BUCKET_NAME,
//     Key: process.env.AWS_FILE_KEY,
//   };

//   const s3Stream = s3.getObject(s3Params).createReadStream();
//   res.setHeader('Content-Type', 'application/pdf');
//   s3Stream.pipe(res);
// }
import { S3 } from 'aws-sdk';
import { createReadStream } from 'fs';
import { createServer } from 'http';

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export default async function handler(req, res) {
  try {
    const { Key } = req.query;

    const s3Stream = s3.getObject({ Bucket: 'ryansitefiles', Key: 'RyanJacobsonResume.pdf' }).createReadStream();

    res.setHeader('Content-Disposition', `inline; filename=RyanJacobsonResume.pdf`);
    res.setHeader('Content-Type', 'application/pdf');

    s3Stream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}


