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
    }
]
// this array represents the slots in the bento box. eg 24 represents a 2 by 4 slot in the grid
bentoSlots = ['tf', 'oo','oo','tt','tt','ot','tt','oo','to','ot','oe']

// Shuffle the projects array randomly
projects.sort(() => 0.5 - Math.random());

bentoSlots.forEach(slot => {
  const project = projects.pop(); // Get a random project from the end of the array
  const projectElement = document.createElement('div');
  projectElement.classList.add('project-item');
  projectElement.innerHTML = `
    <h3>${project.name}</h3>
  `;
//<img src="${project.img}" alt="${project.name}">
  // Determine the class based on the slot number
  const [rows, columns] = slot.toString().split('');
  projectElement.classList.add(`${rows}-by-${columns}`);

  projectsGrid.appendChild(projectElement);
});




//so in order to fill the grid we need:
// total number of cells as a var
// an array of project objects
//each object should contain:
//name 
//image
//idname
//