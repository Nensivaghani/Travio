import React from 'react'
import DesComment from './DesComment'
import DesCountrydetails from './DesCountrydetails'
import DesLocationmap from './DesLocationmap'
import DesPhotogallery from './DesPhotogallery'
import DesContentlist from './DesContentlist'
import Search from '../Sidebar/Search'
import Download from '../Sidebar/Download'
import Offer from '../Sidebar/Offer'
import PostNews from '../Sidebar/PostNews'

const  Contentside = () => {
    return (
        <>
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="content-inner">
                   <DesContentlist />
                    <DesCountrydetails/>
                    <DesPhotogallery/>
                    <DesLocationmap/>
                    <DesComment/>
                </div>
            </div>
            

            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="sidebar-inner">
                    <Search />
                    <Download/>
                    <PostNews/>
                    <Offer/>
                </div>
            </div>


        </>
    )
}

export default Contentside