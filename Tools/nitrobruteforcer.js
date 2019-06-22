const request = require('request');
const logger = require('./logger.js');
const fs = require('fs');
const triesPerSecond = 0.25;
var working = [];
getGiftCode = function() {
    let _0xf876x6 = '';
    let _0xf876x7 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (var _0xf876x8 = 0; _0xf876x8 < 18; _0xf876x8++) {
        _0xf876x6 = _0xf876x6 + _0xf876x7['charAt'](Math['floor'](Math['random']() * _0xf876x7['length']))
    };
    return _0xf876x6
};
checkCode = function(_0xf876x6) {
    request(('https://discordapp.com/api/v6/entitlements/gift-codes/' + _0xf876x6 + '?with_application=false&with_subscription_plan=true'), (_0xf876x9, _0xf876xa, _0xf876xb) => {
        if (_0xf876x9) {
            logger['error']('An error occurred:');
            logger['error'](_0xf876x9);
            return
        };
        try {
            _0xf876xb = JSON['parse'](_0xf876xb);
            if (_0xf876xb['message'] != 'Unknown Gift Code' && _0xf876xb['message'] != 'You are being rate limited.') {
                logger['info'](('FOUND CODE THAT WORKS: https://discord.gift/' + _0xf876x6 + ''));
                console['log'](JSON['stringify'](_0xf876xb, null, 4));
                working['push'](('https://discord.gift/' + _0xf876x6 + ''));
                fs['writeFileSync'](__dirname + '/codes.json', JSON['stringify'](working, null, 4))
            } else {
                logger['info'](('' + _0xf876x6 + ' : Searching!'))
            }
        } catch (_0xf876x9) {
            logger['error']('An error occurred:');
            logger['error'](_0xf876x9);
            return
        }
    })
};
logger['info']('BruteForcing.....');
logger['info']('\x0A\x0A\x0A\x0A\x0ABruteForcing Discord Nitro Now ..\x0A\x0A\x0A\x0A\x0A\x0AConnection with discord.\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0AIf you find a working code it will show you a code found');
checkCode(getGiftCode());
setInterval(() => {
    checkCode(getGiftCode())
}, (5 / triesPerSecond) * 50)