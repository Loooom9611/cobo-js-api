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
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var config_1 = require("./config");
var config_2 = require("./config");
var mpcApiSecret = '';
var clientEnv = config_1.DEV;
if (process.argv.length > 3) {
    var paramEnv = process.argv.filter(function (x) { return x.startsWith('-env='); })[0].split('=')[1];
    var env = paramEnv ? paramEnv : 'develop';
    clientEnv = env === 'prod' ? config_2.PROD : config_1.DEV;
    var paramApiSecret = process.argv.filter(function (x) { return x.startsWith('-MPCSecretKey='); })[0].split('=')[1];
    mpcApiSecret = paramApiSecret ? paramApiSecret : 'mpcApiSecret';
}
jest.setTimeout(10000);
var signer = new __1.LocalSigner(mpcApiSecret);
var mpc_client = new __1.MPCClient(signer, clientEnv, false);
test('test get mpc support chains', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.GetSupportedChains()];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get mpc support coins', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.GetSupportedCoins('GETH')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
//web3相关接口，暂时skip
// test('test get mpc support nft collections', async () => {
//     const res = await mpc_client.GetSupportedNftCollections('GETH');
//     console.log(res);
//     console.log(res.result);
//     expect(res.success).toBeTruthy();
// });
test('test get mpc walelt support coins', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.GetWalletSupportedCoins()];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get coin info', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.getCoinInfo('GETH')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test is valid address', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.IsValidAddress('GETH', '0x3ede1e59a3f3a66de4260df7ba3029b515337e5c')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get main address', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.GetMainAddress('GETH')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test generate address', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.GenerateAddresses('GETH', 2)];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test update address description', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.UpdateAddressDescription('GETH', '0x6a060efe0ff887f4e24dc2d2098020abf28bcce4', 'test')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test list address', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.ListAddresses('GETH')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get balance', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.GetBalance('0x6a060efe0ff887f4e24dc2d2098020abf28bcce4')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test list balances', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.ListBalances(0, 10)];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test list spendable', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.ListSpendable('GETH')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test create transaction', function () { return __awaiter(void 0, void 0, void 0, function () {
    var request_id, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                request_id = String(new Date().getTime());
                return [4 /*yield*/, mpc_client.CreateTransaction('GETH', request_id, '11', '0x6a060efe0ff887f4e24dc2d2098020abf28bcce4', '0x6a060efe0ff887f4e24dc2d2098020abf28bcce4')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
//web3相关接口，暂时skip
// test('test sign message', async () => {
//     const request_id = String(new Date().getTime())
//     const res = await mpc_client.SignMessage('GETH', request_id, '', 2, '{"message": "YWFhYQ=="}');
//     console.log(res);
//     console.log(res.result);
//     expect(res.success).toBeTruthy();
// });
test('test get transactions by requestIds', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.TransactionsByRequestIds('1668678820274')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get transactions by coboIds', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.TransactionsByCoboIds('20231213152104000114035000006167')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test list transactions', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.ListTransactions()];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
// test('test list tss node requests', async () => {
//     const res = await mpc_client.ListTssNodeRequests();
//     console.log(res);
//     console.log(res.result);
//     expect(res.success).toBeTruthy();
// });
test('test get sign messages by requestIds', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.SignMessagesByRequestIds('1690349242683,1690268795963,1690187858862')];
            case 1:
                res = _a.sent();
                console.log(res);
                console.log(res.result);
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get sign messages by coboIds', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.SignMessagesByCoboIds('20230726132723000341052000008222,20230725150636000308867000003494,20230725135301000361318000002480')];
            case 1:
                res = _a.sent();
                // console.log(res);
                // console.log(res.result);
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test list tss node', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.ListTssNode()];
            case 1:
                res = _a.sent();
                // console.log(res);
                // console.log(res.result);
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get max send amount', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mpc_client.GetMaxSendAmount("GETH", "0", "", "0x6a060efe0ff887f4e24dc2d2098020abf28bcce4")
                // console.log(res);
                // console.log(res.result);
            ];
            case 1:
                res = _a.sent();
                // console.log(res);
                // console.log(res.result);
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
