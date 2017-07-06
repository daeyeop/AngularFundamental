"use strict";
var protractor_1 = require('protractor');
var Ng2FundamentalsCompleteCliPage = (function () {
    function Ng2FundamentalsCompleteCliPage() {
    }
    Ng2FundamentalsCompleteCliPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    Ng2FundamentalsCompleteCliPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return Ng2FundamentalsCompleteCliPage;
}());
exports.Ng2FundamentalsCompleteCliPage = Ng2FundamentalsCompleteCliPage;
//# sourceMappingURL=app.po.js.map