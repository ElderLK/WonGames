module.exports = {
  stories: [
    '../src/components/**/**.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  },
  framework: '@storybook/react'
};
