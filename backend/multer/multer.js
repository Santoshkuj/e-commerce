import multer from "multer";
import path from 'path'

const uploads = multer({
    dest: 'upload/',
    limits: 1024 * 1024 * 5,
    storage: multer.diskStorage({
        destination : function(req,file,cb){
            cb(null,'upload/')
        },
        filename : function(req,file,cb) {
            cb(null,Date.now()+file.originalname)
        }
    }),
    fileFilter : function(req,file,cb) {
        const fileTypes = /jpeg|jpg|png|gif/
        let extname = fileTypes.test(path.extname(file.originalname))
        if(extname){
            cb(null,true)
        }else{
            cb(new Error('unsupported file type'+extname, false))
            return;
        }
    }
})

export default uploads;