# css.gg icons for deno / Preact

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/astrit/css.gg](https://github.com/astrit/css.gg)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=cg)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/cg":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-cg@1.0.3/mod.ts",
    "react-icons/cg/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-cg/ico/",
  }
}
```

## Direct import sample

```ts
import { CgAbstract } from "https://deno.land/x/react_icons_cg@1.0.3/mod.ts"
```

## import_map import sample

```ts
import { CgAbstract } from "react-icons/cg"
```

## minimal import

```ts
import { CgAbstract } from "react-icons/cg/CgAbstract.ts"
```

## minimal import using default export

```ts
import CgAbstract from "react-icons/cg/CgAbstract.ts"
```

