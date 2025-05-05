module.exports = function timeoutSignal (signal, timeout) {
  if (typeof signal === 'number') return timeoutSignal(null, signal)

  const ac = new AbortController()
  const timer = timeout ? setTimeout(() => ac.abort(), timeout) : null

  if (!signal) {
    return {
      signal: ac.signal,
      destroy: () => clearTimeout(timer)
    }
  }

  const destroy = () => {
    signal.removeEventListener('abort', destroy)
    clearTimeout(timer)
  }

  signal.addEventListener('abort', () => {
    ac.abort()
    destroy()
  })

  return {
    signal: ac.signal,
    destroy
  }
}
