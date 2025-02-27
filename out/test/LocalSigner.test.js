"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
test("generate new key pair", function () {
    var keyPair = __1.LocalSigner.newKeyPair();
    console.log(keyPair);
});
test("test sign and verify", function () {
    var privKey = '8e25462664653ee1f0064c3655f9dabad8e38ffdaa810b1e1c340cb4d1dd362f';
    var pubKey = '02e0f72b60ca8c3341aced89f3dbb829c5c4549cae37abd86a8270c3a8f172b51a';
    var signer = new __1.LocalSigner(privKey);
    var message = "hello word";
    var sig = signer.sign(message);
    var verified = __1.LocalSigner.verifyEccSignature(message, sig, pubKey);
    expect(verified).toBe(true);
});
