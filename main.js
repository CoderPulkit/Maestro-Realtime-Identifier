function setup() {
  canvas = createCanvas(400,280);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classfier=ml5.imageClassifier('MobileNet',modelLoaded);
}

function modelLoaded(){
  console.log("Model has loaded");
}
function draw(){
  image(video,0,0,400,280);
  classfier.classify(video,gotResult)
}
function gotResult(error,results){
 if(error){
   console.error(error);
 }
 else{
   console.log(results);
   document.getElementById("object").innerHTML=results[0].label;
   document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(4);
 }
}



