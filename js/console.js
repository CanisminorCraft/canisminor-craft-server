module.exports = function (str) {
    var str = str.split(/\[(.*)\]:\s/);
    var sHead = str[1],
        sContent = str[2];
    if (sContent) {
        console.log(fHead(sHead) + fContent(sContent))
    }
}

function fHead(str) {
    var string = "",
        sTime = "[" + str.split(" ")[0] + "] ",
        sType = str.split(" ")[1]
    if (sType == "ERROR") {
        string = sTime.red + "✖ ".red
    }
    else if (sType == "WARN") {
        string = sTime.orange + "⊙ ".orange
    }
    else {
        string = sTime.grey
    }
    return string
}


function fContent(str) {
    var string = str;
    string = string.replace(/(-|v|:|\.|\s)([0-9]+)(s|ms|%|)/g, (m0,m1,m2,m3) => m1.purple + m2.purple + m3.red);
    string = string.replace(/('(.*?)'|"(.*?)")/g, (m0) => m0.yellow);
    string = string.replace(/\[(.*?)\]/, (m0) => m0.blue );
    string = string.replace(/\((.*?)\)/g, (m0) => m0.purple );
    string = string.replace(/^\/(.*?):/, (m0) => m0.green );
    return string
}