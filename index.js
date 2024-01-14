removeLoad = () => {
    loadingscn = document.getElementById('loading-screen')
    loadingscn.remove();
}

setTimeout(removeLoad, 1500)

let projectsGrid = document.querySelector('#projects-grid')

let projects = [
    {
        name: 'my24',
        img: './assets/IMG_2493.JPG',
        main: true
    },
    {
        name: 'python API',
        img: './assets/IMG_2493.JPG',
        main: false
    },
    {
        name: 'javascript API',
        img: './assets/IMG_2493.JPG',
        main: false
    },
    {
        name: 'Twelver',
        img: './assets/IMG_2493.JPG',
        main: true
    },
    {
        name: 'Najaf Mens Health Clinic',
        img: './assets/IMG_2493.JPG',
        main: true
    },
    {
        name: 'Java API',
        img: './assets/IMG_2493.JPG',
        main: false
    },
    {
        name: 'KOOTA Modile Detailers',
        img: './assets/IMG_2493.JPG',
        main: true
    },
    {
        name: 'Bun API',
        img: './assets/IMG_2493.JPG',
        main: false
    },
    {
        name: 'filler1',
        img: './assets/IMG_2493.JPG',
        main: true
    },
    {
        name: 'filler2',
        img: './assets/IMG_2493.JPG',
        main: false
    },
    {
        name: 'filler3',
        img: './assets/IMG_2493.JPG',
        main: true
    },
    {
        name: 'filler4',
        img: './assets/IMG_2493.JPG',
        main: false
    },

]

let gridArea = 50


projects.forEach(projects => {
    let projectElement = document.createElement('div');
    projectElement.className = projects.name;
    projectElement.classList.add(projects.main ? 'main-project' : 'regular-project');
    //insert it into the grid
    projectsGrid.appendChild(projectElement);
});
//insert it into the grid



//so in order to fill the grid we need:
// total number of cells as a var
// an array of project objects
//each object should contain:
//name 
//image
//idname
//