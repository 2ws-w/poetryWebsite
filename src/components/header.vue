<script setup lang='ts'>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useTimeoutFn } from '@vueuse/shared'
import { useDocumentVisibility } from '@vueuse/core'
import { useDark, useToggle } from '@vueuse/core'

// 黑夜模式
const isLight = useDark({
    selector: 'html',
    // attribute: 'yuyu-scheme',
    valueDark: 'dark',
    valueLight: 'light',
})

const toggleDark = useToggle(isLight)

// vueuse 切换其他页面后在切回该网页，内容改变
// const visibility = useDocumentVisibility()
// let visibleBar = ref()
// const timeout = useTimeoutFn(() => {
//     visibleBar.value = ' 🖌'
// }, 2000)
// watch(visibility, (current, previous) => {
//     if (current === 'visible' && previous === 'hidden') {
//         visibleBar.value = '😛'
//     }
//     timeout.start()
// })


const router = useRouter()

// 使用 vue-i18n 实现 文字切换
const { t } = useI18n()
const { locale } = useI18n()
// 点击 切换 简体 - 繁体
const changeLanguage = () => {
    if (locale.value === 'chs') {
        locale.value = 'tc'
    } else {
        locale.value = 'chs'
    }
}

const goToHome = () => {
    router.push('/')
}

</script>
<template>
    <div class="header">
        <div class="section">
            <div class="left" @click="goToHome">
                <div class="logo">
                    <img src="../assets/images/logo.png" alt="">
                </div>
                <!-- <div class="title">{{ t('header.title') }}</div> -->
            </div>
            <div class="right">
                <p class="lTxt">{{ t('header.poetry') }}</p>
                <p class="lTxt">{{ t('header.poet') }}</p>
                <router-link class="lTxt" to="/poetryCreate">{{ t('header.create') }}</router-link>
                <router-link class="lTxt" to="/tattle">{{ t('header.tattle') }}</router-link>
                <router-link class="lTxt" to="/about">{{ t('header.about') }}</router-link>
                <div class="lightOrDark" @click="toggleDark()">
                    <a-switch checked-color="#f2f2f2" unchecked-color="#f2f2f2">
                        <template #checked-icon>
                            <icon-moon />
                        </template>
                        <template #unchecked-icon>
                            <icon-bulb />
                        </template>
                    </a-switch>
                </div>
                <p class="lTxt jianfan" @click="changeLanguage">{{ t('header.language') }}</p>
                <router-link class="lTxt" to="/login">{{ t('header.login') }}</router-link>

            </div>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.header {
    height: 100px;
    background-color: #b3c19f;
}

// 修改黑夜-白天模式按钮
.lightOrDark {

    // background-color: red;
    .arco-icon {
        color: #b32124;
    }
}

.section {
    height: 100%;
    @include wrapper();
    @include flex-layout(row, center, space-between);

    .left {
        @include flex-layout(row, center, center);
        @include font-set($font-size-title, rgb(50, 49, 49), 600);
        cursor: pointer;

        .title {
            padding: 10px;
        }

        .logo {
            width: 150px;
            height: 70px;
            // background-color: rgb(167, 201, 196);
            img{
                width: 100%;
                // height: 100%;
            }
        }
    }

    .right {
        @include flex-layout(row, center, center);
        @include font-set($font-size-base, rgb(50, 49, 49), 600);

        .lTxt {
            padding: 10px;
            text-decoration: none;
            color: black;
            cursor: pointer;

            &:hover {
                color: rgb(23, 131, 225);
            }
        }
    }
}
</style>