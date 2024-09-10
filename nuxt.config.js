import path from 'path';

const setAlias = (localPath) => path.resolve(__dirname, localPath);

export default {
  devtools: { enabled: false },
  devServer: { port: '8080' },
  compatibilityDate: '2024-09-09',

  srcDir: './src',
  app: {
    baseURL: '/bsk',
    head: {
      title: 'Новости',
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1.0',
      htmlAttrs: { lang: 'ru' },
    },
  },

  modules: ['nuxt-vitalizer'],
  vitalizer: {
    disableStylesheets: 'entry',
  },

  postcss: {
    plugins: {
      'postcss-preset-env': {},
      'postcss-combine-media-query': {},
    },
  },

  alias: {
    '@images': setAlias('./src/assets/images'),
    '@icons': setAlias('./src/assets/icons'),
    '@styles': setAlias('./src/styles'),
    '@vars': setAlias('./src/styles/vars'),
    '@json': setAlias('./src/assets/json'),
  },
};
