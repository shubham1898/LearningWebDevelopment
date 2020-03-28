var path=new Path();
    
     var start=new Point(100,50);
     
     function randomColor() {
        //pick a "red" from 0 - 255
        var r = Math.floor(Math.random() * 256);
        //pick a "green" from 0 - 255
        var g = Math.floor(Math.random() * 256);
        //pick a "blue" from 0 - 255
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
      for(var i=20;i<=1200;i+=40)
      {
          for(var j=20;j<=1000;j+=40)
          {
              var circle2=new Path.Circle(new Point(i,j),10);
              circle2.fillColor=randomColor();
          }
      }
      var path=newFunction();

function newFunction() {
    return new Path();
}
