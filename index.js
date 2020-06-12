const fs = require('fs');
const folders = ['./icons/svg/brands', './icons/svg/regular', './icons/svg/solid'];

// Method to clean up SVG 'strings'
const add = string => {

  return string
    .replace(/<\?xml (.*?)\?>/g, '')
    .replace(/<!DOCTYPE(.*?)>/g, '')
    .replace(/PUBLIC "(.*?)"/g, '')
    .replace(/width="(.*?)"/g, '')
    .replace(/height="(.*?)"/g, '')
    .replace(/id="(.*?)"/g, '')
    .replace(/class="(.*?)"/g, '')
    .replace(/fill="(.*?)"/g, '')
    .replace(/opacity="(.*?)"/g, '')
    .replace(/stroke="(.*?)"/g, '')
    .replace(/stroke-width="(.*?)"/g, '')
    .replace(/<g >/g, '<g>')
    .replace(/path {3}/g, 'path ')
    .replace(/path /g, 'path fill="currentColor" stroke="currentColor" stroke-width="1" ')
    .replace(/svg {3}/g, 'svg ')
    .replace(/svg /g, 'svg fill="currentColor" ')
    .replace(/(\r\n)+|\r+|\n+|\t+/igm, '')
    .replace(/"/g, "'")

    // Allow for prop drilling
    .replace(/<svg(.*)>/, instance => instance.replace('>', ' { ...props }>'));
};

const createMultipleFiles = (names, folder) => {
  names.forEach(name => {
    let svg = fs.readFileSync(`${folder}/${name.originalFileName}`, { encoding: 'utf8' });

    // Fix slight top cut off on the emoji icons
    if(name.componentName.toUpperCase().includes('EMOJI'))
      svg = svg.replace(/viewBox="(.*?)"/g, 'viewBox="-5 -5 210 210"');

    // Template for component
    const component = 'import React from \'react\';' + '\n\n' +
    add(`export const ${add(name.componentName)}Icon = props => {`) + '\n' +
    '  return (' + '\n' +
    `    ${add(svg)}` + '\n' +
    '  );' + '\n' +
    '};';

    if(name.originalFileName.includes('.svg')) {
      const directory = folder.split('/').reverse()[0];

      // If output directory doesn't exist, create one
      if(!fs.existsSync('./src')) fs.mkdirSync('./src');
      if(!fs.existsSync('./src/icons')) fs.mkdirSync('./src/icons');
      if(!fs.existsSync(`./src/icons/${directory}`)) fs.mkdirSync(`./src/icons/${directory}`);

      // Write component to output directory
      fs.writeFileSync(add(`./src/icons/${directory}/${name.newFileName}Icon.js`), component);
    }

  });
};

// Convert text with dashes into PascalCase
const pascalCased = string => {
  return string.charAt(0).toUpperCase() +
  string.replace(/-([a-z])/g, letters => letters[1].toUpperCase()).slice(1);
};

// Determine option for single or multiple files
// const option = process.argv[2];
folders.forEach(folder => {

  // Determine filename, new filename, and component name
  const files = fs.readdirSync(folder).reduce((accumulator, file) => {
    return [
      ...accumulator,
      {
        originalFileName: file,
        newFileName: pascalCased(file).replace('.svg', ''),
        componentName: pascalCased(file).replace('.svg', '')
      }
    ];
  }, []);

  createMultipleFiles(files, folder);
});