function Picture(){
    this.profilepicture = false;
}

function Profilepicture(){
    this.url = "www.google.com";
    this.altText = "Lorem ipsum dolor sit amet consectetur adipisicing elit";
    this.profilepicture = true;
}
Picture.prototype = new Profilepicture();