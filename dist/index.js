"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getIndex(target, array, startIndex, endIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    if (endIndex === void 0) { endIndex = 0; }
    if (endIndex === 0)
        endIndex = array.length - 1;
    while (startIndex <= endIndex) {
        var middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (array[middleIndex] === target) {
            return middleIndex;
        }
        array[middleIndex] < target
            ? startIndex = middleIndex + 1
            : endIndex = middleIndex - 1;
    }
    return -1;
}
exports.default = getIndex;
