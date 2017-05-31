# Dev
DMJSNOTES

>>>>>>>>>>>>>>>>>>>>>>>
  #79 Chaining If Else Statements

function testSize(num) {
  // Only change code below this line
  
  if (num < 5) {
    return "Tiny";
  }else if (num < 10) {
    return "Small";
  }else if (num < 15) {
    return "Medium";
  }else if (num < 20) {
    return "Large";
  }else {
    return "Huge";
  }
  
  return "Change Me";
  // Only change code above this line
}

// Change this value to test
testSize(7);


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  #81 Truncating a string \
function truncateString(str, num) {
   if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}


truncateString("A-tisket a-tasket A green and yellow basket", 11);


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  #82 - Confirm the Ending



