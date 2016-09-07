cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-touchid.TouchID",
        "file": "plugins/cordova-plugin-touchid/www/touchid.js",
        "pluginId": "cordova-plugin-touchid",
        "clobbers": [
            "touchid"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-touchid": "0.3.1"
};
// BOTTOM OF METADATA
});