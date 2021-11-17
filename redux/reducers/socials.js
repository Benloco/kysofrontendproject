import * as type from '../constants/social';



const initialState={
    socials:[],
    isLoading:true,
    errMess:null
}

export const socialReducer=(state=initialState,action)=>{
    switch(action.type){
        case type.GET_SOCIALS:
           return{...state,socials:action.payload,errMess:null,isLoading:false}
        case type.LOAD_SOCIALS:
           return {...state,socials:[],errMess:null,isLoading:true}
        case type.ON_FAILED:
           return {...state,socials:[],errMess:action.payload,isLoading:false}
        default:
           return state;
    }
  
}

export const editSocialReducer=(
    state={
        isSaving:false,
        successMess:null,
        errmess:null
    },action)=>{
    switch(action.type){
        case type.EDIT_SOCIAL:
          return {...state,isSaving:true,successMess:null,errmess:null};
        case type.ON_EDIT_SUCCESS:
          return {...state,isSaving:false,successMess:action.payload,errMess:null};
        case type.ON_EDIT_FAILED:
          return {...state,isSaving:false,successMess:null,errmess:action.payload};
        default:
          return state;
    }
}