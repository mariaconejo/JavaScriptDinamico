document.querySelectorAll('[data-user-id]').forEach(function(element) {
    element.addEventListener('mouseover', function() {
        const userId = element.getAttribute('data-user-id');
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => {
                const tooltipContent = `${data.name} - ${data.email}`;
                element.setAttribute('data-tooltip', tooltipContent);
            });
    });
});
