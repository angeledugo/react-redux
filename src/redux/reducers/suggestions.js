import items from "../../data/items";

const defaultState = items;

function reducer(state = defaultState, {
    type,
    payload
}) {
    switch (type) {
        case 'findSuggestions': {
           return items;
        }
        default:
            return state;
    }

}

export default reducer;