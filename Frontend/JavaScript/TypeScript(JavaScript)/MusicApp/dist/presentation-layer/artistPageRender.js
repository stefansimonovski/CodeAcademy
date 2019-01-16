"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var artistLogic_js_1 = require("/business-layer/artistLogic.js");
function RenderArtist() {
    this.artistPageData = new artistLogic_js_1.ArtistLogic();
    this.artistData = {};
    this.newArtistData = {};
    this.renderAll = function (hash) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, $mainContainer;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.artistPageData.getArtistPageData(hash)];
                    case 1:
                        _a.artistData = _b.sent();
                        $mainContainer = $("#main-container").css("width", "80%").css("margin", "auto");
                        $mainContainer
                            .append($("<div>")
                            .attr("id", "search-bar")
                            .append($("<input>")
                            .attr("value", " ")
                            .attr("id", "search")
                            .attr("type", "text")
                            .css("width", "200px"))
                            .append($("<button>")
                            .html("Search")))
                            .append($("<div>")
                            .attr("id", "header")
                            .css("display", "flex")
                            .css("justify-content", "space-between")
                            .append(this.renderArtistProfile())
                            .append(this.renderSimilar()))
                            .append($("<div>")
                            .attr("id", "main")
                            .append(this.renderBio()))
                            .append($("<div>")
                            .attr("id", "albums")
                            .append(this.renderAlbums()));
                        return [2 /*return*/];
                }
            });
        });
    };
    this.renderArtistProfile = function () {
        console.log(this.artistData);
        return $("<div>")
            .css("display", "flex")
            .css("flex-direction", "column")
            .css("align-items", "center")
            .append($("<h1>").html(this.artistData.artist.name))
            .append($("<img>").attr("src", this.artistData.artist.pictures[5]["#text"]));
    };
    this.renderSimilar = function () {
        var _this = this;
        var $similarContainer = $("<div>");
        var $similarArtistsContainer = $("<div>").css("width", "200px");
        $similarContainer
            .css("display", "flex")
            .css("flex-direction", "column")
            .css("align-items", "center")
            .append($("<h1>")
            .html("Similar"))
            .append($similarArtistsContainer);
        for (var i = 0; i < this.artistData.artist.similar.artist.length; i++) {
            $similarArtistsContainer
                .append($("<div>")
                .attr("id", this.artistData.artist.similar.artist[i].name)
                .css("display", "flex")
                .css("align-items", "center")
                .css("justify-content", "space-between")
                .append($("<img>")
                .attr("src", this.artistData.artist.similar.artist[i].image[1]["#text"]))
                .append($("<a>")
                .html(this.artistData.artist.similar.artist[i].name)
                .attr("href", "#"))
                .on("click", function (event) {
                event.preventDefault();
                $("#main-container").html("");
                _this.renderAll(event.target.text);
            }));
        }
        return $similarContainer;
    };
    this.renderBio = function () {
        var $bioContainer = $("<div>");
        var $bioContainerTop = $("<div>")
            .css("display", "flex")
            .css("align-items", "center")
            .css("justify-content", "space-between")
            .css("margin-top", "30px")
            .css("margin-bottom", "50px");
        var $statsContainer = $("<div>")
            .css("display", "flex")
            .css("width", "300px")
            .css("align-items", "center")
            .css("justify-content", "space-between");
        $statsContainer
            .append($("<span>")
            .html("<b>Listeners:</b> " + this.artistData.artist.stats.listeners))
            .append($("<span>")
            .html("<b>Playcount:</b> " + this.artistData.artist.stats.playcount));
        var $tagsContainer = $("<div>")
            .css("display", "flex")
            .css("justify-content", "space-between")
            .css("width", "500px")
            .css("align-items", "center")
            .html("<b>Tags:</b> ");
        for (var i = 0; i < this.artistData.artist.tags.length; i++) {
            $tagsContainer
                .append($("<span>")
                .append($("<a>")
                .html(this.artistData.artist.tags[i].name)
                .attr("href", this.artistData.artist.tags[i].url)));
        }
        var $bioContainerBottom = $("<div>")
            .html("<h2>Biography:</h2>")
            .css("text-align", "center");
        var $summaryContainer = $("<div>")
            .css("margin-top", "50px")
            .append($("<span>")
            .append($("<h4>")
            .html("Summary: "))
            .append($("<p>")
            .html(this.artistData.artist.bio.summary)));
        var $contentContainer = $("<div>")
            .css("margin-top", "50px")
            .append($("<span>")
            .append($("<h4>")
            .html("Content: "))
            .append($("<p>")
            .html(this.artistData.artist.bio.content)));
        $bioContainerTop.append($statsContainer).append($tagsContainer);
        $bioContainerBottom.append($summaryContainer).append($contentContainer);
        $bioContainer.append($bioContainerTop).append($bioContainerBottom);
        return $bioContainer;
    };
    this.renderAlbums = function () {
        moment.locale("mk");
        var $albumContainer = $("<div>")
            .css("display", "flex")
            .css("justify-content", "space-between");
        for (var i = 0; i < this.artistData.albums.length; i++) {
            var $albumContent = $("<div>")
                .css("margin-top", "20px")
                .css("display", "flex")
                .css("flex-direction", "column")
                .html("<b>TRACKS:</b>");
            for (var j = 0; j < this.artistData.albums[i].tracks.length; j++) {
                $albumContent.append($("<span>")
                    .html("<b>" + this.artistData.albums[i].tracks[j].name + "</b>")
                    .css("margin-top", "10px")
                    .css("display", "flex")
                    .css("flex-direction", "column")
                    .append($("<span>")
                    .html("<sub>Duration :" + this.artistData.albums[i].tracks[j].duration + "sec</sub>")));
            }
            $albumContainer.append($("<div>")
                .attr("id", this.artistData.albums[i].name)
                .css("display", "flex")
                .css("flex-direction", "column")
                .css("text-align", "center")
                .append($("<h3>")
                .html(this.artistData.albums[i].name))
                .append($("<img>")
                .attr("src", this.artistData.albums[i].picture[2]["#text"]))
                .append($("<span>")
                .html("<b>Listeners: </b>" + this.artistData.albums[i].listeners))
                .append($("<span>")
                .html("<b>Playcount: </b>" + this.artistData.albums[i].playcount))
                .append($("<span>")
                .html("<b>Published:</b></br> " + moment(this.artistData.albums[i].published).format('llll'))
                .append($albumContent)));
        }
        return $albumContainer;
    };
    this.searchArtist = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, i, $searchSugestion, $bla;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.delayedInput = null;
                        _a = this;
                        return [4 /*yield*/, this.artistPageData.searchArtist(this.artistPageData.artistLetters.join("").toString())];
                    case 1:
                        _a.newArtistData = _b.sent();
                        console.log(this.newArtistData);
                        $("#search-bar")
                            .css("position", "relative")
                            .append($("<div>")
                            .attr("id", "search-sugestion")
                            .css("position", "absolute")
                            .css("width", "auto")
                            .css("height", "auto")
                            .css("left", "0px")
                            .css("top", "20px")
                            .css("background-color", "white")
                            .css("padding", "0px 20px 10px 20px")
                            .css("box-shadow", "3px 3px 7px #777"));
                        for (i = 0; i < this.newArtistData.artist.length; i++) {
                            $searchSugestion = $("#search-sugestion");
                            $bla = $("<div>")
                                .css("margin-top", "10px")
                                .append($("<img>")
                                .attr("src", this.newArtistData.artist[i].image[0]["#text"]))
                                .append($("<span>")
                                .html(this.newArtistData.artist[i].name));
                            $searchSugestion.append($bla);
                        }
                        this.artistPageData.artistLetters = [];
                        return [2 /*return*/];
                }
            });
        });
    };
    var that = this;
    this.delayedInput = null;
    document.addEventListener("keypress", function (event) {
        if (event.code == "Enter") {
            that.artistPageData.artistName = that.artistPageData.artistLetters.join("").toString();
            console.log(that.artistPageData.artistName);
            return;
        }
        that.artistPageData.artistLetters.push(event.key);
        console.log(that.artistPageData.artistLetters);
        if (this.delayedInput != null) {
            clearTimeout(this.delayedInput);
            $("#search-bar div").remove();
        }
        this.delayedInput = setTimeout(function () {
            that.searchArtist();
        }, 300);
    });
}
exports.RenderArtist = RenderArtist;
