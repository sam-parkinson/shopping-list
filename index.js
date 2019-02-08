// add function to add items
function addItems() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const newItem = $('#shopping-list-entry').val()
        ('.js-list').append(`
        <li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`);
    });
}

// add function to cross off items
function checkItems() {

}

// add function to delete items
function deleteItems() {

}

$(addItems);
$(checkItems);
$(deleteItems);