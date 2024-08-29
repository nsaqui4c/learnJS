const crypto = require('crypto');

function sha256Hash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

const hash = sha256Hash('61B177A1-C9FC-4FED-B599-66BB9A11060F');
console.log(hash); // Outputs the SHA-256 hash of the string "Hello, World!"
