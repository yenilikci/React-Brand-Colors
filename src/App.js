import './App.css';
import MainContext from './MainContext'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import {useState} from 'react'
import BrandsData from './brands.json'

function App() {

  const brandsArray = []
  Object.keys(BrandsData).map(key => {
      brandsArray.push(BrandsData[key])
  })

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])

  const data = {
    brands,
    setSelectedBrands
  }

  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar/>
        <Content/>
      </MainContext.Provider>
    </>
  );
}

export default App;
