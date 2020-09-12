---
order: 2
---

# Orchestrate your flow

In kestra, we orchestrate your workflow with `Flowable Tasks`. These tasks don't compute any things but allow you to build more complex workflow. 
Like branching, doing tasks in parallel, ... 

Flowable mostly use context with [variables](../variables) in order to define next tasks.
For example, you can use the [outputs](../outputs) of a variables to do `Switch` to defined the next tasks.

Here is the current list of `Flowable Tasks`

## Sequential

This flow processes tasks ones after others sequentially. 
Mostly use in order to group tasks.

```yaml
id: sequential
namespace: org.kestra.tests
revision: 8
tasks:
  - id: sequential
    type: org.kestra.core.tasks.flows.Sequential
    tasks:
      - id: 1st
        type: org.kestra.core.tasks.debugs.Return
        format: "{{task.id}} > {{taskrun.startDate}}"
      - id: 2nd
        type: org.kestra.core.tasks.debugs.Return
        format: "{{task.id}} > {{taskrun.id}}"
  - id: last
    type: org.kestra.core.tasks.debugs.Return
    format: "{{task.id}} > {{taskrun.startDate}}"
```

## Parallel

This flow processes tasks in parallel. It makes it convinient to process many tasks at once.

```yaml
id: parallel
namespace: org.kestra.tests
revision: 8
tasks:
  - id: parallel
    type: org.kestra.core.tasks.flows.Parallel
    tasks:
      - id: 1st
        type: org.kestra.core.tasks.debugs.Return
        format: "{{task.id}} > {{taskrun.startDate}}"
      - id: 2nd
        type: org.kestra.core.tasks.debugs.Return
        format: "{{task.id}} > {{taskrun.id}}"
  - id: last
    type: org.kestra.core.tasks.debugs.Return
    format: "{{task.id}} > {{taskrun.startDate}}"
```

## Switch

This flow processes some tasks conditionnaly depending on a contextual value. 
In this case, an input value will trigger only some parts of the flow.

```yaml
id: switch
namespace: org.kestra.tests

inputs:
  - name: string
    type: STRING
    required: true

tasks:
  - id: switch
    type: org.kestra.core.tasks.flows.Switch
    value: "{{inputs.string}}"
    cases:
      FIRST:
        - id: 1st
          type: org.kestra.core.tasks.debugs.Return
          format: "{{task.id}} > {{taskrun.startDate}}"
      SECOND:
        - id: 2nd
          type: org.kestra.core.tasks.debugs.Return
          format: "{{task.id}} > {{taskrun.startDate}}"
      THIRD:
        - id: 3th
          type: org.kestra.core.tasks.debugs.Return
          format: "{{task.id}} > {{taskrun.startDate}}"
    defaults:
      - id: default
        type: org.kestra.core.tasks.debugs.Return
        format: "{{task.id}} > {{taskrun.startDate}}"
```

## EachSequential

This flow will generate many tasks at runtime depending on a value field. 
Here this field is satic, but it can be generated from a previous task output and 
trigger an arbitrary number of sub tasks. Each subtasks will run after others sequentially. 

```yaml
id: each
namespace: org.kestra.tests
revision: 8
tasks:
  - id: each
    type: org.kestra.core.tasks.flows.EachSequential
    value: '["value 1", "value 2", "value 3"]'
    tasks:
      - id: 1st
        type: org.kestra.core.tasks.debugs.Return
        format: "{{task.id}} > {{taskrun.value}} > {{taskrun.startDate}}"
      - id: 2nd
        type: org.kestra.core.tasks.debugs.Return
        format: "{{task.id}} > {{taskrun.value}} > {{taskrun.startDate}}"
  - id: last
    type: org.kestra.core.tasks.debugs.Return
    format: "{{task.id}} > {{taskrun.startDate}}"
```

## Flow

This flow will trigger another one. 
This allows to decouple the first one from the second one and to monitor each flows individually.

```yaml
id: each
namespace: org.kestra.tests
revision: 8
tasks:
  - id: "subflow"  
    namespace: org.kestra.tests
    flowId: my-sub-flows
    inputs:
      file: "{{ outputs.my-task.files.resolver' }}"
      store: 12
```