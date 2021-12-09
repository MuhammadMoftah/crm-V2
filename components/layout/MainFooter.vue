<template>
  <footer class="py-16 bg-main-5">
    <section class="flex justify-between max-w-6xl mx-auto text-white">
      <div class="flex flex-col justify-between" style="height:120px">
        <EstateLogoWhite />
        <p class="text-xs text-gray-300">© Copyright 2020 ESTATE BOOK</p>
      </div>

      <div class="text-sm font-light text-center capitalize">
        <NuxtLink class="mx-3" to="/">blog</NuxtLink>
        <NuxtLink class="mx-3" to="/">about us</NuxtLink>
        <NuxtLink class="mx-3" to="/">terms & conditions</NuxtLink>
        <NuxtLink class="mx-3" to="/">privacy policy</NuxtLink>
        <NuxtLink class="mx-3" to="/">company registration</NuxtLink>
      </div>

      <div class="flex flex-col justify-between" style="height:120px">
        <aside class="flex justify-end">
          <button class="p-2 mx-2 rounded-full bg-main-3 hover:bg-main-2">
            <Apple class="w-4 h-4" />
          </button>
          <button class="p-2 mx-2 rounded-full bg-main-3 hover:bg-main-2">
            <GooglePlay class="w-4 h-4" />
          </button>
        </aside>

        <p class="text-xs text-gray-300">© Copyright 2020 ESTATE BOOK</p>
      </div>
    </section>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
