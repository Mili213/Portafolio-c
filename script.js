document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
  
    projects.forEach(project => {
      project.addEventListener('click', () => {
        const url = project.getAttribute('data-url');
        if (url) {
          window.location.href = url;
        }
      });
    });
  });

const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);
