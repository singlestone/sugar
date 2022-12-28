import { Config, ConfigFn } from "postcss-load-config";

const getEnvironmentSpecificPlugins = (
  environment: string | undefined
): Record<string, object> => {
  switch (environment) {
    case "production":
      return { cssnano: { preset: "default" } };
    default:
      return {};
  }
};

export const sugarPostcssPresetFn: ConfigFn = (ctx): Config => {
  const plugins: Record<string, object> = {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    ...getEnvironmentSpecificPlugins(ctx.env),
  };

  return {
    plugins,
  };
};
