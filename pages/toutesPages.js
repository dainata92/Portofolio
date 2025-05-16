let barreNav = document.getElementById('barre');
let footer = document.getElementById('bas');
function ajouterToutesPages(){

    let nav = document.getElementById('barre');
    let aHome = document.createElement('a');
    aHome.setAttribute('href', "index.html");
    nav.appendChild(aHome);
    aHome.textContent="Home";
    let aAbout = document.createElement('a');
    aAbout.setAttribute('href', "about.html");
    nav.appendChild(aAbout);
    aAbout.textContent="About";
    let aWork = document.createElement('a');
    aWork.setAttribute('href', "work.html");
    nav.appendChild(aWork);
    aWork.textContent="Work";
    let aContact = document.createElement('a');
    aContact.setAttribute('href', "contact.html");
    nav.appendChild(aContact);
    aContact.textContent="Contact";

    let footer = document.getElementById('bas');
    let pFooter = document.createElement('p');
    footer.appendChild(pFooter);
    pFooter.textContent="Copyrights @2025 Dainata Leva";
}
ajouterToutesPages();