const searchInput = document.getElementById('search-input'),
    itemsList = document.querySelectorAll('.list__item');

searchInput.addEventListener('input', function() {
    let filter = searchInput.value.toLowerCase();
    
    itemsList.forEach(element => {
        if(element.textContent.toLowerCase().includes(filter) || filter === '')
            element.style = 'display: block;';
        else
            element.style = 'display: none;';
    });
})