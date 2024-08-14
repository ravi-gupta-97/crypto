const jwt = require('jsonwebtoken');
const jwtKey = 'ddfninskvfjvnfsivkfsvdsfdbf';

function generateToken(data, key) {
    jwt.sign(data, key, {
        expiresIn: '1d'
    }, (err, token) => {
        if (err) {
            console.log(err);
        }
        console.log(token);
    })
};

const data = {
    "id": "121",
    "name": "frisson"
};
generateToken(data, jwtKey);


function decodeToken(token, key) {
    jwt.verify(token, key, (err, data) => {
        if (err)
            console.log(err);
        console.log(data);
    })
}
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMSIsIm5hbWUiOiJmcmlzc29uIiwiaWF0IjoxNzIzNjEyNDIzLCJleHAiOjE3MjM2OTg4MjN9.vCphqJ_0vVDtpopTx09OQLyuP4fwG5qGXLIbQqJmjb8'
decodeToken(token, jwtKey);
