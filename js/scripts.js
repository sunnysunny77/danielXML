function events(obj, typ, callback, opts) {

    'use strict';

    if (obj) {

        obj.addEventListener(typ, callback, opts);
    }
}

function result(xml) {

    'use strict';

    const xmlDoc = xml.responseXML;
    const result = xmlDoc.getElementsByTagName("vehicle");
    const pages = document.getElementById("pages");
    const response = document.getElementById("response");

    let array = [];
    let buffer = "";
    let page = "";
    let index = 0;

    for (let i = 1; i <= result.length; i++) {

        buffer += "<li> <ul> <li>" +

            "<a target='_blank' href='./images/holder.jpg' ><img src='./images/holder.jpg' alt='image" + i + "'/></a>" +
            "</li> <li> <b> Name: \xa0 </b>" +
            result[i - 1].getElementsByTagName("name")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Model: \xa0 </b>" +
            result[i - 1].getElementsByTagName("model")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Country: \xa0 </b>" +
            result[i - 1].getElementsByTagName("country")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Company: \xa0 </b>" +
            result[i - 1].getElementsByTagName("company")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Price: \xa0 </b>$" +
            result[i - 1].getElementsByTagName("price")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Year: \xa0 </b>" +
            result[i - 1].getElementsByTagName("year")[0].childNodes[0].nodeValue +

            "</li> </ul> </li>";

        if (i % 15 === 0 || i === result.length) {

            array.push(buffer);
            buffer = "";
        }
    }

    response.innerHTML = array[0];

    page += "<span id='next'>&#10146;\xa0</span>";

    for (let i = 1; i <= array.length; i++) {

        page += "<span class='page'>" + [i] + ".\xa0</span>";
    }

    pages.innerHTML = page;

    const nodes = document.getElementsByClassName("page");

    for (let i = 0; i <= nodes.length; i++) {

        const inner = array[i];

        events(
            nodes[i],
            "click",
            function () {

                response.innerHTML = inner;
            },
            null
        );
    }

    events(
        document.getElementById("next"),
        "click",
        function () {

            if (array.length !== index + 1) {

                response.innerHTML = array[index + 1];
                index++;
            }
        },
        null
    );
}

function loadXMLDoc(documentName) {

    'use strict';

    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            result(this);
        }
    };

    xmlhttp.open("GET", documentName, true);
    xmlhttp.send();
}

function init() {

    'use strict';

    loadXMLDoc("resources/classic-vehicles.xml");
}

window.onload = init;