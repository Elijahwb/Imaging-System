<template>
    <div class="submenu-container">
        <router-link to="/patient/studytemplate" class="submenu-item" :class="{'active': currentPath.toString().indexOf('studytemplate') >= 0 || currentPath.toString() == '/'}">
            <Button label="STUDY TEMPLATE" icon="fas fa-book-open"/>
        </router-link>

        <router-link to="/patient/timeseries" class="submenu-item" :class="{'active': currentPath.toString().indexOf('timeseries') >= 0}">
             <Button label="TIME SERIES" icon="fa fa-clock" transparent="true" color='#fff'/>
        </router-link>
        
        <router-link to="/patient/timeseries" class="submenu-item" :class="{'active': currentPath.toString().indexOf('timeseries') >= 0}">
             <Button label="MODALITY SERIES" icon="fa fa-th" transparent="true"  background="#fff"/>
        </router-link>
    </div>
</template>

<script>
import Button from '@/components/global/Buttons.vue'

export default {
    components: {
        Button,
    },
    data(){
        return {
            currentPath: "",
        }
    },
    mounted(){
        this.currentPath = this.$router.currentRoute.path
    },
}
</script>

<style scoped>
.label {
    /* padding-right: 5px; */
    padding-right: 0.3125em;
}
.icon-area i {
    font-size: inherit;
}
.icon-area {
    background: inherit;
    /* width: 30px;
    height: 30px; */
    width: 1.875em;
    height: 1.875em;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-radius: 50%; */
    border-radius: 6px;
    /* font-size: 15px; */
    font-size: 0.9375em;
    box-shadow: 5px 5px 10px rgba(0,0,0,.2), -5px -5px 10px rgba(0,0,0,.2);
    /* margin-right: 8px; */
    margin-right: 0.5em;
}
/* .submenu-item.active {
    color: var(--appWhite);
    color: #fff;
    background: rgb(41,146,137);
    background: linear-gradient(0deg, rgba(41,146,137,1) 0%, rgba(57,166,156,1) 35%, rgba(75,202,190,1) 100%);
    background: rgb(249,142,0);
    background: linear-gradient(0deg, rgba(249,142,0,1) 0%, rgba(255,147,2,1) 35%, rgba(255,182,102,1) 100%);
} */
.submenu-item:hover {
    cursor: pointer;
}
/* .submenu-item {
    background: var(--appWhite);
    background: #fff;
    color: var(--contrastBg);
    display: flex;
    padding: 3px;
    margin-right: 5px;
    padding: 0.1875em;
    margin-right: 0.3125em;
    border-radius: 19px;
    border-radius: 6px;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid var(--highlight);
    border: 1px solid var(--dsMainColor);
} */
.submenu-item {
    margin-right: 10px;
}
.submenu-container {
    display: flex;
    /* padding-bottom: 10px; */
    padding-bottom: 0.625em;
    background: var(--sectionBg);
}
</style>