---
id: home
title: tsk
sidebar_position: 1
sidebar_label: Home
---

## The Basics

`tsk` is a simple task-runner and build tool with opinions. Writing shell and templating in YAML and TOML is awful. `tsk` allows you to do both of these, so it is also awful. However, `tsk` is opinonated about how and where you do those things. Does that make it less awful? Nah.

`tsk` uses TOML to describe units of work called, bear with me, "tasks". By default, your tasks live in a file named `tasks.toml`. A task is composed of at least one command. For example:

```toml title="tasks.toml"
[tasks.hello]
cmds = ["echo Hello, World!"]
```

Running this task does what you'd expect:

```shell
➜ tsk hello
Hello, World!
```

Nothing Earth shattering here. What seperates `tsk` from some other tools is how it handles dependencies and how it encourages you to _not_ write extensive shell within your `tasks.toml` file.

## Dependencies

A task can include one or more task names in a `deps` attribute. Depedencies hich are other tasks that must execute successful before Dependent relationships are expressed via a task's `deps` attribute.

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

You may have noticed that `deps` is an array of arrays. Dependency groups are one of `tsk`'s key features. Individual dependencies within a dependency group are exeucted in *parallel*, while entire dependency groups are executed *sequentially*. We can visualize this with the following example:

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

## Avoiding
