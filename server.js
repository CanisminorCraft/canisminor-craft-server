const ScriptServer = require('scriptserver'),
    colors = require('colors'),
    config = require('./config.js'),
    colorsConsole = require('./js/console.js'),
    querystring = require('querystring'),
    http = require('http');

const server = new ScriptServer();

colors.setTheme(config.color);

server.on('console', function (str) {
    colorsConsole(str)
    const chat = str.match(/]: <([\w]+)>(.*)/);
    if (chat) {
        var req = http.request(config.tuling, function (res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                var text = JSON.parse(chunk).text
                server.send(`say ` + text)
            });
        });
        req.write(
            querystring.stringify({
                key: '2f33e9e0d89391a29c595283995aa9a1',
                info: chat[2],
                userid: chat[1]
            })
        );
        req.end();
    }
});

server.start(config.jar, config.javaConfig);

