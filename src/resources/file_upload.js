
var multer  = require('multer');
var logger = require('winston');

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname + '-' + Date.now());
  }
});


var upload = multer({ storage : storage}).single('userPhoto');  

var uploadFile =function(req,res){
  upload(req,res,function(err) {
    if(err) {
      logger.error("Failed to upload file due to: ", err);
      return res.end("Error uploading file.");
    }
    logger.info("File upload is successful");
    res.end("File is uploaded");
  });
}


exports.uploadFile = uploadFile