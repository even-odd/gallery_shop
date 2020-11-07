export function generateKey(action, data) {
  let idForKey = data.id ? `_ID:${data.id}` : ''
  let key = `${action}${idForKey}`

  return key
}

export function checkResponseStatus(response) {
  if (response.status !== 200 && response.status !== 201) {
    return Promise.reject(new Error(response.statusText))
  }

  return Promise.resolve(response)
}

export function formatPrice(price) {
  if (!price) return console.error('Invalid price', { price })

  const regExpPattern = /\d{1,3}/g

  let prepared = `${price}`,
    matches = _getMatches(prepared, regExpPattern)

  if (!matches.length) return price

  // console.debug('formatPrice: initial variables', {
  //   prepared,
  //   matches,
  // })

  let lastMatch = matches[matches.length - 1]
  if (lastMatch.length < 3) {
    let offset = lastMatch.length
    matches = _makeOffset(offset, matches)
  }

  let priceStr = matches.join(' ')
  return priceStr
}

function _getMatches(str, pattern) {
  if (!pattern.global) {
    console.error('_getMatches Error: Use _getMatches with "global" param!')
    return []
  }

  let matches = [],
    match = pattern.exec(str)

  while (match !== null) {
    matches.push(match[0])

    match = pattern.exec(str)
  }

  return matches
}

function _makeOffset(offset, rawArr) {
  let arr = [...rawArr]
  if (arr.length < 2) {
    return console.warn('Invalid arr to offset!', { offset, arr })
  }

  for (let i = 1, length = arr.length; i < length; ++i) {
    // debugger
    let prevItem = arr[i - 1]
    let startCopyIndex = prevItem.length - 1 - offset
    let toOffset = prevItem.slice(startCopyIndex)

    _updateArrValue(offset, i - 1, arr)

    arr[i] = `${toOffset}${arr[i]}`

    // console.debug('makeOffest: item', { prevItem, startCopyIndex, toOffset })
  }

  // console.debug('makeOffest: result arr', { arr })
  // console.debug('_________')

  return arr
}

function _updateArrValue(offset, index, arr) {
  let item = arr[index]
  arr[index] = item.slice(0, item.length - 1 - offset)
}
