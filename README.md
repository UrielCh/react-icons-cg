# css.gg icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/cg)](https://jsr.io/@preact-icons/cg)

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/astrit/css.gg](https://github.com/astrit/css.gg)

[See available icons here](https://react-icons.deno.dev/cg)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/cg": "jsr:@preact-icons/cg@^1.0.11/mod.ts",
    "react-icons/cg/": "jsr:@preact-icons/cg@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib cg

```ts
import { CgAbstract } from "jsr:preact-icons/cg@1.0.11/mod.ts"
```

## import_map import an icon from all icons

```ts
import { CgAbstract } from "react-icons/cg"
```

## import a single icon, downloading just one icon

```ts
import { CgAbstract } from "react-icons/cg/CgAbstract.ts"
```

or using default export

```ts
import CgAbstract from "react-icons/cg/CgAbstract.ts"
```

