import alias from '@rollup/plugin-alias';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import multi from '@rollup/plugin-multi-entry';


// Rollup alias paths
const path = require('path');
const src = path.resolve(__dirname, './src');

// Babel config path
const babelConfig = path.resolve(__dirname, '.babelrc');

const plugins = [
  alias({
    entries: [
      { find: 'src', replacement: src }
    ]
  }),
  babel({
    babelHelpers: 'bundled',
    compact: true,
    exclude: 'node_modules/**'
  }),
  commonjs(),
  getBabelOutputPlugin({ configFile: babelConfig }),
  multi()
];

// Helper function to create config
const iconDirectory = directory => ({
  input: `src/icons/${directory}/*.js`,
  output: [{
    name: `default-icon-library-${directory}`,
    sourcemap: true,
    file: `dist/${directory}.js`,
    format: 'esm',
    globals: { react: 'React' }
  }],
  plugins
});

const config = [
  'regular',
  'solid'
].map(icons => iconDirectory(icons));

export default config;