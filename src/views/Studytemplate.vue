<template>
    <Frame>
        <div class="study-template-container fullscreen">
            <!-- <StudyTemplate imageType="Panorama" :images="images" :openFullScreen="openFullScreen" v-if="!isFullScreen || (isFullScreen && activeZoomSection == 'Panorama')" />
            <StudyTemplate imageType="CT" :images="images2" :openFullScreen="openFullScreen" v-if="!isFullScreen || (isFullScreen && activeZoomSection == 'CT')" />
            <StudyTemplate imageType="IO Sensor" :images="images3" :openFullScreen="openFullScreen" v-if="!isFullScreen || (isFullScreen && activeZoomSection == 'IO Sensor')" />
            <StudyTemplate imageType="IO Camera" :images="images" :openFullScreen="openFullScreen" v-if="!isFullScreen || (isFullScreen && activeZoomSection == 'IO Camera')" /> -->

            <StudyTemplate imageType="Panorama" :images="images" />
            <StudyTemplate imageType="CT" :images="images2" />
            <StudyTemplate imageType="IO Sensor" :images="images3" />
            <StudyTemplate imageType="IO Camera" :images="images" />
        </div>
    </Frame>
</template>

<script>
import Frame from "@/components/home/Homeframe.vue";
import StudyTemplate from "@/components/home/studytemplate/StudyTemplate.vue";
export default {
    components: {
        Frame,
        StudyTemplate
    },
    data(){
        return {
            isFullScreen: false,
            activeZoomSection: "",
            images: [
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
            images2: [
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
            images3: [
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
    methods: {
        openFullScreen(action, activeSection){
            if(action == "open") {
                this.isFullScreen = true
                this.activeZoomSection = activeSection
            }
            else {
                this.isFullScreen = false
                this.activeZoomSection = ""
            }

            console.log(`Is zoom active: ${this.isFullScreen}`)
            console.log(`Zoomed in section: ${this.activeZoomSection}`)
        }
    }
}
</script>

<style scoped>
.study-template-container::-webkit-scrollbar {
    width: 5px;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
.study-template-container::-webkit-scrollbar-track {
    background: transparent;
}
.study-template-container::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 2px;
    border: 3px solid var(--highlight);
}
.study-template-container.fullscreen {
    overflow-y: hidden;
}
.study-template-container {
    position: relative;
    height: calc(100% - 60px);
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    row-gap: 10px;
    justify-content: space-between;
    flex-wrap: wrap;
    /* background: var(--mainBg); */
}
</style>