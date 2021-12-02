<template>
    <section class="top-bar">
        <div class="company-info">
           <router-link to="/">
            DentalSoft <span><small>Digital imaging solution</small></span>
           </router-link>
        </div>
        <!-- <div class="main-menu">
            <router-link class="menu-item" to="/" :class="{'active': currentPath.toString().indexOf('patient') >= 0}">
                <span><i class="fa fa-user" style="font-size: 14px; margin-right: 3px; margin-bottom: 8px;"></i></span> Patient
            </router-link>
        
            <router-link class="menu-item" to="/2D" :class="{'active': currentPath.toString().indexOf('2d') >= 0}">
                <span><i class="fas fa-box" style="font-size: 15px; margin-right: 3px"></i></span> 2D
            </router-link>
        
            <router-link class="menu-item" to="/3D" :class="{'active': currentPath.toString().indexOf('3d') >= 0}">
                <span><i class="fab fa-unity"></i></span> 3D
            </router-link>
        </div> -->
        <div class="user-info">
            <div class="notification-area">
                <div class="notification">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2b64336e=""><path d="M21.75 14.8385V12.0463C21.7471 9.88552 20.9385 7.80353 19.4821 6.20735C18.0258 4.61116 16.0264 3.61555 13.875 3.41516V1.625C13.875 1.39294 13.7828 1.17038 13.6187 1.00628C13.4546 0.842187 13.2321 0.75 13 0.75C12.7679 0.75 12.5454 0.842187 12.3813 1.00628C12.2172 1.17038 12.125 1.39294 12.125 1.625V3.41534C9.97361 3.61572 7.97429 4.61131 6.51794 6.20746C5.06159 7.80361 4.25291 9.88555 4.25 12.0463V14.8383C3.26257 15.0412 2.37529 15.5784 1.73774 16.3593C1.10019 17.1401 0.751339 18.1169 0.75 19.125C0.750764 19.821 1.02757 20.4882 1.51969 20.9803C2.01181 21.4724 2.67904 21.7492 3.375 21.75H8.71346C8.91521 22.738 9.45205 23.6259 10.2331 24.2636C11.0142 24.9013 11.9916 25.2497 13 25.2497C14.0084 25.2497 14.9858 24.9013 15.7669 24.2636C16.548 23.6259 17.0848 22.738 17.2865 21.75H22.625C23.321 21.7492 23.9882 21.4724 24.4803 20.9803C24.9724 20.4882 25.2492 19.821 25.25 19.125C25.2486 18.117 24.8998 17.1402 24.2622 16.3594C23.6247 15.5786 22.7374 15.0414 21.75 14.8385ZM6 12.0463C6.00232 10.2113 6.73226 8.45223 8.02974 7.15474C9.32723 5.85726 11.0863 5.12732 12.9212 5.125H13.0788C14.9137 5.12732 16.6728 5.85726 17.9703 7.15474C19.2677 8.45223 19.9977 10.2113 20 12.0463V14.75H6V12.0463ZM13 23.5C12.4589 23.4983 11.9316 23.3292 11.4905 23.0159C11.0493 22.7026 10.716 22.2604 10.5363 21.75H15.4637C15.284 22.2604 14.9507 22.7026 14.5095 23.0159C14.0684 23.3292 13.5411 23.4983 13 23.5ZM22.625 20H3.375C3.14298 19.9999 2.9205 19.9076 2.75644 19.7436C2.59237 19.5795 2.50014 19.357 2.5 19.125C2.50076 18.429 2.77757 17.7618 3.26969 17.2697C3.76181 16.7776 4.42904 16.5008 5.125 16.5H20.875C21.571 16.5008 22.2382 16.7776 22.7303 17.2697C23.2224 17.7618 23.4992 18.429 23.5 19.125C23.4999 19.357 23.4076 19.5795 23.2436 19.7436C23.0795 19.9076 22.857 19.9999 22.625 20Z" fill="#3B4CB8" data-v-2b64336e=""></path>
                    </svg>
                    <div class="indicator"></div>
                </div>
                <div class="notification">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                    <div class="indicator"></div>
                </div>
                <div class="notification">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2b64336e=""><path d="M22.4604 3.84888H5.31685C4.64745
                        3.84961 4.00568 4.11586 3.53234
                        4.58919C3.059
                        5.06253 2.79276 5.7043 2.79202
                        6.3737V18.1562C2.79276 18.8256
                        3.059 19.4674 3.53234
                        19.9407C4.00568 20.4141
                        4.64745 20.6803 5.31685
                        20.6811C5.54002 20.6812
                        5.75401 20.7699 5.91181
                        20.9277C6.06961 21.0855
                        6.15832 21.2995 6.15846 21.5227V23.3168C6.15846 23.6215 6.24115 23.9204 6.39771 24.1818C6.55427 24.4431 6.77882 24.6571 7.04744 24.8009C7.31605 24.9446 7.61864 25.0128 7.92295 24.9981C8.22726 24.9834 8.52186 24.8863 8.77536 24.7173L14.6173 20.8224C14.7554 20.7299 14.9179 20.6807 15.0841 20.6811H19.187C19.7383 20.68 20.2743 20.4994 20.7137 20.1664C21.1531 19.8335 21.472 19.3664 21.6222 18.8359L24.8965 7.05011C24.9999 6.67481 25.0152 6.28074 24.9413 5.89856C24.8675 5.51637 24.7064 5.15639 24.4707 4.84663C24.235 4.53687 23.9309 4.28568 23.5823 4.11263C23.2336 3.93957 22.8497 3.84931 22.4604 3.84888ZM23.2733 6.60304L20.0006 18.3847C19.95 18.5614 19.8432 18.7168 19.6964 18.8275C19.5496 18.9381 19.3708 18.9979 19.187 18.9978H15.0841C14.5856 18.9972 14.0981 19.1448 13.6836 19.4219L7.84168 23.3168V21.5227C7.84094 20.8533 7.5747 20.2115 7.10136 19.7382C6.62802 19.2648 5.98625 18.9986 5.31685 18.9978C5.09368 18.9977 4.87969 18.909 4.72189 18.7512C4.56409 18.5934 4.47537 18.3794 4.47524 18.1562V6.3737C4.47537 6.15054 4.56409 5.93655 4.72189 5.77874C4.87969 5.62094 5.09368 5.53223 5.31685 5.5321H22.4604C22.5905 5.53243 22.7188 5.56277 22.8352 5.62076C22.9517 5.67875 23.0532 5.76283 23.1318 5.86646C23.2105 5.97008 23.2641 6.09045 23.2887 6.21821C23.3132 6.34597 23.3079 6.47766 23.2733 6.60304Z" fill="#3B4CB8" data-v-2b64336e=""></path><path d="M7.84167 11.4233H12.0497C12.2729 11.4233 12.487 11.3347 12.6448 11.1768C12.8027 11.019 12.8913 10.8049 12.8913 10.5817C12.8913 10.3585 12.8027 10.1444 12.6448 9.98661C12.487 9.82878 12.2729 9.74011 12.0497 9.74011H7.84167C7.61846 9.74011 7.4044 9.82878 7.24656 9.98661C7.08873 10.1444 7.00006 10.3585 7.00006 10.5817C7.00006 10.8049 7.08873 11.019 7.24656 11.1768C7.4044 11.3347 7.61846 11.4233 7.84167 11.4233Z" fill="#3B4CB8" data-v-2b64336e=""></path><path d="M15.4162 13.1066H7.84167C7.61846 13.1066 7.4044 13.1952 7.24656 13.3531C7.08873 13.5109 7.00006 13.725 7.00006 13.9482C7.00006 14.1714 7.08873 14.3855 7.24656 14.5433C7.4044 14.7011 7.61846 14.7898 7.84167 14.7898H15.4162C15.6394 14.7898 15.8534 14.7011 16.0113 14.5433C16.1691 14.3855 16.2578 14.1714 16.2578 13.9482C16.2578 13.725 16.1691 13.5109 16.0113 13.3531C15.8534 13.1952 15.6394 13.1066 15.4162 13.1066Z" fill="#3B4CB8" data-v-2b64336e=""></path>
                    </svg>
                    <div class="indicator"></div>
                </div>
                <div class="notification">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2b64336e=""><path d="M22.625 5.125H21.75V1.625C21.75 1.47262 21.7102 1.32289 21.6345 1.19062C21.5589 1.05835 21.45 0.948128 21.3186 0.870868C21.1873 0.793609 21.0381 0.751989 20.8857 0.750126C20.7333 0.748264 20.5831 0.786224 20.4499 0.86025L13 4.99909L5.55007 0.86025C5.41688 0.786224 5.26667 0.748264 5.11431 0.750126C4.96194 0.751989 4.8127 0.793609 4.68136 0.870868C4.55002 0.948128 4.44113 1.05835 4.36547 1.19062C4.28981 1.32289 4.25001 1.47262 4.25 1.625V5.125H3.375C2.67904 5.12576 2.01181 5.40257 1.51969 5.89469C1.02757 6.3868 0.750764 7.05404 0.75 7.75V10.375C0.750764 11.071 1.02757 11.7382 1.51969 12.2303C2.01181 12.7224 2.67904 12.9992 3.375 13H4.25V22.625C4.25076 23.321 4.52757 23.9882 5.01969 24.4803C5.51181 24.9724 6.17904 25.2492 6.875 25.25H19.125C19.821 25.2492 20.4882 24.9724 20.9803 24.4803C21.4724 23.9882 21.7492 23.321 21.75 22.625V13H22.625C23.321 12.9992 23.9882 12.7224 24.4803 12.2303C24.9724 11.7382 25.2492 11.071 25.25 10.375V7.75C25.2492 7.05404 24.9724 6.3868 24.4803 5.89469C23.9882 5.40257 23.321 5.12576 22.625 5.125ZM20 5.125H16.3769L20 3.1125V5.125ZM6 3.1125L9.62311 5.125H6V3.1125ZM6 22.625V13H12.125V23.5H6.875C6.64303 23.4997 6.42064 23.4074 6.25661 23.2434C6.09258 23.0793 6.0003 22.857 6 22.625ZM20 22.625C19.9997 22.857 19.9074 23.0793 19.7434 23.2434C19.5794 23.4074 19.357 23.4997 19.125 23.5H13.875V13H20V22.625ZM23.5 10.375C23.4997 10.607 23.4074 10.8294 23.2434 10.9934C23.0794 11.1574 22.857 11.2497 22.625 11.25H3.375C3.14303 11.2497 2.92064 11.1574 2.75661 10.9934C2.59258 10.8294 2.5003 10.607 2.5 10.375V7.75C2.5003 7.51803 2.59258 7.29564 2.75661 7.13161C2.92064 6.96758 3.14303 6.8753 3.375 6.875H22.625C22.857 6.8753 23.0794 6.96758 23.2434 7.13161C23.4074 7.29564 23.4997 7.51803 23.5 7.75V10.375Z" fill="#3B4CB8" data-v-2b64336e=""></path></svg>
                    <div class="indicator"></div>
                </div>
            </div>

            <div class="username">
                <span>Dr. Brandon</span>
                <span><small>brandonelijah099@gmail.com</small></span>
            </div>
            <div class="user-avatar">
                <img src="@/assets/placeholder.jpg" alt="">
            </div>
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
.notification-area {
    margin-right: 4em;
    display: flex;
}
.notification {
    position: relative;
    background: #eeeeee;
    /* padding: 10px 15px; */
    padding: 0.625em 0.9375em;
    border-radius: 0.625em;
    /* margin: 0em 5px; */
    margin: 0em 0.3125em;
}
.notification svg {
    /* width: 22px; */
    width: 1.375em;
    fill: #3B4CB8D8;
}
.indicator {
    position: absolute;
    width: .8em;
    height: .8em;
    border-radius: 50%;
    /* background: #ff507a; */
    background: var(--dsBrandColor);
    /* Radiator color #f2d0d9 */
    top: 0.3125em;
    right: 0.3125em;
}
.user-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
}
.user-avatar {
    /* width: 45px;
    height: 45px; */
    /* width: 60px;
    height: 60px; */
    width: 3.75em;
    height: 3.75em;
    border-radius: 50%;
    background: var(--appWhite);
    margin-left: 10px;
}
.username {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.username span:first-child {
    /* font-size: 15px; */
    font-size: 0.9375em;
}
.username small {
    font-weight: 400;
    /* font-size: 12px; */
    font-size: 0.75em;
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
    /* font-size: 24px; */
    font-size: 1.5em;
}
.company-info span {
    font-size: 15px;
    margin-bottom: 0;
}
.top-bar {
    width: calc(100% - 60px);
    margin-left: 70px;
    padding-right: 10px;
    padding-left: 10px;
    height: var(--topBarHeight);
    /* border: 1px solid #fff; */
    display: flex;
    justify-content: space-between;
    /* align-items: flex-end; */
    align-items: center;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    /* background: #eeeeee; */
    background: #f6f6f6;
    /* background: #AD1D1D; */
}
</style>