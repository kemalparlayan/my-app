import * as constants from "../constants";

export interface IncrementEnthusiasm{
    type:constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm{
    type:constants.DECREMEMT_ENTHUSIASM;
}

export type EnthusiasmAction =IncrementEnthusiasm|DecrementEnthusiasm;

export function incrementEnthusiasm():IncrementEnthusiasm{
    return{
        type:constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm():DecrementEnthusiasm{
    return{
        type:constants.DECREMEMT_ENTHUSIASM
    }
}