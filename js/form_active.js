const formBody = document.querySelector(".form");
const formBtn = document.querySelector(".form-btn");

formBody.addEventListener("submit", getFormData);

function getFormData(event){
  event.preventDefault()
  
  function checkValid(input) {
    if (input.value && input.value.length > 2) {
      return true;
    } else return false
  }
  
  
  const inputLink = document.querySelector('input[name="link"]');
  const inputMessage = document.querySelector('textarea[name="message"]');

  if(!checkValid(inputLink) && !checkValid(inputMessage)){
    console.log("Error, either Link, or message must be full");
    return
  }
  
  formBody.classList.add('loading')

  const formData = encodeURIComponent(JSON.stringify({
    link: inputLink.value,
    message: inputMessage.value
  }))

  const hash = '270ea2aa594cba5289bbf7f167f8353bb32572559a204d2d44530324b83dcdf6db-267d0314f2fff6d492b40580766a61f1';
  console.log(`https://antosha-builders-db.herokuapp.com/${hash}?a=active&meta={${formData}}&campaign=1`)
  fetch(`https://antosha-builders-db.herokuapp.com/${hash}?a=active&meta={${formData}}&campaign=1`)
    .then((resp) => {
      resp.json()
    })
    .catch((error) => {
      formBody.classList.remove('loading')
      formBody.classList.add('wrong')
    })
    .finally(() => {
      formBody.classList.remove('loading')
      formBody.classList.add('succes')
      console.log('some')
    });
  console.log(formData)
}

