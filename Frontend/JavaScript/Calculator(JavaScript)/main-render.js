function Page(){
    this.calculator = new Calculator();
    $("<div>").addClass("input-div").width("100%").appendTo("#main-container");
    $("<div>").addClass("numbers-div").width("100%").height("100%").css("display", "grid").css("gridTemplateColumns", "1fr 1fr 1fr").css("grid-template-rows", "1fr 1fr 1fr 1fr 1fr 1fr").appendTo("#main-container");
    this.renderAll = function(){
        this.input();
        this.generateNumbers();
        this.generateSingns();
    };
    that = this;
    this.generateNumbers = function(){
        for(var i = 0; i <= 9; i++){
            $("<button>").text(i).attr("id", i).on("click", function(event){
                that.calculator.mainDisplay.push(event.target.id);
                console.log(that.calculator.mainDisplay);
            }).appendTo(".numbers-div");
        };
    };
    this.generateSingns = function(){
        for(var j = 0; j < 7; j++){
            switch (j) {
                case 0:
                    $("<button>").text("+").appendTo(".numbers-div");
                    break;
                case 1:
                    $("<button>").text("-").appendTo(".numbers-div");
                    break;
                case 2:
                    $("<button>").text("=").appendTo(".numbers-div");
                    break;
                case 3:
                    $("<button>").text("*").appendTo(".numbers-div");
                    break;
                case 4:
                    $("<button>").text("/").appendTo(".numbers-div");
                    break;
                case 5:
                    $("<button>").text(".").appendTo(".numbers-div");
                    break;
                case 6:
                    $("<button>").text("AC").appendTo(".numbers-div");
                    break;
            }
        }
    };
    this.input = function(){
        $("<p>").width("100%").height("50px").css("margin", "0").css("padding", "0").css("font-size", "30px").css("border", "0.1px").css("border-style", "solid").appendTo(".input-div");
    };
    
}


