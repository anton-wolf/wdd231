// get DOM nodes
const navigation = document.querySelector('.navigation')
const mobileNavBtn = document.querySelector('#menu');

// attach [click] event listeners to DOM nodes
mobileNavBtn.addEventListener("click", () => {
    navigation.classList.toggle("show");
    mobileNavBtn.classList.toggle("show");
});

// way finder
// This isn't really relevant in the context of this assignment as it isn't an SPA, though it works, it seems needless.

document.querySelector('.navigation').addEventListener("click", function (event) {
    if (event.target.tagName === 'A') {
        // Remove 'active' from all links
        this.querySelectorAll('a').forEach(link => link.classList.remove("active"));

        // Add 'active' to the clicked link
        event.target.classList.add('active');
    }
});

navigation.addEventListener("click", event => {
    if (event.target.tagName === "A") {
        // remove [active] class with every link click
        navigation.querySelectorAll("a").forEach(item => item.classList.remove("active"))
        // add a new instance of [active] class to the clicked item
        event.target.classList.add("active")
    }

});