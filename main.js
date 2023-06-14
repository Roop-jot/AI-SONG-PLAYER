song = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
function preload()
{
    
}
function setup()
{
    video = createCapture(VIDEO);
    video.hide; 
}
function draw()
{
    createCanvas(video, 0, 0, 200, 200);
    image(0, 0, 200, 200);
}
function plaY()
{
    song.play()
}
function stoP()
{
    song.stop()
}
//function modelLoaded(){}