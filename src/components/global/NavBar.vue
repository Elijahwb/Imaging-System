<template>
    <nav class="bg-gray-25 left-20 top-0 z-10 right-0 fixed h-16 shadow-sm flex items-center justify-between">
      <!-- content on the left side  -->
      <div class="text-black font-semibold text-2xl p-2 mt-2">
        DentalSoft
      </div>
      <!-- content on the right side  -->
      <div class="flex items-center mr-2">
        <div class="h-12 w-12 bg-gray-200 rounded-md flex items-center justify-center mx-1">
          <BellIcon class="text-blue-800 h-5 w-5"/>
          <div class="absolute bg-yellow-650 h-3 w-3 text-white text-xs rounded-full top-1 -mr-12 flex items-center justify-center"></div>
          <div class="absolute animate-ping bg-yellow-650 h-3 w-3 text-white text-xs rounded-full top-1 -mr-12 flex items-center justify-center"></div>
        </div>
        <div class="h-12 w-12 bg-gray-200 rounded-md flex items-center justify-center mx-1">
          <MailIcon class="text-blue-800 h-5 w-5"/>
          <div class="absolute bg-yellow-650 h-3 w-3 text-white text-xs rounded-full top-1 -mr-12 flex items-center justify-center"></div>
          <div class="absolute animate-ping bg-yellow-650 h-3 w-3 text-white text-xs rounded-full top-1 -mr-12 flex items-center justify-center"></div>
        </div>
        <div class="h-12 w-12 bg-gray-200 rounded-md flex items-center justify-center mx-1">
          <ChatIcon class="text-blue-800 h-5 w-5"/>
          <div class="absolute bg-yellow-650 h-3 w-3 text-white text-xs rounded-full top-1 -mr-12 flex items-center justify-center"></div>
          <div class="absolute animate-ping bg-yellow-650 h-3 w-3 text-white text-xs rounded-full top-1 -mr-12 flex items-center justify-center"></div>
        </div>
        <div class="h-12 w-12 bg-gray-200 rounded-md flex items-center justify-center mx-1">
          <GiftIcon class="text-blue-800 h-5 w-5"/>
          <div class="absolute bg-yellow-650 h-3 w-3 text-white text-xs rounded-full top-1 -mr-12 flex items-center justify-center"></div>
          <div class="absolute animate-ping bg-yellow-650 h-3 w-3 text-white text-xs rounded-full top-1 -mr-12 flex items-center justify-center"></div>
        </div>
        <div class="flex flex-col items-end ml-10">
          <span class="text-black font-semibold text-sm">Dr. Abubakari Asuman</span>
          <span class="text-black font-normal text-xs">abubakari.asuman@casehospital.ug</span>
        </div>
        <div class="user-avatar mt-1">
          <img src="@/assets/images/placeholder.jpg" alt="">
        </div>
      </div>
    </nav>
</template>

<script>
import {
  BellIcon,
  MailIcon,
  ChatIcon,
  GiftIcon,
} from '@heroicons/vue/outline';

export default {
  components: {
    BellIcon,
    MailIcon,
    ChatIcon,
    GiftIcon,
  },
};
</script>

<style scoped>
.user-avatar img {
    width: 95%;
    height: 95%;
    border-radius: 8px;
    object-fit: cover;
}
.user-avatar {
    width: 3.75em;
    height: 3.75em;
    border-radius: 50%;
    background: var(--appWhite);
    margin-left: 10px;
}
</style>
