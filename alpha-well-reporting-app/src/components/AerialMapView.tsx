import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface AerialMapViewProps {
  field: 'All Fields' | 'Eagle Ford' | 'Permian Basin' | 'Bakken';
  well: string;
}

const wellCoordinates = {
  'Eagle Ford': {
    'EF-01': { lat: 29.4241, lng: -98.4936 },
    'EF-02': { lat: 29.5241, lng: -98.5936 },
    'EF-03': { lat: 29.6241, lng: -98.6936 },
  },
  'Permian Basin': {
    'PB-01': { lat: 31.9686, lng: -102.0779 },
    'PB-02': { lat: 32.0686, lng: -102.1779 },
    'PB-03': { lat: 32.1686, lng: -102.2779 },
  },
  'Bakken': {
    'BK-01': { lat: 47.9000, lng: -103.0232 },
    'BK-02': { lat: 48.0000, lng: -103.1232 },
    'BK-03': { lat: 48.1000, lng: -103.2232 },
  },
};

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

export function AerialMapView({ field, well }: AerialMapViewProps) {
  const coordinates = wellCoordinates[field]?.[well] || { lat: 0, lng: 0 };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Aerial View</CardTitle>
      </CardHeader>
      <CardContent>
        <LoadScript googleMapsApiKey="AIzaSyAnhmf1UGEz62cBb8NNUa_gyc35323tj_Y">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={coordinates}
            zoom={10}
          >
            <Marker position={coordinates} />
          </GoogleMap>
        </LoadScript>
      </CardContent>
    </Card>
  );
}
