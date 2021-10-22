var sections = document.querySelectorAll("section");
const navbar = document.getElementById("navbar");

var options = {
    rootMargin: '0px',
    threshold: 0.25
}

var callback = (entries) => {
    entries.forEach((entry) => {
        var target = entry.target;
        if (entry.intersectionRatio >= 0.25) {
            if(target.id!=="welcome"){navbar.classList.add("animateNavbar");}
            else{navbar.classList.remove("animateNavbar");}
        } 
    })
}

var observer = new IntersectionObserver(callback, options)

sections.forEach((section, index) => {
    observer.observe(section)
})