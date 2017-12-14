(function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        var backgroundBox;
        var building = [building, ];
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();
                
            // TODO: 3 - YOUR DRAW CODE GOES HERE
            var href='https://space-facts.com/wp-content/uploads/magellanic-clouds.png';
            var shape = draw.bitmap(href);
            //https://edge.alluremedia.com.au/m/k/2016/10/neil-degrasse-tyson-picture-of-earth.jpg
            background.addChild(shape);
            backgroundBox = draw.circle(5, 'White', 'black', 2);
            backgroundBox.x = 600;
            backgroundBox.y = 300;
            background.addChild(backgroundBox);
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            //var backgroundFill = draw.rect(canvasWidth,canvasHeight,'yellow');
            //background.addChild(backgroundFill);
            
            //var buildingHeight = 300;
            //var building;
            //for(var i = 0; i < 5; ++i){
                //building = draw.rect(75, buildingHeight, 'White', 'Black', 1);
                //building.x = 200*i;
                //building.y = groundY-buildingHeight;
                //background.addChild(building);
                //building.push(building);
            //}
            
            var building;
            for (var i = 0; i < 5; ++i){
                building = draw.circle(5, 'Light Grey', 'Black', 1);
                building.x - 10*i;
                background.addChild(building);
                building.push(building)
            }
        }
            
            
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            backgroundBox.x = backgroundBox.x - 1;
        }
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
}(window));