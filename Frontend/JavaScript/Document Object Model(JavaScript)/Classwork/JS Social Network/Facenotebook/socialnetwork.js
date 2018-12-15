function Socialnetwork(){
    this.users = [];
    this.generateUsers = function(){
        for (let index = 1; index <= 50; index++) {
            this.users.push(new User("Name "+ index));
        }
    }
    this.generateUsers();
    this.events = [];
    this.generateEvents = function(){
        for (let index = 0; index < 5; index++) {
            this.events.push(new Event("Event " + index));
        }
    }
    this.generateEvents();
    this.friendRequests = function(){
        for (let j = 0; j < 5; j++) {
            for (let index = 0; index < this.users.length; index++) {
                var random = getRandom(0, 49)
                this.users[index].addFriend(this.users[random]);
            }
        }
    }
    this.friendRequests();
    this.inviteUserstoEvents = function(){
        for (let index = 0; index < this.events.length; index++) {
            for (let j = 0; j < 15; j++){
                var randompeople = getRandom(0, 49);
                this.events[index].answer(true, this.users[randompeople], this.events[index]); 
            }
        }
    }
    this.inviteUserstoEvents();
   


}