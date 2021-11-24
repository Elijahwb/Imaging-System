<template>
  <div class="sidebar" style="background-color: #f6f6f6">
    <div class="flex items-center justify-center mt-2 top-0 h-16 w-16">
      <div class="text-yellow-650 text-3xl" style="color: #ff782e !important">
        DS
      </div>
    </div>
    <a href="https://projectdental.nl/dashboard" class="sidebar-item">
      <svg
        :class="{ 'text-white scale-100': isImaging }"
        xmlns="http://www.w3.org/2000/svg"
        class="
          h-6
          w-6
          sidebar-icon
          transition
          duration-200
          transform
          group-hover:text-white
          ease-in
          scale-75
          group-hover:scale-100
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
      <span
        class="
          popup
          group-hover:scale-100
          scale-0
          transition
          duration-100
          transform
        "
      >
        <div class="m-1 whitepsace-nowrap text-white text-xs">Dashboard</div>
      </span>
    </a>
    <a href="https://projectdental.nl/frontoffice" class="sidebar-item">
      <svg
        :class="{ 'text-white scale-100': isImaging }"
        xmlns="http://www.w3.org/2000/svg"
        class="
          h-6
          w-6
          sidebar-icon
          transition
          duration-200
          transform
          group-hover:text-white
          ease-in
          scale-75
          group-hover:scale-100
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <span
        class="
          popup
          group-hover:scale-100
          scale-0
          transition
          duration-100
          transform
        "
      >
        <div class="m-1 whitepsace-nowrap text-white text-xs w-auto">
          FrontOffice
        </div>
      </span>
    </a>
    <a href="https://projectdental.nl/doctor/patients" class="sidebar-item">
      <svg
        :class="{ 'text-white scale-100': isImaging }"
        xmlns="http://www.w3.org/2000/svg"
        class="
          h-6
          w-6
          sidebar-icon
          transition
          duration-200
          transform
          group-hover:text-white
          ease-in
          scale-75
          group-hover:scale-100
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <span
        class="
          popup
          group-hover:scale-100
          scale-0
          transition
          duration-100
          transform
        "
      >
        <div class="m-1 whitepsace-nowrap text-white text-xs">Patients</div>
      </span>
    </a>
    <a
      href="https://projectdental.nl/doctor/patients"
      @click="goToNameRoute('appointments')"
      class="sidebar-item"
    >
      <svg
        :class="{ 'text-white scale-100': isImaging }"
        xmlns="http://www.w3.org/2000/svg"
        class="
          h-6
          w-6
          sidebar-icon
          transition
          duration-200
          transform
          group-hover:text-white
          ease-in
          scale-75
          group-hover:scale-100
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span
        class="
          popup
          group-hover:scale-100
          scale-0
          transition
          duration-100
          transform
        "
      >
        <div class="m-1 whitepsace-nowrap text-white text-xs">Appointments</div>
      </span>
    </a>
    <div>
      <svg
        :class="{ 'text-white scale-100': isImaging }"
        xmlns="http://www.w3.org/2000/svg"
        class="
          h-6
          w-6
          sidebar-icon
          transition
          duration-200
          transform
          group-hover:text-white
          ease-in
          scale-75
          group-hover:scale-100
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
      <span
        class="
          popup
          group-hover:scale-100
          scale-0
          transition
          duration-100
          transform
        "
      >
        <div class="m-1 whitepsace-nowrap text-white text-xs">Billing</div>
      </span>
    </div>
    <div class="sidebar-item">
      <svg
        :class="{ 'text-white scale-100': isImaging }"
        xmlns="http://www.w3.org/2000/svg"
        class="
          h-6
          w-6
          sidebar-icon
          transition
          duration-200
          transform
          group-hover:text-white
          ease-in
          scale-75
          group-hover:scale-100
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span
        class="
          popup
          group-hover:scale-100
          scale-0
          transition
          duration-100
          transform
        "
      >
        <div class="m-1 whitepsace-nowrap text-white text-xs">Reports</div>
      </span>
    </div>
    <div @click="goToNameRoute('insurance')" class="sidebar-item">
      <svg
        :class="{ 'text-white scale-100': isImaging }"
        xmlns="http://www.w3.org/2000/svg"
        class="
          h-6
          w-6
          sidebar-icon
          transition
          duration-200
          transform
          group-hover:text-white
          ease-in
          scale-75
          group-hover:scale-100
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
      <span
        class="
          popup
          group-hover:scale-100
          scale-0
          transition
          duration-100
          transform
        "
      >
        <div class="m-1 whitepsace-nowrap text-white text-xs">Insurance</div>
      </span>
    </div>
    <div class="sidebar-item bg-yellow-650">
      <svg
        :class="{ 'text-white scale-100': isImaging }"
        xmlns="http://www.w3.org/2000/svg"
        class="
          h-6
          w-6
          sidebar-icon
          transition
          duration-200
          transform
          group-hover:text-white
          ease-in
          scale-75
          group-hover:scale-100
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span
        class="
          popup
          group-hover:scale-100
          scale-0
          transition
          duration-100
          transform
        "
      >
        <div class="m-1 whitepsace-nowrap text-white text-xs">Imaging</div>
      </span>
    </div>
    <div
      @click="goToNameRoute({ path: 'https://projectdental.nl/logout' })"
      class="
        h-16
        w-16
        flex flex-col
        items-center
        justify-center
        group
        hover:bg-yellow-650
        m-1
        hover:shadow-md
        border
        rounded-lg
        my-3
      "
    >
      <svg
        :class="{ 'text-white scale-100': isImaging }"
        xmlns="http://www.w3.org/2000/svg"
        class="
          h-6
          w-6
          sidebar-icon
          transition
          duration-200
          transform
          group-hover:text-white
          ease-in
          scale-75
          group-hover:scale-100
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
      <span
        class="
          popup
          group-hover:scale-100
          scale-0
          transition
          duration-100
          transform
        "
      >
        <div class="m-1 whitepsace-nowrap text-white text-xs">Logout</div>
      </span>
    </div>
  </div>
