import * as types from '../constants/social';
import {baseUrl} from '../../baseurl';

const getSocials=(data)=>{
    return{
        type:types.GET_SOCIALS,
        payload:data
    }
}

const loadSocials=()=>{
    return{
        type:types.LOAD_SOCIALS
    }
}

const failedSocials=()=>{
    return {
        type:types.ON_FAILED
    }
}

export const fetchSocials=()=>async dispatch=>{
  dispatch(loadSocials());
  await fetch(baseUrl+'social',{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
      },
   }).then(response => response.json())
   .then(data=>{
   
       dispatch(getSocials(data));
        
   }).catch(err=>{
       dispatch(failedSocials());

       console.log(err)
   })
}

const savingEditedSocial=()=>{
    return {type:types.EDIT_SOCIAL}
}

const editSocialFailed=()=>{
    return{type:types.ON_EDIT_FAILED}
}

const editSaved=()=>{
    return{type:types.ON_EDIT_SUCCESS}
}

export const editSocial=(social)=>async dispatch=>{
     dispatch(savingEditedSocial())
    await fetch(baseUrl+`social/${social.id}/`,{
     method:'PUT',
     headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(social),
     }).then(response=>response.json())
     .then(data=>{
         dispatch(editSaved())
         dispatch(getSocials(data));
         
     }).catch(err=>{
         dispatch(editSocialFailed());
     })
}