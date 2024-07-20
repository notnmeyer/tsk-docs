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

`-f`/`--file` can be used to specify the location of the task file. A task's directory defaults to the location of the task file.

```shell
> tsk --file path/to/tasks.toml --list
````

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

### "Pure" tasks

"Pure" tasks do not inherit their parent environment (with the exceptions of $USER and $HOME, which are always included). You can set an individual task's `pure` attribute to `true`, or use the `--pure` CLI option to enable this. 

## Run a task from a subdirectory

Set a task's `dir` attribute to control the directory a task runs in.

```toml
[tasks.pwd]
cmds = ['echo "my pwd is $(pwd)"']
dir = /tmp
````

## Implicitly running a script

Omit `cmds` to execute `scripts/<task-name>.sh` instead.

## Dependencies

## Passing arguments from the command line

Use `{{.CLI_ARGS}}`.

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
