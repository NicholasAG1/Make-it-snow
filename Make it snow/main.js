// load canvas
let cnv = document.getElementById("thing");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;
// Global Variables
let snowflake = [];

for (let i = 0; i < 1050; i++) {
    snowflake.push({
        x: Math.random(6) * cnv.width,
        y: Math.random(6) * 0,
        r: Math.ceil(Math.random(5) * 2 + 5),
        s: Math.random(1) * 10
    })
}

// Main Program loop
requestAnimationFrame(draw);

function draw() {
    // Drawing 
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Make the flake
    for (let i = 0; i < snowflake.length; i++) {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(snowflake[i].x, snowflake[i].y, snowflake[i].r, 0, 2 * Math.PI)
        ctx.fill();
        snowflake[i].y += snowflake[i].s;
        if (snowflake[i].y > cnv.height - 10) {
            snowflake[i].y = 2;
            snowflake[i].x = Math.random(6) * cnv.width
        }
    }
    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}































































/* End of File */