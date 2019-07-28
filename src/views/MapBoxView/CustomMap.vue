<template lang="html">
  <div class="map" id="custommap">

  </div>
</template>

<script>
var locationObj = window.location;
var pathname = locationObj.pathname.substr(0, locationObj.pathname.lastIndexOf('/'));
var locationPath = locationObj.protocol + '//' + locationObj.host + pathname;
var style = {
  "version": 8,
  "name": "Bright",
  "sources": {
    "composite": {
      "type": "raster",
      "tiles": [
        'http://192.168.0.107:3450/{z}/{x}/{y}.png'
        // 'http://webst0{1-4}.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}'
        // 'https://c.tiles.mapbox.com/v4/openstreetmap.map-inh76ba2/{z}/{x}/{y}.png?access_token=' + mapboxgl.accessToken,
      ],
      "tileSize": 256
    }
  },
  "sprite": "mapbox://sprites/mapbox/streets-v8",
  "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
  // "sprite": locationPath + "/sprite/sprite",
  // "glyphs": locationPath + "/{fontstack}/{range}.pbf",
  "layers": [{
    "id": "simple-tiles",
    "type": "raster",
    "source": "composite",
    "minzoom": 0,
    "maxzoom": 22
  }]
};
import mapboxgl from 'mapbox-gl'
// import mapStyle from './mineDataStyle'
mapboxgl.accessToken = 'pk.eyJ1IjoiamFycnltZW5nIiwiYSI6ImNqcGpseW8zcTA1eDYzd3FpYmJlYjBlcXIifQ.sWZmgkI-oUZrxxF4E57S8w';

export default {

  mounted(){
    var map = new mapboxgl.Map({
      container: 'custommap',
      style,
      center: [116.46,39.92], /*地图中心点*/
        zoom: 10, /*地图默认缩放等级*/
        pitch: 0, /*地图俯仰角度*/
        maxZoom:17, /*地图最大缩放等级*/
        minZoom:3  /*地图最小缩放等级*/
    });

  }
}
</script>

<style lang="scss" scoped>
</style>
