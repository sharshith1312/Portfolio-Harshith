const hamburger=document.querySelector(".menu-button")

hamburger.addEventListener("click",function(){
    console.log("test")
    // var nav=document.querySelector("nav")
    // nav.classList.add("nav")
    document.body.classList.toggle("nav-pop")
})


//not working below do it later

/* var portfolioContainer=document.querySelector(".portfolio-items")

portfolioContainer.addEventListener("click",function (){
    event.preventDefault()
    // console.log(event)
    var modalToggle = event.target.closest(".portfolio-link")
    console.log(modalToggle)
    //above two lines of code if we click more info it printts a tag or any any other clicks will give null
    if (!modalToggle) return
    //selecting the modal of right picture
    var modal=modalToggle.parentNode
    console.log(modal)
    //it will go to clicked modalToggle then select the parentNode of the clicked then it goes to next sibling
    var modalSibling=modal.nextElementSibling
    console.log(modalSibling)
    // var modalR=document.querySelector(".portfolio-modal")
    // console.log(modalR)
   // modalR.classList.toggle(".modal-open")

}) */


var link=document.querySelectorAll(".link1")
console.log(link)


for(var i=0;i<link.length;i++){
    link[i].addEventListener("click",function(){
        var m1=document.querySelector(".m1")
        m1.classList.add("modal-open")
    })
}



var close=document.querySelector(".modal-close")

close.addEventListener("click",function(){
    var m1=document.querySelector(".m1")
    m1.classList.remove("modal-open")
})
