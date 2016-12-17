const jar = 'spigot-1.11.jar';
const javaConfig = ['-Xmx831M', '-Xms512M', '-XX:+AggressiveOpts', '-XX:+UseCompressedOops']
const color = {
    grey: 'grey',
    purple: 'cyan',
    red: 'red',
    green: 'green',
    blue: 'blue',
    yellow: 'yellow',
    orange: 'magenta'
}

module.exports = {
    javaConfig: javaConfig,
    jar: jar,
    color: color
};