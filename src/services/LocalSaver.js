/* eslint-disable no-prototype-builtins */
import { ACTION_LIST } from '../consts/eventBusConsts'
import { generateKey } from '../helpers'

// TODO:
// 1. Добавить игнор лист (в виде функции)
// 2. Сделать функцию очистки для одного события
// 3. Сделать отдельные события для синхронизации
class LocalSaver {
  _bus = {}
  _listeners = {}

  constructor(bus) {
    this._bus = bus
    this.subscribeOnAllEvents()
  }

  subscribeOnAllEvents() {
    let { makeCast, _listeners, _bus } = this

    for (let action of ACTION_LIST) {
      let unsub = _bus.subscribe(action, makeCast.bind(this, action))
      _listeners[action] = unsub
    }
  }

  unsubscribeFromAllEvents() {
    let { _listeners } = this
    for (let unsub of _listeners) {
      unsub()
    }
  }

  makeCast(action, data) {
    let prepared = JSON.stringify(data)
    let key = generateKey(action, data)

    console.debug('To save:', { data, key })
    localStorage.setItem(key, prepared)
  }

  clear() {
    this.unsubscribeFromAllEvents()
    localStorage.clear()
  }
}

export default LocalSaver
