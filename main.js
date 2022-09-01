NoseX = ""
NoseY = ""
RightWristX = ""
RightWristY = ""
LeftWristX = ""
LeftWristY = ""
difference = ""
function setup() {
    video = createCapture(VIDEO)
    canvas = createCanvas(600,600)
    canvas.position(900,75)
    posenet = ml5.poseNet(video,modelloaded)
    posenet.on('pose',gotposes)
}

function modelloaded() {
    console.log("PoseNet model is initialized")
}

function gotposes(result) {
  if (result.length>0) {
    console.log(result)
    NoseX = result[0].pose.nose.x
    NoseY = result[0].pose.nose.y
    console.log("Nose X = "+NoseX)
    console.log("Nose Y = "+NoseY)
    RightWristX = result[0].pose.rightWrist.x
    RightWristY = result[0].pose.rightWrist.y
    LeftWristX = result[0].pose.leftWrist.x
    console.log("Left Wrist X = "+LeftWristX)
    console.log("Left Wrist Y = "+LeftWristY)
    LeftWristY = result[0].pose.leftWrist.y
    console.log("Right Wrist X = "+RightWristX)
    console.log("Right Wrist Y = "+RightWristY)
    difference = floor(LeftWristX-RightWristX)
  }
}

function draw() {
background("burlywood")
fill("blue")
stroke("black")
square(NoseX,NoseY,difference)
document.getElementById("square_side").innerHTML = "The side of the square is "+difference
}