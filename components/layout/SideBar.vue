<template>
  <section class="w-full">
    <div
      class="flex flex-col px-4 py-5 text-sm border-2  rounded-2xl border-blue-gray-200"
    >
      <!-- my projects -->
      <NuxtLink
        to="/"
        class="flex items-center justify-between p-4 my-2 capitalize duration-200 bg-white rounded-lg  h-14 hover:bg-gray-50 hover:pl-6 text-blue-gray-500 border-blue-gray-100 theme-shadow"
        href="javascript:void(0)"
      >
        <span class="flex items-end">
          <HomeIcon class="w-6 h-6 mr-3 text-theme-purple" />My Projects
        </span>
        <span class="flex items-center">
          <span
            class="
              w-5
              h-5
              text-center
              bg-theme-purple
              text-white
              rounded-full
              text-[11px]
            "
          >
            9
          </span>
          <ChevronDown class="w-5 h-5 ml-2 text-blue-gray-400" />
        </span>
      </NuxtLink>

      <!-- chats -->
      <a
        class="flex items-center justify-between p-4 my-2 capitalize duration-200 bg-white rounded-lg  h-14 hover:bg-gray-50 hover:pl-6 text-blue-gray-500 border-blue-gray-100 theme-shadow"
        href="javascript:void(0)"
      >
        <span class="flex items-end">
          <ChatIcon class="w-5 h-5 mr-3 text-theme-orange" /> Chats
        </span>
        <span class="flex items-center">
          <span
            class="
              w-5
              h-5
              text-center
              bg-theme-orange
              text-white
              rounded-full
              text-[11px]
            "
          >
            9
          </span>
          <ChevronDown class="w-5 h-5 ml-2 text-blue-gray-400" />
        </span>
      </a>

      <!-- tasks  -->
      <a
        class="flex items-center justify-between p-4 my-2 capitalize duration-200 bg-white rounded-lg  h-14 hover:bg-gray-50 hover:pl-6 border-blue-gray-100 text-blue-gray-500 theme-shadow"
        href="javascript:void(0)"
      >
        <span class="flex items-end">
          <TaskIcon class="w-5 h-5 mr-3 text-theme-teal" /> tasks
        </span>
        <span class="flex items-center">
          <span
            class="
              w-5
              h-5
              text-center
              bg-theme-teal
              text-white
              rounded-full
              text-[11px]
            "
          >
            9
          </span>
          <ChevronDown class="w-5 h-5 ml-2 text-blue-gray-400" />
        </span>
      </a>

      <!-- calendar  -->
      <a
        class="flex items-center justify-between p-4 my-2 capitalize duration-200 bg-white rounded-lg  h-14 hover:bg-gray-50 hover:pl-6 border-blue-gray-100 text-blue-gray-500 theme-shadow"
        href="javascript:void(0)"
      >
        <span class="flex items-end">
          <CalendarIcon class="w-5 h-5 mr-3 text-theme-green" /> calendar
        </span>
        <span class="flex items-center">
          <span
            class="
              w-5
              h-5
              text-center
              bg-theme-green
              text-white
              rounded-full
              text-[11px]
            "
          >
            9
          </span>
          <ChevronDown class="w-5 h-5 ml-2 text-blue-gray-400" />
        </span>
      </a>

      <!-- Messages  -->
      <a
        class="flex items-center justify-between p-4 my-2 capitalize duration-200 bg-white rounded-lg  h-14 hover:bg-gray-50 hover:pl-6 border-blue-gray-100 text-blue-gray-500 theme-shadow"
        href="javascript:void(0)"
      >
        <span class="flex items-end">
          <MessageIcon class="w-6 h-6 mr-3 text-theme-blue" /> Messages
        </span>
        <span class="flex items-center">
          <span
            class="
              w-5
              h-5
              text-center
              bg-theme-blue
              text-white
              rounded-full
              text-[11px]
            "
          >
            9
          </span>
          <ChevronDown class="w-5 h-5 ml-2 text-blue-gray-400" />
        </span>
      </a>

      <!-- Statistics  -->
      <a
        class="flex items-center justify-between p-4 my-2 capitalize duration-200 bg-white rounded-lg  h-14 hover:bg-gray-50 hover:pl-6 border-blue-gray-100 text-blue-gray-500 theme-shadow"
        href="javascript:void(0)"
      >
        <span class="flex items-end">
          <ChartIcon class="w-5 h-5 mr-3 text-theme-yellow" /> Statistics
        </span>
        <span class="flex items-center">
          <span
            class="
              w-5
              h-5
              text-center
              bg-theme-yellow
              text-white
              rounded-full
              text-[11px]
            "
          >
            9
          </span>
          <ChevronDown class="w-5 h-5 ml-2 text-blue-gray-400" />
        </span>
      </a>

      <!-- comopenents  -->
      <a
        @click="$router.push('/components')"
        class="flex items-center justify-between p-4 my-2 capitalize duration-200 bg-white rounded-lg  h-14 hover:bg-gray-50 hover:pl-6 border-blue-gray-100 text-blue-gray-500 theme-shadow"
        href="javascript:void(0)"
      >
        <span class="flex items-end">
          <Area class="w-5 h-5 mr-3 text-pink-500" /> Components
        </span>
        <span class="flex items-center">
          <span
            class="
              w-5
              h-5
              text-center
              bg-pink-500
              text-white
              rounded-full
              text-[11px]
            "
          >
            9
          </span>
          <ChevronDown class="w-5 h-5 ml-2 text-blue-gray-400" />
        </span>
      </a>
    </div>

    <div
      class="flex flex-col px-4 py-5 mt-6 text-sm border-2  rounded-2xl border-blue-gray-200"
    >
      <section class="px-4 py-6 bg-white rounded-lg theme-shadow">
        <div class="flex items-center justify-between px-1 mb-6">
          <p class="text-blue-gray-500">Projects on deadline</p>
        </div>

        <button
          class="
            flex
            justify-between
            items-center
            w-full
            p-4
            text-[12px]
            font-semibold
            bg-orange-100
            rounded-lg
            h-14
            text-theme-orange
            hover:bg-orange-200 hover:pl-6
            duration-200
          "
        >
          Develop Chat Application
          <ChevronRight class="w-5 h-5" />
        </button>
      </section>

      <section class="grid grid-cols-2 gap-4 mt-6">
        <div
          class="flex flex-col items-center justify-center h-32 p-2 text-xs font-semibold bg-white rounded-lg cursor-pointer  text-blue-gray-500 theme-shadow hover:bg-blue-gray-100"
        >
          <span
            class="w-10 h-10 mb-2 text-sm font-normal leading-10 text-center text-white rounded-full  bg-theme-green"
          >
            9
          </span>
          Projects
        </div>
        <div
          class="flex flex-col items-center justify-center h-32 p-2 text-xs font-semibold bg-white rounded-lg cursor-pointer  text-blue-gray-500 theme-shadow hover:bg-blue-gray-100"
        >
          <span
            class="w-10 h-10 mb-2 text-sm font-normal leading-10 text-center text-white rounded-full  bg-theme-purple"
          >
            3
          </span>
          Tasks
        </div>
        <div
          class="flex flex-col items-center justify-center h-32 p-2 text-xs font-semibold bg-white rounded-lg cursor-pointer  text-blue-gray-500 theme-shadow hover:bg-blue-gray-100"
        >
          <span
            class="w-10 h-10 mb-2 text-sm font-normal leading-10 text-center text-white rounded-full  bg-theme-blue"
          >
            2
          </span>
          Messages
        </div>
        <div
          class="flex flex-col items-center justify-center h-32 p-2 text-xs font-semibold bg-white rounded-lg cursor-pointer  text-blue-gray-500 theme-shadow hover:bg-blue-gray-100"
        >
          <span
            class="w-10 h-10 mb-2 text-sm font-normal leading-10 text-center text-white rounded-full  bg-theme-orange"
          >
            7
          </span>
          chats
        </div>
      </section>

      <section class="px-4 py-6 mt-6 bg-white rounded-lg theme-shadow">
        <div class="flex items-center justify-between px-1 mb-6">
          <p class="text-blue-gray-500">Recent Projects</p>
        </div>

        <button
          class="
            flex
            justify-between
            items-center
            w-full
            p-4
            mb-3
            text-[12px]
            font-semibold
            bg-blue-gray-50
            rounded-lg
            h-14
            text-blue-gray-500
            hover:bg-green-100 hover:pl-6
            duration-200
          "
        >
          City Advertising Campaign
          <ChevronRight class="w-5 h-5" />
        </button>

        <button
          class="
            flex
            justify-between
            items-center
            w-full
            p-4
            mb-3
            text-[12px]
            font-semibold
            bg-blue-gray-50
            rounded-lg
            h-14
            text-blue-gray-500
            hover:bg-green-100 hover:pl-6
            duration-200
          "
        >
          Web Application Development
          <ChevronRight class="w-5 h-5" />
        </button>

        <button
          class="
            flex
            justify-between
            items-center
            w-full
            p-4
            mb-3
            text-[12px]
            font-semibold
            bg-blue-gray-50
            rounded-lg
            h-14
            text-blue-gray-500
            hover:bg-green-100 hover:pl-6
            duration-200
          "
        >
          Twitter App
          <ChevronRight class="w-5 h-5" />
        </button>

        <button
          class="
            flex
            justify-between
            items-center
            w-full
            p-4
            mb-3
            text-[12px]
            font-semibold
            bg-blue-gray-50
            rounded-lg
            h-14
            text-blue-gray-500
            hover:bg-green-100 hover:pl-6
            duration-200
          "
        >
          Facebook Application
          <ChevronRight class="w-5 h-5" />
        </button>
      </section>
    </div>
  </section>
</template>

<script>
export default {};
</script>