</template>

<script>
// import {
//   CalendarIcon,
//   DesktopComputerIcon,
//   CreditCardIcon,
//   ChartSquareBarIcon,
//   ShieldCheckIcon,
//   PhotographIcon,
//   UserGroupIcon,
//   ViewGridIcon,
//   LogoutIcon,
// } from '@heroicons/vue/outline';

export default {
  data() {
    return {};
  },
  //   components: {
  //     CalendarIcon,
  //     ViewGridIcon,
  //     DesktopComputerIcon,
  //     CreditCardIcon,
  //     ChartSquareBarIcon,
  //     ShieldCheckIcon,
  //     PhotographIcon,
  //     UserGroupIcon,
  //     LogoutIcon,
  //   },
  methods: {
    goToNameRoute(route) {
      this.$router.push(route);
    },
  },
  computed: {
    isDashboard() {
      return this.$router.currentRoute.name === "doctorDashboard";
    },
    isFront() {
      return this.$router.currentRoute.name === "Office Dashboard";
    },
    isBilling() {
      return this.$router.currentRoute.fullPath.indexOf("billing") >= 0;
    },
    isPatients() {
      return this.$router.currentRoute.name === "patients";
    },
    isAppointments() {
      return this.$router.currentRoute.name === "appointments";
    },
    isReporting() {
      return this.$router.currentRoute.name === "reporting";
    },
    isInsurance() {
      return this.$router.currentRoute.name === "Insurance";
    },
    isImaging() {
      return this.$router.currentRoute.name === "Imaging";
    },
  },
};
</script>

<style scoped>
.sidebar {
  @apply fixed w-20 flex flex-col justify-start items-center border-gray-200 h-screen left-0 top-0 z-20 space-y-2 border-r;
}
.sidebar-item {
  @apply h-16 w-16 flex flex-col items-center justify-center group hover:bg-yellow-650 m-1 hover:shadow-md border rounded-full my-2;
}
.sidebar-icon {
  @apply h-8 w-8 text-yellow-650;
}
.popup {
  @apply bg-black absolute left-20 h-8 items-center border-2 border-white flex justify-center rounded-md;
}
</style>
