## Parallel
* Doing mulitple tasks simultaneously
* Ways to achieve multithreading in js is promises and callbacks
* Saves time but takes resources

## Concurrent
* Doing one thing at a time
* Saves resources takes time

`JS is 100% singlethreaded`
`V8 is multithreaded`

## Event loop
```
|log  |
|print|  |print|
|add  |  |add  |  |add  |
|calc |  |calc |  |calc |  |calc |  |     |  |time |

call stack
```

```
____________
time
____________

callback queue
```