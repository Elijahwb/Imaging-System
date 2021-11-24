<template>
    <section style="margin-bottom: 40px">
        <div class="date-heading">
            {{imageType}}
        </div>
        <div class="images-row">
            <div class="image" v-for="img, index in images" :key="index">
                <div class="image-source">
                    <img :src="require('@/assets/xrays/'+ img.name)" alt="">
                </div>
                <!-- <div class="image-type">{{img.type}}</div> -->
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        images: Array,
        imageType: String,
    }
}
</script>

<style scoped>
.image-source img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.image .image-source {
    height: calc(100% - 0px);
    /* margin-bottom: 10px; */
    background: var(--mainBg);
}
.image-type {
    background: #131313;
    padding: 5px 10px;
}
.image {
    height: 18vw;
    margin-right: 10px;
    flex-basis: 18vw;
    flex-grow: 0;
    flex-shrink: 0;
}
.images-row::-webkit-scrollbar {
    width: 2px;
    height: 6px;
    scrollbar-color: var(--dsBrandColor) var(--dsBrandColor);
}
.images-row::-webkit-scrollbar-track {
    background: transparent;
}
.images-row::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 2px;
    border: 1px solid var(--dsBrandColor);
}
.images-row {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    /* border: 1px solid cadetblue; */
    width: 100%;
}
.date-heading {
    background: #131313;
    padding: 5px 10px;
    /* font-family: "Mohavebold"; */
    font-size: 15px;
}
</style>