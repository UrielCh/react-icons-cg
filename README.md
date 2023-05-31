# css.gg icons for deno / Preact

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/astrit/css.gg](https://github.com/astrit/css.gg)

[See available icons here](https://react-icons.deno.dev/cg)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/cg":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-cg@1.0.8/mod.ts",
    "react-icons/cg/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-cg@1.0.8/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib cg

```ts
import { CgAbstract } from "https://deno.land/x/react_icons_cg@1.0.8/mod.ts"
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

