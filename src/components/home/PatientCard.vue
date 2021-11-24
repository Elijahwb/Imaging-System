<template>
    <div class="patient-card-container" :class="{'active': isActive == 'true'}">
        <div class="patient-avatar">
            <img src="@/assets/placeholder.jpeg" alt="">
        </div>
        <div class="patient-info">
            <div class="name">Wavamuno Brandon Elijah</div>
            <div style="">ID: {{id}}</div>
            <div>
                Age: {{age}}
                <span class="gender" :class="{'male': gender == 'M', 'female': gender == 'F' }">{{gender == 'M' ? 'Male' : 'Female' }}</span>
            </div>
            <!-- <div class="date-added">{{dateCreated}}</div> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isActive: String,
        id: String,
        name: String,
        age: String,
        gender: String,
        dateCreated: String,
    }
}
</script>

<style scoped>
.name {
    font-size: 12px;
    font-weight: 600;
    /* color: rgba(0,0,0, .7); */
}
.date-added {
    height: 100%;
    font-size: 12px;
    display: flex;
    align-items: flex-end;
}
/* .gender.female {
    background: #f6492e;
}
.gender.male {
    background: #1e84bb;
} */
.gender {
    font-size: 11px;
    /* width: 20px;
    height: 14px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center; */
    font-weight: 500;
}
.patient-info {
    width: calc(100% - 47px);
    padding-left: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
}
.patient-avatar img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
}
.patient-avatar  {
    width: 47px;
    height: 47px;
    background: var(--sectionBg);
    border-radius: 50%;
}
.patient-card-container.active {
    /* color: #fff; */
    border: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-left: 3px solid var(--dsBrandColor);
    /* background: rgb(41,146,137);
    background: linear-gradient(0deg, rgba(41,146,137,1) 0%, rgba(57,166,156,1) 35%, rgba(75,202,190,1) 100%); */
    /* background: rgb(249,142,0);
    background: linear-gradient(0deg, rgba(249,142,0,1) 0%, rgba(255,147,2,1) 35%, rgba(255,182,102,1) 100%); */
    /* background: rgba(19, 19, 19, 0.09); */
}
.patient-card-container:hover {
    cursor: pointer;
    color: var(--dsColor);
    background: rgba(19, 19, 19, 0.05);
}
.patient-card-container {
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    /* border-bottom: 2px solid var(--mainBg); */
    border-bottom: 1px solid rgba(0,0,0, .1);
    height: 90px;
}
</style>