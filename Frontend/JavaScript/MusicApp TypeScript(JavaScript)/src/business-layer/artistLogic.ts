import {ArtistRepository} from "../repositories/artistRepository.js";
import {AlbumRepository} from "../repositories/albumRepository.js";

export class ArtistLogic {
    public artistRepo: ArtistRepository;
    public albumRepo: AlbumRepository;

    constructor() {
        this.artistRepo = new ArtistRepository();
        this.albumRepo = new AlbumRepository();
    }

    public getArtistPageData = async (artistName: string) => {
        var artist =  await this.artistRepo.getArtist(artistName);
        var albumNames = await this.artistRepo.getTopAlbumNames(artistName)
        var albums = await this.albumRepo.getAlbums(artistName, albumNames)
        
        var pageData = {
            artist: artist,
            albums: albums
        }
        return pageData;
    }
}