---
id: usage
title: Usage
sidebar_position: 3
---

## Creating a new tasks.toml file

You can create a new `tasks.toml` file in the current directory with:

```shell
tsk --init
```

## Specifying the task file location

By default, `tsk` will look for a `tasks.toml` file in your present working directory. If one isn't found, it will recursively look in parent directories.

If you want to be explicit, `-f`/`--file` can be used to specify the location of the task file.

```shell
> tsk --file path/to/tasks.toml --list
```

:::warning
If the file can't be found, `tsk` exits 2 and will display an error.
:::

## Identifying the tasks.toml being used

tsk can print the path to the tasks.toml it finds with `--which`. This can be useful if there's ambiguiity about which tasks.toml is being used.

```shell
> tsk --which
/path/to/tasks.toml
```

## Listing tasks

`-l`/`--list` displays the tasks in a task file.

### Filtering tasks

Add `-F`/`--filter` to filter the list to only tasks matching the supplied regex.

```shell
> tsk --filter <filter-regex> --list
```

:::note
`--filter` only has meaning when used with `--list`
:::

## Environment Variables

Like you may or may not expect, tsk will pass along the parent environment's env to the task's env. You can add or customize a task's environment with the following options.

### `env`

Env vars can be set at the top level of the tasks.toml:
```toml title="tasks.toml"
env = {NAME = "nate"}

[tasks.hello]
cmds = ["echo hello $NAME"]
```

Or specific to a task:
```toml title="tasks.toml"
[tasks.hello]
env = {NAME = "nate"}
cmds = ["echo hello $NAME"]
```

### `dotenv`

Env vars can also be set via a dotenv file at the top level of the tasks.toml:
```toml title="tasks.toml"
dotenv = ".env"

[tasks.hello]
cmds = ["echo hello $NAME"]
```

Or specific to a task:
```toml title="tasks.toml"
[tasks.hello]
dotenv = ".env"
cmds = ["echo hello $NAME"]
```

### Variable Hierarchy

Environment variables are loaded in the following order. Items lower in the list override locations appearing higher.

- the top-level `env` key
- the top-level `dotenv` key
- `tasks.<task_name>.env`
- the parent process, e.g., MY_VAR=hey tsk ...
- `tasks.<task_name>.dotenv`

### Pure tasks

"Pure" tasks do not inherit their parent environment (with the exceptions of `$USER` and `$HOME`, which are always inherited). You can set a task's `pure` attribute to `true` if a task should always be pure, or use the `--pure` CLI option to enable this as a one-off.

## Run a task from a subdirectory

The `dir` attribute is used to control the directory a task runs in.

```toml
[tasks.pwd]
cmds = ['echo "my pwd is $(pwd)"']
dir = /tmp
````

## Implicitly running a script

Omit the `cmds` attribute to execute a script, `tsk/<task-name>`, instead.

:::info
The script must be executable and should include a hashbang.
:::

:::info
Your script doesn't have to be shell. Any valid hashbang will work, provided you have the necessary tools installed.
:::

## Dependencies

A task may include one or more task names in a `deps` attribute. Dependencies are just other tasks and can have deps of their own, etc.

```toml title="tasks.toml"
[tasks.a]
deps = [["b"]] # b will run first
cmds = ["echo task A"]

[tasks.b]
cmds = ["echo task B"]
```

### Dependency Groups

You may have noticed that `deps` is an array of arrays. Each nested array is a "dependency group". Dependency groups are one of `tsk`'s core features. Individual dependencies within a dependency group are exeucted in *parallel*, while entire dependency groups are executed *sequentially*. We can visualize this with the following example:

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
## Passing arguments from the command line

`tsk` supports limited templating of the `tasks.toml` file.

Additional input passed at the CLI after `--` can be templated into `tasks.toml` via the `CLI_ARGS` variables and using Go templates.

```toml
[task.example]
cmds = ['echo "{{.CLI_ARGS}}"']
```

```shell
> tsk example -- hello world
hello world
```

## Support for TOML 1.1.0

tsk suppports upcoming TOML 1.1 features, notably the ability to split inline tables across multiple lines and include trailing commas. This can be useful for clearly expressing your tasks. The following tasks snippets are equivalent,

```toml
# standard table syntax
[tasks.example]
...
[tasks.example.env]
a = "a"
b = "b"
```

```toml
# standard inline table syntax
[tasks.example]
env = {a = "a", b = "b"}
...
```

```toml
# toml 1.1 inline table syntax
[tasks.example]
env = {
  a = "a",
  b = "b",
}
...
```
