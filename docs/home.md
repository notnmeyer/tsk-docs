---
id: home
title: The Basics
sidebar_position: 2
sidebar_label: The Basics
---

`tsk` is a simple task-runner and build tool with opinions.  `tsk` uses TOML to describe units of work called, bear with me, "tasks". By default, your tasks live in a file named `tasks.toml`. A task is typically composed of one or more commands. For example:

```toml title="tasks.toml"
[tasks.hello]
cmds = ["echo Hello, World!"]
```

Running this task does what you'd expect:

```shell
➜ tsk hello
Hello, World!
```

Nothing Earth shattering here. What seperates `tsk` from other tools is how it handles dependencies and how it encourages you to _not_ write extensive shell within your task definitions.

## Dependencies

A task can include one or more task names in a `deps` attribute. Dependencies are just regular tasks and can have deps of their own, etc.

```toml title="tasks.toml"
[tasks.hello]
deps = [["sponsor"]]
cmds = ["echo Hello, World!"]

[tasks.sponsor]
cmds = ['echo But first a word from our sponsor!']
```

Now, running `hello` will first run `sponsor`:

```shell
➜ tsk hello
But first a word from our sponsor!
Hello, World!
```

### Dependency Groups

You may have noticed that `deps` is an array of arrays. Each nested array is a "dependency group". Dependency groups are one of `tsk`'s key features. Individual dependencies within a dependency group are exeucted in *parallel*, while entire dependency groups are executed *sequentially*. We can visualize this with the following example:

```toml
[tasks.a]
cmds = ["echo a"]

[tasks.b]
cmds = ["echo b"]

[tasks.c]
cmds = ["echo c"]

[tasks.main]
deps = [
  ["a", "b"], # a and b will run in parallel
  ["c"],      # c will run after one and two have finished
]
cmds = ["echo done"]
```

Running `main` we can see that task `b` finished before `a` and that both ran before `c`.

```shell
➜ tsk main
b
a
c
done
```

## Avoiding Shell in Config Files

Writing shell in configuration files sucks. Luckily, tsk makes it easy to avoid. If your task doesn't include a `cmds` attribute, tsk will look for and execute a script: `tsk/<task-name>`. If your task is more than a few commands or needs flow control, write a script!

```toml title="tasks.toml"
[tasks.no-script]
```

```shell
➜ tsk --list --filter no-script
[no-script]
  # will run `tsk/no-script.sh`
```
