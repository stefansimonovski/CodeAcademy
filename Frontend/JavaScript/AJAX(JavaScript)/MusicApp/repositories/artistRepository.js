import {Artist} from "/entities/artist.js"

export function ArtistRepository() {
    this.getArtist = async function (hash) {
        var result = null;
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=" + hash + "&api_key=7aa71cb9c109a121032c506f18055880&format=json");
            result = await response.json();
            return new Artist(result.artist);
        } catch (error) {
            return result;
        }
    }
    this.getTopAlbums = async function(hash){
        var result = null;
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist="+ hash +"&api_key=7aa71cb9c109a121032c506f18055880&format=json&limit=5");
            result = await response.json();
            return result.topalbums.album.map(function(album){
               return album.name;
            })
        } catch (error){
            return result;
        }
        
    }
    
}