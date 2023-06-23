import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import path from "path";
import { buildPlugins } from "./buildPlugins";
import { buildResolves } from "./buildResolves";
import { buildLoaders } from "./buildLoaders";

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { paths, mode } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolves(),
    };
}
