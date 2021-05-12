const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebExtWebpackPlugin = require('web-ext-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');

// Look for a --firefox <path> argument
const firefoxIndex = process.argv.indexOf('--firefox');
const firefox =
    firefoxIndex !== -1 && firefoxIndex < process.argv.length - 1
        ? process.argv[firefoxIndex + 1]
        : undefined;

const firefoxProfileIndex = process.argv.indexOf('--firefoxProfile');
const firefoxProfile =
    firefoxProfileIndex !== -1 && firefoxProfileIndex < process.argv.length - 1
        ? process.argv[firefoxProfileIndex + 1]
        : undefined;

const commonConfig = {
    mode: 'production',
    context: path.resolve(__dirname, './src'),
    module: {
        rules: [
            {
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader","postcss-loader"]
            },
            {
                test: /\.(scss|sass)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "assets/images/"
                    }
                }
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {from: './_locales/', to: './_locales/'},
                {from: './assets/images/', to: './assets/images/[name].[ext]'},
                {from: './assets/sass/app.css*', to: './assets/css/[name].[ext]'}
            ]
        }),
    ],
}

const commonExtConfig = {
    ...commonConfig,
    entry: {
        'manifest.json': './manifest.json.src',
        'content': './assets/ts/app.ts',
        'background': './assets/ts/background.ts',
    }
};

const firefoxConfig = {
    ...commonExtConfig,
    module: {
        rules: [
            ...commonExtConfig.module.rules,
            {
                type: 'javascript/auto',
                test: /\.src$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name]"
                        }
                    }, {
                        loader: 'webpack-preprocessor-loader',
                        options: {
                            params: {
                                browser_specific_settings: true,
                                supports_svg_icons: true,
                                supports_browser_style: true,
                            },
                            verbose: false,
                        },
                    },
                ]
            },
            {
                test: /\.ts$/,
                use: ['ts-loader', {
                    loader: 'webpack-preprocessor-loader',
                    options: {
                        params: {
                            ENV: 'production',
                            debug: false,
                        },
                        verbose: false,
                    },
                },],
                exclude: /node_modules/,
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist-firefox'),
        filename: 'assets/js/[name].js',
    },
    plugins: [
        ...commonExtConfig.plugins,
        new WebExtWebpackPlugin({
            sourceDir: path.resolve(__dirname, 'dist-firefox'),
            firefox,
            firefoxProfile,
        }),
        new JavaScriptObfuscator({
            rotateStringArray: true
        })
    ],
};

const chromeConfig = {
    ...commonExtConfig,
    module: {
        rules: [
            ...commonExtConfig.module.rules,
            {
                type: 'javascript/auto',
                test: /\.src$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name]"
                        }
                    }, {
                        loader: 'webpack-preprocessor-loader',
                        options: {
                            params: {
                                browser_specific_settings: false,
                                supports_svg_icons: false,
                                supports_browser_style: true,
                            },
                            verbose: false,
                        },
                    },
                ]
            },
            {
                test: /\.ts$/,
                use: ['ts-loader', {
                    loader: 'webpack-preprocessor-loader',
                    options: {
                        params: {
                            ENV: 'production',
                            debug: false,
                        },
                        verbose: false,
                    },
                },],
                exclude: /node_modules/,
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist-chrome'),
        filename: 'assets/js/[name].js',
    },
    plugins: [
        ...commonExtConfig.plugins,
        new JavaScriptObfuscator({
            rotateStringArray: true
        })
    ],
};

const testConfig = {
    ...commonExtConfig,
    name: 'tests',
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            ...commonExtConfig.module.rules,
            {
                type: 'javascript/auto',
                test: /\.src$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name]"
                        }
                    }, {
                        loader: 'webpack-preprocessor-loader',
                        options: {
                            params: {
                                browser_specific_settings: false,
                                supports_svg_icons: false,
                                supports_browser_style: true,
                            },
                            verbose: false,
                        },
                    },
                ]
            },
            {
                test: /\.ts$/,
                use: ['ts-loader', {
                    loader: 'webpack-preprocessor-loader',
                    options: {
                        params: {
                            ENV: 'development',
                            debug: true,
                        },
                        verbose: false,
                    },
                },],
                exclude: /node_modules/,
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, './tests'),
        filename: 'assets/js/[name].js'
    },
}

module.exports = (env, argv) => {
    let configs = [testConfig]
    if (env && env.target === 'chrome') {
        configs.push({...chromeConfig, name: 'extension'})
    } else {
        configs.push({...firefoxConfig, name: 'extension'})
    }

    return configs;
};