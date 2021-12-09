<template>
  <section>
    <div
      @click="close()"
      class="fixed inset-0 z-10 flex items-center justify-center w-full h-screen max-h-screen overflow-hidden bg-opacity-70 bg-main-5 backdrop-filter backdrop-blur-sm dark:bg-black-800 dark:bg-opacity-50"
    >
      <button
        class="absolute px-3 py-2 text-sm rounded-md top-5 right-5 bg-gray-50 hover:bg-gray-200"
      >X</button>
    </div>

    <transition name="slide-fade" appear>
      <div
        class="absolute top-0 bottom-0 left-0 right-0 z-20 flex flex-col w-11/12 max-h-screen m-auto mx-auto overflow-hidden shadow-lg rounded-xl shadow-aside"
        style="max-height: 90vh;"
        :class="addClass"
        :style="addStyle"
        v-if="isOpen"
      >
        <slot name="modal-body"></slot>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  props: {
    showing: {
      default: false,
      type: Boolean,
    },
    addClass: {
      type: String,
      default: "max-w-2xl",
    },
    minHeight: {
      type: String,
      default: "200px",
    },
    addStyle: {
      type: String,
      default: "",
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    backgroundClose: {
      type: Boolean,
      default: true,
    },
    action: {
      default: "Add",
      type: String,
    },
    title: {
      type: String,
      default: "",
    },
    buttonClass: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    close() {
      this.$store.commit("global/closeModal");
    },
  },
  beforeDestroy() {
    document.body.style.overflow = "auto";
  },
  created() {
    document.body.style.overflow = "hidden";
  },
  mounted() {
    // to make lunch animation
    setTimeout(() => {
      this.isOpen = true;
    }, 100);

    // close with Esc button
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.close();
    });
  },
};
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(20px);
  opacity: 0;
}
</style>