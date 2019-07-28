<template lang="html">
  <div class="map" id="mineDataMap">

  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import mapStyle from './mineDataStyle'
mapboxgl.accessToken = 'pk.eyJ1IjoiamFycnltZW5nIiwiYSI6ImNqcGpseW8zcTA1eDYzd3FpYmJlYjBlcXIifQ.sWZmgkI-oUZrxxF4E57S8w';
// import style from './mineMapStyle'
export default {
  mounted(){
    var map = new mapboxgl.Map({
      container: 'mineDataMap',
      style: mapStyle,
      center: [116.46,39.92], /*地图中心点*/
        zoom: 10, /*地图默认缩放等级*/
        pitch: 0, /*地图俯仰角度*/
        maxZoom:17, /*地图最大缩放等级*/
        minZoom:3  /*地图最小缩放等级*/
    });
  }
}
</script>

<style lang="css" scoped>
.map{
  height: 100%;
}
</style>
