---
id: installation
title: Installation
sidebar_position: 1
---

## Homebrew

For Linux and macOS users, the simplest method is to install via Homebrew.

```
brew install notnmeyer/tsk/tsk
```

## GitHub Releases

Download your platform's relevant binary from the [releases](https://github.com/notnmeyer/tsk/releases) page.

:::note Note for macOS users
The tsk binary uses an ad-hoc signature and is not notarized by Apple. If you download the binary tarball with Safari it will be quarantined. You can either bypass the quarantine with the usual methods, or download the release from the terminal with cURL, wget, etc.

See the `install_release` task in [notnmeyer/tsk](https://github.com/notnmeyer/tsk) for an example of the latter.
:::

## Source

The only dependency necessary to build `tsk` is Go. Clone the repo and run:

```shell
go build -v cmd/tsk/tsk.go -o bin/tsk
```

If you have an earlier version of `tsk` available, you can save a couple keystrokes:

```shell
tsk build
```

The `tsk` binary will be located at `./bin/tsk` and can be placed somewhere in your `$PATH`.
