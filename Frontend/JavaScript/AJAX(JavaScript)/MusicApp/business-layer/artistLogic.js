import {ArtistRepository} from "/repositories/artistRepository.js";
import {AlbumRepository} from "/repositories/albumRepository.js"

export function ArtistLogic() {
    this.artistRepo = new ArtistRepository();
    this.albumRepo = new AlbumRepository();
    this.artistLetters = [];
    this.artistName = "";
    
    this.getArtistPageData = async function(hash) {
        var artist =  await this.artistRepo.getArtist(hash);
        var TopalbumNames = await this.artistRepo.getTopAlbums(hash);
        var albums = await this.albumRepo.getAlbums(hash, TopalbumNames)
        var pageData = {
            artist: artist,
            albums: albums
        }
        return pageData;
    }
    this.searchArtist = async function(artist){
        var artist = await this.artistRepo.searchArtist(artist);
        var pageData = {
            artist: artist.results.artistmatches.artist
        }
        return pageData;
    }
}