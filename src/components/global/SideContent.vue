<template>
    <section class="side-content-container">
        <Sidebar />
        <slot />
    </section>
</template>

<script>
import Sidebar from "@/components/global/Sidebar.vue"
export default {
    components: {
        Sidebar,
    },
}
</script>

<style scoped>
.side-content-container {
    /* background: var(--sectionBg); */
    background: var(--dsSectionBg);
    min-width: 270px;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 15px 10px;
}
</style>