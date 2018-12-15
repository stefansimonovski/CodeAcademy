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

                    var sliderleft = document.createElement("span");
                    sliderleft.innerHTML = "<";
                    sliderleft.style.fontSize = "100px";
                    sliderleft.style.position = "absolute";
                    sliderleft.style.top = "25%";
                    sliderleft.style.left = "-5%";

                    newDiv.appendChild(sliderleft);

                    var imgSlide = parseInt(event.target.id);

                    
                    sliderleft.addEventListener("click", function(){
                        newImage.id = imgSlide;
                        if(imgSlide == 0){
                            imgSlide = 9;
                        }else if(imgSlide <= 9){
                            imgSlide--;
                        }
                        console.log(imgSlide);
                    })

                    var newImage = document.createElement("img");
                    newImage.src = that.userData.pictures[event.target.id].url;
                    newImage.id = that.userData.pictures[event.target.id].id;
                    console.log("Picture id =", event.target.id)
                    newDiv.appendChild(newImage);
                    rightContainer.appendChild(newDiv);
                    
                    

                    var slideright = document.createElement("span");
                    slideright.innerHTML = ">";
                    slideright.style.fontSize = "100px";
                    slideright.style.position = "absolute";
                    slideright.style.top = "25%";
                    slideright.style.right = "12%";

                    slideright.addEventListener("click", function(){
                        newImage.id = imgSlide;
                        if(imgSlide == 9){
                            imgSlide = 0;
                        }else if(imgSlide >= 0){
                            imgSlide++;
                        }
                        console.log(imgSlide);
                    })


                    
                    newDiv.appendChild(slideright);
                })
            }
        }

        

        this.pictures();
        
        var storiesContainer = document.createElement("span");


        this.stories = function(){
            for(var i = 0; i < this.userData.stories.length; i++){

                var story = document.createElement("span");
                story.id = i;

                var aboutstory = document.createElement("h2");
                aboutstory.innerHTML = this.userData.stories[i].title;
                story.appendChild(aboutstory);

                var storytext = document.createElement("p");
                storytext.innerHTML = this.userData.stories[i].paragraph;
                story.appendChild(storytext);

                var storydate = document.createElement("p");
                storydate.innerHTML = this.userData.stories[i].date;
                story.appendChild(storydate);
                
                var button = document.createElement("button");
                button.innerHTML = "Delete Story";
                var that = this;
                button.addEventListener("click", function(event){
                    event.target.parentNode.style.display = "none";
                    delete that.userData.stories[event.target.parentNode.id];
                    console.log(that.userData.stories);
                })

                story.appendChild(button);
                storiesContainer.appendChild(story);
            }
            
            
        }
        this.stories();


       
        rightContainer.appendChild(pictureContainer);
        rightContainer.appendChild(storiesContainer);
        return rightContainer;
    }
}