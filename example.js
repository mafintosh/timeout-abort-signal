const t = require('./')

const ac = new AbortController()

const { signal } = t(ac.signal, 1000)

signal.addEventListener('abort', () => {
  console.log('....')
})

ac.abort()
