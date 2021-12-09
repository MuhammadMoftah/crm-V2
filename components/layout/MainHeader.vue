<template>
  <section class="relative">
    <div class="container flex items-center justify-between py-6">
      <NuxtLink
        to="/"
        tag="div"
        class="flex justify-start text-xl font-semibold capitalize cursor-pointer lg:w-0 lg:flex-1 text-blue-grey-600 hover:opacity-80"
      >The portal</NuxtLink>

      <div class="w-1/5">
        <TypingSearch
          :classes="'text-xs h-10 font-semibold text-blue-gray-200 transition-all duration-100 bg-white border border-gray-100  outline-none rounded-full px-4'"
          placeholder="Search ( In all system )"
        />
      </div>

      <div class="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
        <nav class="hidden space-x-6 md:flex">
          <button class="relative rounded-full w-9 h-9 bg-blue-gray-100 hover:bg-purple-200">
            <NotificationIcon class="w-5 h-5 mx-auto text-theme-purple" />
            <span
              class="absolute top-0 right-0 h-5 min-w-[20px] px-1 text-[10px] pt-1 leading-none text-white transform -translate-y-1/2 bg-theme-purple rounded-full"
            >8</span>
          </button>

          <button
            class="relative p-2 rounded-full w-9 h-9 hover:bg-purple-200 text-blue-gray-400 hover:text-theme-purple"
          >
            <AnnotationIcon class="w-4 h-4 mx-auto" />
          </button>

          <button
            class="relative p-2 rounded-full w-9 h-9 hover:bg-purple-200 text-blue-gray-400 hover:text-theme-purple"
          >
            <UsersIcon class="w-5 h-5 mx-auto" />
          </button>

          <button
            class="relative p-2 rounded-full w-9 h-9 hover:bg-purple-200 text-blue-gray-400 hover:text-theme-purple"
          >
            <ChartIcon class="w-4 h-4 mx-auto" />
          </button>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style></style>
