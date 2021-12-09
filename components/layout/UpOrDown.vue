<template>
  <section class="w-full p-6 bg-white rounded-lg theme-shadow">
    <p class="text-xs font-semibold capitalize text-blue-gray-600">
      {{title}}
    </p>

    <div class="flex items-center justify-between w-full pt-8 pb-4">
      <p
        class="text-4xl font-semibold "
        :class="textClasses ? textClasses : 'text-theme-blue'"
      >$ {{value}}</p>

      <div class="flex flex-col justify-between">
        <UpArrowIcon
          v-if="up"
          class="w-6 h-6 text-green-500"
        />
        <DownArrowIcon
          v-else
          class="w-6 h-6 text-red-500"
        />
        <span
          class="mt-2 text-xs font-semibold "
          :class="up? 'text-green-400':'text-red-400'"
        >{{percentage}}%</span>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "value", "percentage", "textClasses", "up"],
};
</script>

<style>
</style>