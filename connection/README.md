# Connection

How will humans interface with technology to get things done?

## Convictions

Mass Onboarding to blockchain for the greater good requires real human connections.

1. Loyalty is valuable
2. Trust build loyalty

## Marketing

Games will form the glue that connect people to shape culture.

- Tokenized loyalty
- Proof of humanity
- AI driven strategy

[AI Marketing Agency](https://mm.dreamineering.com/docs/business/experiments/experiment-prettymint/)

## Best Practice Examples

Create a library of examples to establish patterns and contrast pros and cons of different architecture options.

Vercel [Platform](https://github.com/vercel/platforms)

### Nextjs Patterns

- [T3 Apps](https://mm.dreamineering.com/docs/engineering/software/sdk/nextjs/#t3-apps)
- [Shadcn Components](https://mm.dreamineering.com/docs/engineering/software/sdk/nextjs/nextjs-components/libraries/ui-components-shadcn)
- [Convex & AI](https://mm.dreamineering.com/docs/engineering/software/sdk/server-dev/backend-convex)

Maintain a reference to shadcn

```bash
npx nx serve shadcn-default --port 3001
```

T3 & Nextjs 14 Data Access

### RaaS / Eth Patterns

Scaffold Eth for quick exploration of ideas.

```bash
npx nx serve demo-scaffold-eth --port 3000
```

### Mono / Solana Patterns

- [ ] DePin Example

## Business Experiments

Create hackathon starting point with the assumption that every business/organisation/protocol requires

Account Abstraction signup/login.

1. Marketing Site(s)
   - Tokenized Loyalty
2. Domain Problem App
   - [Prompt Interface](https://github.com/rauchg/next-ai-news)
   - Mobile Interface (App Store Workaround?)

Backend Interfaces

1. AI / LLMs
2. Onchain
3. Traditional Offchain data

Starter

```bash
npx nx serve mates
```

## UI/UX

- [v0.dev](https://v0.dev/)

## Web3

[Blockchain Connections](https://updraft.cyfrin.io/courses/foundry/html-fund-me/summary)

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

### Editor Integration

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

### Deploy

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

### CI

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

### Connect

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
