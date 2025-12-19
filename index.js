const texbox = document.getElementById('text')

function append(num) {
 
  texbox.value +=num;
}

function cls() {
  texbox.value="";
}

function clr() {
  texbox.value=texbox.value
  .slice(0, -1);
}

function calc() {
  // Tab to edit
  try {
    // Tab to edit
  texbox.value= eval(texbox.value);
  }
    catch (error) {
     texbox.value="invalid entry";
    }
  
}