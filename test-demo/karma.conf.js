// Karma configuration
// Generated on Sat Aug 26 2017 20:31:19 GMT+0800 (中国标准时间)

module.exports = function(config) {
    config.set({
        // 将用于解析所有模式的基本路径（例如，文件，排除）ps: 修改它会影响files和exclude路径，没有特殊需求默认就行。
        basePath: '',
        // 选择测试框架我们选的‘jasmine’ 可以在这里去找更多相关的框架 https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        // 在浏览器中加载的匹配的文件列表 就是我们的第4步
        files: [
            'src/**/*.spec.js'
        ],
        // 要排除的文件列表 就是我们的第5步
        exclude: [],
        // 在将其提供给浏览器之前，预处理匹配的文件， 可用的预处理器 https://npmjs.org/browse/keyword/karma-preprocessor
        // 测试文件需要处理一下，各框架和库都不一样，可以在链接中找到你对应的框架的处理器
        // key是文件夹路径，也是就files的路径，value是一个数组，也就是预处理器集合
        preprocessors: {
            'src/**/*.spec.js': ['webpack', 'sourcemap']
        },
        // webpack配置 不需要入口(entry)和输出(output)配置
        webpack: {
            devtool: 'inline-source-map',
            module: {
                rules: [{
                    test: /\.js$/,
                    use: {
                        loader: 'istanbul-instrumenter-loader',
                        options: { esModules: true }
                    },
                    enforce: 'pre',
                    exclude: /node_modules|\.spec\.js$/,
                }, {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'],
                            plugins: ['istanbul']
                        }
                    },
                    exclude: /node_modules/
                }]
            }
        },
        // 依赖插件
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-coverage-istanbul-reporter'
        ],
        // 怎么显示测试结果 测试结果显示插件https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['coverage-istanbul'],
        // 配置覆盖率报告的查看方式配置
        coverageIstanbulReporter: {
            // 可以用什么形式展示 支持以下格式：clover、cobertura、html、json-summary、json、lcov、lcovonly、none、teamcity、text-lcov、text-summary、text
            // 可以看连接 : https://github.com/istanbuljs/istanbul-reports/tree/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib
            reports: ['html', 'text-summary'],
            // 结果存放的位置
            dir: 'coverage/',
            // 如果使用webpack和预加载器，可以绕过webpack打破源路径
            fixWebpackSourcePaths: true,
            // 停止输出消息，如`File [$ {filename}]忽略，没有任何东西可以映射
            skipFilesWithNoCoverage: true,
            // 大多数记录接受额外的配置选项。 你可以通过`report-config`选项传递这些
            'report-config': {
                // 配置html
                html: {
                    // 输出到 ./coverage/html
                    subdir: 'html'
                }
            }
        },
        // 运行的服务端口，可以自己修改
        port: 9876,
        // 在输出中启用/禁用颜色（记录(reporters)和日志(logs)） 肯定需要看到运行的结果，不然出错了也不好调试
        colors: true,
        // 显示日志记录的级别 （默认就好）
        // 可能的值： config.LOG_DISABLE （禁用） || config.LOG_ERROR （错误） || config.LOG_WARN （警告）|| config.LOG_INFO （信息）|| config.LOG_DEBUG （调试）
        logLevel: config.LOG_INFO,
        // 每当任何测试文件更改时，启用/禁用监听文件并执行测试  这就是第6步
        autoWatch: true,
        // 可以启动的浏览器列表 需要去下载对应的启动插件 https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],
        // 持续集成模式 如果是，Karma启动浏览器，运行测试并退出 默认就好，设true你会后悔的。
        singleRun: false,
        // 并发级别 可以同时启动多少浏览器 默认无限大
        concurrency: Infinity
    })
}
