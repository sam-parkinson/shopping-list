function addItems() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const newItem = $('#shopping-list-entry').val();
        $('.js-list').append(`
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
    $('.js-list').on('click', '.shopping-item-toggle', function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
}


function deleteItems() {
    $('.js-list').on('click', '.shopping-item-delete', function(){
        $(this).closest('li').remove();
    });
}

$(addItems);
$(checkItems);
$(deleteItems);