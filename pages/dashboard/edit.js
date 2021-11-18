import {useState,useEffect,memo, useCallback, createRef} from "react";
import { Button, Modal, ModalBody, ModalFooter} from "reactstrap";
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import { useToasts } from "react-toast-notifications";
import {useDispatch,useSelector} from 'react-redux';
import { editReports } from "../../redux/actions/reportActions";
import Loading from '../loading/loading'

const nameRef= createRef();
const descriptionRef= createRef();
const viewsRef = createRef();
const starsRef = createRef();
const tagsRef = createRef();

const ReportName= ({name})=>{
    const [newname,setName] = useState(name);
    
    const onNameChange= useCallback((e)=>{
        setName(e.target.value);
    },[newname]);

    return <div className="form-row">
                <label>name</label>
                <input type="text" className="form-control" placeholder="name" value={name}
                onChange={onNameChange} ref={e=>nameRef=e}/>
                
            </div>
}

const ReportDescription=({description})=>{
    const [newdescription,setDescription] = useState(description);

    const onDescriptionChange= useCallback((e)=>{
        setDescription(e.target.value)
    },[newdescription])

    return  <div className="form-row mt-3">
                <label>description</label>
                <textarea rows={4} className="form-control" placeholder="description" value={description}
                onChange={onDescriptionChange} ref={e=>descriptionRef=e}>
                </textarea>

            </div>
}



const ReportViews=({views})=>{
    const [newviews,setViews] = useState(views);

    const onViewsChange= useCallback((e)=>{
        setViews(e.target.value)
    },[newviews])
    
    return  <div className="form-row col-6 ">
                <label>views</label>  
                <input type="number" className="form-control" placeholder="views" value={views}
                disabled ref={e=>viewsRef=e}/>
            
            </div>          
}

const ReportStars=({stars})=>{
    const [newstars,setStars] = useState(stars);

    const onStarsChange= useCallback((e)=>{
        setStars(e.target.value)
    },[newstars])

    return  <div className="form-row col-6">
                <label>stars</label>  
                <input type="number" className="form-control" placeholder="stars"  value={stars}
                onChange={onStarsChange} ref={e=>starsRef=e}/>

            </div>
}

const ReportTags=({tags})=>{
    const [newtags,setTags] = useState(tags);

    const onTagsChange=useCallback((e)=>{
        setTags(e.target.value);
    },[newtags])

    return    <div className="form-row mt-3">
                <label>tags</label><small className="text-muted"> (separate each tag with a comma)</small>
                <textarea rows={3} className="form-control" placeholder="tags" value={tags}
                onChange={e=>setTags(e.target.value)} ref={e=>tagsRef=e}>
                </textarea>
            
            </div>
}

function EditReport({report,social}){
    const [modalOpen, setModalOpen] = useState(false);
   
    
    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const editStatus = useSelector(state=>state.editReport);
   
    const saveEdited=(e)=>{
        e.preventDefault();
        if(nameRef.value==''||nameRef.value==' '||nameRef.value==null){
            return addToast("Name cannot be empty. \n Enter a name", { appearance: "warning" });
        }
        if(descriptionRef.value==''||descriptionRef.value==' '||descriptionRef.value==null){
            return addToast("Description cannot be empty.", { appearance: "warning" });
        }
        report.name= nameRef.value;
        report.descriptiion= descriptionRef.value;
        report.tags=(tagsRef.value).toString().split(',').trim();
        social.views=viewsRef.value;
        social.stars=parseInt(starsRef.value);
        
        dispatch(editReports(report,social));

      
    } 


    return(
        <>
         <button title="editBtn"   onClick={() => setModalOpen(!modalOpen)}  
              className=" btn btn-light btn-sm col-2" >
             Edit&nbsp; <FontAwesomeIcon icon={faPen} />
         </button>
           
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen} transition="false" animation="false">
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
                         <ReportName  name={report.name} />
                        
                         <ReportDescription description={report.description}/>
                        
                         <div className="row mt-3">
                            <ReportViews views={social.views}/>
                            <ReportStars stars={social.stars}/>
                         </div>
                        <ReportTags tags={report.tags}/>
                        
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
export default memo(EditReport)
