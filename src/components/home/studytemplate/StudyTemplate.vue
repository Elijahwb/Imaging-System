<template>
    <div class="studytemplate-container" :class="componentImageType">
        <div class="container-heading">
            {{imageType}}
            <span @click="zoomIn"><i class="fas" :class="{'fa-expand': !isZoomedIn, 'fa-compress-arrows-alt': isZoomedIn}"></i></span>
        </div>
        <div class="images-container">
            <router-link to="/2D" v-for="image, index in images" :key="index" class="image-container">
                <img :src="require('@/assets/xrays/'+ image.name)" alt="">
                <div class="date-overlay">2021-11-10</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageType: String,
        images: Array,
        openFullScreen: Function,
    },
    data(){
        return {
            isZoomedIn: false,
            componentImageType: "",
        }
    },
    mounted(){
        this.componentImageType = this.imageType.replace(/\s+/g, '').toLowerCase()
        console.log("Component type is ", this.componentImageType)
    },
    methods: {
        zoomIn(){
            if(!this.isZoomedIn) {
                this.isZoomedIn = true
                document.querySelector(`.studytemplate-container.${this.componentImageType}`).classList.add("zoomed-in")
                // this.openFullScreen("open", this.imageType)
                
            }
            else {
                // this.openFullScreen("close", this.imageType)
                this.isZoomedIn = false
                document.querySelector(`.studytemplate-container.${this.componentImageType}`).classList.remove("zoomed-in")
            }
        }
    }
}
</script>

<style scoped>
.date-overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    background: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
.image-container img {
    transition: all 300ms ease-in-out !important;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.image-container:hover img {
    transform: scale(1.1);
}
.image-container:hover {
    cursor: pointer;
}
.zoomed-in .image-container {
    height: 25%;
    flex-basis: calc(16.4% - 0px);
}
.image-container {
    position: relative !important;
    height: 50%;
    margin-left: 5px;
    flex-basis: calc(32.5% - 0px);
    flex-shrink: 0;
    flex-grow: 0;
    overflow: hidden;
}
.images-container::-webkit-scrollbar {
    width: 4px;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
.images-container::-webkit-scrollbar-track {
    background: transparent;
}
.images-container::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 2px;
    border: 3px solid var(--dsBrandColor);
}
.zoomed-in .images-container {
    align-items: flex-start !important;
    justify-content: flex-start;

}
.images-container {
    width: 100%;
    height: calc(100% - 44px);
    display: flex;
    /* justify-content: space-between; */
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: auto;
    row-gap: 15px;
    padding-right: 5px;
}
.container-heading span:hover {
    cursor: pointer;
    color: var(--highlight);
}
.container-heading {
    font-size: 15px;
    padding: 10px 10px 10px 10px;
    display: flex;
    justify-content: space-between;
}
.studytemplate-container.zoomed-in {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    /* left: 0; */
    z-index: 10;
    height: 100% !important;
    flex-basis: 100% !important;
}
.studytemplate-container {
    transition: all 400ms ease-in-out;
    transform-origin: center;
    height: calc(50% - 30px);
    /* border-right:.5px solid var(--appWhite); */
    border-bottom:.5px solid #dfdede42;
    flex-basis: calc(50% - 5px);
    flex-shrink: 0;
    flex-grow: 0;
    background: #000000;
}
</style>