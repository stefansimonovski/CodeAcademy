"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Album(params) {
    this.name = params.name;
    this.listeners = params.listeners;
    this.playcount = params.playcount;
    this.tracks = params.tracks.track;
    this.picture = params.image;
    // this.published = params.wiki.published
    // this.summary = params.wiki.summary
}
exports.Album = Album;
