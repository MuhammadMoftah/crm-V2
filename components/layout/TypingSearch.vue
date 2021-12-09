<template>
  <div class="relative w-full" @mouseleave="show = false">
    <SearchIcon
      class="absolute top-0 bottom-0 right-0 w-5 h-5 mx-4 my-auto font-bold text-gray-400"
    />
    <input
      type="text"
      class="w-full"
      :class="classes"
      :placeholder="placeholder"
      @keydown="show = true"
      @click="show = true"
      @input="$emit('input', $event.target.value)"
      :value="value"
    />
    <transition
      enter-active-class="transition duration-300 ease-out transform"
      enter-class="scale-95 -translate-y-3 opacity-0"
      enter-to-class="scale-100 translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in transform"
      leave-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-3 opacity-0"
    >
      <transition-group
        tag="ul"
        name="slide-fade"
        class="absolute top-0 z-10 w-full overflow-x-auto bg-white shadow-xl mt-9"
        style="max-height:250px"
        v-if="show"
      >
        <li
          :key="0"
          v-if="!options.length"
          class="py-2 text-xs font-semibold text-center text-gray-400"
        >Not found ...</li>
        <li
          v-else
          @click="listClicked(item)"
          class="w-full p-2 text-xs text-gray-500 border-b border-gray-100 cursor-pointer list-item hover:bg-gray-100"
          v-for="(item, i) in options"
          :key="'item' + i"
        >
          <span class="block py-1 font-bold">{{ item.name }}</span>
          <span class="block pb-1" v-if="item.mobiles.length">{{ item.mobiles[0].mobile }}</span>
        </li>
      </transition-group>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TypingSearch",
  props: {
    value: {
      default: "",
    },
    classes: {
      default: "",
    },
    options: {
      default: () => [],
    },
    placeholder: {
      default: "Search ...",
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    listClicked(val) {
      this.$emit("clicked", val);
      this.show = false;
    },
  },
};
</script>

<style scoped>
/* width */
ul::-webkit-scrollbar {
  width: 3px;
  height: 5px;
}

/* Track */
ul::-webkit-scrollbar-track {
  @apply bg-white;
  border-radius: 100vh;
}

/* Handle */
ul::-webkit-scrollbar-thumb {
  @apply bg-gray-500  border-2 border-solid;
  border-radius: 100vh;
}
</style>
