/* eslint-disable no-prototype-builtins */
import consts from '../consts/eventBusConsts';

const { ACTION_LIST } = consts;

class PubSub {
  kek = {};

  constructor() {
    // this._prepareBus()
    console.debug('THIS', this);
  }

  // Небольшая тулза для удобства
  unsubListeners(listeners) {
    for (let unsub of listeners) {
      unsub();
    }
  }

  subscribe(action, callback) {
    let bus = this.bus;
    if (!bus.hasOwnProperty(action)) return { err: 'unknown event' };

    bus[action].push(callback);

    let callbackIndex = bus[action].length - 1;
    return this._unsubscribe(action, callbackIndex);
  }

  // data - по хорошему сделать типизируемой,
  // с помощью TypeScript, для каждого события
  dispatch(action, data) {
    console.debug('dispatch', { bus: this.bus, action, data });
    if (!this.bus.hasOwnProperty(action)) {
      return console.error('Unknown action type', { action });
    }

    let subcribers = this.bus[action];
    for (let notify of subcribers) {
      notify({ ...data });
    }
  }

  _prepareBus() {
    let bus = this.bus;

    for (let key of ACTION_LIST) {
      bus[key] = [];
    }
  }

  // Не самый лучший способ удаления.
  // Потом можно подумать
  _unsubscribe(action, callbackIndex) {
    let bus = this.bus;
    return (from) => {
      bus[action][callbackIndex] = null;
      console.log('unsubscribed', { action, from, callbackIndex });
    };
  }
}

export default PubSub;
