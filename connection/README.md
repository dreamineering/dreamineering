# Connection

Use NX and Next.js to build multiple applications that drive human connection from a shared library of reusable components.

```bash
npx nx serve shadcn-default --port 3001
```

```bash
npx nx serve demo-scaffold-eth --port 3000
```

Starter

```bash
npx nx serve mates
```

## NX

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

### Generate code

TODO: Investigate using with AI Prompts / AIDER

If you use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Create

### Apps

Best practice example.

```bash
nx g @nx/next:application demo-chainlink-functions --directory=apps/examples/chainlink/functions --dryRun
```

### Libs

Todo: Decision tree for Next vs Node

```bash
nx g @nx/next:library shared-ui-shadcn --directory libs/shared/ui-shadcn  --dryRun
```

## Move

### Projects

```bash
nx g mv --project mates --destination apps/project/mates --dryRun
```

```bash
nx g mv --project demo-chainlink-functions apps/examples/chainlink/functions --dryRun --verbose
```

## Remove

```bash
nx g rm --project mates-e2e
```
