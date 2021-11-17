import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const goToDashboard=()=>{
    router.push(`/dashboard`) 
  }
 
  return (
    <div className="mt-6 col-lg-6 col-md-6 col-sm-12 col-md offset-lg-3 offset-md-2 indexContent" >
       <h2>Kyso Frontend Interview Project</h2>
       <div>
           <h6 className="mt-5">by Ben Quarshie</h6>

           <button className="mt-5 btn btn-primary btn-lg" onClick={()=>goToDashboard() }>View Reports 
               <FontAwesomeIcon icon={faArrowRight}/>
           </button>
      </div>
   </div>

  )
}
