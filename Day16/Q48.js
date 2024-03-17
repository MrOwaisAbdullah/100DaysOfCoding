var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var lapPrice1 = [15000, 80000, 140000];
var lapPrice2 = [7000, 50000, 200000];
var price = __spreadArray(__spreadArray([], lapPrice1, true), lapPrice2, true).sort(function (a, b) { return a - b; });
console.log(price);
