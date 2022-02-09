# typescript cli unit conversion spike

quick spike (~8 hours?) of creating a CLI for converting between units of measurements

0 runtime dependencies, 0 boilerplate, using some neat javascript native language constructs

## TLDR

- any env with nodejs LTS & pnpm should work
- [run this script in a *virtual env* to bootstrap your environment](https://github.com/noahehall/theBookOfNoah/blob/master/linux/.install_node.sh)

### Quickies

- install dependencies

- > pnpm i

- run app in dev mode

- > pnpm dev
- > pnpm test:ing

- build app for prod

- > pnpm build

- run app in prod mode

- > pnpm start
- > pnpm test:prod *(broken, should have went with uvu)*

## If i had another 8 hours?

- extracting the `readline` interface into a separate service and add a `readGUI` service enabling the application to run isomorphically
- finish tests for the happypath, and enhance testig infra to run unit tests in both prod & dev environments
- increase UX (cli output sucks, happy path should be more permissive) and completely move away from simple console logs
- setup vagrant for develop & docker for prod
- setup CI & CD to aws
