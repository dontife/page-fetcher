const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2);

console.log(args);
const fetcher = (() => {
request(`${args[0]}`, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode: ', response && response.statusCode);
  console.log('body:', body);

  fs.writeFile(`${args[1]}`, body , err =>{
    if (err){
      console.error(err);
    }

    fs.stat('./index.html', (err, stats) => {
      if (err) {
          console.log(`File doesn't exist.`);
      } else {
          console.log(stats);
          const size  = stats.size;
          console.log(`Downloaded and saved ${size} bytes to ./index.html`)
      }
    });
  });
})

});

fetcher();

