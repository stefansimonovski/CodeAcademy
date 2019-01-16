"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var artistPageRender_js_1 = require("/presentation-layer/artistPageRender.js");
function main() {
    var renderer = new artistPageRender_js_1.RenderArtist();
    if (window.location.hash) {
        var hash = window.location.hash.substring(1);
        renderer.renderAll(hash);
    }
    else {
        renderer.renderAll("Cher");
    }
}
main();
