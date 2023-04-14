"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unload = void 0;
const Action_1 = require("@civ-clone/core-unit/Action");
const Moved_1 = require("@civ-clone/core-unit/Rules/Moved");
class Unload extends Action_1.default {
    perform() {
        this.unit().setWaiting();
        this.unit().cargo().forEach((unit) => {
            unit.moves().set(unit.movement());
            unit.activate();
        });
        this.ruleRegistry().process(Moved_1.default, this.unit(), this);
    }
}
exports.Unload = Unload;
exports.default = Unload;
//# sourceMappingURL=Unload.js.map