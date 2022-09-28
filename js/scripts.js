function displayResult(xml) {

    'use strict';
    const xmlDoc = xml.responseXML;
    const result = xmlDoc.getElementsByTagName("vehicle");
    var table = "";

    for (const item of result) {

        const name = item.getElementsByTagName("name")[0].childNodes[0].nodeValue;

        table += "<li> <ul> <li>" + 
        
            "<img src='https://via.placeholder.com/200x200' alt='" + name + "'/>" +
            "</li> <li> <b> Name: \xa0 </b>" +
            name +
            "</li> <li> <b> Model: \xa0 </b>" +
            item.getElementsByTagName("model")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Country: \xa0 </b>" +
            item.getElementsByTagName("country")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Model: \xa0 </b>" +
            item.getElementsByTagName("company")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Company: \xa0 </b>" +
            item.getElementsByTagName("price")[0].childNodes[0].nodeValue +
            "</li> <li> <b> Year: \xa0 </b>" +
            item.getElementsByTagName("year")[0].childNodes[0].nodeValue +

        "</li> </ul> </li>";
    }

    document.getElementById("response").innerHTML = table;
}

function loadXMLDoc(documentName) {

    'use strict';
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            displayResult(this);
        }
    };
    
    xmlhttp.open("GET", documentName, true);
    xmlhttp.send();
}

window.onload = function () {

    'use strict';
    loadXMLDoc("resources/classic-vehicles.xml");
}