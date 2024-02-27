import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const paths = {
  src: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'dist'),
};

export const webpackConfig = (isMode) => {
  return {
    entry: {
      main: path.join(paths.src, 'js/main.js'),
      art: path.join(paths.src, 'js/art.js'),
      custom: path.join(paths.src, 'js/custom.js'),
      oneArt: path.join(paths.src, 'js/oneArt.js'),
      become: path.join(paths.src, 'js/become.js'),
      pay: path.join(paths.src, 'js/pay.js'),
      authorization: path.join(paths.src, 'js/authorization.js'),
      nft: path.join(paths.src, 'js/nft.js'),
      pricing: path.join(paths.src, 'js/pricing.js'),
      auction: path.join(paths.src, 'js/auction.js'),
      school: path.join(paths.src, 'js/school.js'),
      forum: path.join(paths.src, 'js/forum.js'),
      client: path.join(paths.src, 'js/client.js'),
      app: path.join(paths.src, 'js/app.js'),
    },
export const webpackConfig = isMode => {
    return {
        entry: {
            main: path.join(paths.src, 'js/main.js'),
            art: path.join(paths.src, 'js/art.js'),
            custom: path.join(paths.src, 'js/custom.js'),
            oneArt: path.join(paths.src, 'js/oneArt.js'),
            become: path.join(paths.src, 'js/become.js'),
            pay: path.join(paths.src, 'js/pay.js'),
            authorization: path.join(paths.src, 'js/authorization.js'),
            nft: path.join(paths.src, 'js/nft.js'),
            pricing: path.join(paths.src, 'js/pricing.js'),
            auction: path.join(paths.src, 'js/auction.js'),
            school: path.join(paths.src, 'js/school.js'),
            forOwner : path.join(paths.src, 'js/forOwner.js'),
            forum: path.join(paths.src, 'js/forum.js'),
            client: path.join(paths.src, 'js/client.js'),
            app: path.join(paths.src, 'js/app.js'),
        },

    mode: isMode ? 'development' : 'production',

    output: {
      path: path.join(paths.build, 'js'),
      filename: '[name].min.js',
      publicPath: '/',
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,

          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },

                    resolve: {
                        fullySpecified: false,
                    },
                },
            ],
        },
        devtool: isMode ? 'source-map' : 'cheap-source-map',
    };
};
