/** populate members on init */

// the template used for mapping the JSON data
const template = document.querySelector("#directory_template");
// the director that the templates will be rendered to
const directory = document.querySelector(".members_section");

document.addEventListener('DOMContentLoaded', async () => {

    // retrieve data using fetch api
    await fetch("data/members.json")

        // return the response json data
        .then(response => {
            return response.json()

            // return promise as data object
        }).then(data => {
            // map the data to directory container using template
            const elements = data.map(member => {
                // clone
                const clone = template.content.cloneNode(true);
                // populate
                clone.querySelector(".member_business").textContent = member.name;
                clone.querySelector('.member_tagline').textContent = member.tagline;
                clone.querySelector('.member_logo').src = `images/${member.image}`;
                clone.querySelector(".member_email").textContent = member.email;
                clone.querySelector(".member_email").href = `mailto:${member.email}`;
                clone.querySelector(".member_phone").textContent = member.phone;
                clone.querySelector(".member_website").textContent = member.website;
                clone.querySelector(".member_website").href = member.website;

                return clone;
            });

            directory.append(...elements)
        });

});

// toggle view
const button = document.querySelector("#toggle_members_view");
button.addEventListener("click", () => {

    directory.classList.toggle('line_view');
});



