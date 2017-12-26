
function Algoritmos(){

  this.insertion = function(){



    for (var i = counter; i < Line.length;counter++){

      this.value = Line[i].n
      this.hole = i


      while (this.hole > 1 && Line[this.hole-1].n > this.value){
        Line[this.hole].n = Line[this.hole-1].n
        this.hole = this.hole - 1

      }

      Line[this.hole].n = this.value

      toDraw = Line[this.hole]
      c = 3
      redraw()
      break

    }

  }


}
