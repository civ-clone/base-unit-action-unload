"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unload = void 0;
const Action_1 = require("@civ-clone/core-unit/Action");
class Unload extends Action_1.default {
    perform() {
        this.unit().setWaiting();
        this.unit()
            .cargo()
            .forEach((unit) => unit.activate());
    }
}
exports.Unload = Unload;
exports.default = Unload;
//# sourceMappingURL=Unload.js.map