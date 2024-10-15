/* add your code here */

document.addEventListener("DOMContentLoaded", function () {
    const data = JSON.parse(content);
    const parent = document.querySelector("ul");

    for (let d of data) {
        const element = document.createElement("li");
        const img = document.createElement("img");
        img.src = "images/small/" + d.id + ".jpg";
        img.dataset.id = d.id;
        element.appendChild(img);
        parent.appendChild(element);
    }

    parent.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName == "IMG"){
            const figure = document.querySelector("figure");
            const img = document.createElement("img");

            figure.innerHTML = '';
            img.src = "images/large/" + e.target.dataset.id + ".jpg";
            figure.appendChild(img);
            for (let d of data) {
                if (d.id == e.target.dataset.id) {
                    document.querySelector("#title").innerHTML = d.title;
                    document.querySelector("#artist").innerHTML = 'By ' + d.artist;
                }
            }
        }
    });
});