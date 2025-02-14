---
title: Namespace Files
---

## What are Namespace Files

Namespace Files are files tied to a given namespace. You can think of Namespace Files as equivalent of a project in your local IDE or a copy of your Git repository. Namespace Files can hold Python modules, R or Node.js scripts, SQL queries, configuration files, and many more. You can synchronize your Git repository with a specific namespace to orchestrate dbt projects, Terraform or Ansible infrastructure, or any other project that contains code and configuration files.

---

## Why use Namespace Files

Namespace Files offer a simple way to organize your code and configuration files. Before Namespace Files, you had to store your code and configuration files in a Git repository and then clone that repository at runtime using the `git.Clone` task. With Namespace Files, you can store your code and configuration files directly in the Kestra's internal storage backend. That storage backend can be your local directory or an S3 bucket to ensure maximum security and privacy.

Namespace Files make it easy to:
- orchestrate Python, R, Node.js, SQL, and more, without having to worry about code dependencies, packaging and deployments — simply add your code in the embedded Visual Studio Code Editor or sync your Git repository with a given namespace
- manage your code for a given project or team in one place, even if those files are stored in different Git repositories, or even different Git providers
- share your code and configuration files between workflows and team members in your organization
- orchestrate complex projects that require the code to be separated into multiple scripts, queries or modules.

---

## How to add Namespace Files

### Embedded Visual Studio Code Editor

The easiest way to get started with Namespace Files is to use the embedded Visual Studio Code Editor. This embedded IDE allows you to easily add custom scripts, queries and configuration files along with your flow YAML configuration files.

Get started by selecting a namespace from the dropdown menu. If you type a name of a namespace that doesn't exist yet, Kestra will create it for you.

Then, add a new file, e.g., a Python script. Add a folder named `scripts` and a file called `hello.py` with the following content:

```python
print("Hello from the Editor!")
```

Once you added a file, you can use it in your flow. Try adding a new flow named `editor.yml` in the `_flows`directory and paste the following content (*adjust the name of the `namespace` if needed*):

```yaml
id: editor
namespace: dev

tasks:
  - id: hello
    type: io.kestra.plugin.scripts.python.Script
    script: "{{ read('scripts/hello.py') }}"
```

