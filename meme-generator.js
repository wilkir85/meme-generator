
function changeSrc() {
  let img = document.getElementById('memeTemp');

//Copy parent template DIV
let new_element = img.cloneNode(true);

// Extract img and text fields
var myimg = new_element.getElementsByTagName('img')[0];
var topText = new_element.getElementsByTagName('p')[0];
var botText = new_element.getElementsByTagName('p')[1];
  myimg.src = document.getElementById('srcName').value;
topText.innerHTML  = document.getElementById('topText').value;
botText.innerHTML  = document.getElementById('botText').value;
myimg.style.display = 'block';
topText.style.display = 'block';
botText.style.display = 'block';
img.after(new_element);
document.getElementById('topText').value = '';
document.getElementById('botText').value = '';
document.getElementById('srcName').value = '';
}

function deleteSelf(meme) {
var element = meme;
meme.remove();
}
