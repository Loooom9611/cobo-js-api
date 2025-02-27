"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var config_3 = require("./config");
var config_4 = require("./config");
var apiSecret = 'apiSecret';
var clientEnv = config_1.DEV;
var testData = config_3.DEV_TEST_DATA;
if (process.argv.length > 3) {
    var paramEnv = process.argv.filter(function (x) { return x.startsWith('-env='); })[0].split('=')[1];
    var env = paramEnv ? paramEnv : 'develop';
    clientEnv = env === 'prod' ? config_2.PROD : config_1.DEV;
    var paramApiSecret = process.argv.filter(function (x) { return x.startsWith('-secretKey='); })[0].split('=')[1];
    apiSecret = paramApiSecret ? paramApiSecret : 'apiSecret';
    testData = env === 'prod' ? config_4.PROD_TEST_DATA : config_3.DEV_TEST_DATA;
}
jest.setTimeout(10000);
var signer = new __1.LocalSigner(apiSecret);
var client = new __1.Client(signer, clientEnv, false);
test('test get account info', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.getAccountInfo()];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    coin                   \n    ", "               \n    ", "           \n    ", "        \n    ", "                \n"], ["\n    coin                   \n    ", "               \n    ", "           \n    ", "        \n    ", "                \n"])), 'BTC', 'ETH', 'BSC_BNB', 'XRP')('test get valid $coin info', function (_a) {
    var coin = _a.coin;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.getCoinInfo(coin)];
                case 1:
                    res = _b.sent();
                    expect(res.success).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    });
});
it.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    coin                   \n    ", "                              \n"], ["\n    coin                   \n    ", "                              \n"])), 'BTTB')('test get invalid $coin info', function (_a) {
    var coin = _a.coin;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.getCoinInfo(coin)];
                case 1:
                    res = _b.sent();
                    expect(res.success).toBeFalsy();
                    expect(res.error_code).toEqual(12002);
                    return [2 /*return*/];
            }
        });
    });
});
it.each(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    coin          | native_segwit            \n    ", "      | ", "            \n    ", "      | ", "           \n    ", "      | ", "         \n    ", "  | ", "  \n    ", "      | ", "\n"], ["\n    coin          | native_segwit            \n    ", "      | ", "            \n    ", "      | ", "           \n    ", "      | ", "         \n    ", "  | ", "  \n    ", "      | ", "\n"])), 'BTC', true, 'BTC', false, 'ETH', false, 'BSC_BNB', false, 'XRP', false)('test new valid $coin address ', function (_a) {
    var coin = _a.coin, native_segwit = _a.native_segwit;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.newDepositAddress(coin, native_segwit)];
                case 1:
                    res = _b.sent();
                    expect(res.success).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    });
});
it.each(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    coin          | native_segwit            \n    ", "     | ", "            \n    ", "     | ", "           \n"], ["\n    coin          | native_segwit            \n    ", "     | ", "            \n    ", "     | ", "           \n"])), 'BTTB', true, 'ETTE', false)('test new invalid $coin address ', function (_a) {
    var coin = _a.coin, native_segwit = _a.native_segwit;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.newDepositAddress(coin, native_segwit)];
                case 1:
                    res = _b.sent();
                    expect(res.success).toBeFalsy();
                    expect(res.error_code).toEqual(12002);
                    return [2 /*return*/];
            }
        });
    });
});
it.each(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    coin          | native_segwit | count          \n    ", "      | ", "       | ", "   \n    ", "      | ", "      | ", "      \n    ", "      | ", "      | ", "    \n    ", "  | ", "      | ", "  \n    ", "      | ", "      | ", "  \n"], ["\n    coin          | native_segwit | count          \n    ", "      | ", "       | ", "   \n    ", "      | ", "      | ", "      \n    ", "      | ", "      | ", "    \n    ", "  | ", "      | ", "  \n    ", "      | ", "      | ", "  \n"])), 'BTC', true, 2, 'BTC', false, 2, 'ETH', false, 2, 'BSC_BNB', false, 2, 'XRP', false, 2)('test batch new valid $coin addresses ', function (_a) {
    var coin = _a.coin, native_segwit = _a.native_segwit, count = _a.count;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.batchNewDepositAddress(coin, count, native_segwit)];
                case 1:
                    res = _b.sent();
                    expect(res.success).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    });
});
it.each(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    coin          | native_segwit | count          \n    ", "     | ", "       | ", "   \n    ", "     | ", "      | ", "      \n"], ["\n    coin          | native_segwit | count          \n    ", "     | ", "       | ", "   \n    ", "     | ", "      | ", "      \n"])), 'BTTB', true, 2, 'ETTE', false, 2)('test batch new invalid $coin addresses', function (_a) {
    var coin = _a.coin, native_segwit = _a.native_segwit, count = _a.count;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.batchNewDepositAddress(coin, count, native_segwit)];
                case 1:
                    res = _b.sent();
                    expect(res.success).toBeFalsy();
                    expect(res.error_code).toEqual(12002);
                    return [2 /*return*/];
            }
        });
    });
});
it.each(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    coin                   \n    ", "                      \n    ", "                \n"], ["\n    coin                   \n    ", "                      \n    ", "                \n"])), 'BTC', 'XRP')('test verify valid $coin deposit address', function (_a) {
    var coin = _a.coin;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.verifyDepositAddress(coin, testData.deposit_address[coin])];
                case 1:
                    res = _b.sent();
                    expect(res.success).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    });
});
it.each(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    coin     | address             \n    ", " | ", "                 \n    ", " | ", "           \n"], ["\n    coin     | address             \n    ", " | ", "                 \n    ", " | ", "           \n"])), 'BTC', '3Kd5rjiLtvpHv5nhYQNTTeRLgrz4om32PJ', 'XRP', 'rndm7RphBZG6CpZvKcG9AjoFbSvcKhwLCx')('test verify invalid $coin deposit address', function (_a) {
    var coin = _a.coin, address = _a.address;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.verifyDepositAddress(coin, address)];
                case 1:
                    res = _b.sent();
                    expect(res.success).toBeFalsy();
                    expect(res.error_code).toEqual(12015);
                    return [2 /*return*/];
            }
        });
    });
});
it.each(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    coin     | count             \n    ", " |  ", "                     \n    ", " |  ", "           \n"], ["\n    coin     | count             \n    ", " |  ", "                     \n    ", " |  ", "           \n"])), 'BTC', 2, 'XRP', 2)('test batch verify valid $coin deposit address', function (_a) {
    var coin = _a.coin, count = _a.count;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.batchVerifyDepositAddress(coin, testData.deposit_addresses[coin])];
                case 1:
                    res = _b.sent();
                    expect(res.success).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    });
});
it.each(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    coin     | addresses           \n    ", " | ", "                   \n    ", " | ", "               \n"], ["\n    coin     | addresses           \n    ", " | ", "                   \n    ", " | ", "               \n"])), 'BTC', "38kcymiNQXk8WTWX9tPLRZP9wxvXPXcsFy,3ApTsekq5XpUtM5CzAKqntHkvoSpYdCDHw", 'XRP', "rBphERztHKga1cyMgWiDen7WDkbkfn1iPE|3414236551,rfKyCMyoV6Ln2GZ7YDbrBrnXCbAyBbxRqB|3752417374")('test batch verify invalid $coin deposit address', function (_a) {
    var coin = _a.coin, addresses = _a.addresses;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.batchVerifyDepositAddress(coin, addresses)];
                case 1:
                    res = _b.sent();
                    expect(res.success).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    });
});
it.each(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    coin          | address           \n    ", "      | ", "                       \n    ", "      | ", "            \n"], ["\n    coin          | address           \n    ", "      | ", "                       \n    ", "      | ", "            \n"])), 'BTC', '38kcymiNQXk8WTWX9tPLRZP9wxvXPXcsFy', 'XRP', 'rBphERztHKga1cyMgWiDen7WDkbkfn1iPE')('test valid $coin address', function (_a) {
    var coin = _a.coin, address = _a.address;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.verifyValidAddress(coin, address)];
                case 1:
                    res = _b.sent();
                    expect(res.success).toBeTruthy();
                    expect(res.result).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    });
});
it.each(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    coin          | address           \n    ", "      | ", "                   \n    ", "      | ", "         \n"], ["\n    coin          | address           \n    ", "      | ", "                   \n    ", "      | ", "         \n"])), 'BTC', '0xE410157345be56688F43FF0D9e4B2B38Ea8F7828', 'ETH', 'rBWpYJhuJWBPAkzJ4kYQqHShSkkF3rgeDE')('test invalid $coin address', function (_a) {
    var coin = _a.coin, address = _a.address;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.verifyValidAddress(coin, address)];
                case 1:
                    res = _b.sent();
                    expect(res.success).toBeTruthy();
                    expect(res.result).toBeFalsy();
                    return [2 /*return*/];
            }
        });
    });
});
it.each(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    coin                   \n    ", "               \n    ", "           \n    ", "        \n    ", "                \n"], ["\n    coin                   \n    ", "               \n    ", "           \n    ", "        \n    ", "                \n"])), 'BTC', 'ETH', 'BSC_BNB', 'XLM')('test get valid $coin address history', function (_a) {
    var coin = _a.coin;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.getAddressHistory(coin)];
                case 1:
                    res = _b.sent();
                    expect(res.success).toBeTruthy();
                    expect(res.result.length).toBeGreaterThan(0);
                    return [2 /*return*/];
            }
        });
    });
});
it.each(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    coin          | pageIndex   | pageLength\n    ", "      | ", "        | ", "      \n    ", "      | ", "        | ", "    \n"], ["\n    coin          | pageIndex   | pageLength\n    ", "      | ", "        | ", "      \n    ", "      | ", "        | ", "    \n"])), 'BTC', 1, 0, 'BTC', 1, 51)('test get invalid $coin address history with invalid page', function (_a) {
    var coin = _a.coin, pageIndex = _a.pageIndex, pageLength = _a.pageLength;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.getAddressHistory(coin, pageIndex, pageLength)];
                case 1:
                    res = _b.sent();
                    console.log("coin:" + coin + ",pageIndex:" + pageIndex + ",pageLength:" + pageLength);
                    expect(res.success).toBeFalsy();
                    expect(res.error_code).toEqual(1011);
                    return [2 /*return*/];
            }
        });
    });
});
it.each(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    coin          | pageIndex   | pageLength   |sorfFlag\n    ", "      | ", "        | ", "         |", "      \n    ", "      | ", "        | ", "         |", "    \n"], ["\n    coin          | pageIndex   | pageLength   |sorfFlag\n    ", "      | ", "        | ", "         |", "      \n    ", "      | ", "        | ", "         |", "    \n"])), 'BTC', 0, 2, 1, 'BTC', 0, 2, 0)('test get valid $coin address history with page', function (_a) {
    var coin = _a.coin, pageIndex = _a.pageIndex, pageLength = _a.pageLength;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.getAddressHistory(coin, pageIndex, pageLength)];
                case 1:
                    res = _b.sent();
                    expect(res.success).toBeTruthy();
                    expect(res.result.length).toBeGreaterThan(0);
                    console.log("coin:" + coin + ",pageIndex:" + pageIndex + ",pageLength:" + pageLength + ",result.length:" + res.result.length);
                    return [2 /*return*/];
            }
        });
    });
});
it.each(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    coin          | pageIndex   | pageLength   |sorfFlag\n    ", "      | ", "        | ", "         |", "\n    ", "      | ", "        | ", "        |", "  \n"], ["\n    coin          | pageIndex   | pageLength   |sorfFlag\n    ", "      | ", "        | ", "         |", "\n    ", "      | ", "        | ", "        |", "  \n"])), 'BTC', 1, 0, 1, 'BTC', 1, 51, 0)('test get invalid $coin address history with invalid page', function (_a) {
    var coin = _a.coin, pageIndex = _a.pageIndex, pageLength = _a.pageLength, sortFlag = _a.sortFlag;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.getAddressHistory(coin, pageIndex, pageLength, sortFlag)];
                case 1:
                    res = _b.sent();
                    console.log("coin:" + coin + ",pageIndex:" + pageIndex + ",pageLength:" + pageLength + ",sortFlag:" + sortFlag);
                    expect(res.success).toBeFalsy();
                    expect(res.error_code).toEqual(1011);
                    return [2 /*return*/];
            }
        });
    });
});
it.each(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n    coin          | memo           \n    ", "      | ", "                   \n    ", "      | ", "         \n"], ["\n    coin          | memo           \n    ", "      | ", "                   \n    ", "      | ", "         \n"])), 'BTC', false, 'XRP', true)('test check $coin loop address details', function (_a) {
    var coin = _a.coin, memo = _a.memo;
    return __awaiter(void 0, void 0, void 0, function () {
        var address, memoInfo, res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    memoInfo = undefined;
                    if (memo) {
                        address = testData.loop_address[coin].split('|')[0];
                        memoInfo = testData.loop_address[coin].split('|')[1];
                    }
                    else {
                        address = testData.loop_address[coin];
                        memoInfo = null;
                    }
                    return [4 /*yield*/, client.checkLoopAddressDetails(coin, address, memoInfo)];
                case 1:
                    res = _b.sent();
                    expect(res.success).toBeTruthy();
                    expect(res.result['is_internal_address']).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    });
});
it.each(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n    coin          \n    ", "                    \n    ", "               \n"], ["\n    coin          \n    ", "                    \n    ", "               \n"])), 'BTC', 'XRP')('test check $coin loop address list', function (_a) {
    var coin = _a.coin;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.verifyLoopAddressList(coin, testData.loop_addresses[coin])];
                case 1:
                    res = _b.sent();
                    expect(res.success).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    });
});
test('test get transaction details', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.getTransactionDetail(testData.cobo_id)];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get transactions by id', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.getTransactionsById({})];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get transactions by txId', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.getTransactionsByTxId(testData.tx_id)];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get transactions by time', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.getTransactionsByTime({})];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get transactions by time ex', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.getTransactionsByTimeEx({})];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get pending transactions', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.getPendingTransactions({})];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get pending deposit details', function () { return __awaiter(void 0, void 0, void 0, function () {
    var pendingTx, pending_id, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.getPendingTransactions({})];
            case 1:
                pendingTx = _a.sent();
                if (!(pendingTx.result.length > 0)) return [3 /*break*/, 3];
                pending_id = pendingTx.result[0]['id'];
                return [4 /*yield*/, client.getPendingDepositDetails(pending_id)];
            case 2:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [3 /*break*/, 4];
            case 3:
                xtest;
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
it.each(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n    coin          | address                                         |memo            |amount\n    ", " | ", " |", "         |", "                \n    ", "      | ", "    |", " |", "   \n"], ["\n    coin          | address                                         |memo            |amount\n    ", " | ", " |", "         |", "                \n    ", "      | ", "    |", " |", "   \n"])), 'COBO_ETH', '0x00a70fa1125e336afc22a641b015c878f44c1c1d', null, BigInt('1'), 'XLM', 'GCXMPEHKXQQIZIAGBB67HX55PSN35M2XWVTBNQWLABXS5T3UY42LBJGS', '481247198', BigInt('1'))('test $coin withdraw', function (_a) {
    var coin = _a.coin, address = _a.address, memo = _a.memo, amount = _a.amount;
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.withdraw({
                        coin: coin,
                        request_id: "request_id_" + String(new Date().getTime()),
                        address: address,
                        amount: amount,
                        memo: 'cobo'
                    })];
                case 1:
                    res = _b.sent();
                    expect(res.success).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    });
});
test('test query withdraw info', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.getWithdrawInfo(testData.withdraw_id)];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get staking product list', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.getStakingProductList()];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get staking product details', function () { return __awaiter(void 0, void 0, void 0, function () {
    var stakings, productId, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.getStakingProductList()];
            case 1:
                stakings = _a.sent();
                if (!(stakings.result.length > 0)) return [3 /*break*/, 3];
                productId = stakings.result[0]['product_id'];
                return [4 /*yield*/, client.getStakingProductDetails(productId)];
            case 2:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [3 /*break*/, 4];
            case 3:
                xtest;
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
test('test stake', function () { return __awaiter(void 0, void 0, void 0, function () {
    var stakings, productId, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.getStakingProductList('TETH')];
            case 1:
                stakings = _a.sent();
                if (!(stakings.result.length > 0)) return [3 /*break*/, 3];
                productId = stakings.result[0]['product_id'];
                return [4 /*yield*/, client.stake(productId, BigInt('1000000'))];
            case 2:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [3 /*break*/, 4];
            case 3:
                xtest;
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
test('test unstake', function () { return __awaiter(void 0, void 0, void 0, function () {
    var stakings, productId, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.getStakingProductList('TETH')];
            case 1:
                stakings = _a.sent();
                if (!(stakings.result.length > 0)) return [3 /*break*/, 3];
                productId = stakings.result[0]['product_id'];
                return [4 /*yield*/, client.unstake(productId, BigInt('1000000'))];
            case 2:
                res = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                xtest;
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
test('test get stakings', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.getStakingData()];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get unstakings', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.getUnstakingData()];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
test('test get staking history', function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.getStakingHistory({})];
            case 1:
                res = _a.sent();
                expect(res.success).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;
