export default () => ({
  server: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  lambda: {},
  cli: {},
  common: {
    storage: {
      type: 's3',
      mountPoint: process.env.S3_BUCKET_NAME,
      region: process.env.S3_REGION,
    },
  },
});
