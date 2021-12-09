<template>
  <section>
    <aside class="flex justify-center my-5 text-center text-white uppercase">
      <div
        @click="tab = 'resale'"
        :class="tab == 'resale' ? 'font-bold' : 'border-transparent'"
        class="py-1 mx-5 transition-all duration-200 ease-out border-b-2 cursor-pointer"
      >Resale</div>
      <div
        @click="tab = 'newproject'"
        :class="tab == 'newproject' ? 'font-bold' : 'border-transparent'"
        class="py-1 mx-5 transition-all duration-200 ease-out border-b-2 cursor-pointer"
      >New projects</div>
      <div
        @click="tab = 'commercial'"
        :class="tab == 'commercial' ? 'font-bold' : 'border-transparent'"
        class="py-1 mx-5 transition-all duration-200 ease-out border-b-2 cursor-pointer"
      >Commercial</div>
    </aside>

    <div class="flex justify-between w-full bg-gray-100 rounded-xl">
      <label class="flex flex-col w-full p-4 bg-white shadow-2xl rounded-xl">
        <div class="text-xs text-gray-400 uppercase">Location</div>
        <input class="text-sm focus:outline-none" type="text" placeholder="City or Town or Distric" />
      </label>

      <label class="flex flex-col w-full px-4 py-3">
        <div class="text-xs text-gray-400 uppercase">Property Type</div>
        <select
          class="text-sm bg-transparent focus:outline-none"
          type="text"
          placeholder="City or Town or Distric"
        >
          <option value>Select Property Type</option>
          <option value>Select Property Type</option>
          <option value>Select Property Type</option>
          <option value>Select Property Type</option>
        </select>
      </label>

      <label class="flex flex-col w-full px-4 py-3">
        <div class="text-xs text-gray-400 uppercase">Price Range</div>
        <RangePopup @gotValue="gotValue" />
      </label>

      <button class="px-5 py-3 m-2 text-white rounded-xl bg-main-2 hover:opacity-90">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tab: "resale",
    };
  },
  methods: {
    gotValue() {},
  },
};
</script>

<style scoped>
::placeholder {
  color: black;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: black;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: black;
}
</style>
