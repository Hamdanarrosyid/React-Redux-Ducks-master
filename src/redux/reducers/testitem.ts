import {
  GET_VALUE_ERROR,
  GET_VALUE_SUCCESS,
  GET_VALUE
,People} from '../constants/testitem';
import { errorGetValue, startGetValue, successGetValue } from '../utils/testitem';
import { TestItemStateType } from '../../classes/TestItemStateType';
import { ResponseType } from '../../classes/ResponseType';

let initialState: TestItemStateType = new TestItemStateType();

interface actionType {
  type:string,
  pushPayload:People[],
  message:string
}

export default function TestItemReducer(state = initialState, action:actionType) {
  let responseData: ResponseType = new ResponseType();
  switch (action.type) {
    case GET_VALUE:
      return Object.assign({}, startGetValue(state));
    case GET_VALUE_SUCCESS:
      responseData = new ResponseType();
      responseData.dataPeople = action.pushPayload
      const textboxSuccessData: ResponseType = responseData;
      return Object.assign({}, successGetValue(state), { textboxSuccessData });
    case GET_VALUE_ERROR:
      responseData = new ResponseType();
      responseData.message = action.message;
      const textboxErrorData: ResponseType = responseData;
      return Object.assign({}, errorGetValue(state), { textboxErrorData });
    default:
      return state;
  }
};


