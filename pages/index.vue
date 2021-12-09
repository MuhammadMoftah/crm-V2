<template>
  <section class="p-4">
    <div class="flex items-center justify-between">
      <p class="text-sm font-semibold text-blue-gray-500">Dashboard Projects</p>

      <nav
        class="flex h-10 overflow-hidden text-xs bg-white rounded-full  theme-shadow text-blue-gray-500"
      >
        <button
          class="h-full px-4 font-semibold cursor-pointer  hover:bg-blue-gray-100"
          :class="
            tab == 'dashboard' ? 'text-theme-purple bg-blue-gray-100' : ''
          "
          @click="tab = 'dashboard'"
        >
          Dashboard
        </button>
        <button
          class="h-full px-4 font-semibold cursor-pointer  hover:bg-blue-gray-100"
          :class="tab == 'projects' ? 'text-theme-purple bg-blue-gray-100' : ''"
          @click="tab = 'projects'"
        >
          All Projects
        </button>
        <button
          class="h-full px-4 font-semibold cursor-pointer  hover:bg-blue-gray-100"
          :class="tab == 'schedule' ? 'text-theme-purple bg-blue-gray-100' : ''"
          @click="tab = 'schedule'"
        >
          Schedule
        </button>

        <button
          class="h-full px-4 font-semibold cursor-pointer  hover:bg-blue-gray-100"
          :class="
            tab == 'statistics' ? 'text-theme-purple bg-blue-gray-100' : ''
          "
          @click="tab = 'statistics'"
        >
          Statistics
        </button>

        <button
          class="h-full px-4 font-semibold cursor-pointer  hover:bg-blue-gray-100"
          :class="tab == 'activity' ? 'text-theme-purple bg-blue-gray-100' : ''"
          @click="tab = 'activity'"
        >
          Activity
        </button>

        <button
          class="h-full px-4 font-semibold cursor-pointer  hover:bg-blue-gray-100"
          :class="tab == 'members' ? 'text-theme-purple bg-blue-gray-100' : ''"
          @click="tab = 'members'"
        >
          Members
        </button>
      </nav>

      <aside class="text-xs font-semibold cursor-pointer text-blue-gray-500">
        <PlusIcon class="inline w-5 h-5 mx-2" /> Add new project
      </aside>
    </div>

    <component v-bind:is="tab"></component>
  </section>
</template>

<script>
import projects from "~/components/projects/ProjectsList.vue";
import dashboard from "~/components/projects/ProjectsDashboard.vue";
import schedule from "~/components/projects/ProjectsSchedule.vue";
import statistics from "~/components/projects/ProjectsStatistics.vue";
import activity from "~/components/projects/ProjectsActivity.vue";
import members from "~/components/projects/ProjectsMembers.vue";
export default {
  components: {
    dashboard,
    projects,
    schedule,
    statistics,
    activity,
    members,
  },
  data() {
    return {
      tab: "dashboard",
    };
  },
};
</script>
