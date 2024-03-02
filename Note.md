## Init node project

npm i -y

npm i fastify env-schema @fastify/swagger nanoid@3.3.4 @fastify/type-provider-json-schema-to-ts @typegoose/typegoose mongoose @sinclair/typebox

npm i @types/node typescript @commitlint/config-conventional @commitlint/cli @commitlint/{cli,config-conventional} husky prettier vitest tsx -D

npx tsc --init

## Set outDir in tsconfig

## Husky && commitlint

- Make sure to initialize git in the project

git init

npx husky init

touch .husky/commit-msg

```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit ""
```

chmod a+x .husky/commit-msg

## Setup prettier

echo {}> .prettierrc.json

touch .prettierignore

touch .husky/pre-commit

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

chmod a+x .husky/pre-commit
