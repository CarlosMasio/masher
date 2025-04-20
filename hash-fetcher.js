const readline = require('readline');
const crypto = require('crypto');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('ENTER TEXT TO HASH: ', (inputText) => {
  const md5Hash = crypto.createHash('md5').update(inputText).digest('hex');
  const sha1Hash = crypto.createHash('sha1').update(inputText).digest('hex');

  console.log('\n--- HASH RESULTS ---');
  console.log('MD5 :', md5Hash);
  console.log('SHA1:', sha1Hash);

  rl.close();
});
