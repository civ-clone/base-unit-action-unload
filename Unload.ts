import Action from '@civ-clone/core-unit/Action';
import { ITransport } from '@civ-clone/core-unit-transport/Transport';
import Moved from '@civ-clone/core-unit/Rules/Moved';
import Unit from '@civ-clone/core-unit/Unit';

export class Unload extends Action {
  perform() {
    this.unit().setWaiting();

    (this.unit() as Unit & ITransport).cargo().forEach((unit: Unit): void => {
      unit.moves().set(unit.movement());
      unit.activate();
    });

    this.ruleRegistry().process(Moved, this.unit(), this);
  }
}

export default Unload;
