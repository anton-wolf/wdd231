const queryString = window.location.search;
const params = new URLSearchParams(queryString);

console.log(params.get("given-name"));

const container = document.querySelector(".verify");

const verifying_template = document.querySelector(".verifying_template");

const verifying_clone = verifying_template.content.cloneNode(true);

verifying_clone.querySelector(".veri_name").textContent = params.get("given-name");
verifying_clone.querySelector('.veri_last').textContent = params.get("family-name");
verifying_clone.querySelector('.veri_title').textContent = params.get("title");
verifying_clone.querySelector(".veri_email").textContent = params.get("email");
verifying_clone.querySelector(".veri_mobile").textContent = params.get("mobile");
verifying_clone.querySelector(".veri_org").textContent = params.get("org");
verifying_clone.querySelector(".veri_level").textContent = params.get("level");
verifying_clone.querySelector(".veri_descrip").textContent = params.get("description");

container.append(verifying_clone);

