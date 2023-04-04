// const ul=document.querySelector('.list-group');
// ul.firstElementChild.style.background='green';
// ul.firstElementChild.innerHTML="<h6>Hello</h6>";
// ul.children[1].style.background='yellow';
// const uls=document.querySelector('.list-group');
// uls.forEach((u)=>(console.log(u)));

// uls.firstElementChild.textContent="hello";
// uls.children[1].textContent="world"

// const btn=document.querySelector('.btn')
// btn.addEventListener('mouse',(e)=>{
//     e.preventDefault();
//     document.querySelector('body').style.backgroundColor='rgb(20,90,90)';
//     // document.querySelector('body').classList.add('bg-light')
//     document.querySelector('.list-group').children[2].innerHTML='<h3>Hello</h3>'
// })


//grabbing data from form and showing on console 








// const btn=document.querySelector('.btn')
// const name1=document.querySelector('#exampleInputName1')
// const mail=document.querySelector('#exampleInputEmail1')
// const pass=document.querySelector('#exampleInputPassword1')
// const list=document.querySelector('.list')


// btn.addEventListener('click',onSubmit)
//  function onSubmit(e)
// {
//     e.preventDefault()
//     if(name1.value==='' || mail.value===''|| pass.value==='')
//     {
//         alert('please enter details');
//     }
//     else{
//        const li=document.createElement('li');
//        li.appendChild(document.createTextNode(`${name1.value}:${mail.value}`))
//        list.appendChild('li');

//        name1.value=''
//        mail.value=''
//        pass.value=''
//     }
// }


// const btn=document.querySelector('.btn')
// btn.addEventListener('mouseover',(e)=>{
//     e.preventDefault();
//     document.querySelector('body').style.background='grey'
// })

const form=document.querySelector('#myform')
 const name1=document.querySelector('#exampleInputName1')
 const mail=document.querySelector('#exampleInputEmail1')
 const pass=document.querySelector('#exampleInputPassword1')

 form.addEventListener('submit',onSubmit)

 function onSubmit(e)
 {
  e.preventDefault();
  console.log(name1.value+mail.value+pass.value);
 }
     