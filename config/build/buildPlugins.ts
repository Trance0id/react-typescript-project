import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack, { WebpackPluginInstance } from "webpack";
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {

    return [
        isDev && new ReactRefreshWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:B].css',
            chunkFilename: 'css/[name].[contenthash:B].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ].filter(Boolean);
}
