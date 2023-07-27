import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, marker, point } from "leaflet";
import { useLocationContext } from "../contexts/LocationContext";
import { useEffect } from "react";

const customIcon = new Icon({
  iconUrl: require("../images/placeholder.png"),
  iconSize: [38, 38],
});

const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: `custom-marker-cluster`,
    iconSize: point(33, 33, true),
  });
};

function LeafletMap() {
  const { getLocations, location } = useLocationContext();

  useEffect(() => {
    getLocations();
  }, []);

  if (!location || location.length === 0) {
    return <div>Loading...</div>;
  }

  const markers = location.map((item) => {
    return {
      geocode: [item.geocode.let, item.geocode.long],
      popup: item.popUp,
    };
  });

  // Function to parse and sanitize HTML
  function parseAndSanitizeHTML(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    return doc.body.innerHTML;
  }

  return (
    <MapContainer center={[42.8746, 74.5999]} zoom={11.5}>
      <TileLayer
        attribution='&copy; <a href="#">'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>
              <div
                dangerouslySetInnerHTML={{
                  __html: parseAndSanitizeHTML(marker.popup),
                }}
              />
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default LeafletMap;
