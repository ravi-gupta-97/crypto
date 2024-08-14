const crypto = require('crypto')

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
function encryption(data) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encryptedData = cipher.update(data, 'utf-8', 'hex');
    encryptedData += cipher.final('hex');
    return encryptedData;
}

function decryption(data) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decryptedData = decipher.update(data, 'hex', 'utf-8');
    decryptedData += decipher.final('utf-8');
    return decryptedData;
}

const data = 'frisson-devhub';
const encryptedData = encryption(data);
console.log({ encryptedData });

const decryptedData = decryption(encryptedData);
console.log({ decryptedData });

