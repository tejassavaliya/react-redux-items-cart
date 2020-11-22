export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }
}

export const deleteItem = (index) => {
    return {
        type: 'REMOVE_ITEM',
        index: index
    }
}

export const incrementItemQuantity = (index) => {
    return {
        type: 'INCREMENT_ITEM_QUANTITY',
        index: index
    }
}

export const decrementItemQuantity = (index) => {
    return {
        type: 'DECREMENT_ITEM_QUANTITY',
        index: index
    }
}
