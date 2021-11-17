import {useState,useEffect,useMemo} from "react";
import { Button, Modal, ModalBody, ModalFooter} from "reactstrap";
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import { useToasts } from "react-toast-notifications";
import {useDispatch,useSelector} from 'react-redux';
import { editReports } from "../../redux/actions/reportActions";
import Loading from '../loading/loading'


export default function EditReport({report,social}){
    const [modalOpen, setModalOpen] = useState(false);
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [views,setViews] = useState();
    const [stars,setStars] = useState('');
    const [tags,setTags] = useState();

    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const editStatus = useSelector(state=>state.editReport);

    useEffect(()=>{
      setName(report.name);
      setDescription(report.description);
      setViews(parseInt(social.views)+1);
      setStars(social.stars);
      setTags(report.tags);
    },[])

   

    const saveEdited=(e)=>{
        e.preventDefault();
        if(name==''||name==' '||name==null){
            return addToast("Name cannot be empty. \n Enter a name", { appearance: "warning" });
        }
        if(description==''||description==' '||description==null){
            return addToast("Description cannot be empty.", { appearance: "warning" });
        }
        report.name= name;
        report.descriptiion= description;
        report.tags=tags.toString().split(',');
        social.views=views;
        social.stars=parseInt(stars);
        
        dispatch(editReports(report,social));

      
    } 

    return(
        <>
         <button   onClick={() => setModalOpen(!modalOpen)}  
              className=" btn btn-light btn-sm col-2" >
             Edit&nbsp; <FontAwesomeIcon icon={faPen} />
         </button>
           
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen} transition={false} animation="false">
                <div className=" modal-header">
                <h5 className=" modal-title" id="exampleModalLabel">
                    Edit Report
                </h5>
                <button
                    aria-label="Close"
                    className=" close"
                    type="button"
                    onClick={() => setModalOpen(!modalOpen)}
                >
                    <span aria-hidden={true}>×</span>
                </button>
                </div>
                <ModalBody>
                   <form>
                        <div className="form-row">
                               <label>name</label>
                                <input type="text" className="form-control" placeholder="name" value={name}
                                 onChange={e=>setName(e.target.value)}/>
                               
                        </div>
                        
                        <div className="form-row mt-3">
                            <label>description</label>
                            <textarea rows={4} className="form-control" placeholder="description" value={description}
                               onChange={e=>setDescription(e.target.value)}>
                            </textarea>
                        
                        </div>
                        <div className="row mt-3">
                            <div className="form-row col-6 ">
                                <label>views</label>  
                                <input type="number" className="form-control" placeholder="views" value={views}
                                 disabled/>
                            
                            </div>
                            <div className="form-row col-6">
                                <label>stars</label>  
                                <input type="number" className="form-control" placeholder="stars"  value={stars}
                                   onChange={e=>setStars(e.target.value)}/>
                            
                            </div>
                        </div>
                        <div className="form-row mt-3">
                           <label>tags</label><small className="text-muted"> (separate each tag with a comma)</small>
                            <textarea rows={3} className="form-control" placeholder="tags" value={tags}
                              onChange={e=>setTags(e.target.value)}>
                            </textarea>
                        
                        </div>
                        
                   </form>
                </ModalBody>
                <ModalFooter>
                <Button
                    color="secondary"
                    type="button"
                    onClick={() => setModalOpen(!modalOpen)}
                >
                    Close
                </Button>
                {
                    editStatus.isSaving?
                    <Loading title="saving changes"/>:
                    <Button title="button" color="primary" type="button" onClick={(e)=>saveEdited(e)}>
                    Save changes
                   </Button>
                   
                }
                
                </ModalFooter>
            </Modal>
        </>
    )
}

