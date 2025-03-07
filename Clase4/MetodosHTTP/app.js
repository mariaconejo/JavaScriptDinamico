// app.js
document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');

    document.getElementById('getButton').addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                if (response.ok) {
                    console.log('GET request successful: 200 OK');
                    return response.json();
                } else {
                    console.error(`GET request failed: ${response.status}`);
                    throw new Error('GET request failed');
                }
            })
            .then(data => {
                output.textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('postButton').addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            })
        })
            .then(response => {
                if (response.ok) {
                    console.log('POST request successful: 201 Created');
                    return response.json();
                } else {
                    console.error(`POST request failed: ${response.status}`);
                    throw new Error('POST request failed');
                }
            })
            .then(data => {
                output.textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('putButton').addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 1,
                title: 'foo updated',
                body: 'bar updated',
                userId: 1
            })
        })
            .then(response => {
                if (response.ok) {
                    console.log('PUT request successful: 200 OK');
                    return response.json();
                } else {
                    console.error(`PUT request failed: ${response.status}`);
                    throw new Error('PUT request failed');
                }
            })
            .then(data => {
                output.textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('patchButton').addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'foo partially updated'
            })
        })
            .then(response => {
                if (response.ok) {
                    console.log('PATCH request successful: 200 OK');
                    return response.json();
                } else {
                    console.error(`PATCH request failed: ${response.status}`);
                    throw new Error('PATCH request failed');
                }
            })
            .then(data => {
                output.textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('deleteButton').addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    console.log('DELETE request successful: 200 OK');
                    return response.json();
                } else {
                    console.error(`DELETE request failed: ${response.status}`);
                    throw new Error('DELETE request failed');
                }
            })
            .then(data => {
                output.textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
