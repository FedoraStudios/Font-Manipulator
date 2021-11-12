noseX=0;
noseY=0;

function preload()
{

}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
6
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + nosY);

        leftWristX = results[0].pose.leftWristX.x;
        rightWristX = results[0].pose.rightWristX.y;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = "+ leftWristX +" rightWristX = "+ rightWristX +" difference = "+difference);
    }
}


function draw()
{
    fill('#0000ff');
    stroke('#0000ff');
    text('Rime', noseX. noseY)
    textSize(40)
}