const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
  // Example of generating multiple files
  {
    option: 'Create Module Hexagonal',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/hexagonal',
    },
    stringReplacers: ['__module__', '__entity__'],
    output: {
      path: './src/modules/__module__(kebabCase)',
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
    onComplete: (results) => {
      console.log(`results`, results);
    },
  },
  {
    option: 'Create Redux Store',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/',
    },
    stringReplacers: ['__store__', '__model__'],
    output: {
      path: './src/stores/__store__(kebabCase)',
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
    onComplete: (results) => {
      console.log(`results`, results);
    },
  },
  // Example of generating a single file
  {
    option: 'Create Redux Reduce',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/__store__Reducer.ts',
    },
    stringReplacers: ['__store__', '__model__'],
    output: {
      path: './src/stores/__store__/__store__(pascalCase)Reducer.ts',
      pathAndFileNameDefaultCase: '(kebabCase)',
    },
  },
]);