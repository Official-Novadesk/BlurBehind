import { addon, widgetWindow } from "novadesk";

var win = new widgetWindow({
    id: "addon-test",
    x: 100,
    y: 100,
    width: 400,
    height: 400,
    backgroundColor: "rgba(10,10,10,0.5)",
    script: "script.ui.js"
});

const blur = addon.load("../dist/x64/Debug/BlurBehind/BlurBehind.dll");
if (blur) {
    var hwnd = String(win.getHandle());
    console.log("Window Handle " + hwnd);
    var applied = blur.apply(hwnd, "blur", "round");
    console.log("apply result: " + applied);
    console.log("Addon loaded successfully");
    console.log("Addon API: " + Object.keys(blur));
}
