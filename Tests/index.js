var win = new widgetWindow({
    id: "addon-test",
    x: 100,
    y: 100,
    width: 400,
    height: 400,
    backgroundColor: "rgba(10,10,10,0.5)",
    script: "ui.js"
});


var addon = system.loadAddon("../dist/x64/Debug/BlurBehind/BlurBehind.dll");

if (addon) {
    var hwnd = String(win.getHandle());
    console.log("Window Handle " + hwnd);
    var applied = addon.apply(hwnd, "blur", "round");
    console.log("apply result: " + applied);
    console.log("Addon loaded successfully");
    console.log("Addon API: " + Object.keys(addon));
}
