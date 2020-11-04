import {
    GET_VALUE,
    GET_VALUE_ERROR,
    GET_VALUE_SUCCESS,
    People,
} from '../constants/testitem';
import {Dispatch} from "redux"


export const getValue = (page:number) =>async (dispatch: Dispatch<any>) => {
    dispatch({type: GET_VALUE});
    await fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then((response: any) => response.json())
        .then((data: any) => {
            data.count > 0 ?
                dispatch(getValueSuccess(data.results)) :
                dispatch(getValueError(data.detail))
        })
};

const getValueSuccess = (payload:any) => {
    let pushPayload:People[] = []

    payload.map((people:People)=>{
        return pushPayload.push({
            name:people.name,
            height:people.height,
            mass:people.mass,
            skin_color:people.skin_color,
            hair_color:people.hair_color
        });
    })
    return ({
        type: GET_VALUE_SUCCESS,
        pushPayload
    });
};

const getValueError = (message:string) => {
    return ({
        type: GET_VALUE_ERROR,
        message
    });
};
