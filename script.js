const tabs = document.querySelector(".tabs");
const image = document.querySelectorAll(".images");


tabs.addEventListener("click",(event)=>{
    if(event.target.dataset.category !== undefined){
        filterSearch(event.target.dataset.category)

    }

});

 filterSearch =(value)=>{
    image.forEach((curImage)=>{
        if(value === curImage.dataset.category){
            curImage.style.display = "block";
        }else if(value === "all"){
            curImage.style.display = "block";

            
        }else{
            curImage.style.display = "none";
        }
    })


}