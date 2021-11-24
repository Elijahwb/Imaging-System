<template>
    <Frame>
        <div class="time-series-container">
            <Modularity :images="paranomas2" imageType="IO Camera"/>
            <Modularity :images="paranomas" imageType="Panaromo"/>
            <Modularity :images="paranomas3" imageType="CT"/>
        </div>
    </Frame>
</template>

<script>
import Frame from "@/components/home/Homeframe.vue";
import Modularity from "@/components/home/modularity/Modularity.vue";
export default {
    components: {
        Frame,
        Modularity
    },
    data(){
        return {
            paranomas: [
                {
                    name: "1.jpeg",
                    type: "Panaromo"
                },
                {
                    name: "2.jpeg",
                    type: "IO Camera"
                },
                {
                    name: "3.jpeg",
                    type: "CT"
                },
                {
                    name: "4.jpeg",
                    type: "IO Sensor"
                },
                {
                    name: "5.jpeg",
                    type: "CT"
                },
            ],
            paranomas2: [
                {
                    name: "6.jpeg",
                    type: "Panaromo"
                },
                {
                    name: "7.jpeg",
                    type: "IO Camera"
                },
                {
                    name: "8.jpeg",
                    type: "CT"
                },
                {
                    name: "9.jpeg",
                    type: "IO Sensor"
                },
                {
                    name: "10.jpeg",
                    type: "CT"
                },
            ],
            paranomas3: [
                {
                    name: "10.jpeg",
                    type: "Panaromo"
                },
                {
                    name: "3.jpeg",
                    type: "IO Camera"
                },
                {
                    name: "5.jpeg",
                    type: "CT"
                },
                {
                    name: "7.jpeg",
                    type: "IO Sensor"
                },
                {
                    name: "6.jpeg",
                    type: "CT"
                },
            ],
        }
    },
}
</script>

<style scoped>
.time-series-container::-webkit-scrollbar {
    width: 5px;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
.time-series-container::-webkit-scrollbar-track {
    background: transparent;
}
.time-series-container::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 2px;
    border: 3px solid var(--highlight);
}
.time-series-container {
    max-height: calc(100% - 60px);
    overflow-y: auto;
}
</style>