import connection from '../Database.js';

const UploadImage = (req, res) => {
    const AllowedFileTypes = ['image/png', 'image/jpg', 'image/jpeg'];

    // Check if a file was uploaded
    if (!req.file) {
        return res.redirect('/user/EditProfile?res=Please%Select%Correct%File');
    }

    const username = req.userdata.username;

    // Check if the file type is allowed
    if (!AllowedFileTypes.includes(req.file.mimetype)) {
        return res.redirect('/user/EditProfile?res=File%Type%Not%Allowed');
    }

    const profileimage = req.file.buffer;

    const query = `UPDATE users SET profileimage=? WHERE username=?`;
    connection.query(query, [profileimage, username], (err, result) => {
        if (err) {
            console.log('Database error:', err);
            return res.status(500).send('Please try again');
        }

        if (result.affectedRows === 0) {
            console.log('User not found');
            return res.status(404).send('User not found, please try again later');
        }

        res.redirect('/user/EditProfile?res=Image Upload Successfully');
    });
};

export default UploadImage;
