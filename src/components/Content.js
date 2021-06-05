import {useState} from 'react'
import Search from './Search'

function Content(props) {
    return(
        <main className="content">
            <header className="header">
                <Search/>
            </header>
        </main>
    )
}

export default Content