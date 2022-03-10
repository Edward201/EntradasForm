document.addEventListener('DOMContentLoaded', async () => {

    let names = window.api.getNames();
    
    let divNames = document.getElementById("names");
    let nameString = names.join("<br />");
    divNames.innerHTML = nameString;
});