import Document, {Html,Head,Main,NextScript,ServerStyleSheets} from 'next/document'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'


export default class CustomDocument extends Document{

    render(){
        return(
            <Html>
                <Head>
                    <meta property="custom" content="Kyso Frotend Project"/>
                    <meta property="og:title" content="Kyso Frotend Project"/>
                    <meta property="og:type" content="reports"/>
                    <meta property="og:url" content="http://localhost:3000/dashboard"/>
                    <meta property="og:image" content="http://localhost:3000/rock.jpg"/>
                    <meta property="og:description"
                      content="A report dashboard for vital information in kyso"/>
                </Head>
                <body>
                  <Navbar/>
                  <Main/>
                  {/* <Footer/> */}
                </body>
                <NextScript/>
            </Html>
        )
    }
}
