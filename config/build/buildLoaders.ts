import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import loader from 'mini-css-extract-plugin/types/loader';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.scss')),
                        localIdentName: options.isDev
                            ? '[path][name]__[local]--[hash:base64:8]'
                            : '[hash:base64:8]',
                    }
                },

            },
            'sass-loader',
        ]
    };

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [typeScriptLoader, cssLoader];
}
