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
exports.Client = void 0;
var node_fetch_1 = __importDefault(require("node-fetch"));
var LocalSigner_1 = require("./LocalSigner");
var url_1 = require("url");
var sha256 = require("sha256");
var Client = /** @class */ (function () {
    /***
     *
     * @param signer api signer
     * @param env DEV or PROD
     * @param debug
     */
    function Client(signer, env, debug) {
        var _this = this;
        if (debug === void 0) { debug = false; }
        /***
         * get account info
         */
        this.getAccountInfo = function () {
            return _this.coboFetch("GET", "/v1/custody/org_info/", {});
        };
        /***
         * get coin info
         * @param coin :coin code
         */
        this.getCoinInfo = function (coin, amount) {
            var params = { "coin": coin };
            if (amount != null) {
                params["amount"] = amount;
            }
            return _this.coboFetch("GET", "/v1/custody/coin_info/", params);
        };
        /***
         * get supported coins
         * @param coin :coin code
         */
        this.getSupportedCoins = function () {
            return _this.coboFetch("GET", "/v1/custody/get_supported_coins/", {});
        };
        /***
         * new deposit address
         * @param coin: coin code
         * @param nativeSegwit: new segwit address
         */
        this.newDepositAddress = function (coin, nativeSegwit) {
            if (nativeSegwit === void 0) { nativeSegwit = false; }
            var params = { "coin": coin };
            if (nativeSegwit) {
                params["native_segwit"] = true;
            }
            return _this.coboFetch("POST", "/v1/custody/new_address/", params);
        };
        /***
         * batch new deposit address
         * @param coin: coin code
         * @param count: address count
         * @param nativeSegwit: new segwit address
         */
        this.batchNewDepositAddress = function (coin, count, nativeSegwit) {
            if (nativeSegwit === void 0) { nativeSegwit = false; }
            var params = {
                "coin": coin,
                "count": count
            };
            if (nativeSegwit) {
                params["native_segwit"] = true;
            }
            return _this.coboFetch("POST", "/v1/custody/new_addresses/", params);
        };
        /***
         * verify deposit address
         * @param coin: coin code
         * @param address: address
         */
        this.verifyDepositAddress = function (coin, address) {
            var params = {
                "coin": coin,
                "address": address
            };
            return _this.coboFetch("GET", "/v1/custody/address_info/", params);
        };
        /***
         * verify deposit address
         * @param coin: coin code
         * @param addresses: address
         */
        this.batchVerifyDepositAddress = function (coin, addresses) {
            var params = {
                "coin": coin,
                "address": addresses
            };
            return _this.coboFetch("GET", "/v1/custody/addresses_info/", params);
        };
        /***
         * verify address valid
         * @param coin: coin code
         * @param address: address
         */
        this.verifyValidAddress = function (coin, address) {
            var params = {
                "coin": coin,
                "address": address
            };
            return _this.coboFetch("GET", "/v1/custody/is_valid_address/", params);
        };
        /***
         * get address history
         * @param coin: coin code
         * @param pageIndex: which page. 0 is start page
         * @param pageLength: page size <= 50
         * @param sortFlag: 0:DESCENDING 1:ASCENDING
         */
        this.getAddressHistory = function (coin, pageIndex, pageLength, sortFlag) {
            var params = {
                "coin": coin,
            };
            if (pageIndex != null) {
                params["page_index"] = pageIndex;
            }
            if (pageLength != null) {
                params["page_length"] = pageLength;
            }
            if (sortFlag != null) {
                params["sort_flag"] = sortFlag;
            }
            return _this.coboFetch("GET", "/v1/custody/address_history/", params);
        };
        /***
         * check loop address derails
         * @param coin: coin code
         * @param address: address
         * @param memo: memo
         */
        this.checkLoopAddressDetails = function (coin, address, memo) {
            if (memo === void 0) { memo = null; }
            var params = {
                "coin": coin,
                "address": address
            };
            if (memo != null) {
                params["memo"] = memo;
            }
            return _this.coboFetch("GET", "/v1/custody/internal_address_info/", params);
        };
        /***
         * verify loop address list
         * @param coin: coin code
         * @param address: addresses, separated by ','
         */
        this.verifyLoopAddressList = function (coin, address) {
            var params = {
                "coin": coin,
                "address": address
            };
            return _this.coboFetch("GET", "/v1/custody/internal_address_info_batch/", params);
        };
        /***
         * get transaction details
         * @param id :transaction id
         */
        this.getTransactionDetail = function (id) {
            var params = {
                "id": id,
            };
            return _this.coboFetch("GET", "/v1/custody/transaction/", params);
        };
        /***
         * get transactions by txid
         * @param txid : txid
         */
        this.getTransactionsByTxId = function (txid) {
            return _this.coboFetch("GET", "/v1/custody/transaction_by_txid/", { "txid": txid });
        };
        /***
         * get transaction by id
         * @param params : TransactionQueryParams
         */
        this.getTransactionsById = function (params) {
            return _this.coboFetch("GET", "/v1/custody/transactions_by_id/", params);
        };
        /***
         * get transaction by request ids
         * @param params : TransactionQueryParams
         */
        this.getTransactionsByRequestId = function (requestIds) {
            return _this.coboFetch("GET", "/v1/custody/transactions_by_id/", { "request_ids": requestIds });
        };
        /***
         * get transaction by time
         * @param params : TransactionQueryParams
         */
        this.getTransactionsByTime = function (params) {
            return _this.coboFetch("GET", "/v1/custody/transactions_by_time/", params);
        };
        /***
         * get transaction by time ex
         * @param params : TransactionQueryParamsEx
         */
        this.getTransactionsByTimeEx = function (params) {
            return _this.coboFetch("GET", "/v1/custody/transactions_by_time_ex/", params);
        };
        /***
         * get pending transactions
         * @param params : TransactionQueryParams
         */
        this.getPendingTransactions = function (params) {
            return _this.coboFetch("GET", "/v1/custody/pending_transactions/", params);
        };
        /***
         * get pending transaction deposit details
         * @param id: transaction id
         */
        this.getPendingDepositDetails = function (id) {
            return _this.coboFetch("GET", "/v1/custody/pending_transaction/", { "id": id });
        };
        /***
      * get transaction history
      * @param params : TransactionHistoryQueryParamsEx
      */
        this.getTransactionHistory = function (params) {
            return _this.coboFetch("GET", "/v1/custody/transaction_history/", params);
        };
        /***
         * withdraw
         * @param params:WithdrawParams
         */
        this.withdraw = function (params) {
            params.request_id = params.request_id || "sdk_request_id_" + sha256(params.address).slice(0, 8) + "_" + Date.now();
            return _this.coboFetch("POST", "/v1/custody/new_withdraw_request/", params);
        };
        /***
         * query withdraw info
         * @param id: request_id
         */
        this.getWithdrawInfo = function (id) {
            return _this.coboFetch("GET", "/v1/custody/withdraw_info_by_request_id/", { "request_id": id });
        };
        /***
         * get staking product details
         * @param productId: product id
         */
        this.getStakingProductDetails = function (productId) {
            return _this.coboFetch("GET", "/v1/custody/staking_product/", { "product_id": productId });
        };
        /***
         * get staking product list
         * @param coin
         * @param language
         */
        this.getStakingProductList = function (coin, language) {
            var params = {};
            if (coin != null) {
                params["coin"] = coin;
            }
            if (language != null) {
                params["language"] = language;
            }
            return _this.coboFetch("GET", "/v1/custody/staking_products/", params);
        };
        /***
         * stake
         * @param productId: product id
         * @param amount: amount
         */
        this.stake = function (productId, amount) {
            var params = {
                "product_id": productId,
                "amount": amount
            };
            return _this.coboFetch("POST", "/v1/custody/staking_stake/", params);
        };
        /***
         * unstake
         * @param productId: product id
         * @param amount: amount
         */
        this.unstake = function (productId, amount) {
            var params = {
                "product_id": productId,
                "amount": amount
            };
            return _this.coboFetch("POST", "/v1/custody/staking_unstake/", params);
        };
        /***
         * get staking data
         * @param coin: coin code
         * @param language:language
         */
        this.getStakingData = function (coin, language) {
            var params = {};
            if (coin != null) {
                params["coin"] = coin;
            }
            if (language != null) {
                params["language"] = language;
            }
            return _this.coboFetch("GET", "/v1/custody/stakings/", params);
        };
        /***
         * get unstaking data
         * @param coin: coin code
         */
        this.getUnstakingData = function (coin) {
            var params = {};
            if (coin != null) {
                params["coin"] = coin;
            }
            return _this.coboFetch("GET", "/v1/custody/unstakings/", params);
        };
        /***
         * get Staking History
         * @param params:StakingQueryParams
         */
        this.getStakingHistory = function (params) {
            return _this.coboFetch("GET", "/v1/custody/unstakings/", params);
        };
        /***
         * get gas station balance
         */
        this.getGasStationBalance = function () {
            var params = {};
            return _this.coboFetch("GET", "/v1/custody/get_gas_station_balance/", params);
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
    return Client;
}());
exports.Client = Client;
