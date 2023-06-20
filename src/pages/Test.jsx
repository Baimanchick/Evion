import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import React, { useState } from "react";
import "../css/HomePage.css";

function Test() {
  const GOOGLE_MAPS_API_KEY = "AIzaSyA8lOoZJVa0_INEOdQ8qDUfk4h74bOMc4o";
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Ошибка загрузки карты
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Загрузка карты...
      </div>
    );
  }

  return <Map />;
}

function Map() {
  const markers = [
    {
      id: 1,
      position: { lat: 42.8746, lng: 74.5698 },
      title: "Метка 1",
      description: "Описание метки 1",
    },
    {
      id: 2,
      position: { lat: 42.8646, lng: 74.5798 },
      title: "Метка 2",
      description: "Описание метки 2",
    },
  ];

  const [selectedMarker, setSelectedMarker] = useState(null);

  const onMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const onCloseInfoWindow = () => {
    setSelectedMarker(null);
  };

  return (
    <div className="map">
      <GoogleMap
        zoom={10}
        center={{ lat: 42.8746, lng: 74.5698 }}
        mapContainerClassName="googleMap"
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            onClick={() => onMarkerClick(marker)}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={onCloseInfoWindow}
          >
            <div>
              <h3>{selectedMarker.title}</h3>
              <p>{selectedMarker.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

export default Test;
