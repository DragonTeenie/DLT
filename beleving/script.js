
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('header').innerHTML = data;

        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add('active');
            }
        });
    });

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const categorySelect = document.getElementById('category');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const popupName = document.getElementById('popupName');
    const popupRole = document.getElementById('popupRole');
    const popupStory = document.getElementById('popupStory');


    function loadCategory(category) {
        grid.innerHTML = ''; 
        fetch(`/${category}/list.json`) 
            .then(response => response.json())
            .then(data => {
                data.forEach(person => {
                    const item = document.createElement('div');
                    item.classList.add('grid-item');
                    item.innerHTML = `
                        <img src="/${category}/${person.id}/foto.jpg" alt="${person.name}">
                        <div class="name">${person.name}</div>
                    `;
                    item.addEventListener('click', () => {
                        fetch(`/${category}/${person.id}/data.php`)
                            .then(response => response.text())
                            .then(data => {
                                eval(data); 
                                popupName.textContent = naam;
                                popupRole.textContent = rol;
                                popupStory.textContent = verhaal;
                                popup.classList.remove('hidden');
                            });
                    });
                    grid.appendChild(item);
                });
            });
    }

    
    categorySelect.addEventListener('change', (e) => {
        loadCategory(e.target.value);
    });

    
    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden');
    });


    loadCategory('acteurs');
});


fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('footer').innerHTML = data;
    });
