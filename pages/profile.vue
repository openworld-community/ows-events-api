<script setup lang="ts">
// import { ROUTE } from '@/types/router';
// definePageMeta({ name: ROUTE.PROFILE }); 
// warning  'routes' is assigned a value but never used 
</script>
<template>
    <section class="user-profile">
        <div class="profile-top">
            <h1 class="header-title">Limitation</h1>
            <div class="header-right">
                <a
                    class="username"
                    href="#"
                >
                    Username
                </a>
                <a
                    class="logout-btn"
                    href="#"
                >
                    <svg
                        class="logout-icon"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title />
                        <g id="logout">
                            <line
                                class="cls-1"
                                x1="15.92"
                                x2="28.92"
                                y1="16"
                                y2="16"
                            />
                            <path
                                d="M23.93,25v3h-16V4h16V7h2V3a1,1,0,0,0-1-1h-18a1,1,0,0,0-1,1V29a1,1,0,0,0,1,1h18a1,1,0,0,0,1-1V25Z"
                            />
                            <line
                                class="cls-1"
                                x1="28.92"
                                x2="24.92"
                                y1="16"
                                y2="20"
                            />
                            <line
                                class="cls-1"
                                x1="28.92"
                                x2="24.92"
                                y1="16"
                                y2="12"
                            />
                            <line
                                class="cls-1"
                                x1="24.92"
                                x2="24.92"
                                y1="8.09"
                                y2="6.09"
                            />
                            <line
                                class="cls-1"
                                x1="24.92"
                                x2="24.92"
                                y1="26"
                                y2="24"
                            />
                        </g>
                    </svg>
                </a>
            </div>
        </div>
        <ul class="profile-bottom">
            <li class="token">
                <span class="name">Token:</span>
                <span class="value"> x255ndjds931s4 </span>
            </li>
            <li class="counter">
                <span class="name">Limitation:</span>
                <span class="value"> 100/1000 </span>
            </li>
        </ul>
    </section>
</template>
<style scoped lang="postcss">
.user-profile {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    line-height: 30px;
    color: #4e4e4e;
}

.profile-top {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    border-bottom: 1px solid rgba(60, 60, 60, 0.29);
}

.header-title {
    margin-left: 10px;
    margin-bottom: 5px;
    font-size: 32px;
    font-weight: 900;
    line-height: 40px;
}

.header-right {
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
}

.username {
    margin-right: 5px;
    font-size: 18px;
    color: #4e4e4e;
}

.username:hover {
    color: #777575;
}

.logout-btn {
    display: flex;
    align-items: center;
}

.cls-1 {
    fill: none;
    stroke: #000;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
}

.logout-icon:hover .cls-1 {
    stroke: #777575;
}

.logout-icon:hover {
    fill: #777575;
}

.logout-icon {
    width: 20px;
    height: 20px;
}

.profile-bottom {
    padding: 10px;
}

.name {
    font-weight: 600;
}

@media screen and (min-width: 700px) {
    .user-profile {
        width: 700px;
        margin: 0 auto;
    }
}
</style>
