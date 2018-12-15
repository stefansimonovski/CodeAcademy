function Picture(index){
    this.profilepicture = false;
    this.id = index;
    this.url = "img/placeholder_ad.png";
}

function Profilepicture(){
    this.url = "img/placeholder_ad.png";
    this.altText = "Lorem ipsum dolor sit amet consectetur adipisicing elit";
    this.profilepicture = true;
}
Picture.prototype = new Profilepicture();