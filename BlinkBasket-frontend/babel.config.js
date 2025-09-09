export default {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }], // for Jest/node
    '@babel/preset-react' // enable JSX support
  ],
};