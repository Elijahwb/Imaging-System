<template>
    <section class="container">
        <Dentalnav />
    </section>
</template>

<script>
import Dentalnav from "@/components/dentalsoftcomponents/DentalNavbar.vue"
export default {
    components: {
        Dentalnav,
    },
    data(){
        return {
            patients: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
            paranomas: [
                "@/assets/xrays/1.jpeg",
                "@/assets/xrays/2.jpeg",
                "@/assets/xrays/3.jpeg",
                "@/assets/xrays/4.jpeg",
                "@/assets/xrays/5.jpeg",
            ],
        }
    },
}
</script>

<style scoped>

/* .sections {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    height: calc(100vh - var(--topBarHeight) - 50px);
} */
.app-container {
    margin-top: 100px;
    font-family: "Mohave";
    padding: 0 10px;
    font-size: var(--normalFontSize);
    overflow-y: scroll;
}
</style>