<template>
  <div id="map">
  <!--In the following div the HERE Map will render-->
    <div id="map-container" ref="hereMap"></div>
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      platform: null,
      apikey: "xCMrsyzOx918YVI3-O5rw36wdrQ8eeyCJUQj-6NK2m8",
      center: { lat: 44.8055, lng: 20.4761 }
    };
  },
  async mounted() {
    // Initialize the platform object:
    const platform = new window.H.service.Platform({
      apikey: this.apikey
    });
    this.platform = platform;
    this.initializeHereMap();
  },
  methods: {
    initializeHereMap() {
      const mapContainer = this.$refs.hereMap;
      const H = window.H;
      const maptypes = this.platform.createDefaultLayers();

      const map = new H.Map(mapContainer, maptypes.vector.normal.map, {
        zoom: 17,
        center: this.center
      });

      const etfMarker = new H.map.Marker(this.center);
      map.addObject(etfMarker);

      addEventListener("resize", () => map.getViewPort().resize());

      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      H.ui.UI.createDefault(map, maptypes);
    }
  }
};
</script>

<style scoped>
#map {
  width: 100%;
  text-align: center;
  background-color: #ccc;
  z-index: 0;
}

#map-container {
  width: 100%;
  height: 500px;
}

* {
  z-index: 0;
}
</style>