/* eslint-disable no-prototype-builtins */
import { ACTION_LIST } from '../consts/eventBusConsts'
import { generateKey } from '../helpers'

class Synchronizer {
  static instanse = null

  static getInstanse() {
    if (!Synchronizer.instanse) {
      Synchronizer.instanse = new Synchronizer()
    }
    return Synchronizer.instanse
  }

  constructor() {}

  getData(action, toSyncKeys) {
    if (!toSyncKeys || !toSyncKeys.length) {
      return console.warn('Empty sync array', { action })
    }

    // eslint-disable-next-line no-debugger
    if (!ACTION_LIST.includes(action.type)) return

    let key = generateKey(action.type, action)
    console.debug('key for getDate', {
      key,
      storage: JSON.stringify(localStorage),
    })
    if (!localStorage.hasOwnProperty(key)) return

    let allData = this._takeAllData(key),
      composed = this._composeData(allData, toSyncKeys)

    console.debug('sync', {
      key,
      composed,
    })

    return composed
  }

  // Warn: MUTATION
  // Небольшая тулза для удобства
  updateData(self, composed) {
    // Как-то не очень
    for (let key in composed) {
      if (!composed.hasOwnProperty(key)) continue
      if (!self.hasOwnProperty(key)) continue

      // console.debug('product key', { key, data: composed[key] })
      self[key] = composed[key]
    }
  }

  _takeAllData(key) {
    let persisted = localStorage.getItem(key),
      prepared = JSON.parse(persisted)

    return prepared
  }

  _composeData(data, toSyncKeys) {
    let composed = {}

    for (let key in data) {
      if (!data.hasOwnProperty(key)) continue
      if (!toSyncKeys.includes(key)) continue

      composed[key] = data[key]
    }

    return composed
  }
}

export default Synchronizer
