const ScriptServer = require('scriptserver'),
    colors = require('colors'),
    config = require('./config.js'),
    colorsConsole = require('./js/console.js')

const server = new ScriptServer();

colors.setTheme(config.color);

server.on('console', function (str) {
    colorsConsole(str)
});

server.start(config.jar, config.javaConfig);

