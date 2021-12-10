<template>
<div class="sidebar" style="background-color: #F6F6F6;">
  <div class="flex items-center justify-center mt-2 top-0 h-16 w-16">
    <img src="@/assets/images/dental.png">
  </div>
  <div class="flex flex-col justify-between items-center sidebar-items overflow-auto">
    <div
      :class="{'bg-yellow-650 rounded-xl' : isDashboard}"
      @click="externalRouting('/dashboard')"
      class="sidebar-item ml-2">
      <div
        :class="{'scale-100' : isDashboard}"
        class="sidebar-item-marker transition duration-200 transform ease-in scale-0 group-hover:scale-100"
      >
      </div>
      <ViewGridIcon
        :class="{'text-white scale-110' : isDashboard}"
        class="sidebar-icon transition duration-200 transform group-hover:text-white ease-in scale-75 group-hover:scale-100"/>
      <span
        class="popup group-hover:scale-100 scale-0 transition duration-300 transform">
        <div class="m-1 whitepsace-nowrap text-white text-xs">Dashboard</div>
      </span>
    </div>
    <div
      :class="{'bg-yellow-650 rounded-xl' : isFront}"
      @click="externalRouting('/frontoffice')"
      class="sidebar-item ml-2">
      <div
        :class="{'scale-100' : isFront}"
        class="sidebar-item-marker transition duration-200 transform ease-in scale-0 group-hover:scale-100"
      >
      </div>
      <DesktopComputerIcon
        :class="{'text-white scale-110' : isFront}"
        class="sidebar-icon transition duration-200 transform group-hover:text-white ease-in scale-75 group-hover:scale-100"/>
      <span
        class="popup group-hover:scale-100 scale-0 transition duration-300 transform">
        <div class="m-1 whitepsace-nowrap text-white text-xs w-auto">FrontOffice</div>
      </span>
    </div>
    <div
      :class="{'bg-yellow-650 rounded-xl' : isPatients}"
      @click="externalRouting('/doctor/patients')"
      class="sidebar-item ml-2">
      <div
        :class="{'scale-100' : isPatients}"
        class="sidebar-item-marker transition duration-200 transform ease-in scale-0 group-hover:scale-100"
      >
      </div>
      <UserGroupIcon
        :class="{'text-white scale-110' : isPatients}"
        class="sidebar-icon transition duration-200 transform group-hover:text-white ease-in scale-75 group-hover:scale-100"/>
      <span
        class="popup group-hover:scale-100 scale-0 transition duration-300 transform">
        <div class="m-1 whitepsace-nowrap text-white text-xs">Patients</div>
      </span>
    </div>
    <div
      :class="{'bg-yellow-650 rounded-xl' : isAppointments}"
      @click="externalRouting('/appointments')"
      class="sidebar-item ml-2">
      <div
        :class="{'scale-100' : isAppointments}"
        class="sidebar-item-marker transition duration-200 transform ease-in scale-0 group-hover:scale-100"
      >
      </div>
      <CalendarIcon
        :class="{'text-white scale-110' : isAppointments}"
        class="sidebar-icon transition duration-200 transform group-hover:text-white ease-in scale-75 group-hover:scale-100"/>
      <span
        class="popup group-hover:scale-100 scale-0 transition duration-300 transform">
        <div class="m-1 whitepsace-nowrap text-white text-xs">Calendar</div>
      </span>
    </div>
    <div
      :class="{'bg-yellow-650 rounded-xl' : isBilling}"
      @click="externalRouting('/billing')"
      class="sidebar-item ml-2">
      <div
        :class="{'scale-100' : isBilling}"
        class="sidebar-item-marker transition duration-200 transform ease-in scale-0 group-hover:scale-100"
      >
      </div>
      <CreditCardIcon
        :class="{'text-white scale-110' : isBilling}"
        class="sidebar-icon transition duration-200 transform group-hover:text-white ease-in scale-75 group-hover:scale-100"/>
      <span
        class="popup group-hover:scale-100 scale-0 transition duration-300 transform">
        <div class="m-1 whitepsace-nowrap text-white text-xs">Billing</div>
      </span>
    </div>
    <div
      :class="{'bg-yellow-650 rounded-xl' : isReporting}"
      @click="externalRouting('/reporting')"
      class="sidebar-item ml-2">
      <div
        :class="{'scale-100' : isReporting}"
        class="sidebar-item-marker transition duration-200 transform ease-in scale-0 group-hover:scale-100"
      >
      </div>
      <ChartSquareBarIcon
        :class="{'text-white scale-110' : isReporting}"
        class="sidebar-icon transition duration-200 transform group-hover:text-white ease-in scale-75 group-hover:scale-100"/>
      <span
        class="popup group-hover:scale-100 scale-0 transition duration-300 transform">
        <div class="m-1 whitepsace-nowrap text-white text-xs">Reports</div>
      </span>
    </div>
    <div
      :class="{'bg-yellow-650 rounded-xl' : isInsurance}"
      @click="externalRouting('/insurance')"
      class="sidebar-item ml-2">
      <div
        :class="{'scale-100' : isInsurance}"
        class="sidebar-item-marker transition duration-200 transform ease-in scale-0 group-hover:scale-100"
      >
      </div>
      <ShieldCheckIcon
        :class="{'text-white scale-110' : isInsurance}"
        class="sidebar-icon transition duration-200 transform group-hover:text-white ease-in scale-75 group-hover:scale-100"/>
      <span
        class="popup group-hover:scale-100 scale-0 transition duration-300 transform">
        <div class="m-1 whitepsace-nowrap text-white text-xs">Insurance</div>
      </span>
    </div>
    <a
    style="background: #FF782E"
      @click="inRouting"
      :class="{'bg-yellow-650 rounded-xl' : isImaging}"
      class="sidebar-item ml-2">
      <div
        :class="{'scale-100' : isImaging}"
        class="sidebar-item-marker transition duration-200 transform ease-in scale-0 group-hover:scale-100"
      >
      </div>
      <PhotographIcon
        :class="{'text-white scale-110' : isImaging}"
        class="sidebar-icon transition duration-200 transform group-hover:text-white ease-in scale-75 group-hover:scale-100"/>
      <span
        class="popup group-hover:scale-100 scale-0 transition duration-300 transform">
        <div class="m-1 whitepsace-nowrap text-white text-xs">Imaging</div>
      </span>
    </a>
    <a
      :class="{'bg-yellow-650 rounded-xl' : isSettings}"
      class="sidebar-item ml-2">
      <div
        :class="{'scale-100' : isSettings}"
        class="sidebar-item-marker transition duration-200 transform ease-in scale-0 group-hover:scale-100"
      >
      </div>
      <CogIcon
        :class="{'text-white scale-110' : isSettings}"
        @click="externalRouting('settings')"
        class="sidebar-icon transition duration-200 transform group-hover:text-white ease-in scale-75 group-hover:scale-100"/>
      <span
        class="popup group-hover:scale-100 scale-0 transition duration-300 transform">
        <div class="m-1 whitepsace-nowrap text-white text-xs">Settings</div>
      </span>
    </a>
  </div>
  <div
    class="h-16 w-16 flex flex-col items-center justify-center group hover:bg-yellow-650 m-1 hover:shadow-md border rounded-xl my-3">
    <LogoutIcon
      class="sidebar-icon transition duration-200 transform group-hover:text-white ease-in scale-75 group-hover:scale-100"/>
    <span
      class="popup group-hover:scale-100 scale-0 transition duration-300 transform">
      <div class="m-1 whitepsace-nowrap text-white text-xs">Logout</div>
    </span>
  </div>
