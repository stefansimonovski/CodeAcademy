function startWeek() {
    var hilton = new LuxuryHotel();
    for (let index = 0; index < 14; index++) {
       hilton.workDay(index);
       var todaysGuests = getRandomDays(5, 25); 
       if (index % 3 === 0) {
           var todaysCandidates = getRandomDays(0, 2);
           for (let index = 0; index < todaysCandidates; index++) {
               var candidate = new Person("Person " + index, 100); 
               hilton.hireEmployee(candidate);
           }
       }
       for (let i = 0; i < todaysGuests; i++) {
           var guest = new Person("Person " + i, 9999); 
           hilton.offerRooms(guest);
       }
    }
    console.log("Our hotel earned ", hilton.income);
}

startWeek();