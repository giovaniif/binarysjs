"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
describe("Binary", function () {
    it("should return -1 if target is not found", function () {
        var array = [1, 3, 7, 8];
        var target = 9;
        var result = index_1.getIndex(target, array);
        expect(result).toBe(-1);
    });
    it("should return the right index", function () {
        var array = [1, 3, 7, 8];
        var target = 7;
        var result = index_1.getIndex(target, array);
        expect(result).toBe(2);
    });
});
