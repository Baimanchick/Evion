import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, divIcon, point } from "leaflet";
import HtmlParser from "react-html-parser";

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

{
  /* <a target='_blank' href=''></a> */
}

const markers = [
  {
    geocode: [42.833304, 74.603932],
    popUp: HtmlParser(
      "<a target='_blank' href='https://2gis.kg/bishkek/search/evion/firm/70000001069491403?m=74.604232%2C42.833204%2F18.85'>Саманчина </a>"
    ),
  },
  {
    geocode: [42.856301, 74.671532],
    popUp: HtmlParser(
      "<a target='_blank' href='https://2gis.kg/bishkek/search/%D0%90%D0%BD%D0%BA%D0%B0%D1%80%D0%B0%201%2F116%2F1%20evion/firm/70000001066709074/74.671595%2C42.856317?m=74.671614%2C42.856295%2F17.7'>Анкара</a>"
    ),
  },
  {
    geocode: [42.851166, 74.546034],
    popUp: HtmlParser(
      "<a target='_blank' href='https://2gis.kg/bishkek/search/evion/firm/70000001067180597?m=74.545842%2C42.850949%2F18.6'>Муромская</a>"
    ),
  },
  {
    geocode: [42.861863, 74.690823],
    popUp: HtmlParser(
      "<a target='_blank' href='https://2gis.kg/bishkek/search/evion/firm/70000001065161139?m=74.691012%2C42.86195%2F19.59'>Аузова</a>"
    ),
  },
  {
    geocode: [42.859483, 74.679649],
    popUp: HtmlParser(
      " <a target='_blank' href='https://2gis.kg/bishkek/search/evion/firm/70000001069474230?m=74.682346%2C42.859503%2F16.86'>Исакеева</a>"
    ),
  },
];

function Leafleat() {
  return (
    <MapContainer center={[42.8746, 74.5999]} zoom={11.5}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
export default Leafleat;
