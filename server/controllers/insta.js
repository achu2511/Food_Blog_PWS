const fs = require('fs');
const { IgApiClient } = require('instagram-private-api');
function Insta(url){

    
    const ig = new IgApiClient();
const username = 'project__user';
const password = 'projectuser123';
const caption = 'test-1';
const imagePath = 'E:/projects/RecipeBlog-MongoDB-Node.js-main/public/uploads/'+url;

(async () => {
  // Login
  ig.state.generateDevice(username);
  await ig.account.login(username, password);
  try {
      // Read the image and get its dimensions
      const imageBuffer = await fs.promises.readFile(imagePath);
    const imageWidth = 1080;  // width must be a minimum of 320 pixels
    const imageHeight = 1080;  // height must be between 566 pixels and 1350 pixels

    // Upload the image
    const resizer = await ig.publish.photo({
      file: imageBuffer,
      width: imageWidth,
      height: imageHeight,
    });
    
    // Get the upload ID and media info
    const mediaUploadId = resizer.upload_id;
    const mediaInfo = {
        media_folder: 'Instagram',
        caption: caption,
        upload_id: mediaUploadId,
    };
    
    // Post the media
    await ig.publish.photo(mediaInfo);
    
    console.log('Media posted successfully!');
} catch (err) {
    console.error('Error:', err);
}
})();
}

module.exports=Insta;