</div>
</template>

<script>
import {
  CalendarIcon,
  DesktopComputerIcon,
  CreditCardIcon,
  ChartSquareBarIcon,
  ShieldCheckIcon,
  PhotographIcon,
  UserGroupIcon,
  ViewGridIcon,
  LogoutIcon,
  CogIcon,
} from '@vue-hero-icons/outline'

export default {
  data() {
    return {
      isAuth: null,
      token: null,
    };
  },
  components: {
    CalendarIcon,
    ViewGridIcon,
    DesktopComputerIcon,
    CreditCardIcon,
    ChartSquareBarIcon,
    ShieldCheckIcon,
    PhotographIcon,
    UserGroupIcon,
    LogoutIcon,
    CogIcon,
  },
  methods: {
    externalRouting(route) {
      window.location.href = `https://app.projectdental.nl${route}`
    },
    inRouting () {
      this.$router.push('/')
    }
  },
  mounted() {
    this.isAuth = sessionStorage.getItem('isDentalSoftAuth');
    this.token = sessionStorage.getItem('dentalSoftToken');
  },
  computed: {
    isDashboard() {
      return false;
    },
    isFront() {
      return false;
    },
    isBilling() {
      return false;
    },
    isPatients() {
      return false;
    },
    isAppointments() {
      return false;
    },
    isReporting() {
      return false;
    },
    isInsurance() {
      return false;
    },
    isImaging() {
      return true;
    },
    isSettings() {
      return false;
    },
  },
};
</script>

<style scoped>
.sidebar {
  @apply fixed w-20 flex flex-col justify-between items-center border-gray-200 h-screen left-0 top-0 z-20 space-y-2 border-r
}
.sidebar-items::-webkit-scrollbar {
  display: none;
}
.sidebar-item {
  @apply h-16 w-16 flex flex-col items-center justify-center group hover:bg-yellow-650 m-1 hover:shadow-md border my-2 rounded-full hover:rounded-2xl
}
.sidebar-icon {
  @apply h-8 w-8 text-yellow-650
}
.sidebar-item-marker {
  @apply h-12 w-1.5 bg-yellow-650 absolute left-0 rounded-tr-full rounded-br-full
}
.popup {
  @apply bg-black absolute left-20 h-8 items-center border-2 border-white flex justify-center rounded-md
}
</style>
