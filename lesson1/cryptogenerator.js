const bcrypto = require('crypto');

const randomBytes = bcrypto.randomBytes(64).toString('hex');
console.log(randomBytes);
