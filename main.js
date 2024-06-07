const item_1 = document.getElementsByClassName("item-1")[0];

const item_2 = document.getElementsByClassName("item-2")[0];

const item_3 = document.getElementsByClassName("item-3")[0];

itemList = [item_1, item_2, item_3]

item_1.classList.add("item-border");

function toggleBorder(selectedItem) {
    itemList.forEach(item => {
        if (item === selectedItem) {
            item.classList.add("item-border");
        } else {
            item.classList.remove("item-border");
        }
    });
}