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


function checkItems() {
    $('.shopping-item-toggle').on('click', function() {
        $(this).closest('.shopping-item').toggleClass('.shopping-item__checked');
    });
}

// add function to delete items
function deleteItems() {
    // research how to do this
    // select item to be deleted
    // shopping-item-delete
    // delete nearest li
}

$(addItems);
$(checkItems);
$(deleteItems);