
  var string = "ilovetowritecode";
  var character = "o"
  
  function distanceFrom(str, char) {
// ===================== YOUR WORK HERE =====================
  var distance = [];
  var indices = [];
  // var indices = [2,6,13];
  for (var i = 0; i < str.length; i++){
    if (str[i] === char){
      indices.push(i)
    }
  };

  for (var j = 0; j < str.length; j++){
    var z = str.length;

    for(var x = 0; x < indices.length; x++){
      y = Math.abs(j - indices[x]);
      if (y < z){
        z = y
      }
    }
    distance.push(z);

  }


  return distance

// ==========================================================
  }
  
  console.log(distanceFrom(string, character))
 