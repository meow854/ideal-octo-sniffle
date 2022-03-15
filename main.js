function setup() {
    canvas= createCanvas(500, 500);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
    posenet.on('pose', gotposes);
    posenet= ml5.poseNet(video, modelloaded);
}

function preload() {
    must= loadImage("https://o.remove.bg/downloads/ac280177-c179-4f58-bafa-47364bbc0716/ert-removebg-preview.png");
    tang= loadImage("https://o.remove.bg/downloads/e26265b5-34e4-4108-88c0-ff4dc261bc6a/fgj-removebg-preview.png");
}

function draw() {

}

function abc() {
    save("filterpic.png");
}

function modelloaded() {
    console.log("qwerty");
}

mustx= "";
musty= "";
tangx= "";
tangy= "";

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("x= " + results[0].pose.nose.x);
        console.log("y= " + results[0].pose.nose.y);
        mustx= results[0].pose.nose.x;
        musty= results[0].pose.nose.y + 15;
        tangx= results[0].pose.nose.x;
        tangy= results[0].pose.nose.y + 25;
    }
}