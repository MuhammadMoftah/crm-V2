<template>
  <div class="w-full bg-white rounded-lg theme-shadow">
    <nav class="flex items-center justify-around text-xs text-blue-gray-500">
      <button
        @click="tab = 'projects'"
        class="w-full py-5 font-semibold border-b-2 border-blue-gray-100"
        :class="tab == 'projects' ? 'text-theme-orange border-orange-400' : ''"
      >Last Projects</button>

      <button
        @click="tab = 'deadline'"
        class="w-full py-5 font-semibold border-b-2 border-blue-gray-100"
        :class="tab == 'deadline' ? 'text-theme-orange border-orange-400' : ''"
      >Deadline</button>

      <button
        @click="tab = 'all'"
        class="w-full py-5 font-semibold border-b-2 border-blue-gray-100"
        :class="tab == 'all' ? 'text-theme-orange border-orange-400' : ''"
      >All Project</button>
    </nav>

    <div class="flex flex-col">
      <template v-for="n in 3">
        <section
          class="p-5 border-b-2 border-body"
          :key="n"
        >
          <div class="flex">
            <span class="inline-block p-8 mr-5 border-2 rounded-full border-blue-gray-200">
              <img
                class="w-7"
                :src="require('assets/imgs/twitter.png')"
                alt
              />
            </span>
            <div class="flex flex-col w-full">
              <p class="text-xs font-semibold text-blue-gray-500">Twitter App</p>

              <div class="flex items-center py-3">
                <div class="flex items-center h-1 align-middle bg-gray-200 rounded w-44 align-center">
                  <div
                    class="w-0 h-full bg-green-400 rounded"
                    style="width: 70%"
                  ></div>
                </div>
                <span class="mx-2 text-xs font-semibold text-blue-gray-500">70%</span>
              </div>

              <div class="flex">
                <img
                  class="object-cover w-8 h-8 mr-2 rounded-full"
                  :src="require('assets/imgs/user.jpg')"
                  alt=""
                  v-for="n in 4"
                  :key="n"
                >
              </div>
            </div>

          </div>

          <div class="grid grid-cols-2 gap-4 p-4 pb-0">
            <div class="flex items-center p-1 text-xs font-semibold ">
              <StageIcon class="w-5 h-5 mr-2 text-blue-gray-400 " />
              <span class="text-blue-gray-500">5 Stages</span>
            </div>
            <div class="flex items-center p-1 text-xs font-semibold ">
              <AlertIcon class="w-5 h-5 mr-2 text-blue-gray-400 " />
              <span class="text-blue-gray-500">Deadline: 05/08/2022</span>
            </div>
            <div class="flex items-center p-1 text-xs font-semibold ">
              <IncomeIcon class="w-5 h-5 mr-2 text-blue-gray-400 " />
              <span class="text-blue-gray-500">Income: $5000</span>
            </div>
            <div class="flex items-center p-1 text-xs font-semibold ">
              <HistoryIcon class="w-5 h-5 mr-2 text-blue-gray-400 " />
              <span class="text-blue-gray-500">21 Tasks</span>
            </div>
          </div>
        </section>

        <section
          class="p-5 border-b-2 border-body"
          :key="n + 1"
        >
          <div class="flex">
            <span class="inline-block p-8 mr-5 border-2 rounded-full border-blue-gray-200">
              <img
                class="w-7"
                :src="require('assets/imgs/messenger.png')"
                alt
              />
            </span>
            <div class="flex flex-col w-full">
              <p class="text-xs font-semibold text-blue-gray-500">Messenger Smart App</p>

              <div class="flex items-center py-3">
                <div class="flex items-center h-1 align-middle bg-gray-200 rounded w-44 align-center">
                  <div
                    class="w-0 h-full bg-green-400 rounded"
                    style="width: 45%"
                  ></div>
                </div>
                <span class="mx-2 text-xs font-semibold text-blue-gray-500">45%</span>
              </div>

              <div class="flex">
                <img
                  class="object-cover w-8 h-8 mr-2 rounded-full"
                  :src="require('assets/imgs/user.jpg')"
                  alt=""
                  v-for="n in 4"
                  :key="n"
                >
              </div>
            </div>

          </div>

          <div class="grid grid-cols-2 gap-4 p-4 pb-0">
            <div class="flex items-center p-1 text-xs font-semibold ">
              <StageIcon class="w-5 h-5 mr-2 text-blue-gray-400 " />
              <span class="text-blue-gray-500">4 Stages</span>
            </div>
            <div class="flex items-center p-1 text-xs font-semibold ">
              <AlertIcon class="w-5 h-5 mr-2 text-blue-gray-400 " />
              <span class="text-blue-gray-500">Deadline: 01/03/2022</span>
            </div>
            <div class="flex items-center p-1 text-xs font-semibold ">
              <IncomeIcon class="w-5 h-5 mr-2 text-blue-gray-400 " />
              <span class="text-blue-gray-500">Income: $2000</span>
            </div>
            <div class="flex items-center p-1 text-xs font-semibold ">
              <HistoryIcon class="w-5 h-5 mr-2 text-blue-gray-400 " />
              <span class="text-blue-gray-500">34 Tasks</span>
            </div>
          </div>
        </section>
      </template>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: "projects",
    };
  },
};
</script>

<style>
</style>