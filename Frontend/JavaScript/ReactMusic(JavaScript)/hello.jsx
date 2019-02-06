class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {artist: {name: "Initial entry"}}
    }

    getArtist(artistName) {
        fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist="+
        artistName + 
         "&api_key=d3e7cbd8223a021b7efdce3f7c547977&format=json").then((response)=>{
             response.json().then((result)=>{
                result.artist.image = result.artist.image[2]["#text"];
                result.artist.similar = result.artist.similar.artist;
                this.setState(state => ({
                    previousState: state,
                    artist: result.artist
                }));
                console.log("fetch", this.state);
             })
         })
    }

    changeArtist(artistName) {
        this.getArtist(artistName);
    }

    previousArtist() {
        this.setState(state => ({
            previousState:  state.previousState.previousState,
            artist: state.previousState.artist,
            nextState: state
        }));
    }

    nextArtist() {
        this.setState(state => ({
            previousState: state,
            artist: state.nextState.artist,
            nextState: state.nextState.nextState ? state.nextState.nextState : state.nextState
        }));
    }

    componentDidMount() {
        this.getArtist("Ceca");
    }

    render() {
        if (this.state.artist.bio) {
            const similarArtists = this.state.artist.similar.map((artist) => {
                return <li><button onClick={(e) => this.changeArtist(artist.name)}>{artist.name}</button></li>;
            });
            console.log("similar", similarArtists);
            return(
                <div>
                    <div>Hello, React worksssss!</div>
                    <img src={this.state.artist.image} />
                    <div>{this.state.artist.name}</div>
                    <ul>{similarArtists}</ul>
                    <button onClick={(e) => this.previousArtist()}>Go Back</button>
                    <button onClick={(e) => this.nextArtist()}>Go Forward</button>
                </div>
            )
        } else {
            return(
                <div>
                    <div>Hello, React worksssss!</div>
                </div>)
        }
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById("main-container")
)


