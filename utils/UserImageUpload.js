import multer from "multer";
 
const storage=multer.memoryStorage()

const UserImageUpload=multer({storage})

export default UserImageUpload