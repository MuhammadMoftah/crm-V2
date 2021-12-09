<template>
  <div class="relative w-full" @mouseleave="show = false">
    <svg
      class="absolute top-0 bottom-0 right-0 mx-2 my-auto font-bold text-gray-400 fill-current"
      width="15"
      height="15"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5141 2.51508C4.13598 0.893203 6.29235 0 8.58598 0C10.8796 0 13.036 0.893203 14.6578 2.51508C16.2796 4.13691 17.1729 6.29328 17.1729 8.58687C17.1729 10.6839 16.4259 12.6658 15.0584 14.2298L19.8272 18.9987C20.0563 19.2277 20.0563 19.5991 19.8272 19.8282C19.7127 19.9427 19.5626 20 19.4125 20C19.2624 20 19.1123 19.9427 18.9978 19.8282L14.2289 15.0593C12.6649 16.4268 10.683 17.1738 8.58598 17.1738C6.29231 17.1738 4.13602 16.2806 2.51414 14.6588C0.892307 13.0369 -0.000894547 10.8805 -0.000894547 8.58691C-0.000894547 6.29328 0.892269 4.13691 2.5141 2.51508ZM3.34364 13.8293C6.2343 16.7199 10.9376 16.7199 13.8283 13.8293C16.7189 10.9386 16.7189 6.23523 13.8283 3.34461C12.3828 1.89914 10.4847 1.17664 8.58594 1.17664C6.68766 1.17664 4.78875 1.89949 3.3436 3.34461C0.453051 6.2352 0.453051 10.9386 3.34364 13.8293Z"
      />
    </svg>
    <input
      type="text"
      class="text-xs h-9 input"
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
        >Empty ...</li>
        <li
          v-else
          @click="listClicked(item)"
          class="w-full p-2 text-xs text-gray-500 border-b border-gray-100 cursor-pointer list-item hover:bg-gray-100"
          v-for="(item, i) in options"
          :key="'item' + i"
          v-if="item.status === 'available'"
        >
          <span class="block py-1 font-bold">Unit Code : {{ item.unit_code }}</span>
          <span class="block py-1 font-bold">Price {{ item.total_unit_price }}</span>
          <span class="block py-1 font-bold">Status {{ item.status }}</span>
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
