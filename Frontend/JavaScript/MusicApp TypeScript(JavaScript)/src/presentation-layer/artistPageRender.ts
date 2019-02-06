import {ArtistLogic} from "../business-layer/artistLogic.js";

export class RenderArtist {
    public artistPageData: ArtistLogic;
    public artistData: any = {};

    constructor() {
        this.artistPageData = new ArtistLogic();
    }

    public renderAll = async (artistName: string): Promise<any> => {
        this.artistData = await this.artistPageData.getArtistPageData(artistName);
        
        var $mainContainer = $("#main-container");
        $mainContainer
        .append(this.renderArtistProfile())
        .append(this.renderSimilar())
        .append(this.renderBio())
        .append(this.renderAlbums());
    }
    public renderArtistProfile = () => {
        console.log(this.artistData);
        return $("<img>");
    }
    public renderSimilar = function() {
        return $("<span>");
    }
    public renderBio = function() {
        return $("<p>");
    }
    public renderAlbums = function() {
        return $("<div>");
    }
}
