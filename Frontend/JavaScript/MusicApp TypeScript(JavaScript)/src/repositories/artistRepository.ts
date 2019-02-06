import {Artist} from "../entities/artist.js";

export class ArtistRepository {
    public getArtist = async (artistName: string) => {
        var result = null;
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist="+ artistName + "&api_key=d3e7cbd8223a021b7efdce3f7c547977&format=json");
            result = await response.json();
            return new Artist(result.artist);
        } catch (error) {
            return result;
        }
    }
    public getTopAlbumNames = async function (artistName: string) {
        var result = null;
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist="+ artistName + "&api_key=d3e7cbd8223a021b7efdce3f7c547977&format=json&limit=5");
            result = await response.json();
            return result.topalbums.album.map(function(album: any) {
                return album.name;
            })
        } catch (error) {
            return result;
        }
    }
}