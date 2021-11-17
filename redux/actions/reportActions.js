import * as types from '../constants/reports';
import {baseUrl} from '../../baseurl'
import { fetchSocials ,editSocial} from './socialActions';


export const getReports=(reports)=>{
    return{
       type:types.GET_REPORTS,
       payload:reports
    }
}

const loadReports=()=>{
    return{
        type:types.LOAD_REPORTS
    }
}

const failedReports=()=>{
    return {type:types.ON_FAILED}
}


export const fetchReports=()=>async dispatch=>{
   dispatch(loadReports());
   dispatch(fetchSocials());

  await fetch(baseUrl+'reports',{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
      },
   })
   .then(response => response.json())
   .then(data=>{
       dispatch(getReports(data));
   }).catch(err=>{
       dispatch(failedReports());
       console.log(err)
   })
}

const savingEditedReports=()=>{
    return {type:types.EDIT_REPORT}
}

const editReportFailed=()=>{
    return {
        type:types.ON_EDIT_FAILED
    };
}

const editSaved=()=>{
    return{
        type:types.ON_EDIT_SUCCESS,       
    }
}

export const editReports=(reports,social)=>async dispatch=>{
    dispatch(savingEditedReports());
    dispatch(editSocial(social));

    await fetch(baseUrl+`reports/${reports.id}/`,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reports),
    }).then(response=>response.json())
    .then(data=>{
        alert('changes saved')
        dispatch(editSaved());
       getReports(data)
    }).catch(err=>{
        dispatch(editReportFailed());
       alert('failed to save')
    })
}