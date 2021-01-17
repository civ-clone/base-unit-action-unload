import Action from '@civ-clone/core-unit/Action';
import NavalTransport from '@civ-clone/base-unit-type-naval-transport/NavalTransport';
import Unit from '@civ-clone/core-unit/Unit';

export class Unload extends Action {
  perform() {
    this.unit().setWaiting();
    (this.unit() as NavalTransport)
      .cargo()
      .forEach((unit: Unit): void => unit.activate());
  }
}

export default Unload;
