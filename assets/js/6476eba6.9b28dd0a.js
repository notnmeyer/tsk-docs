"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[722],{7493:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var t=s(4848),i=s(8453);const l={id:"usage",title:"Usage",sidebar_position:3},a=void 0,r={id:"usage",title:"Usage",description:"Creating a new tasks.toml file",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/tsk-docs/docs/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/notnmeyer/tsk-docs/docs/usage.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"usage",title:"Usage",sidebar_position:3},sidebar:"default",previous:{title:"Core Concepts",permalink:"/tsk-docs/docs/home"}},d={},o=[{value:"Creating a new tasks.toml file",id:"creating-a-new-taskstoml-file",level:2},{value:"Specifying the task file location",id:"specifying-the-task-file-location",level:2},{value:"Identifying the tasks.toml being used",id:"identifying-the-taskstoml-being-used",level:2},{value:"Listing tasks",id:"listing-tasks",level:2},{value:"Listing tasks in other formats",id:"listing-tasks-in-other-formats",level:3},{value:"Filtering tasks",id:"filtering-tasks",level:3},{value:"Environment Variables",id:"environment-variables",level:2},{value:"<code>env</code>",id:"env",level:3},{value:"<code>dotenv</code>",id:"dotenv",level:3},{value:"Variable Hierarchy",id:"variable-hierarchy",level:3},{value:"Pure tasks",id:"pure-tasks",level:3},{value:"Run a task from a subdirectory",id:"run-a-task-from-a-subdirectory",level:2},{value:"Implicitly running a script",id:"implicitly-running-a-script",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Dependency Groups",id:"dependency-groups",level:3},{value:"Passing arguments from the command line",id:"passing-arguments-from-the-command-line",level:2},{value:"Support for TOML 1.1.0",id:"support-for-toml-110",level:2}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"creating-a-new-taskstoml-file",children:"Creating a new tasks.toml file"}),"\n",(0,t.jsxs)(n.p,{children:["You can create a new ",(0,t.jsx)(n.code,{children:"tasks.toml"})," file in the current directory with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"tsk --init\n"})}),"\n",(0,t.jsx)(n.h2,{id:"specifying-the-task-file-location",children:"Specifying the task file location"}),"\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.code,{children:"tsk"})," will look for a ",(0,t.jsx)(n.code,{children:"tasks.toml"})," file in your present working directory. If one isn't found, it will recursively look in parent directories."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to be explicit, ",(0,t.jsx)(n.code,{children:"-f"}),"/",(0,t.jsx)(n.code,{children:"--file"})," can be used to specify the location of the task file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"> tsk --file path/to/tasks.toml --list\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["If the file can't be found, ",(0,t.jsx)(n.code,{children:"tsk"})," exits 2 and will display an error."]})}),"\n",(0,t.jsx)(n.h2,{id:"identifying-the-taskstoml-being-used",children:"Identifying the tasks.toml being used"}),"\n",(0,t.jsxs)(n.p,{children:["tsk can print the path to the tasks.toml it finds with ",(0,t.jsx)(n.code,{children:"--which"}),". This can be useful if there's ambiguiity about which tasks.toml is being used."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"> tsk --which\n/path/to/tasks.toml\n"})}),"\n",(0,t.jsx)(n.h2,{id:"listing-tasks",children:"Listing tasks"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-l"}),"/",(0,t.jsx)(n.code,{children:"--list"})," displays the tasks in a task file."]}),"\n",(0,t.jsx)(n.h3,{id:"listing-tasks-in-other-formats",children:"Listing tasks in other formats"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"tsk"})," can display available tasks in a variety of formats via ",(0,t.jsx)(n.code,{children:"--output <text|toml|json|md>"}),'. The default is "text".']}),"\n",(0,t.jsxs)(n.p,{children:["Also see ",(0,t.jsx)(n.code,{children:"tsk --help"})," for available formats."]}),"\n",(0,t.jsx)(n.h3,{id:"filtering-tasks",children:"Filtering tasks"}),"\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.code,{children:"-F"}),"/",(0,t.jsx)(n.code,{children:"--filter"})," to filter the list to only tasks matching the supplied regex."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"> tsk --filter <filter-regex> --list\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--filter"})," only has meaning when used with ",(0,t.jsx)(n.code,{children:"--list"})]})}),"\n",(0,t.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.code,{children:"tsk"})," makes the parent environment's env available to the task. You can add or customize a task's environment with the following options."]}),"\n",(0,t.jsx)(n.h3,{id:"env",children:(0,t.jsx)(n.code,{children:"env"})}),"\n",(0,t.jsx)(n.p,{children:"Env vars can be set at the top level of the tasks.toml:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="tasks.toml"',children:'env = {NAME = "nate"}\n\n[tasks.hello]\ncmds = ["echo hello $NAME"]\n'})}),"\n",(0,t.jsx)(n.p,{children:"Or specific to a task:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="tasks.toml"',children:'[tasks.hello]\nenv = {NAME = "nate"}\ncmds = ["echo hello $NAME"]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"dotenv",children:(0,t.jsx)(n.code,{children:"dotenv"})}),"\n",(0,t.jsx)(n.p,{children:"Env vars can also be set via a dotenv file at the top level of the tasks.toml:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="tasks.toml"',children:'dotenv = ".env"\n\n[tasks.hello]\ncmds = ["echo hello $NAME"]\n'})}),"\n",(0,t.jsx)(n.p,{children:"Or specific to a task:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="tasks.toml"',children:'[tasks.hello]\ndotenv = ".env"\ncmds = ["echo hello $NAME"]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"variable-hierarchy",children:"Variable Hierarchy"}),"\n",(0,t.jsx)(n.p,{children:"Environment variables are loaded in the following order. Items loaded later in the list override locations loaded earlier."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["the top-level ",(0,t.jsx)(n.code,{children:"env"})," key"]}),"\n",(0,t.jsxs)(n.li,{children:["the top-level ",(0,t.jsx)(n.code,{children:"dotenv"})," key"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"tasks.<task_name>.env"})}),"\n",(0,t.jsx)(n.li,{children:"the parent process, e.g., `MY_VAR=hey tsk ...``"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"tasks.<task_name>.dotenv"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"pure-tasks",children:"Pure tasks"}),"\n",(0,t.jsxs)(n.p,{children:['"Pure" tasks do not inherit their parent environment (with the exceptions of ',(0,t.jsx)(n.code,{children:"$USER"})," and ",(0,t.jsx)(n.code,{children:"$HOME"}),", which are always inherited). You can set a task's ",(0,t.jsx)(n.code,{children:"pure"})," attribute to ",(0,t.jsx)(n.code,{children:"true"})," if a task should always be pure, or use the ",(0,t.jsx)(n.code,{children:"--pure"})," CLI option to run tasks with a clean env."]}),"\n",(0,t.jsx)(n.h2,{id:"run-a-task-from-a-subdirectory",children:"Run a task from a subdirectory"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"dir"})," attribute is used to control the directory a task runs in."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:"[tasks.pwd]\ncmds = ['echo \"my pwd is $(pwd)\"']\ndir = /tmp\n"})}),"\n",(0,t.jsx)(n.h2,{id:"implicitly-running-a-script",children:"Implicitly running a script"}),"\n",(0,t.jsxs)(n.p,{children:["Omit the ",(0,t.jsx)(n.code,{children:"cmds"})," attribute to execute a script, ",(0,t.jsx)(n.code,{children:"tsk/<task-name>"}),", instead."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="tasks.toml"',children:"[tasks.no_cmd]\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\u279c tsk no_cmd\nHello from ./tsk/no_cmd!\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"The script must be executable and should include a hashbang."})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Your script doesn't have to be shell. Any valid hashbang will work, provided you have the necessary tools installed."})}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["A task may include one or more task names in a ",(0,t.jsx)(n.code,{children:"deps"})," attribute. Dependencies are just other tasks and can have deps of their own, etc."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="tasks.toml"',children:'[tasks.a]\ndeps = [["b"]] # b will run first\ncmds = ["echo task A"]\n\n[tasks.b]\ncmds = ["echo task B"]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"dependency-groups",children:"Dependency Groups"}),"\n",(0,t.jsxs)(n.p,{children:["You may have noticed that ",(0,t.jsx)(n.code,{children:"deps"}),' is an array of arrays. Each nested array is a "dependency group". Dependency groups are one of ',(0,t.jsx)(n.code,{children:"tsk"}),"'s core features. Individual dependencies within a dependency group are exeucted in ",(0,t.jsx)(n.em,{children:"parallel"}),", while entire dependency groups are executed ",(0,t.jsx)(n.em,{children:"sequentially"}),". We can visualize this with the following example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[tasks.a]\ncmds = ["echo a"]\n\n[tasks.b]\ncmds = ["echo b"]\n\n[tasks.c]\ncmds = ["echo c"]\n\n[tasks.main]\ndeps = [\n  ["a", "b"], # a and b will run in parallel\n  ["c"],      # c will run after the previous group finishes\n]\ncmds = ["echo done"]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"passing-arguments-from-the-command-line",children:"Passing arguments from the command line"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"tsk"})," supports limited templating of the ",(0,t.jsx)(n.code,{children:"tasks.toml"})," file."]}),"\n",(0,t.jsxs)(n.p,{children:["Additional input passed at the CLI after ",(0,t.jsx)(n.code,{children:"--"})," can be templated into ",(0,t.jsx)(n.code,{children:"tasks.toml"})," via the ",(0,t.jsx)(n.code,{children:"CLI_ARGS"})," variable."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:"[task.example]\ncmds = ['echo \"{{.CLI_ARGS}}\"']\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"> tsk example -- hello world\nhello world\n"})}),"\n",(0,t.jsx)(n.h2,{id:"support-for-toml-110",children:"Support for TOML 1.1.0"}),"\n",(0,t.jsx)(n.p,{children:"tsk suppports upcoming TOML 1.1 features, notably the ability to split inline tables across multiple lines and include trailing commas. This can be useful for clearly expressing your tasks. The following tasks snippets are equivalent,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'# standard table syntax\n[tasks.example]\n...\n[tasks.example.env]\na = "a"\nb = "b"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'# standard inline table syntax\n[tasks.example]\nenv = {a = "a", b = "b"}\n...\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'# toml 1.1 inline table syntax\n[tasks.example]\nenv = {\n  a = "a",\n  b = "b",\n}\n...\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(6540);const i={},l=t.createContext(i);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);