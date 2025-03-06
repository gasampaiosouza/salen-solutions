import { useState, useCallback, memo } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '442px',
  borderRadius: '8px',
};

const center = {
  lat: -23.561192232296545,
  lng: -46.656494300000006,
};

function CourseGoogleMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '',
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    map.setZoom(17);

    setMap(map);
  }, []);

  const onUnmount = useCallback(() => setMap(null), []);

  if (!isLoaded) return null;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={-20}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default memo(CourseGoogleMap);
