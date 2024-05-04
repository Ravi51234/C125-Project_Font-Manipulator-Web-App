function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Pose Net Is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        var leftWristX = results[0].pose.leftWrist.x;
        var rightWristX = results[0].pose.rightWrist.x;
        var difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + ", " + "Right Wrist X = " + rightWristX + ", " + difference);
        document.getElementById("dimensions").innerHTML = "Width And Height Of Text Will Be = " + difference;
    }
}

function draw(){
    background("#5050500");
    textSize(difference);
    fill("FFE787");
    text("Hardik", 50, 400);
}