/* add your code here */

document.addEventListener("DOMContentLoaded", function () {
    const data = JSON.parse(content);
    const parent = document.querySelector("ul");
    const parent2 = document.querySelector("figure");

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
                    
                    for (let f of d.features) {
                        const desc = document.createElement("div");
                        desc.className = "box";
                        //desc.innerHTML = '<p>' + f.description + '</p>';
                        figure.appendChild(desc);
                        desc.style.position = "absolute";
                        desc.style.left = f.upperLeft[0] + 'px';
                        desc.style.top = f.upperLeft[1] + 'px';
                        desc.style.width = (f.lowerRight[0] - f.upperLeft[0]) + 'px';
                        desc.style.height = (f.lowerRight[1] - f.upperLeft[1]) + 'px';

                        desc.addEventListener("mouseover", function (){
                            document.querySelector("#description").textContent = f.description;
                        })

                        desc.addEventListener("mouseout", function (){
                            document.querySelector("#description").textContent = '';
                        })
                    }


                }
            }
        }
    });

});