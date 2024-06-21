import React from 'react'

const DesLocationmap = () => {
    return (
        <>
            <div className="location-main">
                <div class="text">
                    <h3>View On Map</h3>
                    <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat duis aute irure dolor.</p>
                </div>
                <div className="location-inner">
                 <iframe
                  width="750"
                  height="370"
                 frameborder="0"
                  title='map'
                  id="gmap_canvas"
                  marginheight="0"
                   marginwidth="0" 
                 src="https://maps.google.com/maps?width=750&amp;height=370&amp;hl=en&amp;q=new york&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    
                       
                   
                </div>
            </div>


        </>
    )
}

export default DesLocationmap