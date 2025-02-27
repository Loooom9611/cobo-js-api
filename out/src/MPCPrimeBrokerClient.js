"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MPCPrimeBrokerClient = void 0;
var node_fetch_1 = __importDefault(require("node-fetch"));
var LocalSigner_1 = require("./LocalSigner");
var url_1 = require("url");
var MPCPrimeBrokerClient = /** @class */ (function () {
    /***
     *
     * @param signer api signer
     * @param env DEV or PROD
     * @param debug
     */
    function MPCPrimeBrokerClient(signer, env, debug) {
        var _this = this;
        if (debug === void 0) { debug = false; }
        this.CreateBinding = function (user_id) {
            var params = { "user_id": user_id };
            return _this.coboFetch("POST", "/v1/custody/guard/create_binding/", params);
        };
        this.QueryBinding = function (binder_id) {
            var params = { "binder_id": binder_id };
            return _this.coboFetch("GET", "/v1/custody/guard/query_binding/", params);
        };
        this.QueryUserAuth = function (user_id) {
            var params = { "user_id": user_id };
            return _this.coboFetch("GET", "/v1/custody/guard/query_user_auth/", params);
        };
        this.BindAddresses = function (user_id, addresses) {
            var params = { "user_id": user_id, "addresses": addresses };
            return _this.coboFetch("POST", "/v1/custody/guard/bind_addresses/", params);
        };
        this.ChangeBinding = function (user_id) {
            var params = { "user_id": user_id };
            return _this.coboFetch("POST", "/v1/custody/guard/change_binding/", params);
        };
        this.UnbindBinding = function (user_id) {
            var params = { "user_id": user_id };
            return _this.coboFetch("POST", "/v1/custody/guard/unbind_binding/", params);
        };
        this.QueryStatement = function (statement_id) {
            var params = { "statement_id": statement_id };
            return _this.coboFetch("GET", "/v1/custody/guard/query_statement/", params);
        };
        this.coboFetch = function (method, path, params) { return __awaiter(_this, void 0, void 0, function () {
            var nonce, sort_params, content, headers, response, url, urlParams, k, ts, sig, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nonce = String(new Date().getTime());
                        sort_params = Object.keys(params).sort().map(function (k) {
                            return k + '=' + encodeURIComponent(params[k]).replace(/%20/g, "+");
                        }).join('&');
                        content = [method, path, nonce, sort_params].join('|');
                        headers = {
                            'Biz-Api-Key': this.apiKey,
                            'Biz-Api-Nonce': nonce,
                            'Biz-Api-Signature': this.signer.sign(content)
                        };
                        if (this.debug) {
                            console.log("request >>>>>>>> \nmethod:", method, "\npath:", path, "\ncontent:", content, "\nheaders:", headers);
                        }
                        if (!(method == 'GET')) return [3 /*break*/, 2];
                        url = this.host + path + '?' + sort_params;
                        return [4 /*yield*/, node_fetch_1.default(url, {
                                headers: headers,
                                method: "GET"
                            })];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(method == 'POST')) return [3 /*break*/, 4];
                        urlParams = new url_1.URLSearchParams();
                        for (k in params) {
                            if (params.hasOwnProperty(k)) {
                                urlParams.append(k, params[k]);
                            }
                        }
                        return [4 /*yield*/, node_fetch_1.default(this.host + path, {
                                method: method,
                                headers: headers,
                                body: urlParams
                            })];
                    case 3:
                        response = _a.sent();
                        return [3 /*break*/, 5];
                    case 4: throw "unexpected method " + method;
                    case 5:
                        ts = response.headers.get("BIZ_TIMESTAMP");
                        sig = response.headers.get("BIZ_RESP_SIGNATURE");
                        if (!sig || !ts) {
                            throw Error("signature or ts null");
                        }
                        return [4 /*yield*/, response.text()];
                    case 6:
                        json = _a.sent();
                        if (this.debug) {
                            console.log("response <<<<<<<< \njson:", json, "\nsig:", sig, "\nts:", ts);
                        }
                        if (LocalSigner_1.LocalSigner.verifyEccSignature(json + "|" + ts, sig, this.coboPub)) {
                            return [2 /*return*/, JSON.parse(json)];
                        }
                        throw Error("signature verify failed!!!");
                }
            });
        }); };
        this.apiKey = signer.getPublicKey();
        this.coboPub = env.coboPub;
        this.host = env.host;
        this.signer = signer;
        this.debug = debug;
    }
    return MPCPrimeBrokerClient;
}());
exports.MPCPrimeBrokerClient = MPCPrimeBrokerClient;
