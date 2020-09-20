(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{434:function(t,s,e){"use strict";e.r(s);var a=e(25),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flow"}},[t._v("#")]),t._v(" Flow")]),t._v(" "),e("blockquote",[e("p",[t._v("Flow is the base of your workload, it defined all the tasks you want to do and theirs orders.")])]),t._v(" "),e("h2",{attrs:{id:"flow-sample"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flow-sample"}},[t._v("#")]),t._v(" Flow sample")]),t._v(" "),e("p",[t._v("The flow model is a yaml document describing how Kestra will schedule and compute your workload.")]),t._v(" "),e("p",[t._v("Here is a full sample flow demonstrating the flow definition."),e("br"),t._v("\nThe following code is a sample existing task in Kestra for testing purposes.")]),t._v(" "),e("h2",{attrs:{id:"flow-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flow-properties"}},[t._v("#")]),t._v(" Flow Properties")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" samples \n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.tests \n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("revision")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" \n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("value\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" STRING\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("required")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("variables")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("first")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("second")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{vars.first}} > 2"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("third")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{vars.second}} > 3"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" date \n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.tasks.debugs.Return \n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A log line content with a contextual date variable {{taskrun.startDate}}"')]),t._v(" \n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("errors")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" failed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("echo \n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.tasks.debugs.Echo  \n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" I'm failing "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("task.id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("listeners")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.models.conditions.types.ExecutionStatusCondition\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("in")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SUCCESS\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" execution"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("failed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("listener\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.tasks.scripts.Bash\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("commands")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(' echo "I\'m a listeners"\n\n'),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("triggers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" monthly\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.models.triggers.types.Schedule\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cron")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 1 * *\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backfill")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("start")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("2020-01-01T00:00:00+02:00")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("Field")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("id")])]),t._v(" "),e("td",[t._v("Flow identifier, must be unique across namespaces.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("namespace")])]),t._v(" "),e("td",[t._v("Each task live in one arbitrary namespace, this is useful for task organisation. Namespace is required.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("revision")])]),t._v(" "),e("td",[t._v("Flow version, handle internally by kestra, and will be incremented for each modifications save, not required since autogenerated.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("inputs")])]),t._v(" "),e("td",[t._v("List of inputs for current flow, more details "),e("RouterLink",{attrs:{to:"/docs/developer-guide/inputs/"}},[t._v("here")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("inputs.[].name")])]),t._v(" "),e("td",[t._v("The name for this inputs, allowing to use it as vars on the current flow")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("inputs.[].type")])]),t._v(" "),e("td",[t._v("The type for this inputs, for example (STRING, FILE, ...)")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("inputs.[].required")])]),t._v(" "),e("td",[t._v("If the input is required (and prevent flow to be executed without this input")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("variables")])]),t._v(" "),e("td",[t._v("A list of variables (as key, value) for the current flow that can be reach with "),e("code",{pre:!0},[t._v("{{ vars.name }}")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("tasks")])]),t._v(" "),e("td",[t._v("A list of related tasks the current flow, all tasks will be run sequentially.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("tasks.[].id")])]),t._v(" "),e("td",[t._v("The task id that must be "),e("strong",[t._v("unique")]),t._v(" for current flow.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("tasks.[].type")])]),t._v(" "),e("td",[t._v("The task type that is a full java class name.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("tasks.[].xxx")])]),t._v(" "),e("td",[t._v("Each task type come with specific specific field that is documented on "),e("RouterLink",{attrs:{to:"/plugins/"}},[t._v("plugins page")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("errors")])]),t._v(" "),e("td",[t._v("A list of errors tasks the current flow, all tasks will be run sequentially and will be run only if there is any error on the current execution.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("errors.[].xxx")])]),t._v(" "),e("td",[t._v("The same property as "),e("code",[t._v("tasks")]),t._v(", error can be any normal tasks, more details "),e("RouterLink",{attrs:{to:"/docs/developer-guide/errors-handling/"}},[t._v("here")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("listeners")])]),t._v(" "),e("td",[t._v("List of listeners for current flow, more details "),e("RouterLink",{attrs:{to:"/docs/developer-guide/listeners/"}},[t._v("here")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("listeners.[].condition")])]),t._v(" "),e("td",[t._v("The condition that will be valided in order to launch or skip this listeners")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("listeners.[].tasks.[].xxx")])]),t._v(" "),e("td",[t._v("The same property as "),e("code",[t._v("tasks")]),t._v(", the task to run for this listeners")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("triggers")])]),t._v(" "),e("td",[t._v("Triggers are external events (like date for example) to launch this jobs,more details "),e("RouterLink",{attrs:{to:"/docs/developer-guide/triggers/"}},[t._v("here")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("triggers.[].id")])]),t._v(" "),e("td",[t._v("The trigger id that must be unique and can't be updated.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("triggers.[].type")])]),t._v(" "),e("td",[t._v("The trigger type that is a full java class name.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("triggers.[].xxx")])]),t._v(" "),e("td",[t._v("Like task, each trigger have theirs properties")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);