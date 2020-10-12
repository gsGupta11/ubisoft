var x =$('.try');
for (var i=0;i<x.length;i++){
    x[i].id = i.toString();
}

var x =$('.try');

for (var i=0;i<x.length;i++){
    if ((x[i].id)*1 >=6){
        x[i].style.display = "none";
    }
}


var check = 0;

$("#next").click(function(){
    if(x.length-check<=6){
        alert("Cannot go to the next Image, because no. of registration are less than or equal to 6");
    }
    else{
        x[check].style.display = "none";
        check = check+1;
        x[5+check].style.display="block"; 
    }
  });