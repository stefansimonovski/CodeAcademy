export class Artist {
    public name: string;
    public bio: string;
    public album: string;

    constructor(params: any) {
        this.name = params.name;
        this.bio = params.bio;
        this.album = params.album;
    }
}