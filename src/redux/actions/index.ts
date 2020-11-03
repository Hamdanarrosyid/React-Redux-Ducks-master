import {
    GET_VALUE,
    GET_VALUE_SUCCESS,
    GET_VALUE_ERROR
} from '../constants/testitem';


export const getValue = (page:number) =>async (dispatch: any) => {
    dispatch({type: GET_VALUE});
    await fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then((response: any) => response.json())
        .then((data: any) => {
            data.count > 0 ?
                dispatch(getValueSuccess(data.results)) :
                dispatch(getValueError(data.detail))
        })
};

const getValueSuccess = (payload: Array<object>) => {
    let pushPayload:Array<object> = []

    payload.map((people:any)=>{
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

const getValueError = (message: string) => {
    return ({
        type: GET_VALUE_ERROR,
        message
    });
};
