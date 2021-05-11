const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEVELOPMENT_MODE = 'development';
const PRODUCTION_MODE = 'production';
const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === PRODUCTION_MODE;

const SRC_PATH = path.join(__dirname, './src');
const DIST_PATH = path.join(__dirname, './build');

module.exports = {
  context: SRC_PATH,
  entry: ['react-hot-loader/patch', './index.tsx'],
  output: {
    filename: 'js/app.bundle.js',
    publicPath: '/',
    path: DIST_PATH,
  },
  mode: isProduction ? PRODUCTION_MODE : DEVELOPMENT_MODE,
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    mainFields: ['module', 'browser', 'main'],
    alias: {
      '~': path.resolve(__dirname, SRC_PATH),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          !isProduction && {
            loader: 'babel-loader',
            options: { plugins: ['react-hot-loader/babel'] },
          },
          'awesome-typescript-loader',
        ].filter(Boolean),
      },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.p?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isProduction ? '[hash:base64:5]' : '[local]__[hash:base64:5]',
              },
              sourceMap: !isProduction,
              importLoaders: 1,
            },
          },
          'postcss-loader'
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'S30',
      template: `${__dirname}/template.html`,
      filename: 'index.html',
    }),
  ],
};
