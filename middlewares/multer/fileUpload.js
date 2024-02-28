const multer = require("multer");

const upload = () => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "images");
        },
        filename: function (req, file, cb) {
            const num = Math.floor(Math.random() * 1e9);
            // Extracting file extension
                const uniqueFilename =file.fieldname + num + file.originalname;
            cb(null, uniqueFilename);
        },
    });

    return multer({ storage: storage }).single('image');
};

module.exports = upload;
