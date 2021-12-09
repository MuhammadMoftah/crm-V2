<template>
  <section class="w-full bg-white rounded-lg theme-shadow">
    <p class="p-4 text-xs font-semibold capitalize border-b border-blue-gray-100 text-blue-gray-500">

      <slot name="title">
        Title here

      </slot>
    </p>
    <slot name="body"></slot>

  </section>
</template>

<script>
export default {};
</script>

<style>
</style>