The `read` function allows you to read any file from the namespace as a string. You can also execute your flows directly from the Code Editor by clicking on the Execute button. See the [How to use Namespace Files in your flows](#how-to-use-namespace-files-in-your-flows) section for more details.

The `Execute` button allows you to run your flow directly from the Code Editor. Click on the `Execute` button to run your flow. You should then see the Execution being created in a new browser tab and once you navigate to the `Logs` tab, you should see a friendly message ``Hello from the Editor!`` in the logs.

::alert{type="warning"}
Note that if you use the [Brave browser](https://brave.com/), you may need to disable the Brave Shields to make the Editor work as expected. Specifically, to view the task documentation, you need to set the `Block cookies` option to `Disabled` in the Shields settings: `brave://settings/shields`.

![Brave cookies](/docs/developer-guide/namespace-files/brave.png)

::


### GitHub Actions CI/CD

You can leverage our official GitHub Action called [deploy-action](https://github.com/kestra-io/deploy-action) to synchronize your Git repository with a given namespace. This is useful if you want to orchestrate complex Python modules, dbt projects, Terraform or Ansible infrastructure, or any other project that contains code and configuration files with potentially multiple nested directories and files.

Here is a simple example showing how you can deploy all scripts from the `scripts` directory in your Git branch to the `prod` namespace:

```yaml
name: Kestra CI/CD
on:
  push:
    branches:
      - main
jobs:
  prod:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: deploy-scripts-to-prod
        uses: kestra-io/deploy-action@master
        with:
          resource: namespace_files
          namespace: prod
          directory: ./scripts # directory in the Git repository
          to: ./scripts # remote directory in the namespace
          server: https://demo.kestra.io/
          user: your_username
          password: ${{secrets.KESTRA_PASSWORD}}
```

::alert{type="info"}
When creating a service account role for the GitHub Action in the [Enterprise Edition](https://kestra.io/enterprise), you need to grant the `FLOW` permission to the Role.
::


### Terraform Provider

You can use the `kestra_namespace_file` resource from the official [Kestra Terraform Provider](../11.terraform/index.md) to deploy all your custom script files from a specific directory to a given Kestra namespace.

Here is a simple example showing how you can synchronize an entire directory of scripts from the directory `src` with the `prod` namespace using Terraform:

```terraform
resource "kestra_namespace_file" "prod_scripts" {
  for_each  = fileset(path.module, "src/**")
  namespace = "prod"
  filename   = each.value # or "/${each.value}"
  content   = file(each.value)
}
```

### Deploy Namespace Files from Git via CLI

You can also use the Kestra CLI to deploy all your custom script files from a specific directory to a given Kestra namespace. Here is a simple example showing how you can synchronize an entire directory of local scripts with the `prod` namespace using the Kestra CLI:

```bash
./kestra namespace files update prod /Users/anna/gh/KESTRA_REPOS/scripts --server=http://localhost:8080 --user=rick:password
```

In fact, you can even use that command directly in a flow. You can attach a schedule or a webhook trigger to automatically execute that flow anytime you push/merge changes to your Git repository, or on a regular schedule.

Here is an example of a flow that synchronizes an entire directory of local scripts with the `prod` namespace:

```yaml
id: ci
namespace: prod

variables:
  host: http://host.docker.internal:28080/

tasks:
  - id: deploy
    type: io.kestra.core.tasks.flows.WorkingDirectory
    tasks:
      - id: clone
        type: io.kestra.plugin.git.Clone
        url: https://github.com/kestra-io/scripts
        branch: main

      - id: deploy_files
        type: io.kestra.plugin.scripts.shell.Commands
        warningOnStdErr: false
        runner: PROCESS
        commands:
          - /app/kestra namespace files update prod . . --server={{vars.host}}
```

Note that the two dots in the command `/app/kestra namespace files update prod . .` indicate that we want to sync an entire directory of files cloned from the Git repository to the root directory of the `prod` namespace. If you wanted to e.g. sync that repository to the `scripts` directory, you would use the following command: `/app/kestra namespace files update prod . scripts`. The syntax of that command follows the structure:

```bash
/app/kestra namespace files update <namespace> <local_directory> <remote_directory>
```

To reproduce that flow, start Kestra using the following command:

```bash
docker run --pull=always --rm -it -p 28080:8080  kestra/kestra:develop-full  server local
```

Then, open the Kestra UI at http://localhost:28080 and create a new flow with the content above. Once you execute the flow, you should see the entire directory from the `scripts` repository being synchronized with the `prod` namespace.

---

## How to use Namespace Files in your flows

There are multiple ways to use Namespace Files in your flows. You can use the `read()` function to read the content of a file as a string, or you can point to the file path in the supported tasks.

Usually, pointing to a file location, rather than reading the file's content, is required when you want to use a file as an input to a CLI command, e.g. in a `Commands` task such as `io.kestra.plugin.scripts.python.Commands` or `io.kestra.plugin.scripts.node.Commands`. In all other cases, the `read()` function can be used to read the content of a file as a string e.g. in `Query` or `Script` tasks.

You can also use the `io.kestra.core.tasks.flows.WorkingDirectory` task to read namespace files there and then use them in child tasks that require reading the file path in CLI commands e.g. `python scipts/hello.py`.


### The `read()` function

Note how the script in the first section used the `read()` function to read the content of the `scripts/hello.py` file as a string using the expression `"{{ read('scripts/hello.py') }}"`. It'a important to remeber that this function reads **the content of the file as a string**. Therefore, you should use that function only in tasks that expect a string as an input, e.g., `io.kestra.plugin.scripts.python.Script` or `io.kestra.plugin.scripts.node.Script`, rather than `io.kestra.plugin.scripts.python.Commands` or `io.kestra.plugin.scripts.node.Commands`.

The `read()` function allows you to read the content of a Namespace File stored in the Kestra's internal storage backend. The `read()` function takes a single argument, which is the absolute path to the file you want to read. The path must point to a file stored in the **same namespace** as the flow you are executing.

