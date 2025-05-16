function ajouterIndex(){
    let sectionAbout = document.getElementById('about');
    let h2About = document.createElement('h2');
    h2About.textContent="Hey, I am Dainata";
    sectionAbout.appendChild(h2About);
    let pAbout = document.createElement('p');
    pAbout.textContent="a web developer from Paris";
    sectionAbout.appendChild(pAbout);
    let collage = document.getElementById('tableauProjects');
    let textCollage = document.createElement('h2');
    collage.appendChild(textCollage);
    textCollage.textContent="Voici mes projects...";
    let aCollage = document.createElement('a');
    aCollage.setAttribute('href', "work.html");
    collage.appendChild(aCollage);
    let collagePhoto = document.createElement('img');
    collagePhoto.setAttribute('src',"images/projectsGif.gif");
    aCollage.appendChild(collagePhoto);
}
ajouterIndex();




