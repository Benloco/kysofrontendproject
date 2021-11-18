import {useState, useEffect,memo, useCallback} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt,faEnvelope,faCalendarDay, faEye, faStar, 
          faComments,faTags,faPen, faFlagCheckered, faSearch} from '@fortawesome/free-solid-svg-icons';
import {useDispatch,useSelector} from 'react-redux'
import Loading from '../loading/loading'
import Image from 'next/image'
import { useRouter } from 'next/router';
import {FilterReports, FilterResults} from './reportsFilter';



 export function ViewsAndComments({id,tags}){
   

    const socials= useSelector(state=>state.socials);

    const item =  socials.socials.find(item=>item.id===id);

   
    return(
    <span>
        <FontAwesomeIcon icon={faEye} size="1x"/>
        &nbsp; {item.views}
 
        &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faStar} size="1x"/>&nbsp;
        {item.stars}

        &nbsp;&nbsp; &nbsp;<FontAwesomeIcon icon={faTags} size="1x"/>&nbsp;
        {tags}

       &nbsp;&nbsp; &nbsp; <FontAwesomeIcon icon={faComments} size="1x"/>&nbsp;
        {item.number_of_comments}

      
    </span>
    )
}

export function NotAvailable({item}){

    return (
         <div className="alert alert-secondary ml-3 mb-20 mt-5" >
           <FontAwesomeIcon icon={faFlagCheckered}/><br/>
           {item} not available
         </div>
    )
}

 function Dashboard(){
    const [result,setResults] = useState([]);
    const reports= useSelector(state=>state.reports);
  
   const router = useRouter();   
    
   const editReport=(id)=>{
    router.push(`/dashboard/${id}`)
   }

   const filterCalled=useCallback((e)=>{
    setResults( FilterReports(reports.reports,e.target.value));  
   },[result])
   


    return(
        <div className="col-md-10 col-lg-12 col-sm-12 offset-lg-1 offset-md-1 mt-6 padsdash mb-20">
             <div className="row ">
                <h6 className ="col-5 ml-3">Report Dashboard</h6>
                <div className="col-md-4 col-sm-6">
                  <input className="form-control" title="searchInput" placeholder="filter by title or description" onChange={filterCalled} />
                </div>
                
                
             </div>
          
          
            

            <div className="row">
            {
                reports.isLoading?<Loading title="fetching reports"/>:
                result.length!=0?
                <FilterResults result={result}/>:
           
            reports.reports.map((report)=>{
                 return(
                    <div className="card col-xl-3 col-md-5 col-sm-12 mt-3 ml-3" key={report.id}>
                   
                    <div className="card-body">
                         
                        <div className="row">
                          <Image className="rounded-circle img-thumbnail col-2 img-h9 mt " 
                           src={report.owner.avatar_url}  width={400}
                           height={200}/>
                           <div className="col-10">
                            <h6 className="card-title col-8">{report.provider?report.provider.owner:report.owner.name}</h6>
                            
                                <div className=" mt-3" style={{fontSize:'12px'}}>
                                    <span>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} size="1x"/>
                                        &nbsp; {report.owner.location}
                                
                                        &nbsp;<FontAwesomeIcon icon={faEnvelope} size="1x"/>&nbsp;
                                        {report.owner.billing_email}
        
                                        &nbsp; <FontAwesomeIcon icon={faCalendarDay} size="1x"/>&nbsp;
                                        {
                                            (new Date(report.created_at).toUTCString()).toString().substr(5,12)
                                        }
        
                                    </span>
                                </div>
                            </div>
                         </div>
                           <div className="col-12 mt-3">
                           <h5 className="card-title">{report.title}</h5>
                                                 
                            {
                                report.description ? 
                                <p className="card-text mt-3"> { report.description}</p>:
                                <NotAvailable item="description"/>

                            }     
                            
                            
                            <div className="row mt-3" style={{fontSize:'14px'}}>
                             <div className="col-9">
                              <ViewsAndComments id={report.id} tags={report.tags?report.tags.length:0} />
                             </div>
                              
                                <button className="ml-3 btn btn-secondary btn-sm col-2" onClick={()=>editReport(report.id)}>
                                   <FontAwesomeIcon icon={faEye} />
                                </button>
                                                      
                            </div>
                            
                           </div>
                       
                    </div>
                    
                    </div>

                 )
             }) 
                 }
              
            </div>
             
        </div>
    )
 }

 export default memo(Dashboard)