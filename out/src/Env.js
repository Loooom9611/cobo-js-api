"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROD = exports.DEV = exports.Env = void 0;
var Env = /** @class */ (function () {
    function Env(host, coboPub) {
        this.host = host;
        this.coboPub = coboPub;
    }
    return Env;
}());
exports.Env = Env;
exports.DEV = new Env("https://api.dev.cobo.com", "03596da539963fb1dd29d5859e25903eb76b9f7ed2d58516e29c9f80c201ff2c1b");
exports.PROD = new Env("https://api.custody.cobo.com", "02c3e5bacf436fbf4da78597e791579f022a2e85073ae36c54a361ff97f2811376");
