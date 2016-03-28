module.exports = {
  entry: {
    jst: ['./src/index.js'],
  },
  output: {
    filename: './lib/[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    preLoaders: [
      { test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/,
      },
    ],
  },
};
