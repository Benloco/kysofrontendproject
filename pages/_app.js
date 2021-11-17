import App from 'next/app'
import { useEffect,ReactElement, Component  } from "react";
import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'; 
import '../styles/globals.css'
import {wrapper} from "../redux/store/store";
import {useDispatch} from 'react-redux'
import { fetchReports,fetchSocials } from '../redux/actions';
import { ToastProvider } from "react-toast-notifications";

export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'FCP':
      console.log(JSON.stringify(metric));
      break;
    case 'LCP':
       console.log(JSON.stringify(metric))
      break
    case 'CLS':
        console.log(JSON.stringify(metric))
      break
    case 'FID':
        console.log(JSON.stringify(metric))
      break
    case 'TTFB':
        console.log(JSON.stringify(metric))
      break
     case 'Next.js-hydration':
         console.log(JSON.stringify(metric))
        break
      case 'Next.js-route-change-to-render':
         console.log(JSON.stringify(metric))
        break
     case 'Next.js-render':
         console.log(JSON.stringify(metric))
      break
    default:
      break
  }
}

 function MyApp({ Component, pageProps })  {
  const dispatch = useDispatch();
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    dispatch(fetchReports());
   
  }, []);
         
  return( 
    <ToastProvider autoDismiss={true} autoDismissTimeout={5000}>
      <Component {...pageProps} />
    </ToastProvider>
      )
        
}

export default wrapper.withRedux(MyApp);
