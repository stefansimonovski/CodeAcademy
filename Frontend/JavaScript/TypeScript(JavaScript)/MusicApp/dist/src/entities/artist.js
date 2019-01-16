"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Artist(params) {
    this.name = params.name;
    this.bio = params.bio;
    this.pictures = params.image;
    this.similar = params.similar;
    this.stats = params.stats;
    this.tags = params.tags.tag;
}
exports.Artist = Artist;
