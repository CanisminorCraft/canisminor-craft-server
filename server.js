const ScriptServer = require('scriptserver');
const colors = require('colors');
const server = new ScriptServer();

colors.setTheme({
    grey: 'grey',
    purple: 'cyan',
    red: 'red',
    green: 'green',
    blue: 'blue',
    yellow: 'yellow',
    orange: 'magenta'
});

server.on('console', function (log) {
    var str = log.split(/\[(.*)\]:\s/);
    var sHead = str[1],
        sContent = str[2];
    if (sContent) {
        console.log(fHead(sHead) + fContent(sContent))
    }
});

function fHead(str) {
    var string = "",
        sTime = "[" + str.split(" ")[0] + "] ",
        sType = str.split(" ")[1]
    if (sType == "ERROR") {
        string = sTime.red + "✖ ".red
    }
    else if (sType == "WARN") {
        string = sTime.yellow + "⊙ ".orange
    }
    else {
        string = sTime.grey
    }
    return string
}


function fContent(str) {
    var string = str.replace(/\[(.*?)\](.*)/, function (m0, m1, m2) {
        return "[" + m1.blue + "]" + m2;
    });
    string = string.replace(/\s(|\-)+[0-9]+\.?[0-9]+/g, (m0) => m0.purple);
    string = string.replace(/('(.*?)'|"(.*?)")/g, (m0) => m0.yellow);
    return string
}


server.start('spigot-1.11.jar', ['-Xmx831M', '-Xms512M', '-XX:+AggressiveOpts', '-XX:+UseCompressedOops']);

