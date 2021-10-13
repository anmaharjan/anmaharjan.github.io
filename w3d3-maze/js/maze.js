$(function (){
    "use strict";

    let isGameOn = false;

    let maze = $("div#maze");
    let boundaries = $("div.boundary");

    let start = $("div#start"), end = $("div#end");
    let status = $("h2#status");

    // game will only start when a player clicks on start div
    start.click(startGame);

    function startGame(){
        isGameOn = true;
        // changing the h2 after clicking start.
        status.empty().text("Move mouse to End in order to win the game.");
        // removing youlose class which will revert back the background color to gray from pink
        boundaries.removeClass("youlose");

        // If a player tries to go outside of the maze, then that player will lose game.
        maze.mouseleave(function (){
            if(isGameOn) {
                loseGame();
            }
        });

        // If a player touches the boundary, then that player will lose game.
        boundaries.mouseenter(function (){
            if(isGameOn) {
                loseGame();
            }
        });

        // If a player successfully directed the mouse pointer to end without cheating, then that player will win.
        end.mouseenter(function() {
            if(isGameOn) {
                winGame();
            }
        });
    }

    // util function when a player wins
    function winGame(){
        isGameOn = false;
        status.empty().text("Congratulations! You have won the game. Click S to start game again.");
    }

    // util function when a player loses
    function loseGame(){
        isGameOn = false;
        status.empty().text("Sorry! You have lost the game.");
        boundaries.addClass("youlose");
    }
});