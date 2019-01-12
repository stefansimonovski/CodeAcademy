import {ArtistLogic} from "/business-layer/artistLogic.js";
import * as jquery from "/lib/jquery.js"

export function RenderArtist() {
    this.artistPageData = new ArtistLogic();
    this.artistData = {};
    this.newArtistData = {};

    this.renderAll = async function(hash) {
        this.artistData = await this.artistPageData.getArtistPageData(hash);
        var $mainContainer = $("#main-container").css("width", "80%").css("margin", "auto");
        
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
            .append(this.renderAlbums()))
    }
    this.renderArtistProfile = function(){
        console.log(this.artistData)
        return $("<div>")
                .css("display", "flex")
                .css("flex-direction", "column")
                .css("align-items", "center") 
            .append($("<h1>").html(this.artistData.artist.name))
            .append($("<img>").attr("src", this.artistData.artist.pictures[5]["#text"]));
    }
    this.renderSimilar = function(){
        var $similarContainer = $("<div>")
        var $similarArtistsContainer = $("<div>").css("width", "200px")
        $similarContainer
                    .css("display", "flex")
                    .css("flex-direction", "column")
                    .css("align-items", "center")
                .append($("<h1>")
                    .html("Similar"))
                .append($similarArtistsContainer)
            for(var i = 0; i < this.artistData.artist.similar.artist.length; i++){
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
                        .on("click", (event) => {
                            event.preventDefault();
                            $("#main-container").html("")
                            this.renderAll(event.target.text);
                        })
                    )
            }
        return $similarContainer;
    }
    this.renderBio = function(){
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
                                .css("justify-content", "space-between")
        $statsContainer
            .append($("<span>")
                .html("<b>Listeners:</b> " + this.artistData.artist.stats.listeners))
            .append($("<span>")
                .html("<b>Playcount:</b> "+ this.artistData.artist.stats.playcount))
        var $tagsContainer = $("<div>")
                                .css("display", "flex")
                                .css("justify-content", "space-between")
                                .css("width", "500px")
                                .css("align-items", "center")
                                .html("<b>Tags:</b> ")

        for(var i = 0; i < this.artistData.artist.tags.length; i++){
            $tagsContainer
                .append($("<span>")
                    .append($("<a>")
                        .html(this.artistData.artist.tags[i].name)
                        .attr("href", this.artistData.artist.tags[i].url)))
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
                                            .html(this.artistData.artist.bio.summary)))
        var $contentContainer = $("<div>")
                                    .css("margin-top", "50px")
                                    .append($("<span>")
                                        .append($("<h4>")
                                            .html("Content: "))
                                        .append($("<p>")
                                            .html(this.artistData.artist.bio.content)))
        $bioContainerTop.append($statsContainer).append($tagsContainer);
        $bioContainerBottom.append($summaryContainer).append($contentContainer)
        $bioContainer.append($bioContainerTop).append($bioContainerBottom)
        return $bioContainer;
    }
    this.renderAlbums = function(){
        moment.locale("mk"); 
        var $albumContainer = $("<div>")
                                .css("display", "flex")
                                .css("justify-content", "space-between")
        
        for(var i = 0; i < this.artistData.albums.length; i++){

            var $albumContent = $("<div>")
                                    .css("margin-top", "20px")
                                    .css("display", "flex")
                                    .css("flex-direction", "column")
                                    .html("<b>TRACKS:</b>")

            for(var j = 0; j < this.artistData.albums[i].tracks.length; j++){
                $albumContent.append($("<span>")
                                .html("<b>" + this.artistData.albums[i].tracks[j].name + "</b>")
                                .css("margin-top", "10px")
                                .css("display", "flex")
                                .css("flex-direction", "column")
                                    .append($("<span>")
                                        .html("<sub>Duration :" + this.artistData.albums[i].tracks[j].duration + "sec</sub>")))
            }
            $albumContainer.append($("<div>")
                                .attr("id", this.artistData.albums[i].name)
                                .css("display", "flex")
                                .css("flex-direction", "column")
                                .css("text-align", "center")
                                .append($("<h3>")
                                    .html(this.artistData.albums[i].name))
                                .append($("<img>")
                                    .attr("src",this.artistData.albums[i].picture[2]["#text"]))
                                .append($("<span>")
                                    .html("<b>Listeners: </b>" + this.artistData.albums[i].listeners))
                                .append($("<span>")
                                    .html("<b>Playcount: </b>" + this.artistData.albums[i].playcount))
                                .append($("<span>")
                                        .html("<b>Published:</b></br> " + moment(this.artistData.albums[i].published).format('llll'))
                                .append($albumContent)))
        }
        return $albumContainer
    }
    this.searchArtist = async function(){
        this.delayedInput = null;
        this.newArtistData = await this.artistPageData.searchArtist(this.artistPageData.artistLetters.join("").toString());
        console.log(this.newArtistData);
        $("#search-bar")
                .css("position", "relative")
                .append($("<div>")
                    .attr("id", "search-sugestion")
                    .css("position", "absolute")
                    .css("width", "200px")
                    .css("height", "300px")
                    .css("left", "0px")
                    .css("top", "20px")
                    .css("background-color", "green"))

        for(var i = 0; i < this.newArtistData.artist.length; i++){
            var $searchSugestion = $("#search-sugestion")
            
                var $bla = $("<div>")
                                .append($("<img>")
                                .attr("src", this.newArtistData.artist[i].image[0]["#text"]))
                                .append($("<span>")
                                .html(this.newArtistData.artist[i].name))
            $searchSugestion.append($bla)
        }
        
    }
    var that = this;
    this.delayedInput = null
    document.addEventListener("keypress", function(event){
        if(event.code == "Enter"){
            that.artistPageData.artistName = that.artistPageData.artistLetters.join("").toString()
            console.log(that.artistPageData.artistName)
            return
        }
        that.artistPageData.artistLetters.push(event.key)
        console.log(that.artistPageData.artistLetters)
        if(this.delayedInput != null){
            clearTimeout(this.delayedInput);
        }
            this.delayedInput = setTimeout(function(){
                that.searchArtist()
                
            }, 300)
    })
    
}