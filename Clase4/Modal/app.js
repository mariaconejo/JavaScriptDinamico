document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://restcountries.com/v3.1/all';

    const countryList = document.getElementById('countryList');
    const countryModal = document.getElementById('countryModal');
    const closeModal = document.querySelector('.close');
    const countryName = document.getElementById('countryName');
    const countryFlag = document.getElementById('countryFlag');
    const countryCapital = document.getElementById('countryCapital');
    const countryRegion = document.getElementById('countryRegion');
    const countryPopulation = document.getElementById('countryPopulation');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let countryHtml = '';
            data.forEach(country => {
                countryHtml += `
                    <div class="country-item" data-name="${country.name.common}" data-flag="${country.flags.png}" data-capital="${country.capital ? country.capital[0] : 'N/A'}" data-region="${country.region}" data-population="${country.population.toLocaleString()}">
                        ${country.name.common}
                    </div>
                `;
            });
            countryList.innerHTML = countryHtml;

            const countryItems = document.querySelectorAll('.country-item');
            countryItems.forEach(item => {
                item.addEventListener('click', () => {
                    countryName.textContent = item.getAttribute('data-name');
                    countryFlag.src = item.getAttribute('data-flag');
                    countryCapital.textContent = item.getAttribute('data-capital');
                    countryRegion.textContent = item.getAttribute('data-region');
                    countryPopulation.textContent = item.getAttribute('data-population');
                    countryModal.style.display = 'block';
                });
            });
        })
        .catch(error => console.error('Error:', error));

    closeModal.addEventListener('click', () => {
        countryModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == countryModal) {
            countryModal.style.display = 'none';
        }
    });
});
