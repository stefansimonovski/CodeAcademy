import {Album} from "/entities/album.js"

export function AlbumRepository(){

    this.getAlbums = async function(hashh, albumname){
        var result = [];
        try {
            for(var i = 0; i < albumname.length; i++){
                var album = albumname[i];
                var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=7aa71cb9c109a121032c506f18055880&artist=" + hashh + "&album=" + album + "&format=json");
                var albumData = await response.json();
                result.push(new Album(albumData.album))
            }
            return result;
        }  catch (error) {
            return result;
        }
    }
}