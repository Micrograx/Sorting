var maxL = 100
var numero = 0
var num = []
var Line = []
var scala = 0
var params = null
var mode = "Insertion"
var working = false
var toDraw = null
var c = null
var counter = 1

function setup() {
    params = getURLParams()
    if (params.lineas) {
        maxL = params.lineas
    }
    if (params.mode == 1) mode = "Insertion"
    if (params.mode == 2) mode = "Selection"
    if (params.mode == 3) mode = "Bubble"


    createCanvas(640, 360)
    scala = floor(window.height / maxL)
     frameRate(1)

     for (var j = scala; j < scala * maxL; j = j + scala) {

         num[j] = j

     }
     for (var i = 1; i < maxL; i++) {

         numero = random(num)
         if (numero > 0) {
             num[numero] = 0
             Line[i] = new Tree(numero, i)
             Line[i].draw(2)
         } else {
             i = i - 1
         }

     }

   algoritmos = new Algoritmos()
   noLoop()
}

function draw() {

if (!working){
  working = true
  algoritmos.insertion(Line)

   for (var i = 1;i < Line.length ; i++){
     Line[i].draw(2)
  }
} else {

  toDraw.draw(c)


}


}
