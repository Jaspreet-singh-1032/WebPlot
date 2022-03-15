import {ActionTypes} from './actionTypes'
import {initialStateType} from './types'
interface actionProp{
    type: ActionTypes,
    payload: any
}

export const reducer = (state:initialStateType, action: actionProp): initialStateType=>{
    switch(action.type){
        case ActionTypes.setCSVData:
            return {
                // ...state,
                csvData: action.payload.csvData,
                csvHeaders: action.payload.csvHeaders
            }
        default:
            return state;
    }
}