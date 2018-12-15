function User(name){
    this.profilepicture = [];
    this.pictures = [];
    this.album = function(){
        for (let index = 0; index < 10; index++) {
            switch(getRandom(1, 4)){
                case 1:
                    this.pictures.push(new PictureOne(index));
                    break;
                case 2:
                    this.pictures.push(new PictureTwo(index));
                    break;
                case 3:
                    this.pictures.push(new PictureThree(index));
                    break;
                case 4:
                    this.pictures.push(new PictureFour(index));
                    break;
            }
        }
        this.profilepicture.push(new Profilepicture())
    }
    this.album();
    this.name = name;
    this.biography = new Biography();
    this.stories = [];
    this.generateStory = function(){
        for (let index = 0; index < 5; index++) {
            this.stories.push(new Story(index));
        }
        this.stories.sort(function(a, b){
            return new Date(a.date).getTime() > new Date(b.date).getTime()
        });
    }
    this.generateStory();
    this.friends = [];
    this.addFriend = function(target){
        target = this.reciveFriend(target);
    }
    this.reciveFriend = function(target){
        this.friends.push(target);
    }
    this.isJoinedtoEvent = [];
    
}