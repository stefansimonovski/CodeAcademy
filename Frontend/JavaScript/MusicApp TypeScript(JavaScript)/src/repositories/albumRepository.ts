import {Album} from "../entities/album.js";

export class AlbumRepository {
    public getAlbums = async function(artist: string, albums: Album[]) {
        const result: any[] = [];
        try {
            for (let index = 0; index < albums.length; index++) {
                const album = albums[index];
                var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=album.getInfo&artist="+ artist + "&album=" + album + "&api_key=d3e7cbd8223a021b7efdce3f7c547977&format=json");
                var albumData = await response.json();
                result.push(new Album(albumData.album));
            }
            return result;
        } catch (error) {
            return result;
        }
    }
}