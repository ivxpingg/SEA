module.exports = {
    "presets": [
        ['@babel/preset-env', {
            modules: false,
            useBuiltIns: 'usage',
            targets: [
                "> 1%",
                "last 2 versions",
                "not ie <= 8"
            ]
        }]
    ]
}