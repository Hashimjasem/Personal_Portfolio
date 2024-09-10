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
        name: "NextJS",
        bg: "./assets/npm.png"
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
        name: "AWS",
        bg: "./assets/HTML.jpeg"
    },
    {
        name: "Figma",
        bg: "./assets/figma.png"
    }
    // Add more objects as needed
];

// Create a <ul> element
let ul = document.getElementById("technologies-list");

// Iterate through the array of objects
tech.forEach(item => {
    // Create a <li> element for each item
    let li = document.createElement("li");
    



    // Create an <h1> element for the name
    let h1 = document.createElement("h1");
    h1.textContent = item.name;

    let div = document.createElement("div");
    div.style.backgroundImage = `url(${item.bg})`;
    
    // Append the <h1> to the <li>
    div.appendChild(h1);
    li.appendChild(div)
    
    // Append the <li> to the <ul>
    ul.appendChild(li);
    
    // Append the <li> to the <ul>
    ul.appendChild(li);
});