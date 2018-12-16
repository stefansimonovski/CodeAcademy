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
                picture.style.cursor = "pointer";
                picture.style.width = "calc(20% - 10px)";
                picture.style.height = "calc(50% - 10px)";
                
                picture.src = this.userData.pictures[i].url;
                picture.id = i;
                pictureContainer.appendChild(picture);
                var that = this;
                picture.addEventListener("click", function(event){
                    var newDiv = document.createElement("div");
                    newDiv.id = "popUpDiv";
                    newDiv.style.position = "absolute";
                    newDiv.style.top = "5%";
                    newDiv.style.left = "10%";
                    newDiv.style.right = "10%";
                    newDiv.style.width = "80%";
                    newDiv.style.height = "700px";
                    newDiv.style.backgroundColor = "white";
                    
                    

                    var sliderleft = document.createElement("span");
                    sliderleft.style.cursor = "pointer";
                    sliderleft.style.position = "absolute";
                    sliderleft.style.top = "50%";
                    sliderleft.style.left = "-5%";

                    var leftArrow = document.createElement("img");
                    leftArrow.src = "img/left-arrow.png";
                    leftArrow.style.height = "50px";
                    leftArrow.style.width = "50px";


                    sliderleft.appendChild(leftArrow);
                    newDiv.appendChild(sliderleft);


                    var imgSlide = parseInt(event.target.id);


                    sliderleft.addEventListener("click", function(){
                        newImage.id = imgSlide;
                        
                        if(imgSlide <= 0){
                            imgSlide = 9;
                        }else if(imgSlide <= 9){
                            imgSlide--;
                        }
                        newImage.src = that.userData.pictures[imgSlide].url;
                        
                        console.log(imgSlide);
                    })

                    var newImage = document.createElement("img");
                    newImage.src = that.userData.pictures[event.target.id].url;
                    newImage.id = that.userData.pictures[event.target.id].id;
                    newImage.style.width = "100%";
                    newImage.style.height = "100%";
                    newImage.style.objectFit = "fill";

                    newDiv.appendChild(newImage);
                    rightContainer.appendChild(newDiv);
                    
                    

                    var slideright = document.createElement("span");
                    slideright.style.cursor = "pointer";
                    slideright.style.position = "absolute";
                    slideright.style.top = "50%";
                    slideright.style.right = "-5%";

                    var arrowRight = document.createElement("img");
                    arrowRight.src = "img/right-arrow.png";
                    arrowRight.style.width = "50px";
                    arrowRight.style.height = "50px";

                    slideright.appendChild(arrowRight);
                    
                    
                    slideright.addEventListener("click", function(){
                        newImage.id = imgSlide;
                        
                        if(imgSlide == 9){
                            imgSlide = 0;
                        }else if(imgSlide >= 0){
                            imgSlide++;
                        }
                        newImage.src = that.userData.pictures[imgSlide].url;
                        console.log(imgSlide);
                    })

                    var exit = document.createElement("span");
                    exit.style.cursor = "pointer";
                    exit.style.position = "absolute";
                    exit.style.top = "0px";
                    exit.style.right = "0px";

                    var exitButton = document.createElement("img");
                    exitButton.src = "img/close-button.png";
                    exitButton.style.width = "30px";
                    exitButton.style.height = "30px";

                    exit.appendChild(exitButton);

                    newDiv.appendChild(exit);

                    exit.addEventListener("click", function(){
                        newDiv.parentNode.removeChild(newDiv);
                    })

                    

                    
                    newDiv.appendChild(slideright);
                })
            }
        }

        

        this.pictures();
        
        var storiesContainer = document.createElement("div");


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
                button.style.cursor = "pointer";
                var that = this;
                button.addEventListener("click", function(event){
                    storiesContainer.removeChild(this.parentNode);
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