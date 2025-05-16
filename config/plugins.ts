export default ({ env }) => {
  console.log('plugins.js loaded');
    console.log('🌐 CLOUDINARY_NAME:', env('CLOUDINARY_NAME'));
  return {
    upload: {
      config: {
        provider: '@strapi/provider-upload-cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
      },
    },
  };
};
