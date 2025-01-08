import { MapEmbed } from './MapEmbed';

export function MapContainer() {
  return (
    <div className="map-container">
      <div className="map-responsive">
        <MapEmbed />
      </div>
    </div>
  );
}