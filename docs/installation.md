---
id: installation
title: Installation
sidebar_position: 2
---

## Homebrew

```
brew install notnmeyer/tsk/tsk
```

## GitHub Releases

Download your platform's relevant binary from the [releases](https://github.com/notnmeyer/tsk/releases) page.

## Source

The only dependency necessary to build `tsk` is Go. Clone the repo and run:

```shell
go build -o bin/tsk -v cmd/tsk/tsk.go
```

If you have an earlier version of `tsk` available, you can save a couple keystrokes:

```shell
tsk build
```

The `tsk` binary will be located at `./bin/tsk` and can be placed somewhere in your `$PATH`.
