import Search from './Search'
import Brand from './Brand'
import MainContext from '../MainContext'
import { useContext } from 'react'
import LazyLoad from 'react-lazyload'

function Content(props) {

    const {brands} = useContext(MainContext)

    return(
        <main className="content">
            <header className="header">
                <Search/>
            </header>
            <section className="brands"> 
                {brands.map(brand => (
                    <LazyLoad key={brand.slug} overflow={true} placeholder="Yükleniyor...">
                        <Brand brand={brand}/>
                    </LazyLoad>
                ))}
            </section>
        </main>
    )
}

export default Content