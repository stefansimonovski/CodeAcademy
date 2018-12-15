function PageRenderer(data) {
    this.userData = data;
    this.renderAll = function() {
        var mainContainer = document.getElementById("main-container");
        mainContainer.style.display = "flex";
        mainContainer.style.width = "80%";
        mainContainer.style.margin = "auto";
        mainContainer.style.position = "relative";
        mainContainer.appendChild(this.renderLeft());
        mainContainer.appendChild(this.renderRight());
    }

    this.renderLeft = function() {
        var leftContainer = document.createElement("div");
        leftContainer.style.width = "35%";
        leftContainer.style.display = "flex";
        leftContainer.style.flexDirection = "column";

        var profileContainer = document.createElement("div");
        var profileImage = document.createElement("img");
        profileImage.style.width = "200px";
        profileImage.style.height = "200px";
        profileImage.src = this.userData.profilepicture[0].url;
        profileContainer.appendChild(profileImage);

        var aboutMeContainer = document.createElement("div");
        var aboutHeader = document.createElement("h1");
        aboutHeader.innerHTML = this.userData.biography.title;
        var aboutText = document.createElement("p");
        aboutText.innerHTML = this.userData.biography.about;
        
        aboutMeContainer.appendChild(aboutHeader);
        aboutMeContainer.appendChild(aboutText);

        leftContainer.appendChild(profileContainer);
        leftContainer.appendChild(aboutMeContainer);

        return leftContainer;
    }

    this.renderRight = function() {
        var rightContainer = document.createElement("div");
        rightContainer.style.width = "65%";
        rightContainer.style.display = "flex";
        rightContainer.style.flexDirection = "column";
        

        var pictureContainer = document.createElement("div");
        pictureContainer.style.width = "100%";
        pictureContainer.style.display = "flex";
        pictureContainer.style.flexWrap = "wrap";
        pictureContainer.style.height = "300px";
        pictureContainer.style.justifyContent = "space-between";
        
        this.pictures = function(){
            for(var i = 0; i < this.userData.pictures.length; i++){
                var picture = document.createElement("img");
                picture.className = "slide-pictures";
                picture.style.width = "calc(20% - 10px)";
                picture.style.height = "calc(50% - 10px)";
                
                picture.src = this.userData.pictures[i].url;
                picture.id = i;
                pictureContainer.appendChild(picture);
                var that = this;
                picture.addEventListener("click", function(event){
                    var newDiv = document.createElement("div");
                    newDiv.id = "popUpDiv";
                    newDiv.style.src = "popUp-pic-css.css";
                    var newImage = document.createElement("img");
                    newImage.src = that.userData.pictures[event.target.id].url;
                    console.log(event.target.id, that.userData.pictures[event.target.id].url)
                    newDiv.appendChild(newImage);
                    rightContainer.appendChild(newDiv);
                    
                    var slider1 = document.createElement("span");
                    slider1.innerHTML = "<";
                    slider1.style.fontSize = "100px";
                    slider1.style.position = "absolute";
                    slider1.style.top = "50%";
                    slider1.style.left = "-5%";
                    var slider2 = document.createElement("span");
                    
                    slider2.innerHTML = ">";
                    slider2.style.fontSize = "100px";
                    slider2.style.position = "absolute";
                    slider2.style.top = "50%";
                    slider2.style.right = "12%";
                    
                    slider1.addEventListener("click", function(){
                                   
                    })


                    newDiv.appendChild(slider1);
                    newDiv.appendChild(slider2);
                })
            }
        }

        

        this.pictures();
        
        var storiesContainer = document.createElement("span");


        this.stories = function(){
            for(var i = 0; i < 3; i++){
                var story = document.createElement("span");

                var aboutstory = document.createElement("h2");
                aboutstory.innerHTML = this.userData.stories[i].title;
                story.appendChild(aboutstory);

                var storytext = document.createElement("p");
                storytext.innerHTML = this.userData.stories[i].paragraph;
                story.appendChild(storytext);

                var storydate = document.createElement("p");
                storydate.innerHTML = this.userData.stories[i].date;
                story.appendChild(storydate);

                storiesContainer.appendChild(story);
            }
        }
        this.stories();


       
        rightContainer.appendChild(pictureContainer);
        rightContainer.appendChild(storiesContainer);
        return rightContainer;
    }
}