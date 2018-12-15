function Event(name){
    this.name = name;
    this.description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nostrum eaque? Iure ipsam repudiandae earum consectetur odio delectus nulla veniam laboriosam saepe commodi, quidem sed, cupiditate excepturi dicta. Aperiam, facilis!";
    this.date = new Date();
    this.usersJoined = [];
    this.answer = function(answer, target, event){
        if(answer == true){
            this.usersJoined.push(target);
            target.isJoinedtoEvent.push(event);
        }
    }
}