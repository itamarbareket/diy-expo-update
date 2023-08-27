/* eslint-disable @typescript-eslint/no-var-requires */
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (options) => {
  return {
    ...options,
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            keep_classnames: true,
          },
        }),
      ],
    },
    output: {
      ...options.output,
      library: {
        ...options.library,
        type: 'commonjs2',
      },
    },
  };
};
