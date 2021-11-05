const multer = require('multer');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './tmp/files/avatars')
    },
    filename: function (req, file, cb) {
        cb(null , `${file.fieldname}-${Date.now()}`)
    }
})
   
var upload = multer({ storage })

module.exports = upload;