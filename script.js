// Define an array of projects
const projects = [
    {
        name: "Project 1",
        description: "Description of Project 1."
    },
    {
        name: "Project 2",
        description: "Description of Project 2."
    },
    // Add more projects as needed
];

// Function to create project elements and add them to the DOM
function renderProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project');
        const projectName = document.createElement('h3');
        projectName.textContent = project.name;
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectItem.appendChild(projectName);
        projectItem.appendChild(projectDescription);
        projectList.appendChild(projectItem);
    });
}

// Call the renderProjects function when the page loads
window.onload = renderProjects;
