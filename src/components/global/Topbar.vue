<template>
    <section class="top-bar">
        <div class="company-info">
           <router-link to="/">
            DentalSoft <span><small>Digital imaging solution</small></span>
           </router-link>
        </div>
        <div class="main-menu">
            <router-link class="menu-item" to="/" :class="{'active': currentPath.toString().indexOf('patient') >= 0}">
                <span><i class="fa fa-user" style="font-size: 14px; margin-right: 3px; margin-bottom: 8px;"></i></span> Patient
            </router-link>
        
            <router-link class="menu-item" to="/2D" :class="{'active': currentPath.toString().indexOf('2d') >= 0}">
                <span><i class="fas fa-box" style="font-size: 15px; margin-right: 3px"></i></span> 2D
            </router-link>
        
            <router-link class="menu-item" to="/3D" :class="{'active': currentPath.toString().indexOf('3d') >= 0}">
                <span><i class="fab fa-unity"></i></span> 3D
            </router-link>
        </div>
        <div class="user-info">
            <div class="user-avatar">
                <img src="@/assets/placeholder.jpeg" alt="">
            </div>
            <div class="username">Dr. Brandon</div>
        </div>
    </section>
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
.user-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}
.user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--appWhite);
    margin-right: 5px;
}
.user-info:hover {
    cursor: pointer;
}
.user-info {
    display: inherit;
    align-items: center;
}
/* .menu-item:last-child {
    border-top-right-radius: 6px;
    border-right:1px solid #ff9500;
    border-left:1px solid #ff9500;
}
.menu-item:nth-child(2) {
    border-left:1px solid #ff9500;
} */
/* .menu-item:first-child {
    border-top-left-radius: 6px;
    border-left:1px solid #ff9500;
} */
.menu-item.router-link-exact-active {
    /* background: #ff9500; */
    color: var(--dsBrandColor);
    border-bottom: 3px solid var(--dsBrandColor);
    /* background: rgb(249,142,0);
    background: linear-gradient(0deg, rgba(249,142,0,1) 0%, rgba(255,147,2,1) 35%, rgba(255,182,102,1) 100%); */
}
.menu-item.active {
    /* background: #ff9500; */
    color: var(--dsBrandColor);
    border-bottom: 3px solid var(--dsBrandColor);
    /* background: rgb(249,142,0);
    background: linear-gradient(0deg, rgba(249,142,0,1) 0%, rgba(255,147,2,1) 35%, rgba(255,182,102,1) 100%); */
}
/* .menu-item {
    width: 100px;
    background: var(--appWhite);
    color: var(--contrastBg);
    text-align: center;
    padding: 10px 20px;
} */
.menu-item {
    /* border-top:1px solid #ff9500;
    border-bottom:1px solid #ff9500; */
    min-width: 100px;
    text-align: center;
    padding: 5px 20px;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid transparent;
}
.main-menu {
    display: inherit;
    /* border:.5px solid var(--appWhite); */
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
}
.company-info {
    font-size: 24px;
}
.company-info span {
    font-size: 15px;
    margin-bottom: 0;
}
.top-bar {
    width: calc(100% - 80px);
    margin-left: 80px;
    height: var(--topBarHeight);
    /* border: 1px solid #fff; */
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
</style>