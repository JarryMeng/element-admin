<template lang="html">
<div class="map full-page-view" id="mapbox-el"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiamFycnltZW5nIiwiYSI6ImNqcGpseW8zcTA1eDYzd3FpYmJlYjBlcXIifQ.sWZmgkI-oUZrxxF4E57S8w";
let map;
export default {
  mounted() {
    map = new mapboxgl.Map({
      container: "mapbox-el",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9
    });

    map.on("load", function() {
      var canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      var context = canvas.getContext("2d");
      const blinkPoint = {
        width: 64,
        height: 64,
        data: new Uint8Array(64 * 64 * 4),
        add(map) {

        },
        render() {
          var duration = 1000;
          var t = (performance.now() % duration) / duration;
          // console.log(performance.now())
          var radius = (this.width / 2) * 0.3;
          var outerRadius = (this.width / 2) * 0.7 * t + radius;
          // var context = this.context;

          // draw outer circle
          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          context.arc(
            this.width / 2,
            this.height / 2,
            outerRadius,
            0,
            Math.PI * 2
          );
          context.fillStyle = "rgba(255, 200, 200," + (1 - t) + ")";
          context.fill();

          // draw inner circle
          context.beginPath();
          context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          context.fillStyle = "rgba(255, 100, 100, 1)";
          context.strokeStyle = "white";
          context.lineWidth = 2 + 4 * (1 - t);
          context.fill();
          context.stroke();

          // update this image's data with data from the canvas
          this.data = context.getImageData(0, 0, this.width, this.height).data;

          // keep the map repainting
          map.triggerRepaint();

          // return `true` to let the map know that the image was updated
          return true;
        }
      };
      map.addImage("blink-point", blinkPoint, {
        pixelRatio: 2
      });

      map.addLayer({
        id: "points",
        type: "symbol",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [{
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [-74.5, 40]
              }
            }]
          }
        },
        layout: {
          "icon-image": "blink-point"
        }
      });
    });
    this._resize = () => {
      setTimeout(() => {
        map.resize()
      }, 100)
    };
    this.$resize.$on("resize", this._resize);
  },
  beforeDestroy() {
    console.log("卸载map");
    this.$resize.$off("resize", this._resize);
    this._resize = null;
    map.remove();
    map = null;
  }
};
</script>

<style lang="scss" scoped>
.map {
    height: 100%;
}
</style>
