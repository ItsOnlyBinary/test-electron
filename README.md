## Electron `tls` module on windows not sending data in a timely fashion

* Start socket-listener with `node index.js`
* Start electron-app with `electron .`  (needs global electron install)

within the electron app click `connect` then `send message` a few times

First message is sent instantly but any subsequent messages seem to buffer in windows until the server writes to the socket.

within electron socket.write() returns `true` indicating the buffer was flushed, but the callback is not triggered.

# Unwanted behaviour on windows:
```
server listening 127.0.0.1:5734
socket open
data: test 1\r\n [8 bytes]
sending test
data: test 2\r\ntest 3\r\ntest 4\r\ntest 5\r\ntest 6\r\ntest 7\r\ntest 8\r\ntest 9\r\ntest 10\r\n [73 bytes]
```

# Expected behaviour (from mac os):
```
server listening 127.0.0.1:5734
socket open
data: test 1\r\n [8 bytes]
data: test 2\r\n [8 bytes]
data: test 3\r\n [8 bytes]
data: test 4\r\n [8 bytes]
data: test 5\r\n [8 bytes]
data: test 6\r\n [8 bytes]
data: test 7\r\n [8 bytes]
data: test 8\r\n [8 bytes]
sending test
data: test 9\r\n [8 bytes]
data: test 10\r\n [9 bytes]
data: test 11\r\n [9 bytes]
```
