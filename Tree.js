function Tree(n,p){

this.n = n
this.p = p

this.draw = function(color){

  stroke(255,255,255)
  strokeWeight(window.width / maxL)
  line(window.width / maxL * this.p ,360,window.width / maxL * this.p ,0)
  strokeWeight(window.width / maxL - 2)
  switch(color){

    case 1:
      stroke(255,0,0)
      line(window.width / maxL * this.p ,window.height / 2  + this.n / 2,window.width / maxL * this.p ,window.height / 2- this.n / 2)
        break
    case 2:
      stroke(0,0,0)
      line(window.width / maxL * this.p ,window.height / 2  + this.n / 2,window.width / maxL * this.p ,window.height / 2- this.n / 2)
      break
    case 3:
      stroke(50,200,50)
      line(window.width / maxL * this.p ,window.height / 2  + this.n / 2,window.width / maxL * this.p ,window.height / 2- this.n / 2)
      break
      case 4:
        stroke(0,0,255)
        line(window.width / maxL * this.p ,window.height / 2  + this.n / 2,window.width / maxL * this.p ,window.height / 2- this.n / 2)
  }
}

}
