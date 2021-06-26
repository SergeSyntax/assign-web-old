/* eslint-disable @typescript-eslint/no-var-requires */
const { generate, extend } = require('json-schema-faker');
const schema = require('./schema');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const faker = require('faker');

extend('faker', () => faker);
const data = JSON.stringify(generate(schema), 3);

console.log(JSON.stringify(generate(schema), null, 3));

fs.writeFile(path.resolve(__dirname, 'db.json'), data, err => {
  if (err) console.log(chalk.red(err));
  else console.log(chalk.green('Mock data generated.'));
});
