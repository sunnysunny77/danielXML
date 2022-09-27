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
    const result = xmlDoc.getElementsByTagName("test");
    var txt = "";

    for (const item of result) {
       
        txt += item.childNodes[0].nodeValue;
    }

    document.getElementById("response").innerHTML = txt;
}


window.onload = function () {

    'use strict';
    loadXMLDoc();
}