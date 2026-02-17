# BlurBehind Addon

`BlurBehind` is a native Novadesk addon that applies Windows blur/acrylic effects to a target window using `HWND`.

## API

### `name()`
- Type: `string`
- Value: `"BlurBehind"`

### `version()`
- Type: `string`
- Example: `"2.0.0"`

### `apply(hwnd, type, corner)`
Apply blur/acrylic/disable effect to a window.

Parameters:
1. `hwnd`
- Type: `string | number`
- Required: `yes`
- Description: Target window handle.
- Accepted formats:
  - Hex string with prefix, e.g. `"0x00123456"`
  - Zero-padded hex string, e.g. `"0000000000290386"`
  - Numeric handle
- Default: none

2. `type`
- Type: `string`
- Required: `no`
- Allowed values:
  - `"blur"`
  - `"acrylic"`
  - `"none"` (or `"disabled"`)
- Default: `"blur"`

3. `corner`
- Type: `string`
- Required: `no`
- Allowed values:
  - `"round"`
  - `"roundsmall"`
  - `"none"`
- Default: no corner change

Returns:
- Type: `boolean`
- `true` when effect application succeeded
- `false` when apply operation failed

Example:
```js
const ok = addon.apply(
  hwnd,
  "blur",   // acrylic | blur | none
  "none"    // round | none | roundsmall
);
```

### `disable(hwnd)`
Disable effect for a window.

Parameters:
1. `hwnd`
- Type: `string | number`
- Required: `yes`
- Default: none

Returns:
- Type: `boolean`

Example:
```js
addon.disable(hwnd);
```

### `setCorner(hwnd, corner)`
Set only corner preference without changing blur/acrylic mode.

Parameters:
1. `hwnd`
- Type: `string | number`
- Required: `yes`
- Default: none

2. `corner`
- Type: `string`
- Required: `yes`
- Allowed values:
  - `"round"`
  - `"roundsmall"`
  - `"none"`

Returns:
- Type: `boolean`

Example:
```js
addon.setCorner(hwnd, "round");
```

## Full Usage Example

```js
var win = new widgetWindow({
  id: "blur-test",
  x: 100,
  y: 100,
  width: 400,
  height: 300,
  backgroundColor: "rgba(255,255,255,0.8)",
  script: "ui.js"
});

var addon = system.loadAddon("../dist/x64/Debug/BlurBehind/BlurBehind.dll");
if (addon) {
  var hwnd = String(win.getHandle());

  addon.apply(hwnd, "acrylic", "round");
  // addon.disable(hwnd);
  // addon.setCorner(hwnd, "none");
}
```

## Build

Requirements:
- Visual Studio 2019+ with C++ tools

Commands:
```powershell
cd D:\Novadesk-Project\BlurBehind
.\Build.ps1
.\Build.ps1 -Configuration Release
```

Output:
- `dist\x64\Debug\BlurBehind\BlurBehind.dll`
- `dist\x64\Release\BlurBehind\BlurBehind.dll`

## Notes

- Uses `SetWindowCompositionAttribute` and `DwmSetWindowAttribute` internally.
- Corner behavior depends on Windows/DWM behavior for the specific target window.

## License

See `LICENSE.txt`.
