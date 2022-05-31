function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
  }
  
  function draw(){
   stroke("red")
    strokeWeight(20)
    rect(20,20,560,360)
    image(video,40,40,520,320)
  }

  function take_snapshot(){
      save('student.png')
  }