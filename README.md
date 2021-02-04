## Electron `tls` module on windows not sending data in a timely fashion

* Start socket-listener with `node index.js`
* Start electron-app with `electron .`  (needs global electron install)

within the electron app click `connect` then `send message` a few times

the socket-listener will only show the first message until it sends a test message after 6 seconds

```
server listening 127.0.0.1:5734
socket open
data: test 1\r\n [8 bytes]
sending test
data: test 2\r\ntest 3\r\ntest 4\r\ntest 5\r\ntest 6\r\ntest 7\r\ntest 8\r\ntest 9\r\ntest 10\r\n [73 bytes]
```

