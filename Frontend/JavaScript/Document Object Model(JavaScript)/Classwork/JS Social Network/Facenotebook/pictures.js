function PictureOne(index){
    this.profilepicture = false;
    this.id = index;
    this.url = "img/placeholder_ad.png";
}
function PictureTwo(index){
    this.profilepicture = false;
    this.id = index;
    this.url = "img/logo3.png";
}
function PictureThree(index){
    this.profilepicture = false;
    this.id = index;
    this.url = "img/logo2.png";
}
function PictureFour(index){
    this.profilepicture = false;
    this.id = index;
    this.url = "img/logo1.png";
}

function Profilepicture(){
    this.url = "img/placeholder_ad.png";
    this.altText = "Lorem ipsum dolor sit amet consectetur adipisicing elit";
    this.profilepicture = true;
}
PictureOne.prototype = new Profilepicture();
