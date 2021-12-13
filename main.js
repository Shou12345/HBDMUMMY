noseX=0;
noseY=0;

function preload()
{
moustache= loadImage("111111.png")
}

function setup()
{
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(200, 200)
    video.hide();

    poseNet = ml5.poseNet(video, opModelLoaded);
    poseNet.on("pose", gotPoses);
}

function opModelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results){

    if(results.length > 0)
    {
        console.log(results)
       
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
    }
    

function draw()
{   
    image(video, 0, 0, 500, 500);
    image(moustache, 
        noseX, noseY, 500,500);
}


function take_snapshot()
{
save('myfilter1.png')
}



