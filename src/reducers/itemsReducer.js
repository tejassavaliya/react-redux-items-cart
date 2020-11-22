const initialState = {
    items: [],
    myTotalCount: 0
}
const itemReducer = ( state = initialState, action) => {

    switch(action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload],
                myTotalCount: state.myTotalCount+1
            } 
        case 'REMOVE_ITEM':
            let newItems2 = [
                ...state.items.filter((item, index) => index !== action.index)
            ];
            return {
                items: newItems2,
                myTotalCount: calculateTotal(newItems2)
            }
        case 'INCREMENT_ITEM_QUANTITY':
            let newItems = [...state.items];
            // if(newItems[action.index].quantity > 1) {
                newItems[action.index].quantity++;
            // }
            return {
                items: [...newItems],
                myTotalCount: calculateTotal(newItems)
            }
        case 'DECREMENT_ITEM_QUANTITY':
            let newItems1 = [...state.items];
            if(newItems1[action.index].quantity > 1) {
                newItems1[action.index].quantity--;
            }
            return {
                items: [...newItems1],
                myTotalCount: calculateTotal(newItems1)
            };
        default:
            return state;    
    }
}

const calculateTotal = (items) => {
    let newItems = [...items];
    return newItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);
}


export default itemReducer;