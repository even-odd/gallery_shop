/* eslint-disable no-prototype-builtins */
import { ACTION_LIST } from '../consts/eventBusConsts'

// TODO:
// 1. Добавить игнор лист (в виде функции)
// 2. Сделать функцию очистки для одного события
// 3. Сделать отдельные события для синхронизации
class LocalSaver {
  _bus = {}
  _listeners = {}

  constructor(bus) {
    this._bus = bus
    this.syncronize()
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
    console.debug('To save:', { data, action })

    let prepared = JSON.stringify(data)
    localStorage.setItem(action, prepared)
  }

  syncronize() {
    console.debug({ storage: JSON.stringify(localStorage) })

    for (let key in localStorage) {
      if (!ACTION_LIST.includes(key)) continue
      if (!localStorage.hasOwnProperty(key)) continue

      let persisted = localStorage.getItem(key),
        prepared = JSON.parse(persisted)

      console.debug('sync', {
        key,
        persisted,
        prepared,
      })

      this._bus.dispatch(key, prepared)
    }
  }

  clear() {
    this.unsubscribeFromAllEvents()
    localStorage.clear()
  }
}

export default LocalSaver
