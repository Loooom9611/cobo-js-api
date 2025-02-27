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
exports.MPCClient = void 0;
var node_fetch_1 = __importDefault(require("node-fetch"));
var LocalSigner_1 = require("./LocalSigner");
var url_1 = require("url");
var MPCClient = /** @class */ (function () {
    /***
     *
     * @param signer api signer
     * @param env DEV or PROD
     * @param debug
     */
    function MPCClient(signer, env, debug) {
        var _this = this;
        if (debug === void 0) { debug = false; }
        this.GetSupportedChains = function () {
            var params = {};
            return _this.coboFetch("GET", "/v1/custody/mpc/get_supported_chains/", params);
        };
        this.GetSupportedCoins = function (chain_code) {
            var params = { "chain_code": chain_code };
            return _this.coboFetch("GET", "/v1/custody/mpc/get_supported_coins/", params);
        };
        this.GetSupportedNftCollections = function (chain_code) {
            var params = { "chain_code": chain_code };
            return _this.coboFetch("GET", "/v1/custody/mpc/get_supported_nft_collections/", params);
        };
        this.GetWalletSupportedCoins = function () {
            var params = {};
            return _this.coboFetch("GET", "/v1/custody/mpc/get_wallet_supported_coins/", params);
        };
        this.getCoinInfo = function (coin) {
            var params = { "coin": coin };
            return _this.coboFetch("GET", "/v1/custody/mpc/coin_info/", params);
        };
        this.IsValidAddress = function (coin, address) {
            var params = { "coin": coin, "address": address };
            return _this.coboFetch("GET", "/v1/custody/mpc/is_valid_address/", params);
        };
        this.GetMainAddress = function (chain_code) {
            var params = { "chain_code": chain_code };
            return _this.coboFetch("GET", "/v1/custody/mpc/get_main_address/", params);
        };
        this.GenerateAddresses = function (chain_code, count, encoding) {
            var params = {
                "chain_code": chain_code,
                "count": count,
            };
            if (typeof encoding !== 'undefined') {
                params["encoding"] = encoding;
            }
            return _this.coboFetch("POST", "/v1/custody/mpc/generate_addresses/", params);
        };
        this.GenerateAddressMemo = function (chain_code, address, count) {
            var params = {
                "chain_code": chain_code,
                "address": address,
                "count": count,
            };
            return _this.coboFetch("POST", "/v1/custody/mpc/generate_address_memo/", params);
        };
        this.UpdateAddressDescription = function (coin, address, description) {
            var params = {
                "coin": coin,
                "address": address,
                "description": description
            };
            return _this.coboFetch("POST", "/v1/custody/mpc/update_address_description/", params);
        };
        this.ListAddresses = function (chain_code, start_id, end_id, limit, sort) {
            var params = {
                "chain_code": chain_code,
            };
            if (!!start_id) {
                params["start_id"] = start_id;
            }
            if (!!end_id) {
                params["end_id"] = end_id;
            }
            if (!!limit) {
                params["limit"] = limit;
            }
            if (!!sort) {
                params["sort"] = sort;
            }
            return _this.coboFetch("GET", "/v1/custody/mpc/list_addresses/", params);
        };
        this.GetBalance = function (address, chain_code, coin) {
            var params = {
                "address": address,
            };
            if (!!chain_code) {
                params["chain_code"] = chain_code;
            }
            if (!!coin) {
                params["coin"] = coin;
            }
            return _this.coboFetch("GET", "/v1/custody/mpc/get_balance/", params);
        };
        this.ListBalances = function (page_index, page_length, coin, chain_code) {
            var params = {
                "page_index": page_index,
                "page_length": page_length
            };
            if (!!chain_code) {
                params["chain_code"] = chain_code;
            }
            if (!!coin) {
                params["coin"] = coin;
            }
            return _this.coboFetch("GET", "/v1/custody/mpc/list_balances/", params);
        };
        this.ListSpendable = function (coin, address) {
            var params = {
                "coin": coin,
            };
            if (!!address) {
                params["address"] = address;
            }
            return _this.coboFetch("GET", "/v1/custody/mpc/list_spendable/", params);
        };
        this.CreateTransaction = function (coin, request_id, amount, from_addr, to_addr, to_address_details, fee, gas_price, gas_limit, operation, extra_parameters, max_fee, max_priority_fee, fee_amount, remark, auto_fuel, memo) {
            var params = {
                "coin": coin,
                "request_id": request_id,
                "amount": amount,
            };
            if (!!from_addr) {
                params["from_address"] = from_addr;
            }
            if (!!to_addr) {
                params["to_address"] = to_addr;
            }
            if (!!to_address_details) {
                params["to_address_details"] = to_address_details;
            }
            if (!!fee) {
                params["fee"] = fee;
            }
            if (!!gas_price) {
                params["gas_price"] = gas_price;
            }
            if (!!gas_limit) {
                params["gas_limit"] = gas_limit;
            }
            if (!!operation) {
                params["operation"] = operation;
            }
            if (!!extra_parameters) {
                params["extra_parameters"] = extra_parameters;
            }
            if (!!max_fee) {
                params["max_fee"] = max_fee;
            }
            if (!!max_priority_fee) {
                params["max_priority_fee"] = max_priority_fee;
            }
            if (!!fee_amount) {
                params["fee_amount"] = fee_amount;
            }
            if (!!remark) {
                params["remark"] = remark;
            }
            if (!!auto_fuel) {
                params["auto_fuel"] = auto_fuel;
            }
            if (!!memo) {
                params["memo"] = memo;
            }
            return _this.coboFetch("POST", "/v1/custody/mpc/create_transaction/", params);
        };
        this.SignMessage = function (chain_code, request_id, from_addr, sign_version, extra_parameters) {
            var params = {
                "chain_code": chain_code,
                "request_id": request_id,
                "from_address": from_addr,
                "sign_version": sign_version,
                "extra_parameters": extra_parameters,
            };
            return _this.coboFetch("POST", "/v1/custody/mpc/sign_message/", params);
        };
        this.DropTransaction = function (cobo_id, request_id, gas_price, gas_limit, fee, fee_amount, auto_fuel, extra_parameters) {
            var params = {
                "cobo_id": cobo_id,
                "request_id": request_id,
            };
            if (!!gas_price) {
                params["gas_price"] = gas_price;
            }
            if (!!gas_limit) {
                params["gas_limit"] = gas_limit;
            }
            if (!!fee) {
                params["fee"] = fee;
            }
            if (!!fee_amount) {
                params["fee_amount"] = fee_amount;
            }
            if (!!auto_fuel) {
                params["auto_fuel"] = auto_fuel;
            }
            if (!!extra_parameters) {
                params["extra_parameters"] = extra_parameters;
            }
            return _this.coboFetch("POST", "/v1/custody/mpc/drop_transaction/", params);
        };
        this.SpeedupTransaction = function (cobo_id, request_id, gas_price, gas_limit, fee, fee_amount, auto_fuel, extra_parameters) {
            var params = {
                "cobo_id": cobo_id,
                "request_id": request_id,
            };
            if (!!gas_price) {
                params["gas_price"] = gas_price;
            }
            if (!!gas_limit) {
                params["gas_limit"] = gas_limit;
            }
            if (!!fee) {
                params["fee"] = fee;
            }
            if (!!fee_amount) {
                params["fee_amount"] = fee_amount;
            }
            if (!!auto_fuel) {
                params["auto_fuel"] = auto_fuel;
            }
            if (!!extra_parameters) {
                params["extra_parameters"] = extra_parameters;
            }
            return _this.coboFetch("POST", "/v1/custody/mpc/speedup_transaction/", params);
        };
        this.TransactionsByRequestIds = function (request_ids, status) {
            var params = { "request_ids": request_ids };
            if (!!status) {
                params["status"] = status;
            }
            return _this.coboFetch("GET", "/v1/custody/mpc/transactions_by_request_ids/", params);
        };
        this.TransactionsByCoboIds = function (cobo_ids, status) {
            var params = { "cobo_ids": cobo_ids };
            if (!!status) {
                params["status"] = status;
            }
            return _this.coboFetch("GET", "/v1/custody/mpc/transactions_by_cobo_ids/", params);
        };
        this.TransactionsByTxHash = function (tx_hash, transaction_type) {
            var params = { "tx_hash": tx_hash };
            if (!!transaction_type) {
                params["transaction_type"] = transaction_type;
            }
            return _this.coboFetch("GET", "/v1/custody/mpc/transactions_by_tx_hash/", params);
        };
        this.ListTransactions = function (start_time, end_time, status, order, order_by, transaction_type, coins, from_address, to_address, limit) {
            if (limit === void 0) { limit = 50; }
            var params = {
                "limit": limit
            };
            if (!!start_time) {
                params["start_time"] = start_time;
            }
            if (!!end_time) {
                params["end_time"] = end_time;
            }
            if (!!status) {
                params["status"] = status;
            }
            if (!!order) {
                params["order"] = order;
            }
            if (!!order_by) {
                params["order_by"] = order_by;
            }
            if (!!transaction_type) {
                params["transaction_type"] = transaction_type;
            }
            if (!!coins) {
                params["coins"] = coins;
            }
            if (!!from_address) {
                params["from_address"] = from_address;
            }
            if (!!to_address) {
                params["to_address"] = to_address;
            }
            return _this.coboFetch("GET", "/v1/custody/mpc/list_transactions/", params);
        };
        this.EstimateFee = function (coin, amount, address, replace_cobo_id, from_address, to_address_details, fee, gas_price, gas_limit, extra_parameters) {
            var params = { "coin": coin };
            if (!!amount) {
                params["amount"] = amount;
            }
            if (!!address) {
                params["address"] = address;
            }
            if (!!replace_cobo_id) {
                params["replace_cobo_id"] = replace_cobo_id;
            }
            if (!!from_address) {
                params["from_address"] = from_address;
            }
            if (!!to_address_details) {
                params["to_address_details"] = to_address_details;
            }
            if (!!fee) {
                params["fee"] = fee;
            }
            if (!!gas_price) {
                params["gas_price"] = gas_price;
            }
            if (!!gas_limit) {
                params["gas_limit"] = gas_limit;
            }
            if (!!extra_parameters) {
                params["extra_parameters"] = extra_parameters;
            }
            return _this.coboFetch("POST", "/v1/custody/mpc/estimate_fee/", params);
        };
        this.ListTssNodeRequests = function (request_type, status) {
            var params = {};
            if (!!request_type) {
                params["request_type"] = request_type;
            }
            if (!!status) {
                params["status"] = status;
            }
            return _this.coboFetch("GET", "/v1/custody/mpc/list_tss_node_requests/", params);
        };
        this.SignMessagesByRequestIds = function (request_ids) {
            var params = { "request_ids": request_ids };
            return _this.coboFetch("GET", "/v1/custody/mpc/sign_messages_by_request_ids/", params);
        };
        this.SignMessagesByCoboIds = function (cobo_ids) {
            var params = { "cobo_ids": cobo_ids };
            return _this.coboFetch("GET", "/v1/custody/mpc/sign_messages_by_cobo_ids/", params);
        };
        this.ListTssNode = function () {
            return _this.coboFetch("GET", "/v1/custody/mpc/list_tss_node/", {});
        };
        this.RetryDoubleCheck = function (request_id) {
            var params = { "request_id": request_id };
            return _this.coboFetch("POST", "/v1/custody/mpc/retry_double_check/", params);
        };
        this.LockSpendable = function (coin, tx_hash, vout_n) {
            var params = { "coin": coin, "tx_hash": tx_hash, "vout_n": vout_n };
            return _this.coboFetch("POST", "/v1/custody/mpc/lock_spendable/", params);
        };
        this.UnlockSpendable = function (coin, tx_hash, vout_n) {
            var params = { "coin": coin, "tx_hash": tx_hash, "vout_n": vout_n };
            return _this.coboFetch("POST", "/v1/custody/mpc/unlock_spendable/", params);
        };
        this.GetRareSatoshis = function (coin, tx_hash, vout_n) {
            var params = { "coin": coin, "tx_hash": tx_hash, "vout_n": vout_n };
            return _this.coboFetch("GET", "/v1/custody/mpc/get_rare_satoshis/", params);
        };
        this.GetUTXOAssets = function (coin, tx_hash, vout_n) {
            var params = { "coin": coin, "tx_hash": tx_hash, "vout_n": vout_n };
            return _this.coboFetch("GET", "/v1/custody/mpc/get_utxo_assets/", params);
        };
        this.GetOrdinalsInscription = function (inscription_id) {
            var params = { "inscription_id": inscription_id };
            return _this.coboFetch("GET", "/v1/custody/mpc/get_ordinals_inscription/", params);
        };
        this.GetMaxSendAmount = function (coin, fee_rate, to_address, from_address) {
            var params = {
                "coin": coin,
                "fee_rate": fee_rate,
                "to_address": to_address,
            };
            if (!!from_address) {
                params["from_address"] = from_address;
            }
            return _this.coboFetch("GET", "/v1/custody/mpc/get_max_send_amount/", params);
        };
        this.BabylonPrepareStaking = function (request_id, stake_info, fee_rate, max_staking_fee) {
            var params = {
                "request_id": request_id,
                "stake_info": stake_info,
                "fee_rate": fee_rate,
            };
            if (!!max_staking_fee) {
                params["max_staking_fee"] = max_staking_fee;
            }
            return _this.coboFetch("POST", "/v1/custody/mpc/babylon/prepare_staking/", params);
        };
        this.BabylonReplaceStakingFee = function (request_id, related_request_id, fee_rate, max_staking_fee) {
            var params = {
                "request_id": request_id,
                "related_request_id": related_request_id,
                "fee_rate": fee_rate,
            };
            if (!!max_staking_fee) {
                params["max_staking_fee"] = max_staking_fee;
            }
            return _this.coboFetch("POST", "/v1/custody/mpc/babylon/replace_staking_fee/", params);
        };
        this.BabylonDropStaking = function (request_id, related_request_id, fee_rate, max_staking_fee) {
            var params = {
                "request_id": request_id,
                "related_request_id": related_request_id,
                "fee_rate": fee_rate,
            };
            if (!!max_staking_fee) {
                params["max_staking_fee"] = max_staking_fee;
            }
            return _this.coboFetch("POST", "/v1/custody/mpc/babylon/drop_staking/", params);
        };
        this.BabylonUnbonding = function (request_id, staking_request_id) {
            var params = {
                "request_id": request_id,
                "staking_request_id": staking_request_id,
            };
            return _this.coboFetch("POST", "/v1/custody/mpc/babylon/unbonding/", params);
        };
        this.BabylonWithdraw = function (request_id, fee_rate, max_fee_amount, unbonding_request_id, staking_request_id) {
            var params = {
                "request_id": request_id,
                "fee_rate": fee_rate,
            };
            if (!!max_fee_amount) {
                params["max_fee_amount"] = max_fee_amount;
            }
            if (!!unbonding_request_id) {
                params["unbonding_request_id"] = unbonding_request_id;
            }
            if (!!staking_request_id) {
                params["staking_request_id"] = staking_request_id;
            }
            return _this.coboFetch("POST", "/v1/custody/mpc/babylon/withdraw/", params);
        };
        this.BabylonBroadcastStakingTransaction = function (request_id) {
            var params = {
                "request_id": request_id,
            };
            return _this.coboFetch("POST", "/v1/custody/mpc/babylon/broadcast_staking_transaction/", params);
        };
        this.BabylonBatchBroadcastStakingTransaction = function (request_ids) {
            var params = {
                "request_ids": request_ids.join(","),
            };
            return _this.coboFetch("POST", "/v1/custody/mpc/babylon/batch_broadcast_staking_transaction/", params);
        };
        this.BabylonGetStakingInfo = function (request_id) {
            var params = {
                "request_id": request_id,
            };
            return _this.coboFetch("GET", "/v1/custody/mpc/babylon/get_staking_info/", params);
        };
        this.BabylonListWaitingBroadcastTransactions = function (coin, address) {
            var params = {
                "asset_coin": coin,
                "address": address,
            };
            return _this.coboFetch("GET", "/v1/custody/mpc/babylon/list_waiting_broadcast_transactions/", params);
        };
        this.BabylonListTransactionsByStatus = function (status, address, minCoboId, limit) {
            var params = {
                "status": status,
            };
            if (!!address) {
                params["address"] = address;
            }
            if (!!minCoboId) {
                params["min_cobo_id"] = minCoboId;
            }
            if (!!limit) {
                params["limit"] = limit;
            }
            return _this.coboFetch("GET", "/v1/custody/mpc/babylon/list_transactions_by_status/", params);
        };
        this.GetApprovalDetails = function (request_id) {
            var params = {
                "request_id": request_id,
            };
            return _this.coboFetch("GET", "/v1/custody/mpc/get_approval_details/", params);
        };
        this.ListEligibles = function (status, min_id, limit) {
            var params = {};
            if (!!status) {
                params["status"] = status;
            }
            if (!!min_id) {
                params["min_id"] = min_id;
            }
            if (!!limit) {
                params["limit"] = limit;
            }
            return _this.coboFetch("GET", "/v1/custody/mpc/babylon/airdrops/list_eligibles/", params);
        };
        this.SubmitRegistration = function (btc_address, babylon_address) {
            var params = {
                "btc_address": btc_address,
                "babylon_address": babylon_address
            };
            return _this.coboFetch("POST", "/v1/custody/mpc/babylon/airdrops/submit_registration/", params);
        };
        this.ListRegistrations = function (status, btc_address, min_id, limit) {
            var params = {};
            if (!!status) {
                params["status"] = status;
            }
            if (!!btc_address) {
                params["btc_address"] = btc_address;
            }
            if (!!min_id) {
                params["min_id"] = min_id;
            }
            if (!!limit) {
                params["limit"] = limit;
            }
            return _this.coboFetch("GET", "/v1/custody/mpc/babylon/airdrops/list_registrations/", params);
        };
        this.GetRegistration = function (registration_id) {
            var params = {
                "registration_id": registration_id
            };
            return _this.coboFetch("GET", "/v1/custody/mpc/babylon/airdrops/get_registration/", params);
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
    return MPCClient;
}());
exports.MPCClient = MPCClient;
