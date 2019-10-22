import { EnthusiasmAction} from "../actions";
import {StoreState} from "../types/index";
import{INCREMENT_ENTHUSIASM,DECREMEMT_ENTHUSIASM} from "../constants/index";

export function enthusiasm(state:StoreState,action:EnthusiasmAction):StoreState{
    switch(action.type)
    {
        case INCREMENT_ENTHUSIASM:
            return {...state,enthusiasmLevel:state.enthusiasmLevel+1};
        case DECREMEMT_ENTHUSIASM:
            return {... state,enthusiasmLevel:state.enthusiasmLevel-1};
    }
    return state;
}