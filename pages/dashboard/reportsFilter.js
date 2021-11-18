import {ViewsAndComments,NotAvailable} from './dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt,faEnvelope,faCalendarDay, faEye, faStar, 
    faComments,faTags,faPen, faFlagCheckered, faSearch} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import { useRouter } from 'next/router';

export const  FilterReports= (reports,searchValue)=>{
    return  reports.filter((report)=>{
            report.title?report.title:report.title=""
          return Object.keys(report).some(key=>typeof report[key] === "string" && report.name
                  .includes(searchValue.toLowerCase()) || report.title.includes(searchValue.toLowerCase())
                 );
        });
}


export const FilterResults=({result})=>{
    const router = useRouter(); 
    const editReport=(id)=>{
        router.push(`/dashboard/${id}`)
       }

    return (
             
        <div className="row">
        {
                     
       result.map((report)=>{
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
    )
}