import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, divIcon, point, popup } from "leaflet";
import HtmlParser from "react-html-parser";
import { useLocationContext } from "../contexts/LocationContext";
import { useEffect } from "react";

const customIcon = new Icon({
  iconUrl: require("../images/placeholder.png"),
  iconSize: [38, 38], // size of the icon
});

const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: `custom-marker-cluster`,
    iconSize: point(33, 33, true),
  });
};

function Leafleat() {
  const { getLocations, location } = useLocationContext();

  useEffect(() => {
    getLocations();
  }, []);

  const markers = [
    location.map((item) => {
      return {
        geocode: [item.geocode.let, item.geocode.long],
        popup: item.popUp,
      };
    }),
  ];

  return (
    <MapContainer center={[42.8746, 74.5999]} zoom={11.5}>
      <TileLayer
        attribution='&copy; <a href="#'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {markers[0].map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{HtmlParser(marker.popup)}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default Leafleat;
