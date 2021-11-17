import * as types from '../constants/reports';



const initialState={
    reports:[],
    isLoading:true,
    errMess:null,
}

export const reportsReducer=(state=initialState,action)=>{
    switch(action.type){
        case  types.GET_REPORTS:
           return {...state,reports:action.payload,isLoading:false,errMess:null};
        case types.LOAD_REPORTS:
           return {...state,reports:[],isLoading:true,errMess:null};
        case types.ON_FAILED:
           return {...state,reports:[],isLoading:false,errMess:action.payload};
      
        default:
           return state;
    }
}


export const editReportReducer=(
    state={
    isSaving:false,
    isSuccess:false,
    failed:false},
    action)=>{

   switch(action.type){
       case types.EDIT_REPORT:
         return {...state,isSaving:true,failed:false,isSuccess:false};
       case types.ON_EDIT_SUCCESS:
         return {...state,isSaving:false,isSuccess:true,failed:false};
       case types.ON_EDIT_FAILED:
         return {...state,isSaving:false,isSuccess:true,failed:true};
       default:
          return state;
   }
}

