



function startupWebpage() {
    var userData = new Socialnetwork();
    var page = new PageRenderer(userData.users[0]);
    page.renderAll();
}

startupWebpage();