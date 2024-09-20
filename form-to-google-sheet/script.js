 const scriptURL = 'https://script.google.com/macros/s/AKfycbxGHrnif1vGc4OuS1Wts34rUTzQQ-emVVv5qn_fVzOrrAhrPaZX1sBWA0R9XgnhblEGyA/exec'
 const form = document.forms['submit-to-google-sheet']
 let msg = document.getElementById("msg")
 let emailInput = document.getElementById("email-input")



 form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        emailInput.value="";
        msg.innerHTML="Thanks For Subscribing..."
        setTimeout(()=>{
            msg.innerHTML="";
        },5000)
      })
      .catch(error => console.error('Error!', error.message))
  })
