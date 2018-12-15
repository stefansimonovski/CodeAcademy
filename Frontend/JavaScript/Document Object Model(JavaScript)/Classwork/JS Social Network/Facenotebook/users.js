function User(name){
    this.profilepicture = [];
    this.pictures = [];
    this.album = function(){
        for (let index = 0; index < 10; index++) {
            this.pictures.push(new Picture(index));
        }
        this.profilepicture.push(new Profilepicture())
    }
    this.album();
    this.name = name;
    this.biography = new Biography();
    this.stories = [];
    this.generateStory = function(){
        for (let index = 0; index < 5; index++) {
            this.stories.push(new Story());
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