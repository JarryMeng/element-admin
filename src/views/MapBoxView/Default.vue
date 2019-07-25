<template lang="html">
<div class="map full-page-view" id="mapbox-el">

</div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiamFycnltZW5nIiwiYSI6ImNqcGpseW8zcTA1eDYzd3FpYmJlYjBlcXIifQ.sWZmgkI-oUZrxxF4E57S8w';

export default {
  mounted() {
    var map = new mapboxgl.Map({
      container: 'mapbox-el',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }
}
</script>

<style lang="scss" scoped>
.map{
  height: 100%;

}
</style>
