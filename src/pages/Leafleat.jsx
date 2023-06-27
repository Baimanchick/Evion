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
      "<a target='_blank' href='https://2gis.kg/bishkek/search/%D0%90%D0%BD%D0%BA%D0%B0%D1%80%D0%B0%201%2F116%2F1%20evion/firm/70000001066709074/74.671595%2C42.856317?m=74.671614%2C42.856295%2F17.7'>Анкара 1/16/1</a>"
    ),
  },
  {
    geocode: [42.851166, 74.546034],
    popUp: HtmlParser(
      "<a target='_blank' href='https://2gis.kg/bishkek/search/evion/firm/70000001067180597?m=74.545842%2C42.850949%2F18.6'>Муромская 1</a>"
    ),
  },
  {
    geocode: [42.861863, 74.690823],
    popUp: HtmlParser(
      "<a target='_blank' href='https://2gis.kg/bishkek/search/evion/firm/70000001065161139?m=74.691012%2C42.86195%2F19.59'>Ауэзова 24</a>"
    ),
  },
  {
    geocode: [42.859483, 74.679649],
    popUp: HtmlParser(
      " <a target='_blank' href='https://2gis.kg/bishkek/search/evion/firm/70000001069474230?m=74.682346%2C42.859503%2F16.86'>Исакеева</a>"
    ),
  },
  {
    geocode: [42.8793336, 74.5970303],
    popUp: HtmlParser(
      " <a target='_blank' href='https://2gis.kg/bishkek/geo/15763208581152772/74.596983%2C42.879276?m=74.597347%2C42.879262%2F20'>Спартак</a>"
    ),
  },
  {
    geocode: [42.887835, 74.6630502],
    popUp: HtmlParser(
      " <a target='_blank' href='https://2gis.kg/bishkek/search/evion/geo/70030076157150853/74.662852%2C42.887783?m=74.662927%2C42.887817%2F20'>Арзу</a>"
    ),
  },
  {
    geocode: [42.839279, 74.58338],
    popUp: HtmlParser(
      " <a target='_blank' href='https://2gis.kg/bishkek/search/%D0%90%D0%B6%D1%8B%D0%B1%D0%B5%D0%BA%20%D0%B1%D0%B0%D0%B0%D1%82%D1%8B%D1%80%D0%B0%20/geo/70030076556227588/74.583469%2C42.839238?m=74.583881%2C42.839365%2F19.93'>Ажыбек батыра</a>"
    ),
  },
  {
    geocode: [42.8515391, 74.6157539],
    popUp: HtmlParser(
      " <a target='_blank' href='https://2gis.kg/bishkek/search/%D0%B3%D0%BB%D0%BE%D0%B1%D1%83%D1%81%20%D0%BD%D0%B0%20%D0%BC%D0%B5%D0%B4%D0%B5%D1%80%D0%BE%D0%B2%D0%B0/firm/70000001044840107?m=74.615962%2C42.851272%2F17.7'>Globus Медерова</a>"
    ),
  },
  {
    geocode: [42.85949180434134, 74.679634569789],
    popUp: HtmlParser(
      " <a target='_blank' href='https://2gis.kg/bishkek/branches/70000001019321615/geo/70030076588744988/74.679798%2C42.859422?floor=0&m=74.679729%2C42.859453%2F20'>АЮ гранд</a>"
    ),
  },
  {
    geocode: [42.59658574183988, 76.850047827692],
    popUp: HtmlParser(
      " <a target='_blank' href='https://2gis.kg/bishkek/search/%D1%8D%D0%B4%D0%B5%D0%BB%D1%8C%D0%B2%D0%B5%D0%B9%D1%81%20%D0%BF%D0%B0%D0%BD%D1%81%D0%B8%D0%BE%D0%BD%D0%B0%D1%82/firm/70000001037699516/76.849864%2C42.597139?m=76.851439%2C42.596895%2F17.23'>Пансионат Эдельвейс</a>"
    ),
  },
  {
    geocode: [42.8750736, 74.600376099999],
    popUp: HtmlParser(
      " <a target='_blank' href='https://2gis.kg/bishkek/inside/70030076155751844/firm/70000001075187847?m=74.600604%2C42.875074%2F17.23'>Орион-2</a>"
    ),
  },
  {
    geocode: [42.8745429, 74.4224705],
    popUp: HtmlParser(
      " <a target='_blank' href='https://2gis.kg/bishkek/search/%D0%90%D0%B2%D1%82%D0%BE%D1%80%D1%8B%D0%BD%D0%BE%D0%BA%20riom/firm/70000001027746461/74.424734%2C42.872937?m=74.424814%2C42.873044%2F18.82'>Риом авто</a>"
    ),
  },
  {
    geocode: [42.83597, 74.605458],
    popUp: HtmlParser(
      " <a target='_blank' href='https://2gis.kg/bishkek/search/%20%D0%9A%D0%B0%D0%BC%D1%81%D0%BA%D0%B8%D0%B9%207B/geo/15763234351044400/74.605441%2C42.835874?m=74.605717%2C42.835889%2F19.62'>9 мкр, Камский 7B</a>"
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
