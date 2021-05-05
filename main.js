const btn = document.querySelectorAll(".category button");
const product = document.querySelectorAll(".itemBox");

btn.forEach(item=> {
    item.addEventListener("click", function() {
        for (let i = 0; i < btn.length; i++) {
            btn[i].classList.remove("active");
        }
        item.classList.add("active");


        product.forEach(show => {
            show.style.display = "none";
            let products=item.textContent.toLowerCase();
            if(show.getAttribute("data-att") ===
            products || products === "all") {
                show.style.display = "block";
            } 
        }) 
    }) 
}) 

