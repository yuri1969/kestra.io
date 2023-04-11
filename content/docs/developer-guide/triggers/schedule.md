---
order: 1
---

# Schedule

```yaml
type: "io.kestra.core.models.triggers.types.Schedule"
```

> Kestra is able to trigger flows based on a Schedule (aka the time). If you need to wait for another system to be ready and cannot use any event mechanism, you can schedule one or more time the current flow.

## Example

> A schedule that runs every quarter of an hour.

```yaml
triggers:
  - id: schedule
    type: io.kestra.core.models.triggers.types.Schedule
    cron: "*/15 * * * *"
```

> A schedule that runs only the first monday of every month at 11 AM.
>
```yaml
triggers:
  - id: schedule
    type: io.kestra.core.models.triggers.types.Schedule
    cron: "0 11 * * 1"
    scheduleConditions:
      - type: io.kestra.core.models.conditions.types.DayWeekInMonthCondition
        date: "{{ trigger.date }}"
        dayOfWeek: "MONDAY"
        dayInMonth: "FIRST"
```

::alert{type="warning"}
Schedules **cannot overlap**. This means that we **cannot have any concurrent schedules**. If the previous schedule is not ended when the next one must start, the scheduler will wait until the end of the previous one. The same applies during backfills.
::

::alert{type="info"}
Most of the time, schedule execution will depend on the `trigger.date` (looking at files for today, SQL query with the schedule date in the where clause, ...). This works well but prevents you from executing your flow manually (since these variables are only available during the schedule).

You can use this expression to make your **manual execution work**: <code v-pre>{{ schedule.date ?? execution.startDate | date("yyyy-MM-dd") }}</code>. It will use the current date if there is no schedule date making it possible to start the flow manually.
::


## Backfill
Kestra will optionally handle schedule backfills. The concept of a backfill is the replay of a missed schedule because a flow was created after it should have been scheduled.

Backfills will perform all the schedules between the defined and current dates and will start after the normal schedule.

> A schedule with a backfill.

```yaml
triggers:
  - id: schedule
    type: io.kestra.core.models.triggers.types.Schedule
    cron: "*/15 * * * *"
    backfill:
      start: 2020-06-25T14:00:00Z
```


## Variables
When the flow is scheduled, some context variables are injected to allow flow customization (such as filename, where clause in SQL query, etc.).

| Parameter | Description |
| ---------- | ----------- |
|  <code v-pre>{{ trigger.date }}</code> | the date of the current schedule.
|  <code v-pre>{{ trigger.next }}</code> | the date of the next schedule.
|  <code v-pre>{{ trigger.previous }}</code> | the date of the previous schedule.


## Schedule Conditions
When the `cron` is not sufficient to determine the date you want to schedule your flow, you can use `scheduleConditions` to add some additional conditions, (for example, only the first day of the month, only the weekend, ...).
You **must** use the <code v-pre>{{ trigger.date }}</code> expression on the property `date` of the current schedule.
This condition will be evaluated and <code v-pre>{{ trigger.previous }}</code> and <code v-pre>{{ trigger.next }}</code> will reflect the date **with** the conditions applied.

The list of core conditions that can be used are:
 - [DateTimeBetweenCondition](/plugins/core/conditions/io.kestra.core.models.conditions.types.DateTimeBetweenCondition.md)
 - [DayWeekCondition](/plugins/core/conditions/io.kestra.core.models.conditions.types.DayWeekCondition.md)
 - [DayWeekInMonthCondition](/plugins/core/conditions/io.kestra.core.models.conditions.types.DayWeekInMonthCondition.md)
 - [NotCondition](/plugins/core/conditions/io.kestra.core.models.conditions.types.NotCondition.md)
 - [OrCondition](/plugins/core/conditions/io.kestra.core.models.conditions.types.OrCondition.md)
 - [WeekendCondition](/plugins/core/conditions/io.kestra.core.models.conditions.types.WeekendCondition.md)
 - [DayInMonthCondition](/plugins/core/conditions/io.kestra.core.models.conditions.types.DayInMonthCondition.md)


## Properties and Outputs

Check the [Schedule task](/plugins/core/triggers/io.kestra.core.models.triggers.types.Schedule.md) documentation for the complete list of the task properties and outputs.