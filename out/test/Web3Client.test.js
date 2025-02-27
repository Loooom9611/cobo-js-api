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
var LocalSigner_1 = require("../src/LocalSigner");
var Web3Client_1 = require("../src/Web3Client");
var config_1 = require("./config");
var config_2 = require("./config");
var web3ApiSecret = 'apiSecret';
var clientEnv = config_1.DEV;
if (process.argv.length > 3) {
    var paramEnv = process.argv.filter(function (x) { return x.startsWith('-env='); })[0].split('=')[1];
    var env = paramEnv ? paramEnv : 'develop';
    clientEnv = env === 'prod' ? config_2.PROD : config_1.DEV;
    var paramApiSecret = process.argv.filter(function (x) { return x.startsWith('-web3SecretKey='); })[0].split('=')[1];
    web3ApiSecret = paramApiSecret ? paramApiSecret : web3ApiSecret;
}
jest.setTimeout(10000);
var signer = new LocalSigner_1.LocalSigner(web3ApiSecret);
var web3_client = new Web3Client_1.Web3Client(signer, clientEnv, false);
test('test get web3 support chains', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, web3_client.getWeb3SupportedChains()];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get web3 support coins', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, web3_client.getWeb3SupportedCoins('GETH')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get web3 support nft collections', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, web3_client.getWeb3SupportedNftCollections()];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get web3 support coins', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, web3_client.getWeb3SupportedContracts('GETH')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get web3 support contract methods', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, web3_client.getWeb3SupportedContractMethods('GETH', '0x7851dcc90e79f3f2c59915e7f4d6fabd8d3d305b')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test batch new web3 address', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, web3_client.batchWeb3NewAddress('GETH', 2)];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get web3 address list', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, web3_client.getWeb3AddressList('GETH', 0, 20)];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get web3 wallet asset list', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, web3_client.getWeb3WalletAssetList('0xd387292d5be73c8b9d6d3a4dcdd49e00edf75b6a', 'GETH')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get web3 wallet nft list', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, web3_client.getWeb3WalletNftList('NFT_RETH_PROOF_MOONBIRDS', '0xd387292d5be73c8b9d6d3a4dcdd49e00edf75b6a')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get web3 wallet nft detail', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, web3_client.getWeb3WalletNftDetail('NFT_ETH_CH', '44870459013827687655067438984317261948508900266699599897107078061993945464882')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test web3 withdraw', function () { return __awaiter(void 0, void 0, void 0, function () {
    var request_id, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                request_id = String(new Date().getTime());
                return [4 /*yield*/, web3_client.web3Withdraw('ETH', request_id, '0xd2176409a1ac767824921e45b7ee300745cb1e3f', '0xD2176409a1Ac767824921e45B7Ee300745cB1e3f', 1)];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get web3 withdraw transaction', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, web3_client.getWeb3WithdrawTransaction('1678438801416')];
            case 1:
                res = _a.sent();
                console.log(res);
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test web3 contract', function () { return __awaiter(void 0, void 0, void 0, function () {
    var request_id, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                request_id = String(new Date().getTime());
                return [4 /*yield*/, web3_client.web3Contract('ARBITRUM_ETH', request_id, '0xd2176409a1ac767824921e45b7ee300745cb1e3f', '0x252449d4f514d59ffacd5526542d4b4a94932969', '0x42842e0e', 'safeTransferFrom', "[\"0xff944326a6a98a6c257b815009f36326ef825ccb\", \"0x4629a4b6b4FEBd13536871E167151be9d16535b3\", 172]", 0)];
            case 1:
                res = _a.sent();
                console.log(request_id);
                console.log(res);
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get web3 contract transaction', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, web3_client.getWeb3ContractTransaction("1664239624441")];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test list web3 transaction', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, web3_client.listWeb3WalletTransactions('0xd2176409a1ac767824921e45b7ee300745cb1e3f')];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
