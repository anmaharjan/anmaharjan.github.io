window.onload = () => {
    "use strict";

    let start = document.getElementById("start");
    let stop = document.getElementById("stop");

    let animation = document.getElementById("animation");
    let textArea = document.getElementById("text-area");
    let fontSize = document.getElementById("fontsize");
    let turbo = document.getElementById("turbo");

    let animationInverval = null;
    let frames = null;
    let speed = 250;
    let i=0, length=0;

    /* -- Util function to start and stop animation -- */
    const performAnimation = () => {
        if(i === length)
            i = 0;
        textArea.innerHTML = frames[i++];
    };

    const stopAnimation = () => {
        // clearing the previous Interval
        clearInterval(animationInverval);
        // enabling/disabling start/stop button
        stop.disabled = true;
        start.disabled = false;
    };

    const startAnimation = () => {
        // clearing the previous Interval
        clearInterval(animationInverval);
        // starts the new interval with the new data and sets it to variable
        animationInverval = setInterval(performAnimation, speed);
    }

    /* -- Event Handling for Start Button -- */
    start.onclick = () => {
        if(frames !== null && length > 0){
            // enabling/disabling start/stop button
            stop.disabled = false;
            start.disabled = true;
            // start the animation
            startAnimation();
        }
    };

    /* -- Event Handling for Stop Button -- */
    stop.onclick = stopAnimation;

    /* -- Event Handling for selecting animation type -- */
    animation.onchange = () =>{
        // Resetting the index of i.
        i = 0;
        // Stopping the animation and clearing the interval.
        stopAnimation();

        // gets the selected value from the animation list.
        let selectedIndex = animation.options[animation.selectedIndex].value;

        // gets the animation content.
        let selectedAnimation = ANIMATIONS[selectedIndex];
        // sets the animation content into the text area.
        textArea.innerHTML = selectedAnimation;

        if(selectedAnimation !== ''){
            // splits the animation content into the array.
            frames = selectedAnimation.toString().split('=====\n');
            // gets the length of the array.
            length = frames.length;
        }
        else{
            frames = null;
            length = 0;
        }
    };

    /* -- Event Handling for changing font-size -- */
    fontSize.onchange = () => {
        // gets the selected value from the font-size list.
        let selectedFont = fontSize.options[fontSize.selectedIndex].value;

        // sets the font-size directly to the style
        switch(selectedFont){
            case 'Tiny':
                textArea.style.fontSize = '7pt';
                break;
            case 'Small':
                textArea.style.fontSize = '10pt';
                break;
            case 'Medium':
                textArea.style.fontSize = '12pt';
                break;
            case 'Large':
                textArea.style.fontSize = '16pt';
                break;
            case 'Extra Large':
                textArea.style.fontSize = '24pt';
                break;
            case 'XXL':
                textArea.style.fontSize = '32pt';
                break;
            default:
                textArea.style.fontSize = '12pt';
        }
    };

    /* -- Event Handling for specifying turbo -- */
    turbo.onclick = () => {
        if(turbo.checked)
            speed = 50;
        else
            speed = 250;

        // start the animation
        startAnimation();
    };
};