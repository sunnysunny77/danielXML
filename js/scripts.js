function result(xml) {

    'use strict';

    const xmlDoc = xml.responseXML;
    const result = xmlDoc.getElementsByTagName("vehicle");

    let buffer = "";
    let count = 1;

    for (const index of result) {

        buffer += "<li> <ul> <li>" +

            "<a target='_blank' href='./images/holder.jpg' ><img src='./images/holder.jpg' alt='image" + count + "'/></a>" +
            "</li> <li> <b> Name: \xa0 </b>" +
            index.getElementsByTagName("name")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Model: \xa0 </b>" +
            index.getElementsByTagName("model")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Country: \xa0 </b>" +
            index.getElementsByTagName("country")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Company: \xa0 </b>" +
            index.getElementsByTagName("company")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Price: \xa0 </b>$" +
            index.getElementsByTagName("price")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Year: \xa0 </b>" +
            index.getElementsByTagName("year")[0].childNodes[0].nodeValue +

            "</li> </ul> </li>";
            count++;
    }

    document.getElementById("response").innerHTML = buffer; 
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