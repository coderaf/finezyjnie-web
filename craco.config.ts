import cracoBabelLoader from 'craco-babel-loader';

const cracoConfig = {
  plugins: [
    {
      plugin: cracoBabelLoader,
      options: {
        includes: [],
      },
    },
  ],
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
};

export default cracoConfig;
