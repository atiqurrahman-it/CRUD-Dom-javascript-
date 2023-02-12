let form=document.getElementById('form')
let input=document.getElementById('input')
let errorMsg=document.getElementById('error-msg')
let assignElement=document.getElementById('listGroup')


// when form submit button click 
form.addEventListener('submit',function(e){
    // default behavior off  kore 
    e.preventDefault();

    formValidation()
})

function formValidation(){
    if(input.value===''){
        errorMsg.innerText="Post cannot be blank,Please some text !";
        errorMsg.style.color='red'
    }else{
      errorMsg.innerText=""
      let submitBtn=document.getElementById('submit_btn')
      submitBtn.innerText="POST"

        acceptData()
    }
}


function acceptData(){
    data=input.value
    createElement(data)
}

function createElement(data){
  // element er modde ja ache tar sathe ei ta add hobe 
  assignElement.innerHTML +=`
  <li class="list-group-item d-flex justify-content-between">
  ${ data}
  <span class="">
    <i  onClick="EditPost(this)" class="fa-solid fa-pen-to-square pe-2"></i>
    <i  onClick="deletePost(this)" class="fa-solid fa-trash"></i>
  </span>
</li>
  `
  input.value=''
}


// delete element 

 function deletePost (e)  {
    e.parentElement.parentElement.remove();
  };
  

// Edit  element 

function EditPost (e)  {
    input.value=e.parentElement.parentElement.innerText
    e.parentElement.parentElement.remove()

    
    // style  apply 
    let submitBtn=document.getElementById('submit_btn')
    submitBtn.innerText="update"
    submitBtn.style.backgroundColor='#1492C4'
    submitBtn.style.border='none'

  };




