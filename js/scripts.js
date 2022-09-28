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
    let page = ""

    for (let i = 1; i <= result.length; i++) {

        const name = result[i - 1].getElementsByTagName("name")[0].childNodes[0].nodeValue;

        buffer += "<li> <ul> <li>" +

            "<img src='./images/200x200.png' alt='" + name + "'/>" +
            "</li> <li> <b> Name: \xa0 </b>" +
            name +
            "</li> <li> <b> Model: \xa0 </b>" +
            result[i - 1].getElementsByTagName("model")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Country: \xa0 </b>" +
            result[i - 1].getElementsByTagName("country")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Model: \xa0 </b>" +
            result[i - 1].getElementsByTagName("company")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Company: \xa0 </b>" +
            result[i - 1].getElementsByTagName("price")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Year: \xa0 </b>" +
            result[i - 1].getElementsByTagName("year")[0].childNodes[0].nodeValue +

            "</li> </ul> </li>";

        if (i % 10 === 0 || i === result.length) {

            array.push(buffer);
            buffer = "";
        }
    }

    response.innerHTML = array[0];

    for (let i = 1; i <= array.length; i++) {

        page += "<span class='page'>" + [i] + "</span>";
    }

    pages.innerHTML = page;

    const nodes = pages.children;

    for (let i = 0; i <= nodes.length; i++) {

        events(
            nodes[i],
            "click",
            function () {
                response.innerHTML = array[i]
            },
            null
        );
    }
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

window.onload = function () {

    'use strict';

    loadXMLDoc("resources/classic-vehicles.xml");
}