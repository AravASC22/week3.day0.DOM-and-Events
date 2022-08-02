let newdiv = document.createElement("div");
let h2 = document.createElement("h2");
newdiv.classList.add("champ_container", "pyke");
h2.innerHTML = "pyke, the bloodharbor ripper"
newdiv.appendChild(h2);
let main = document.querySelector(".main_container");
main.appendChild(newdiv);