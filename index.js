let tech = [
    {
        name: "HTML",
        bg: "./assets/html.png"
    },
    {
        name: "CSS",
        bg: "./assets/css.png"
    },
    {
        name: "JS",
        bg: "./assets/js.png"
    },
    {
        name: "ReactJS",
        bg: "./assets/react.png"
    },
    {
        name: "NodeJS",
        bg: "./assets/nodejs.png"
    },
    {
        name: "ExpressJS",
        bg: "./assets/expressjs.png"
    },
    {
        name: "NextJS",
        bg: "./assets/nextjs.png"
    },
    {
        name: "MongoDB",
        bg: "./assets/mongodb.png"
    },
    {
        name: "MySQL",
        bg: "./assets/mysql.png"
    },
    {
        name: "GSAP",
        bg: "./assets/Gsap.png"
    },
    {
        name: "Tailwind",
        bg: "./assets/tailwind.png"
    },
    {
        name: "Figma",
        bg: "./assets/figma.png"
    },
    {
        name: "Insomnia",
        bg: "./assets/insomnia.jpg"
    }
    // Add more objects as needed
];

// Create a <ul> element
let ul = document.getElementById("technologies-list");

// Iterate through the array of objects
tech.forEach(item => {
    // Create a <li> element for each item
    let li = document.createElement("li");
    
    li.style.backgroundImage = `url(${item.bg})`;
    ul.appendChild(li);
});