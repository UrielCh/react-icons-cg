# css.gg icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/cg)](https://jsr.io/@preact-icons/cg)

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/astrit/css.gg](https://github.com/astrit/css.gg)

[See available icons here](https://react-icons.deno.dev/cg)

## install the module

```bash
deno add @preact-icons/cg
dnpx jsr add @preact-icons/cg
pnpm dlx jsr add @preact-icons/cg
bunx jsr add @preact-icons/cg
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { CgAbstract } from "@preact-icons/cg"
```

## import a single icon, downloading just one icon

```ts
import { CgAbstract } from "react-icons/cg/CgAbstract"
```

or using default export

```ts
import CgAbstract from "react-icons/cg/CgAbstract"
```
