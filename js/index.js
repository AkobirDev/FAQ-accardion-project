// let toggles = document.querySelectorAll('.faq-toggle');
// toggles.forEach(toggle => {
//     toggle.addEventListener('click',function(){
//         toggle.parentNode.classList.toggle('active');
//     });
// })

const accardion = document.querySelectorAll('.accardion-item');
 for(let i = 0;i < accardion.length;i++){
     accardion[i].addEventListener('click',function(){
         this.classList.toggle('active');
    })
}
// accardion.forEach(toggle,function(){
//     toggle.addEventListener('click',function(){
//         this.classList.toggle('active')
//     })
// })