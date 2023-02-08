import { StorybookConfig } from "@storybook/html-vite";

const config: StorybookConfig = {
  stories: [
    "../../tailwind-plugin-buttons/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../../tailwind-plugin-form/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};

export default config;
