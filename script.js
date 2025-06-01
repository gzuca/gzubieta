// Object containing data for each skill
const skillData = {
    html: {
        title: "HTML",
        description: "HTML (HyperText Markup Language) is the standard for structuring content on the web. It allows creating pages with elements like headings, paragraphs, lists, and images."
    },
    css: {
        title: "CSS",
        description: "CSS (Cascading Style Sheets) is used to style web pages, controlling colors, fonts, layouts, and animations to enhance appearance and usability."
    },
    javascript: {
        title: "JavaScript",
        description: "JavaScript is a programming language that adds interactivity to web pages, enabling dynamic features like forms, animations, and web applications."
    },
    nodejs: {
        title: "Node.js",
        description: "Node.js is a runtime environment that allows using JavaScript on the server side, ideal for building scalable and fast backend applications."
    },
    react: {
        title: "React",
        description: "React is a JavaScript library for building interactive and reusable user interfaces, based on components, widely used in modern applications."
    },
    illustrator: {
        title: "Adobe Illustrator",
        description: "Adobe Illustrator is a vector design tool used to create logos, illustrations, and custom graphics with high precision."
    },
    figma: {
        title: "Figma",
        description: "Figma is a cloud-based collaborative design tool, ideal for prototyping and designing user interfaces with a focus on UX/UI."
    },
    git: {
        title: "Git",
        description: "Git is a version control system that allows managing and collaborating on software development projects, tracking code changes."
    },
    uxui: {
        title: "UX/UI Design",
        description: "UX/UI Design focuses on creating intuitive and visually appealing user experiences, combining research, interaction design, and aesthetics."
    }
};

// Function to show the modal with skill information
function showModal(skill) {
    const modal = document.getElementById('skillModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    modalTitle.textContent = skillData[skill].title;
    modalDescription.textContent = skillData[skill].description;
    modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('skillModal');
    modal.style.display = 'none';
}

// Close the modal when clicking outside the content
window.onclick = function(event) {
    const modal = document.getElementById('skillModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Close the modal when pressing the Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Add smooth scrolling to navbar links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header height
                behavior: 'smooth'
            });
        }
    });
}); 