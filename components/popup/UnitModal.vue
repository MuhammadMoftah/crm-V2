<template>
  <Modal class="overflow-visible overflow-y-visible" addClass="w-full max-w-5xl">
    <template #modal-body>
      <!-- tabs  -->
      <nav class="flex">
        <button
          @click="active = 'photos'"
          class="w-full h-12 text-center transition-all duration-100 ease-out rounded-xl"
          :class="active === 'photos' ? 'bg-main-3 text-white ':'bg-gray-200 hover:bg-gray-200'"
        >Photos (12)</button>
        <button
          @click="active = 'videos'"
          class="w-full h-12 text-center transition-all duration-100 ease-out bg-white rounded-xl"
          :class="active === 'videos' ? 'bg-main-3 text-white ':' bg-gray-200 hover:bg-gray-200'"
        >Videos (8)</button>
      </nav>

      <!-- Photos  -->
      <section v-if="active == 'photos'" class="p-5 mt-20 bg-white h-[500px]">
        <agile>
          <div class="slide" v-for="n in 6" :key="n" :class="`slide--${n}`">
            <h3>{{ n }}</h3>
          </div>
          <template slot="prevButton">
            <i class="fas fa-chevron-left"></i>
          </template>
          <template slot="nextButton">
            <i class="fas fa-chevron-right"></i>
          </template>
        </agile>
      </section>

      <!-- Videos  -->
      <section class="p-5 bg-white" v-if="active == 'videos'">Videos</section>
    </template>
  </Modal>
</template>

<script>
// import { VueAgile } from "vue-agile";
export default {
  name: "UnitModal",
  // components: { agile: VueAgile },
  mounted() {
    this.asNavFor1.push(this.$refs.thumbnails);
    this.asNavFor2.push(this.$refs.main);
  },
  data() {
    return {
      active: "photos",
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: false,
      },
      options2: {
        autoplay: true,
        centerMode: true,
        dots: false,
        navButtons: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
            },
          },

          {
            breakpoint: 1000,
            settings: {
              navButtons: true,
            },
          },
        ],
      },
      slides: [
        "https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1472926373053-51b220987527?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      ],
    };
  },
};
</script>

<style>
</style>