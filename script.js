const extendHex = (shortHex) => {
  // write your code here
	
	let fullHex = "#"
		
	if(shortHex.charAt(0) != "#")
	{
		  
		for(i = 0; i < shortHex.length;i++){
			fullHex += shortHex.charAt(i)+ shortHex.charAt(i);
		}
	}
	else{
		for(i = 1; i < shortHex.length;i++){
			fullHex += shortHex.charAt(i)+ shortHex.charAt(i);
		}
	}
	return fullHex 
	 
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
 