 
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var rad = canvas.height/2;

ctx.translate(rad,rad);

rad = rad * 0.90;
setInterval(drawClock,1000);
//drawClock();
console.log(2*(Math.PI)*180);
 

function drawClock(){
    drawBorder();
    drawMainFrame();
    drawCenter();
    drawNumber(); 
    getTime(ctx,rad);
}
//draw main frame
function drawMainFrame()
{
    ctx.beginPath();
    ctx.arc(0, 0, rad * 0.9, 0 , 2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
}

function drawCenter()
{
    ctx.beginPath();
    ctx.arc(0, 0, rad*0.1, 0 , 2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
}

function drawBorder()
{
    ctx.beginPath();
    ctx.arc(0, 0, rad, 0 , 2*Math.PI);
    ctx.fillStyle = "grey";
    ctx.fill();
}

function drawNumber()
{
    var angle;
    var num;

    ctx.beginPath();
    ctx.font = rad*0.10 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = "red";

    for(num=1;num<13;num++)
    {
        angle = num * Math.PI/6;
        ctx.rotate(angle);
        ctx.translate(0, -rad*0.85);
        ctx.rotate(-angle);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(angle);
        ctx.translate(0, rad*0.85);
        ctx.rotate(-angle);    
    }
}

function drawHandle(ctx,pos, lenght, width)
{
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0,-lenght);
    ctx.stroke();
    ctx.rotate(-pos);
}

function getTime(ctx,rad)
{
    var now = new Date();
    var hr = now.getHours();
    var min =  now.getMinutes();
    var sec = now.getSeconds();

    hr = hr%12;

    //calculate hour
    hr = (hr*Math.PI/6)+(min*Math.PI/(6*60))+(sec*Math.PI/(360*60));
    drawHandle(ctx, hr, rad*0.5, rad*0.1);
    
    //canculate minutes
    min = (min*Math.PI/30) +(min*Math.PI/(30*60));
    drawHandle(ctx,min,rad*0.75,rad*0.05);

    //calculate seconds
    sec = sec*Math.PI/60;
    drawHandle(ctx,sec,rad*0.85, rad*0.015);

    console.log("the time is: ",hr); 
    console.log("the min is: ", min);
}


