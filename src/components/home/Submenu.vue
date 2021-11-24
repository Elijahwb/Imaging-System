<template>
    <div class="submenu-container">
        <router-link to="/patient/studytemplate" class="submenu-item" :class="{'active': currentPath.toString().indexOf('studytemplate') >= 0}">
            <div class="icon-area">
                <i class="fa fa-movie"></i>
            </div>
            <div class="label">Study Template</div>
        </router-link>
        <router-link to="/patient/timeseries" class="submenu-item" :class="{'active': currentPath.toString().indexOf('timeseries') >= 0}">
            <div class="icon-area">
                <i class="fa fa-clock"></i>
            </div>
            <div class="label">Time Series</div>
        </router-link>
        <router-link to="/patient/modularity" class="submenu-item" :class="{'active': currentPath.toString().indexOf('modularity') >= 0}">
            <div class="icon-area">
                <i class="fa fa-th"></i>
            </div>
            <div class="label">Modality Series</div>
        </router-link>
    </div>
</template>

<script>
export default {
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
    padding-right: 5px;
}
.icon-area i {
    font-size: inherit;
}
.icon-area {
    background: inherit;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-radius: 50%; */
    border-radius: 6px;
    font-size: 15px;
    box-shadow: 5px 5px 10px rgba(0,0,0,.2), -5px -5px 10px rgba(0,0,0,.2);
    margin-right: 8px;
}
.submenu-item.active {
    color: var(--appWhite);
    /* background: rgb(41,146,137);
    background: linear-gradient(0deg, rgba(41,146,137,1) 0%, rgba(57,166,156,1) 35%, rgba(75,202,190,1) 100%); */
    background: rgb(249,142,0);
    background: linear-gradient(0deg, rgba(249,142,0,1) 0%, rgba(255,147,2,1) 35%, rgba(255,182,102,1) 100%);
}
.submenu-item:hover {
    cursor: pointer;
}
.submenu-item {
    /* background: var(--appWhite); */
    background: #fff;
    color: var(--contrastBg);
    display: flex;
    padding: 3px;
    margin-right: 5px;
    /* border-radius: 19px; */
    border-radius: 6px;
    justify-content: flex-start;
    align-items: center;
    /* border: 1px solid var(--highlight); */
    border: 1px solid var(--dsMainColor);
}
.submenu-container {
    display: flex;
    padding-bottom: 10px;
    background: var(--sectionBg);
}
</style>