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
const tuling = {
    host: 'www.tuling123.com',
    port: 80,
    path: '/openapi/api',
    method: 'POST',
    rejectUnauthorized: false,
    headers: {
        "Content-Type": 'application/x-www-form-urlencoded',
    }
};

module.exports = {
    javaConfig: javaConfig,
    jar: jar,
    color: color,
    tuling:tuling
};