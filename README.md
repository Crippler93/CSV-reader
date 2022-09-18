# CSV READER

CSV Reader is a CLI Project made with NodeJS and **node-csv** that reads a local CSV or process a URL pointing to a CSV file.

## Instructions

1. In the root directory please execute in your console

```
npm i
```

to install all dependencies.

2. To run the cli execute

```
TO PROCESS A LOCAL CSV
npm run start -- ./sample.csv
TO PROCESS A CSV URL
npm run start -- https://sample-videos.com/csv/Sample-Spreadsheet-10-rows.csv
```

The result will be processed in the console 😎.

### Change transformer function

CSV Reader has a transform function that will be executed in each value of the CSV. You can modify this function to create new output of your CSV, the function is in **./tranformer.js** file.

## Pros and cons

#### Pros
- Easy to understand.
- Less dependencies.

#### Cons
- Doesn't have a way to input transformer function.
- Interface is simple.

## Technologies

CLI
- Versatile and easy to make

NodeJS
- Built in packages to handle requests/files and offers a lot of packages with npm.

node-csv
- Process CSV files, compatible with CommonJS modules.