const https = require('https');
//https://jsonmock.hackerrank.com/api/movies/search/?Title=hello
function movieQuery(substr) {
  return new Promise((resolve, reject) => {
    https
      .get(
        'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr,
        resp => {
          let data = '';
          resp.on('data', chunk => {
            data += chunk;
          });

          resp.on('end', () => {
            const dataObj = JSON.parse(data);
            const titles = dataObj.data.map(record => record.Title);
            resolve(titles);
          });
        }
      )
      .on('error', err => {
        reject(err);
      });
  });
}
movieQuery('earth').then(titles => {
  console.log(titles);
});
