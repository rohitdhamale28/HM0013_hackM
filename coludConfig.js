const cloudinary= require('cloudinary').v2;
const { CloudinaryStorage}= require('multer-storage-cloudinary');


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});


// copied from npm 
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'wanderlust_DEV',//add folder name
    //   format: async (req, file) => 'png', // supports promises as well
    allowerdFormats: ["png","jpg","jpeg"],

    },
  });

module.exports ={
    cloudinary,
    storage,
};