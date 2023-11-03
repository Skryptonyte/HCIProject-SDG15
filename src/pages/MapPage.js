
import { blue } from "@mui/material/colors";
import React from "react";
import ReactDOM from "react-dom";
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Paper } from "@mui/material";
import { Marker } from "react-simple-maps"

const geoUrl =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_land.geojson";

const MapPage = () => {
    return (<div style={{padding: 100 }}>
        <Paper>
    <ComposableMap width={800} height={600}>
        <ZoomableGroup>
            <Geographies geography={geoUrl}>
            {({ geographies }) =>
                geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
                ))
            }
            </Geographies>
        </ZoomableGroup>
    </ComposableMap>
    </Paper>
  </div>);
}

export default MapPage;