var elev = SRTM.select('elevation');
var slope = ee.Terrain.slope(elev);
var slope_cox = slope.clip(COX)
print.slope_cox
Map.addLayer(slope_cox, {min: 0, max: 89.99}, 'Slope Cox');
Export.image.toDrive({
  image: slope_cox,
  description: 'Slope_Bandarban',
  scale:30,
  region: COX
});