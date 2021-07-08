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
      apikey: "	tag0P89vXG5Amy9D6jW9go93GRU2fq1i",
      center: { lat: 44.8055, lng: 20.4761 }
    };
  },
  async mounted() {
    window.L.mapquest.key = 'tag0P89vXG5Amy9D6jW9go93GRU2fq1i';

    // 'map' refers to a <div> element with the ID map
    const map = window.L.mapquest.map('map', {
      center: [44.8055, 20.4761],
      layers: window.L.mapquest.tileLayer('map'),
      zoom: 18
    });

    window.L.marker([44.8055, 20.4761], {
      icon: window.L.mapquest.icons.marker(),
      draggable: false
    }).bindPopup('Denver, CO').addTo(map);
  },
  methods: {}
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