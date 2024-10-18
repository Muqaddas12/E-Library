
//err msg code
const msg=document.getElementById('msg')
window.onload=()=>{
   let err=new URLSearchParams(window.location.search)
err=err.toString().replace('msg=',' ').replace('+',' ').replace('+',' ').replace('+',' ').toLocaleUpperCase()

   msg.innerHTML=err
}