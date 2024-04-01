"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[722],{7493:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=s(4848),i=s(8453);const l={id:"usage",title:"Usage",sidebar_position:3},a=void 0,r={id:"usage",title:"Usage",description:"Creating a new tasks.toml file",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/tsk-docs/docs/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/notnmeyer/tsk-docs/docs/usage.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"usage",title:"Usage",sidebar_position:3},sidebar:"default",previous:{title:"The Basics",permalink:"/tsk-docs/docs/home"}},o={},c=[{value:"Creating a new tasks.toml file",id:"creating-a-new-taskstoml-file",level:2},{value:"Specifying the task file location",id:"specifying-the-task-file-location",level:2},{value:"Listing tasks",id:"listing-tasks",level:2},{value:"Filtering tasks",id:"filtering-tasks",level:3},{value:"Environment Variables",id:"environment-variables",level:2},{value:"<code>env</code>",id:"env",level:3},{value:"<code>dotenv</code>",id:"dotenv",level:3},{value:"Variable Hierarchy",id:"variable-hierarchy",level:3},{value:"&quot;Pure&quot; tasks",id:"pure-tasks",level:3},{value:"Run a task from a subdirectory",id:"run-a-task-from-a-subdirectory",level:2},{value:"Implicitly running a script",id:"implicitly-running-a-script",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Passing arguments from the command line",id:"passing-arguments-from-the-command-line",level:2},{value:"Support for TOML 1.1.0",id:"support-for-toml-110",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"creating-a-new-taskstoml-file",children:"Creating a new tasks.toml file"}),"\n",(0,t.jsxs)(n.p,{children:["You can create a new ",(0,t.jsx)(n.code,{children:"tasks.toml"})," file in the current directory with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"tsk --init\n"})}),"\n",(0,t.jsx)(n.h2,{id:"specifying-the-task-file-location",children:"Specifying the task file location"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-f"}),"/",(0,t.jsx)(n.code,{children:"--file"})," can be used to specify the location of the task file. A task's directory defaults to the location of the task file."]}),"\n",(0,t.jsx)(n.p,{children:"TODO: example"}),"\n",(0,t.jsx)(n.h2,{id:"listing-tasks",children:"Listing tasks"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-l"}),"/",(0,t.jsx)(n.code,{children:"--list"})," displays the tasks in a task file."]}),"\n",(0,t.jsx)(n.h3,{id:"filtering-tasks",children:"Filtering tasks"}),"\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.code,{children:"-F"}),"/",(0,t.jsx)(n.code,{children:"--filter"})," to filter the list to only tasks matching the supplied regex."]}),"\n",(0,t.jsx)(n.p,{children:"TODO: example"}),"\n",(0,t.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,t.jsx)(n.p,{children:"Like you may or may not expect, tsk will pass along the parent environment's env to the task's env. You can add or customize a task's environment with the following options."}),"\n",(0,t.jsx)(n.h3,{id:"env",children:(0,t.jsx)(n.code,{children:"env"})}),"\n",(0,t.jsx)(n.p,{children:"Env vars can be set at the top level of the tasks.toml:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="tasks.toml"',children:'env = {NAME = "nate"}\n\n[tasks.hello]\ncmds = ["echo hello $NAME"]\n'})}),"\n",(0,t.jsx)(n.p,{children:"Or specific to a task:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="tasks.toml"',children:'[tasks.hello]\nenv = {NAME = "nate"}\ncmds = ["echo hello $NAME"]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"dotenv",children:(0,t.jsx)(n.code,{children:"dotenv"})}),"\n",(0,t.jsx)(n.p,{children:"Env vars can also be set via a dotenv file at the top level of the tasks.toml:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="tasks.toml"',children:'dotenv = ".env"\n\n[tasks.hello]\ncmds = ["echo hello $NAME"]\n'})}),"\n",(0,t.jsx)(n.p,{children:"Or specific to a task:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="tasks.toml"',children:'[tasks.hello]\ndotenv = ".env"\ncmds = ["echo hello $NAME"]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"variable-hierarchy",children:"Variable Hierarchy"}),"\n",(0,t.jsx)(n.p,{children:"Environment variables are loaded in the following order. Items lower in the list override locations appearing higher."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["the top-level ",(0,t.jsx)(n.code,{children:"env"})," key"]}),"\n",(0,t.jsxs)(n.li,{children:["the top-level ",(0,t.jsx)(n.code,{children:"dotenv"})," key"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"tasks.<task_name>.env"})}),"\n",(0,t.jsx)(n.li,{children:"the parent process, e.g., MY_VAR=hey tsk ..."}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"tasks.<task_name>.dotenv"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"pure-tasks",children:'"Pure" tasks'}),"\n",(0,t.jsxs)(n.p,{children:['"Pure" tasks do not inherit their parent environment (with the exceptions of $USER and $HOME, which are always included). You can set an individual task\'s ',(0,t.jsx)(n.code,{children:"pure"})," attribute to ",(0,t.jsx)(n.code,{children:"true"}),", or use the ",(0,t.jsx)(n.code,{children:"--pure"})," CLI option to enable this."]}),"\n",(0,t.jsx)(n.h2,{id:"run-a-task-from-a-subdirectory",children:"Run a task from a subdirectory"}),"\n",(0,t.jsxs)(n.p,{children:["Set a task's ",(0,t.jsx)(n.code,{children:"dir"})," attribute to control the directory a task runs in."]}),"\n",(0,t.jsx)(n.p,{children:"TODO: example"}),"\n",(0,t.jsx)(n.h2,{id:"implicitly-running-a-script",children:"Implicitly running a script"}),"\n",(0,t.jsxs)(n.p,{children:["Omit ",(0,t.jsx)(n.code,{children:"cmds"})," to execute ",(0,t.jsx)(n.code,{children:"scripts/<task-name>.sh"})," instead."]}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsx)(n.h2,{id:"passing-arguments-from-the-command-line",children:"Passing arguments from the command line"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"{{.CLI_ARGS}}"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"support-for-toml-110",children:"Support for TOML 1.1.0"}),"\n",(0,t.jsx)(n.p,{children:"tsk suppports upcoming TOML 1.1 features, notably the ability to split inline tables across multiple lines and include trailing commas. This can be useful for clearly expressing your tasks. The following tasks snippets are equivalent,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'# standard table syntax\n[tasks.example]\n...\n[tasks.example.env]\na = "a"\nb = "b"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'# standard inline table syntax\n[tasks.example]\nenv = {a = "a", b = "b"}\n...\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'# toml 1.1 inline table syntax\n[tasks.example]\nenv = {\n  a = "a",\n  b = "b",\n}\n...\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(6540);const i={},l=t.createContext(i);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);