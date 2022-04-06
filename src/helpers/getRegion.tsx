export function getRegionForCoordinates(locations: any[], zoom: number, moveUp = 0) {

  const points = locations.filter(function (point) {

    return (point && (point?.latitude != 0 && point?.longitude != 0));
  });
  if (points.length === 0) return false;

  // points should be an array of { latitude: X, longitude: Y }
  let minX: number, maxX: number, minY: number, maxY: number;

  // init first point
  ((point) => {

    minX = point.latitude;
    maxX = point.latitude;
    minY = point.longitude;
    maxY = point.longitude;
  })(points[0]);

  // calculate rect
  points.map((point) => {
    minX = Math.min(minX, point.latitude);
    maxX = Math.max(maxX, point.latitude);
    minY = Math.min(minY, point.longitude);
    maxY = Math.max(maxY, point.longitude);
  });

  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;

  // const deltaX = (maxX - minX) + 0.02;
  // const deltaY = (maxY - minY) + 0.02;
  const deltaX = (maxX - minX) + (zoom / 100);
  const deltaY = (maxY - minY) + (zoom / 100);

  return {
    latitude: midX - (moveUp / 8000),
    longitude: midY,
    latitudeDelta: deltaX,
    longitudeDelta: deltaY
  };
}