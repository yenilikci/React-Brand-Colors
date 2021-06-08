import {useState} from 'react'
import ContentLoader from 'react-content-loader'

function Loader() {
    return (
        <ContentLoader 
        speed={2}
        width={400}
        height={103}
        viewBox="0 0 400 103"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="19" y="11" rx="3" ry="3" width="138" height="10" /> 
        <rect x="24" y="42" rx="0" ry="0" width="70" height="40" /> 
        <rect x="100" y="42" rx="0" ry="0" width="70" height="40" /> 
        <rect x="176" y="42" rx="0" ry="0" width="70" height="40" />
      </ContentLoader>
    )
}

export default Loader