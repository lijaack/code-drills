// Hamming Distance

// This functions returns the number of differences between two strings of
// equal length
function hamming(str1, str2) {

  // -------------------- Your Code Here --------------------
  if (str1.length === str2.length){
    var different = 0;
    for( var i = 0; i < str1.length; i++){
      if (str1[i] != str2[i]){
        different++;
      }
    }
    return(different);
  } else {
    return("Please pass two strings of equal length to this function");
  }

  
  

  // --------------------- End Code Area --------------------

}


// ------------------------------------------------------------------
console.log("==================== Test 01 ====================");
console.log("The following should be 5 ");
console.log(hamming("chicken","charity"));

// ------------------------------------------------------------------
console.log("==================== Test 02 ====================");
console.log("The following should be 8");
console.log(hamming("48ndqw13","6543fedw"));

// ------------------------------------------------------------------
console.log("==================== Test 03 ====================");
console.log("The following should be \"Please pass two strings of equal length to this function\"");
console.log(hamming("dfvs1","dcdw"));