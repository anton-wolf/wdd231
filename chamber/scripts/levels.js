const modal = document.querySelector("#modal");

const template_2 = document.querySelector("#levels_template");

document.querySelector(".levels").childNodes.forEach(child => {
    child.childNodes.forEach(grand_child => {
        grand_child.childNodes.forEach(great_grand_child => {
            if (great_grand_child.nodeName === "BUTTON") {
                great_grand_child.addEventListener("click", async () => {
                    modal.showModal();

                    await fetch("data/levels.json")

                        // return the response json data
                        .then(response => {
                            return response.json()

                            // return promise as data object
                        }).then(data => {
                            const getLevel = great_grand_child.getAttribute("data-level");
                            const level = data[getLevel];

                            const clone = template_2.content.cloneNode(true);
                            clone.querySelector(".level_title").textContent = `${level.level} Membership Level`;
                            clone.querySelector(".level_cost").textContent = level.cost > 0 ? `Cost: ${level.cost}.00 ZR` : "Cost: Free";


                            const elements = level.benefits.map(benefit => {
                                const li = document.createElement("li");
                                li.textContent = benefit;
                                return li;
                            });

                            clone.querySelector(".level_benefits").append(...elements);

                            clone.querySelector(".close-button").addEventListener("click", () => {
                                modal.close();
                                modal.textContent = "";
                            })

                            modal.append(clone);
                        });
                });
            }
        });
    });
});


const formLoadTime = document.querySelector("#formLoadTime");
formLoadTime.value = document.lastModified;