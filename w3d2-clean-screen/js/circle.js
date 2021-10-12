$(function () {
    const minPosition = 10, maxPosition = 90;

    let randomNoGenerator = (min, max) => Math.floor(Math.random() * (max - min) + min);
    let randomColorGenerator = () => Math.floor(Math.random()*16777215).toString(16);

    let circleContainer = $("#circle_container");
    /* -- input fields -- */
    let width = 0,growthAmount = 0, growthRate = 0, numberOfCircle = 0;
    let startBtn = $(".input-gadgets #start");

    startBtn.click(function(){
        width =  $(".input-gadgets #width").val();
        growthAmount = $(".input-gadgets #growth_amount").val();
        growthRate = $(".input-gadgets #growth_rate").val()
        numberOfCircle = $(".input-gadgets #number_of_circle").val();

        emptyCircleContainer();
        drawCircles();
        animateCircles();
    });

    function drawCircles(){
        for(let i=0; i<numberOfCircle; i++){
            let top = randomNoGenerator(minPosition, maxPosition) + "%",
                left = randomNoGenerator(minPosition, maxPosition) + "%",
                color = "#" + randomColorGenerator();

            circleContainer.append($("<div>", {
                "id" : "circle-"+i,
                "class": "circle",
                "css": {
                    "top": top, "left": left, "background-color": color,
                    "width": width + "px", "height": width + "px", "border-radius": width + "px",
                },
                "click": function (){
                    $(this).hide();
                }
            }));
        }
    }

    function animateCircles(){
        let interval = setInterval(() =>{
            $('.circle')
                .css({
                    "height": (idx, old) => (parseInt(old) + parseInt(growthAmount)) + "px",
                    "width": (idx, old) => (parseInt(old) + parseInt(growthAmount)) + "px",
                    "border-radius": (idx, old) => (parseInt(old) + parseInt(growthAmount)) + "px"
                });
        }, growthRate);
    }

    function emptyCircleContainer(){
        circleContainer.empty();
    }
});