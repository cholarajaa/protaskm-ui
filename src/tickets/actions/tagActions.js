//Import the Tag API 

import { TagApi } from "../../api/tagApi";


// These are the action type constants. Ordered by CRUD order. 
// There is a pattern of Action, Action_Success, Action_Error action types for the Async actions. 



//Create
export const CREATE_TAG = '[Tag] CREATE_TAG' 
export const CREATE_TAG_SUCCESS = '[Tag] CREATE_TAG_SUCCESS' 
export const CREATE_TAG_ERROR = '[Tag] CREATE_TAG_ERROR' 


//Read
export const GET_TAGS = '[Tag] GET_TAGS' 
export const GET_TAGS_SUCCESS = '[Tag] GET_TAGS_SUCCESS' 
export const GET_TAGS_ERROR = '[Tag] GET_TAGS_ERROR' 

 
//These are the action types Also ordered in CRUD Order.

//Create

//The dispatch and getstate function is provided by the Redux-Thunk middleware, we can dispatch actions with it.

export function CreateTag(tag){
    return (dispatch, getState) => {
        return TagApi.createTag(tag).then(res => {
            dispatch(CreateTagSuccess(res.data))
        })
    }
}

export function CreateTagSuccess(tag){
    return {
        type:CREATE_TAG_SUCCESS,
        tag
    }
}


//Read
export function GetTags(){
    return (dispatch, getState) => {
        return TagApi.getTag().then(res => {
        if (res.data) {
            dispatch(GetTagSuccess(res))
        }else{
            dispatch(GET_TAGS_ERROR(getState))
        }
        })
    }
}

export function GetTagSuccess(tags){
    return {
        type:GET_TAGS_SUCCESS,
        tags
    }
}