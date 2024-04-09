import React, {useEffect} from 'react'
import { connect } from "react-redux";

const Location = (props) => {
    let {mapScriptLoaded} = props;

    useEffect(() => {
        if(mapScriptLoaded === false) return;

        const initMap = () => {
            console.log("AQUI")
            let rand = new Date()
            let m = new window.google.maps.Map(
                document.getElementById("theMap"),
                {
                    center: {lat: 51.47, lng: 0.45},
                    zoom: 15,
                    minZoom: 10,
                    maxZoom: 100,
                    mapId: 'AGMapId' + rand,
                    fullscreenControl: false,
                    disableDefaultUI: true,
                }
            );
        }

        if (window.google  ) {
                initMap()
        }
    }, [mapScriptLoaded])
    
    return (
        <div>
            <div className='theMap' id="theMap"/>
        </div>
    )
}

const mapStateToProps = ({ configuration }) => ({
    mapScriptLoaded: configuration.mapScriptLoaded
})

export default connect(mapStateToProps)(Location);