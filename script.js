  document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      })
    });

    // Replace avatar initials if you provided a name
    (function(){
      const name = 'Violin Kinya';
      const initials = name.split(' ').map(s=>s[0]).join('').slice(0,2).toUpperCase();
      const avatar = document.querySelector('.avatar');
      if(avatar && avatar.textContent.trim()==='[Photo]') avatar.textContent = initials;
    })();
    const projects = {

    dairyProject: {

        title: "Integrated Dairy Farm Management Information System",

        description:
            "A web-based dairy farm management system designed to help farmers digitize farm records and monitor important dairy farming activities.",

        features: [
            "Animal record management",
            "Milk production monitoring",
            "Animal health and vaccination tracking",
            "Breeding management",
            "Farm income and expense tracking",
            "Notifications and reminders",
            "Farmer and administrator dashboards"
        ],

        tech:
            "HTML, CSS, JavaScript, PHP and MySQL",

        role:
            "System developer responsible for system design, database development, frontend development and backend functionality.",

        github:
            "https://github.com/mwenda-v/dairy-farm-system"

    },


    databaseProject: {

        title: "Database Management Project",

        description:
            "A database project demonstrating database design, relationships, SQL queries and structured data management.",

        features: [
            "Database design",
            "Table relationships",
            "SQL queries",
            "Data insertion and retrieval",
            "Data management"
        ],

        tech:
            "MySQL, SQL and PHP",

        role:
            "Developer",

        github:
            "https://github.com/mwenda-v/database-management-project"

    },


    csharpProject: {

        title: "C# Application Project",

        description:
            "A C# application developed to demonstrate application programming concepts and user interaction.",

        features: [
            "User interface",
            "Application logic",
            "Input validation",
            "Event handling"
        ],

        tech:
            "C# and .NET",

        role:
            "Developer",

        github:
            "https://github.com/mwenda-v/csharp-application-project"

    }

};


function openProject(projectId) {

    const project = projects[projectId];

    document.getElementById("modalTitle").textContent =
        project.title;

    document.getElementById("modalDescription").textContent =
        project.description;

    document.getElementById("modalTech").textContent =
        project.tech;

    document.getElementById("modalRole").textContent =
        project.role;

    const featureList =
        document.getElementById("modalFeatures");

    featureList.innerHTML = "";

    project.features.forEach(function(feature) {

        const li = document.createElement("li");

        li.textContent = feature;

        featureList.appendChild(li);

    });


    document.getElementById("modalGithub").href =
        project.github;


    document.getElementById("projectModal").style.display =
        "flex";
}


function closeProject() {

    document.getElementById("projectModal").style.display =
        "none";

}
const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const filter =
            button.getAttribute("data-filter");


        /* Change active button */

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        /* Filter projects */

        projectCards.forEach(function(card) {

            const categories =
                card.getAttribute("data-category");


            if (
                filter === "all" ||
                categories.includes(filter)
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});
