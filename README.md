# timeout-abort-signal

Wrap an abort signal to support timeouts.
You can prop do with AbortSignal.any but if not avail v hard!

```
npm install timeout-abort-signal
```

## Usage

``` js
const timeoutAbortSignal = require('timeout-abort-signal')

const { signal, destroy } = timeoutAbortSignal()
```

## License

MIT
