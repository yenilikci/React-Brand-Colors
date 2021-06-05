import {useState} from 'react'
import Search from './Search'
import BrandsData from '../brands.json'

function Content(props) {
    
    const brandsArray = []
    Object.keys(BrandsData).map(key => {
        brandsArray.push(BrandsData[key])
    })

    const [brands, setBrands] = useState(brandsArray)

    return(
        <main className="content">
            <header className="header">
                <Search/>
            </header>
            <section className="brands"> 
                {brands.map(brand => ())}
            </section>
        </main>
    )
}

export default Content