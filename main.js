var counters=document.querySelectorAll('.counter')
// console.log(counter.getAttribute('data-target'));
let out=0;
// for(i=0;i<counter.getAttribute('data-target');i++)
// {animate(i);
//     // i=i+2
// //    console.log(i)
// }
// function animate(i){
//     setTimeout(() => {
//         out=out+1
//         console.log('out',out)
//         console.log('i:',i)
//     counter.textContent=i
//     }, i*100);
   
// }
// let out=0;
counters.forEach((counter)=>{
    for(i=0;i<=counter.getAttribute('data-target');i++)
    {animate(i);
        // i=i+2
    //    console.log(i)
    }
    function animate(i){
        setTimeout(() => {
            out=out+1
            // console.log('out',out)
            // console.log('i:',i)
        counter.textContent=i
        }, i*0.3);
       
    }



})

