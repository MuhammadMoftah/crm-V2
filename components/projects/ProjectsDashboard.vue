<template>
  <div class="flex mt-10">
    <!-- events -->
    <section class="flex h-[520px] w-7/12 space-x-6">
      <div class="flex flex-col justify-between h-full">
        <div
          class="flex flex-col items-center justify-center p-2 text-xs font-semibold bg-white rounded-lg cursor-pointer  w-28 h-28 text-blue-gray-400 theme-shadow"
        >
          <span class="w-10 h-10 text-2xl font-normal text-center rounded-full">
            21
          </span>
          Projects
        </div>

        <div
          class="flex flex-col items-center justify-center p-2 text-xs font-semibold bg-white rounded-lg cursor-pointer  w-28 h-28 text-blue-gray-400 theme-shadow"
        >
          <span class="w-10 h-10 text-2xl font-normal text-center rounded-full">
            145
          </span>
          Tasks
        </div>

        <div
          class="flex flex-col items-center justify-center p-2 text-xs font-semibold bg-white rounded-lg cursor-pointer  w-28 h-28 text-blue-gray-400 theme-shadow"
        >
          <span class="w-10 h-10 text-2xl font-normal text-center rounded-full">
            12
          </span>
          Members
        </div>

        <div
          class="flex flex-col items-center justify-center p-2 text-xs font-semibold bg-white rounded-lg cursor-pointer  w-28 h-28 text-blue-gray-400 theme-shadow"
        >
          <span class="w-10 h-10 text-2xl font-normal text-center rounded-full">
            42
          </span>
          stages
        </div>
      </div>

      <div class="w-full bg-white rounded-lg theme-shadow">
        <p
          class="p-4 text-xs font-semibold border-b  border-blue-gray-100 text-blue-gray-500"
        >
          Latest events
        </p>

        <section class="relative flex flex-col pb-24">
          <div
            class="flex items-center justify-between p-4"
            v-for="n in 5"
            :key="n"
          >
            <hgroup class="flex">
              <span
                class="relative flex items-center justify-center w-10 h-10 mr-8 rounded-full  bg-blue-50 text-theme-blue"
              >
                <TaskIcon class="w-4 h-4" />
                <span
                  v-if="n !== 5"
                  class="absolute bottom-0 left-0 right-0 w-1 h-5 mx-auto -mb-6 border-l-2 rounded-full  border-blue-gray-200"
                ></span>
              </span>
              <div>
                <p class="mb-2 text-xs font-semibold text-gray-400">
                  Added new tasks
                </p>
                <p class="text-xs font-semibold text-gray-500">
                  Develop a visual concept
                </p>
              </div>
            </hgroup>
            <span
              class="w-20 h-8 text-xs font-semibold leading-8 text-center rounded-full  bg-blue-gray-100 text-blue-gray-500"
              >12:45
            </span>
          </div>

          <div class="absolute bottom-0 left-0 w-full px-8">
            <button
              class="w-full h-10 text-xs font-semibold rounded-full  bg-blue-50 text-theme-blue hover:bg-blue-100"
            >
              see more
            </button>
          </div>
        </section>
      </div>
    </section>

    <!-- projects -->
    <section class="w-5/12 pl-5">
      <ProjectsSection />
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>