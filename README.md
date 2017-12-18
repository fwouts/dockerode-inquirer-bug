# dockerode-inquirer-bug

```shell
$ webpack && node dist/main.js
Hash: 7e52ffc1af1d434b0e17
Version: webpack 3.10.0
Time: 1672ms
      Asset     Size  Chunks                    Chunk Names
    main.js  1.58 MB       0  [emitted]  [big]  main
main.js.map  1.93 MB       0  [emitted]         main
  [13] (webpack)/buildin/module.js 517 bytes {0} [built]
  [53] ./src/main.js 342 bytes {0} [built]
    + 166 hidden modules
? Message (Use arrow keys)
❯ a
  b
  c
internal/streams/legacy.js:59
      throw er; // Unhandled stream error in pipe.
      ^

Error: Unexpected "\u001b" at position 0 in state START
    at Parser.proto.charError (/Users/work/GitHub/exp-inquirer/dist/main.js:44846:16)
    at Parser.proto.write (/Users/work/GitHub/exp-inquirer/dist/main.js:44874:23)
    at Stream.<anonymous> (/Users/work/GitHub/exp-inquirer/dist/main.js:44583:12)
    at Stream.stream.write (/Users/work/GitHub/exp-inquirer/dist/main.js:20957:11)
    at ReadStream.ondata (_stream_readable.js:642:20)
    at ReadStream.emit (events.js:164:20)
    at addChunk (_stream_readable.js:265:12)
    at readableAddChunk (_stream_readable.js:252:11)
    at ReadStream.Readable.push (_stream_readable.js:209:10)
    at TTY.onread (net.js:598:20)
```
