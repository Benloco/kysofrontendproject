import {ReactElement} from 'react'

export default function(){
    return <nav className="navbar navbar-dark bg-dark fixed-top" style={{zIndex:100}}>
                <a className="navbar-brand ml-3" href="/">Kyso Frontend Project</a>
                <a className="navbar-brand" href="/dashboard">Dashboard</a>
            </nav>
}