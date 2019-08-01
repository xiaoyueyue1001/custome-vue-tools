<template>
  <MapCanvas class="map-canvas-wrap" :coordinateList="coordinateList"></MapCanvas>
</template>
<script>
import MapCanvas from "./MapCanvas";
export default {
  components: { MapCanvas },
  data() {
    return {
      coordinateList: [
        {
          latitude: 39.6739, //维度
          longitude: 117.94235 //经度
        },
        {
          latitude: 39.67337,
          longitude: 117.23236
        },
        {
          latitude: 39.6279,
          longitude: 117.22618
        },
        {
          latitude: 39.62843,
          longitude: 117.49466
        },
        {
          latitude: 39.56441,
          longitude: 117.49397
        },
        {
          latitude: 39.56441,
          longitude: 117.22824
        },
        {
          latitude: 39.51411,
          longitude: 117.23167
        },
        {
          latitude: 39.50987,
          longitude: 117.47887
        },
        {
          latitude: 39.44521,
          longitude: 117.47337
        },
        {
          latitude: 39.4468,
          longitude: 117.23785
        },
        {
          latitude: 39.40596,
          longitude: 117.23511
        },
        {
          latitude: 39.39163,
          longitude: 117.93686
        },
        {
          latitude: 39.4346,
          longitude: 117.93686
        },
        {
          latitude: 39.44839,
          longitude: 117.59766
        },
        {
          latitude: 39.49556,
          longitude: 117.59697
        },
        {
          latitude: 39.49397,
          longitude: 117.91901
        },
        {
          latitude: 39.56124,
          longitude: 117.91969
        },
        {
          latitude: 39.56282,
          longitude: 117.60315
        },
        {
          latitude: 39.62579,
          longitude: 117.59354
        },
        {
          latitude: 39.62473,
          longitude: 117.93137
        },
        {
          latitude: 39.67337,
          longitude: 117.94373
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.map-canvas-wrap {
  border: 1px solid #ccc;
}
</style>


