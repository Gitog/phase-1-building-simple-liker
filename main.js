// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


const hearty =document.querySelectorAll('.like-glyph');

function clickHearty(e){
  const heart = e.target;
  mimicServerCall()
  .then(()=> {if(heart.innerText === EMPTY_HEART){
    heart. innerText = FULL_HEART;
    heart.className = "activated-heart";
  }else{
    heart.innerText = EMPTY_HEART;
    heart.className = '';
  }})
  .catch((err) => {
    const errModal = document.getElementById('modal');
    errModal.className = '';
    errModal.innerText = err;
    errModal.className = 'hidden'
  })
}

for (const simpleGlyph of hearty){
  //console.log(simpleGlyph)
  simpleGlyph.addEventListener('click', clickHearty);
} 