// 'use strict';

// const fs = require('fs');
// const { exec } = require('child_process');
// let rawdata = fs.readFileSync('host.config.json');
// let hostConfig = JSON.parse(rawdata);
// console.log(hostConfig);

// if (fs.existsSync(hostConfig.path)) {
//   console.log('Host Directory exists!');
//   let symlinks = hostConfig.symlinks;
//   console.log(symlinks);
//   symlinks.forEach((pkg) => {
//     const cmd = `npm link ${hostConfig.path}/node_modules/${pkg}`;
//     console.log(cmd);
//     exec(cmd, (error, stdout, stderr) => {
//       if (error) {
//         console.error(`error: ${error.message}`);
//         return;
//       }

//       if (stderr) {
//         console.error(`stderr: ${stderr}`);
//         return;
//       }

//       console.log(`stdout:\n${stdout}`);
//     });
//   });
// } else {
//   console.log('Host Directory not found.');
//   return;
// }
