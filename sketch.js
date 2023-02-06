function setup() {
    createCanvas(1000, 1000);
    background(0, 0, 0);
    //noStoke()

    console.log("I am the setup function")
  
    //let xPos = random(0, 500);
    //let yPos = random(0, 500);
    //ellipse(xPos, yPos, 25, 25);
 }
 

//  function draw(){
//     let xPos = random(0,500);
//     let yPos = random(0,500);
//     let r = random(0,256)
//     let g = random(0,256)
//     let b = random(0,256)

//     fill(r,g,b)
//     ellipse(xPos, yPos, 25, 25)
//     console.log("I am the draw function")
//  }

function draw(){
    ellipse(mouseX,mouseY,100,100)
}

function mouseClicked(){
    let r = random(0,255)
    let g = random(0,255)
    let b = random(0,255)

    fill(r,g,b)

}