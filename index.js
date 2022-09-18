const fs = require('fs');
const http = require('https');
const csv = require('node-csv').createParser();

const transformer = require('./transformer');

async function main() {
  const input = process.argv[2];
  let isRequest = false;
  let filePath = '';
  
  if (!input) {
    throw new Error("Invalid url or path to file")
  }
  
  const URL_REGEX = /http(s)?:\/\/(.)+.csv/gi;
  try {
    if (URL_REGEX.test(input)) {
      await makeRequest(input);
      isRequest = true;
    }
  } catch {
    throw new Error("Request csv file failed please try again or check that URL is valid")  
  }
  
  filePath = isRequest === true ? "./file.csv" : input;
  
  csv.parseFile(filePath, function(err, data) {
    if (err) {
      throw new Error("CSV file could't be processed")
    }
    console.log(data);
    const result = data.map(row => row.map(transformer));
    console.log(result);
  });
}

function makeRequest(input) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream("file.csv");
      http.get(input, function(response) {
        if (response.statusCode === 500 || response.statusCode === 404 ) {
          reject();
        }
        response.pipe(file);
        file.on("finish", () => {
            file.close();
            resolve(null);
        });
      });
  })
}

main();