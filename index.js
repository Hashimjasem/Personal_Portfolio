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
    },
    {
        name: 'python API',
        img: './assets/IMG_2493.JPG',
    },
    {
        name: 'javascript API',
        img: './assets/IMG_2493.JPG',
    },
    {
        name: 'Twelver',
        img: './assets/IMG_2493.JPG',
    },
    {
        name: 'Najaf Mens Health Clinic',
        img: './assets/IMG_2493.JPG',
    },
    {
        name: 'Java API',
        img: './assets/IMG_2493.JPG',
    },
    {
        name: 'KOOTA Mobile Detailers',
        img: './assets/IMG_2493.JPG',
    },
    {
        name: 'Bun API',
        img: './assets/IMG_2493.JPG',
    },
    {
        name: 'NPM Animation Library',
        img: './assets/IMG_2493.JPG',
    },
    {
        name: 'Online Games',
        img: './assets/IMG_2493.JPG',
    },
    {
        name: 'Snake',
        img: './assets/IMG_2493.JPG',
    },
    {
        name: 'Minesweeper',
        img: './assets/IMG_2493.JPG',
    },
]
// this array represents the slots in the bento box
bentoSlots = [24, 11,11,22,22,12,22,11,21,12,13]


projects.forEach(projects => {
    let projectElement = document.createElement('div');
    projectElement.textContent = projects.name
    // function that randomly assigns project to a spot

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