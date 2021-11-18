import Router from 'next/router';
import {useDispatch,useSelector} from 'react-redux'
import Loading from '../loading/loading'
import Image from 'next/image'
import styles from './dashboard.module.scss'
import {NotAvailable} from './dashboard'
import Edit from "./edit"
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import {faPen,faLink, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { baseUrl } from '../../baseurl';


export default  function Report({report,social}){
    
    let selectedReport =  report[0];
    const selectedSocial= social[0];

    if(!report){
        selectedReport=[];
    }
    
    return(
        <div className=" col-md-10 col-sm-12 col-lg-10 offset-lg-1 offset-md-1 mt-6 pads mb-20 ">
           <button className="btn-sm col-1 btn-light" onClick={() => Router.back()}><FontAwesomeIcon icon={faArrowLeft}/>Back</button> 
          <div className="row shadow"> 
            <h6 className="text-center">Report Details</h6>
          <div className="card mb-3" >
            <div className="row no-gutters">
                <div className="col-md-4">
                  <Image src={selectedReport?selectedReport.owner.avatar_url:""}  width={400}
                           height={200} className="card-img" alt="..."/>
                  <p><strong>tags</strong></p>
                  {
                      selectedReport.tags?
                      selectedReport.tags.map((tag,i)=>{
                          
                        return(
                            <div className="row mt-1" key={i}>
                                <span  className="circle__content">{tag}, </span>
                            </div>
                        )

                      }):""
                     
                  }
                  
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="row">
                    <strong  className="text-muted col-4">name:</strong>
                        <h5 className="card-title col">{selectedReport.name}</h5>
                        <Edit report={selectedReport} social={selectedSocial}/>
                       
                        </div>
                        <div className="row mt-2">
                            <strong  className="text-muted col-4">full name:</strong>
                            <h6 className="card-title col">{selectedReport.full_name}</h6>
                            </div>
                            <div className="row mt-2">
                            <strong  className="text-muted col-4">title:</strong>
                            <h6 className="card-title col">{selectedReport.title?selectedReport.title:<NotAvailable item="title"/>}</h6>
                            </div>
                            <div className="row mt-2">
                            <strong  className="text-muted col-4">main:</strong>
                            <p className="card-text col">{selectedReport.main? selectedReport.main:<NotAvailable item="main"/>}</p>
                            </div>
                            <div className="row mt-2">
                            <strong  className="text-muted col-4">description:</strong>
                            <p className="card-text col">{selectedReport.description? selectedReport.description:<NotAvailable item="description"/>}</p>
                        </div>
                       
                        <div className="row mt-5">
                            <p className="card-text col"><strong  className="text-muted">Created on</strong></p>

                            <p className="card-text col"><strong className="text-muted">Lastest version </strong></p>

                            <p className="card-text col"><strong className="text-muted">Last touched </strong></p>

                            <p className="card-text col"><strong className="text-muted">Last updated </strong></p>
                        </div>
                        <div className="row">
                            <p className="card-text col"><small className="text-muted"> {
                                (new Date(selectedReport.created_at).toUTCString()).toString().substr(5,12)
                            }</small></p>

                            <p className="card-text col"><small className="text-muted"> {
                               selectedReport.latest_version?
                                (new Date(selectedReport.latest_version).toUTCString()).toString().substr(5,12):""
                            }</small></p>

                            <p className="card-text col"><small className="text-muted">{
                                selectedReport.last_touch?
                                (new Date(selectedReport.last_touch).toUTCString()).toString().substr(5,12):""
                                
                            }</small></p>

                            <p className="card-text col"><small className="text-muted">{
                                selectedReport.updated_at?
                                (new Date(selectedReport.updated_at).toUTCString()).toString().substr(5,12):""
                            }</small></p>
                        </div>

                         <div className="row mt-5">
                            <p className="card-text col"><strong  className="text-muted">comments</strong></p>

                            <p className="card-text col"><strong className="text-muted">views </strong></p>

                            <p className="card-text col"><strong className="text-muted">tags </strong></p>

                            <p className="card-text col"><strong className="text-muted">stars</strong></p>
                        </div>
                        <div className="row">
                            <p className="card-text col"><small className="text-muted"> {
                               selectedSocial.number_of_comments
                            }</small></p>

                            <p className="card-text col"><small className="text-muted"> {
                                selectedSocial.views
                            }</small></p>

                            <p className="card-text col"><small className="text-muted">{
                               selectedReport.tags?selectedReport.tags.length:0
                            }</small></p>

                            <p className="card-text col"><small className="text-muted">{
                               selectedSocial.stars
                            }</small></p>
                        </div>
                    </div>

                    
                </div>
            </div>
           </div>
         
            <div className="col-md-6 col-lg-5 col-sm-6 ml-3">
               

                <div className="row">
                    <div className="col">
                    <div className="card border-light mb-3" >
                    
                        <div className="card-header">Provider</div>
                        {
                         selectedReport.provider?
                        
                        <div className="card-body">
                           <div className="row">
                               <strong className="text-muted col-4">owner : </strong>
                              <h6 className="card-title col">{selectedReport.provider.owner}</h6>
                           </div>
                           <div className="row">
                               <strong className="text-muted col-4">name : </strong>
                              <p className="card-title col">{selectedReport.provider.name}</p>
                           </div>
                           <div className="row">
                               <strong className="text-muted col-4">source : </strong>
                              <p className="card-title col">{selectedReport.provider.source}</p>
                           </div>
                           <div className="row">
                               <strong className="text-muted col-4">branch : </strong>
                              <p className="card-title col">{selectedReport.provider.default_branch}</p>
                           </div>
                            
                           
                        </div>:<NotAvailable item="provider"/>
                        }
                      </div>
                    </div>
                   
                </div>
                
            </div>
            <div className="col-md-6 col-lg-6 col-sm-6 ">
                 <div className="col">
                  <div className="card border-light mb-3" >
                    
                   <div className="card-header">Owner</div>
            
            {
                         selectedReport.owner?
                         
                            <div className="row no-gutters mt-3">
                              <div className="col-md-4">
                                 <Image src={selectedReport.owner.avatar_url} width={400}
                                  height={300} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                     <div className="row">
                                        <strong className="text-muted col-4">name : </strong>
                                        <h6 className="card-title col">{selectedReport.owner.name}</h6>
                                    </div>
                                    <div className="row">
                                        <strong className="text-muted col-4">email : </strong>
                                        <p className="card-title col">{selectedReport.owner.billing_email}</p>
                                    </div>
                                    <div className="row">
                                        <strong className="text-muted col-4">location : </strong>
                                        <p className="card-title col">{selectedReport.owner.location}</p>
                                    </div>
                                    <div className="row">
                                        <strong className="text-muted col-4">type : </strong>
                                        <p className="card-title col-2">{selectedReport.owner.type}</p>
                                       
                                        <div className="row col-6">
                                      
                                        <p className="card-title col-9">{
                                             (new Date(selectedReport.owner.updated_at).toUTCString()).toString().substr(5,12)
                                           }</p>
                                        <a href={selectedReport.owner.self_url.api} target="_blank" className="col-1">
                                         <FontAwesomeIcon icon={faLink} />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="row">
                                        <strong className="text-muted col-4">bio : </strong>
                                        <p className="card-title col">{selectedReport.owner.bio}</p>
                                    </div>
                                    
                            
                                </div>
                              </div>
                            
                           
                           :<NotAvailable item="owner"/>
                        }
                </div>
               </div>
            </div>
           </div>
        </div>
    )

}

Report.getInitialProps=async (ctx)=>{
   const {id}= ctx.query;
   
   const selectedSocial= await fetch(baseUrl+'social?id='+id)

   selectedSocial= await selectedSocial.json()

    const selectedReport= await fetch(baseUrl+'reports?id='+id)
       selectedReport= await selectedReport.json();
   

    return{report:selectedReport,social:selectedSocial}
}