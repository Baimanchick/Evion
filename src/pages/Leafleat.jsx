// Импортируем необходимые компоненты и стили
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import { useLocationContext } from "../contexts/LocationContext";
import { useEffect } from "react";
import DOMPurify from "dompurify";

// Создаем кастомную иконку маркера
const customIcon = new Icon({
  iconUrl: require("../images/placeholder.png"),
  iconSize: [38, 38], // размер иконки
});

// Создаем функцию для создания кластерного кастомного иконки
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: `custom-marker-cluster`,
    iconSize: point(33, 33, true),
  });
};

function LeafletMap() {
  // Получаем данные из контекста с помощью useLocationContext
  const { getLocations, location } = useLocationContext();

  useEffect(() => {
    // Загружаем данные при монтировании компонента
    getLocations();
  }, []);

  // Проверяем, что location загружены и не пусты
  if (!location || location.length === 0) {
    return <div>Loading...</div>;
  }

  // Преобразуем данные из location в формат для маркеров
  const markers = location.map((item) => {
    return {
      geocode: [item.geocode.let, item.geocode.long],
      popup: item.popUp,
    };
  });

  return (
    // Рендерим карту
    <MapContainer center={[42.8746, 74.5999]} zoom={11.5}>
      <TileLayer
        attribution='&copy; <a href="#">'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Используем MarkerClusterGroup для кластеризации */}
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Проходимся по массиву markers и рендерим маркеры */}
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            {/* Используем Popup для отображения содержимого во всплывающем окне */}
            <Popup>{DOMPurify.sanitize(marker.popup)}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default LeafletMap;
