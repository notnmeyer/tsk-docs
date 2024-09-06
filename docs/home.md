---
id: home
title: Core Concepts
sidebar_position: 2
sidebar_label: Core Concepts
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
[tasks.a]
deps = [["b"]]
cmds = ["echo task A"]

[tasks.b]
cmds = ['echo task B']
```

Running `a` will first run `b`:

```shell
➜ tsk a
task b
task a
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
  ["c"],      # c will run after the previous group finishes
]
cmds = ["echo done"]
```

If you run `main` a few times you'll see that `a` and `b` consistently run before `c`.

```shell
➜ tsk main
b
a
c
done
```

:::tip
Remember that tasks within a dependency group *run in parallel* and may not finish in a consistent order. Place dependencies in different groups when the order they run matters.
:::
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
