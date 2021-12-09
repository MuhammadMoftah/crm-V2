<template>
  <section class="p-4">
    <h2 class="text-xl font-semibold text-blue-gray-700">Components</h2>

    <div class="flex flex-wrap w-full py-5 border-b">
      <div class="w-full p-1 lg:w-1/2">
        <!-- deadline projects  -->
        <ListComponent>
          <template #title> Projects on Dedlines</template>
          <template #body>
            <section class="flex flex-col p-2 ">

              <div class="flex items-center justify-between p-2 mb-1 rounded-lg bg-gray-50">
                <span class="inline-block p-2 bg-white rounded-lg theme-shadow">
                  <img
                    :src="require('assets/imgs/messenger.png')"
                    class="w-4"
                    alt=""
                  >
                </span>

                <span class="text-xs font-semibold text-blue-gray-500">Messenger Smart App</span>

                <span class="block w-20 py-2 text-xs font-semibold text-center text-red-500 bg-red-100 rounded-lg">05/02</span>
              </div>

              <div class="flex items-center justify-between p-2 mb-1 rounded-lg">
                <span class="inline-block p-2 bg-white rounded-lg theme-shadow">
                  <img
                    :src="require('assets/imgs/twitter.png')"
                    class="w-4"
                    alt=""
                  >
                </span>

                <span class="text-xs font-semibold text-blue-gray-500">City Advertising Campaign</span>

                <span class="block w-20 py-2 text-xs font-semibold text-center text-yellow-800 bg-yellow-100 rounded-lg">27/06 </span>
              </div>

              <div class="flex items-center justify-between p-2 mb-1 rounded-lg bg-gray-50">
                <span class="inline-block p-2 bg-white rounded-lg theme-shadow">
                  <img
                    :src="require('assets/imgs/messenger.png')"
                    class="w-4"
                    alt=""
                  >
                </span>

                <span class="text-xs font-semibold text-blue-gray-500">Messenger Smart App</span>

                <span class="block w-20 py-2 text-xs font-semibold text-center text-red-500 bg-red-100 rounded-lg">04/08</span>
              </div>

              <div class="flex items-center justify-between p-2 mb-1 rounded-lg">
                <span class="inline-block p-2 bg-white rounded-lg theme-shadow">
                  <img
                    :src="require('assets/imgs/twitter.png')"
                    class="w-4"
                    alt=""
                  >
                </span>

                <span class="text-xs font-semibold text-blue-gray-500">City Advertising Campaign</span>

                <span class="block w-20 py-2 text-xs font-semibold text-center text-yellow-800 bg-yellow-100 rounded-lg">12/03</span>
              </div>

            </section>
          </template>
        </ListComponent>
      </div>

      <div class="w-full p-1 lg:w-1/2">
        <!-- Workload of Members -->
        <ListComponent>
          <template #title> Workload of Members</template>
          <template #body>
            <section class="flex flex-col p-2 ">

              <template v-for="n in 2">
                <div
                  class="flex items-center justify-between p-2 mb-1 rounded-lg bg-gray-50"
                  :key="n"
                >
                  <span class="flex items-center w-40 ">
                    <img
                      :src="require('assets/imgs/user.jpg')"
                      class="object-cover object-top w-10 h-8 rounded-md theme-shadow"
                      alt=""
                    >
                    <span class="ml-3 text-xs font-semibold text-blue-gray-500">Cody Curtis</span>
                  </span>

                  <span class="block text-xs font-semibold text-blue-gray-400 ">12 Projects</span>
                  <span class="block text-xs font-semibold text-blue-gray-400 ">21 Stages</span>
                  <span class="block mr-3 text-xs font-semibold text-blue-gray-400 ">7 Stages</span>
                </div>

                <div
                  class="flex items-center justify-between p-2 mb-1 rounded-lg"
                  :key="n+1"
                >
                  <span class="flex items-center w-40">
                    <img
                      :src="require('assets/imgs/user2.jpg')"
                      class="object-cover object-top w-10 h-8 rounded-md theme-shadow"
                      alt=""
                    >
                    <span class="ml-3 text-xs font-semibold text-blue-gray-500">Donald Stokes</span>
                  </span>

                  <span class="block text-xs font-semibold text-blue-gray-400 ">3 Projects</span>
                  <span class="block text-xs font-semibold text-blue-gray-400 ">18 Stages</span>
                  <span class="block mr-3 text-xs font-semibold text-blue-gray-400 ">4 Stages</span>
                </div>
              </template>

            </section>
            <div class="p-4 pt-2 text-xs font-semibold capitalize cursor-pointer text-blue-gray-400 hover:underline">
              View More
            </div>
          </template>
        </ListComponent>
      </div>
    </div>

    <div class="flex flex-wrap w-full py-5 border-b">
      <div class="w-full p-1 lg:w-1/3">
        <UpOrDown
          title="Incoming income"
          value="14.000"
          percentage="17"
          :up="true"
        />
      </div>
      <div class="w-full p-1 lg:w-1/3">
        <UpOrDown
          title="Profit from income"
          value="12.600"
          percentage="-13"
          textClasses="text-theme-green"
          :up="false"
        />
      </div>
      <div class="w-full p-1 lg:w-1/3">
        <LastWhileStat />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
