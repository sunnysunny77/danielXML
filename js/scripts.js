function loadXMLDoc(documentName) {

    'use strict';
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {

       displayResult(this);
      }
    };
    xmlhttp.open("GET", "resources/classic-vehicles.xml", true);
    xmlhttp.send();
}


function displayResult(xml) {

    'use strict';
    const xmlDoc = xml.responseXML;
    const result = xmlDoc.getElementsByTagName("vehicle");
    var table = "<tr><th>name</th><th>Model</th><th>Country</th><th>Company</th><th>Price</th><th>Year</th></tr>";

    for (const item of result) {
       
        table += "<tr><td>" +
       item.getElementsByTagName("name")[0].childNodes[0].nodeValue +
        "</td><td>" +
       item.getElementsByTagName("model")[0].childNodes[0].nodeValue +
        "</td><td>" +
       item.getElementsByTagName("country")[0].childNodes[0].nodeValue +
        "</td><td>" +
       item.getElementsByTagName("company")[0].childNodes[0].nodeValue +
        "</td><td>" +
       item.getElementsByTagName("price")[0].childNodes[0].nodeValue +
        "</td><td>" +
       item.getElementsByTagName("year")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }

    document.getElementById("response").innerHTML = table;
}


window.onload = function () {

    'use strict';
    loadXMLDoc();
}