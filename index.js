let nav = document.querySelectorAll("nav ul li");
let content = document.querySelectorAll(".content > div");
nav.forEach(el => {
    content.forEach(con => {
        con.classList.add("active")
        el.addEventListener("click", function () {
            con.classList.remove("active")

            if (el.dataset.category == con.getAttribute("class")) {
                con.style.display = "";

            } else {
                con.style.display = "none"
            }
        })
    })
})

let clrBlue = document.querySelectorAll(".clr .clrBlue");
clrBlue.forEach(el => {
    el.style.width = el.dataset.clr
})