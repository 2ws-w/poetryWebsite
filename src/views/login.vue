<script setup lang='ts'>
import { ref, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router';
import { h } from 'vue';
import { IconFaceSmileFill } from '@arco-design/web-vue/es/icon';
import { objectToString } from '@vue/shared';
import { Message } from '@arco-design/web-vue';

const router = useRouter()
const goToHome = () => {
    router.push('/')
}

const { proxy }: any = getCurrentInstance()

let inputBox = ref()//上方登录表单的遮罩
let boxType = ref('login')//控制 login、sign表单的隐藏  默认为login

const loginForm = reactive({
    userName: '',
    password: '',
})
const signForm = reactive({
    nickName: '',
    userName: '',
    password: '',
    passwordRepeat: '',
})

// 点击底部 的 两个按钮  '去注册''去登陆'
const change = (type: string) => {
    // 用户点击登录
    if (type === 'login') {
        boxType.value = 'login'
        inputBox.value.style.transform = 'translateX(-140px)'
    }

    // 用户点击注册
    else if (type === 'sign') {
        boxType.value = 'sign'
        inputBox.value.style.transform = 'translateX(140px)'
    }
}
const checkPassward = (v: any, e: any) => {
    if (v !== signForm.password) {
        e('两次输入的密码不同')
    }

}
// 登陆表单验证
const loginRules = reactive({
    userName: [
        { minLength: 3, message: '太短了！' },
        { required: true, message: '用户名不能为空！' }
    ],
    password: [
        { required: true, message: '密码不能为空！' }
    ]
})
// 注册表单验证
const signRules = reactive({
    nickName: [
        { required: true, message: '昵称不能为空！' }
    ],
    userName: [
        { minLength: 3, message: '太短了！' },
        { required: true, message: '用户名不能为空！' }
    ],
    password: [
        { minLength: 5, message: '密码不能少于5位字符！' },
        { required: true, message: '密码不能为空！' },

    ],
    passwordRepeat: [
        { required: true, message: '请确认密码！' },
        { validator: checkPassward },
    ],
})

// 验证成功
const submitSuccess = (data: any) => {
    proxy.$message.success('登陆成功')
}
// 验证错误
const submitError = (data: any) => {
    let errorArr = Object.keys(data.errors)
    proxy.$message.error(`${data.errors[errorArr[0]].message}`)
}
// 注册按钮
const signSubmit = (data: any) => {
    console.log(data, '提交')
}



</script>
 
<template>
    <div class="login">
        <div class="bgBox">
            <!-- 两个底部框 -->
            <div class="loginBg ">
                <h1 class="title">欢迎来到<span @click="goToHome">九州词</span></h1>
                <p class="subtitle">最新最in的诗词网站</p>
                <img src="../assets/images/login.png" alt="">
                <p>已有账号</p>

                <a-button type="outline" @click="change('login')">去登录</a-button>
            </div>
            <div class="signBg ">
                <h1 class="title"><span @click="goToHome">九州词</span>欢迎你</h1>
                <p class="subtitle">年轻人不得不品的诗词网站</p>
                <img src="../assets/images/sign.png" alt="">
                <p>暂无账号</p>
                <a-button type="outline" @click="change('sign')">去注册</a-button>
            </div>
        </div>
        <!-- 最上层动态输入框 -->
        <div class="inputBox" ref="inputBox">
            <div v-if="boxType === 'login'">
                <h1>账号登录</h1>
                <a-form :model="loginForm" @submit-failed="submitError" @submit-success="submitSuccess"
                    :rules="loginRules">
                    <a-form-item field="userName" label="用户名" :validate-trigger="['change', 'input']" hide-label
                        hide-asterisk>
                        <a-input v-model="loginForm.userName" placeholder="请输入用户名" size="large" allow-clear />
                    </a-form-item>
                    <a-form-item field="password" label="密码" :validate-trigger="['change', 'input']" hide-label
                        hide-asterisk>
                        <a-input-password v-model="loginForm.password" placeholder="请输入密码" size="large" allow-clear />
                    </a-form-item>
                    <a-button html-type="submit">登录</a-button>
                </a-form>
            </div>

            <div class="signBox" v-if="boxType === 'sign'">
                <h1>账号注册</h1>
                <a-form :model="signForm" @submit-failed="submitError" @submit-success="submitSuccess"
                    :rules="signRules">
                    <a-form-item field="nickName" label="昵称" :validate-trigger="['change', 'input']" hide-label
                        hide-asterisk>
                        <a-input v-model="signForm.nickName" placeholder="请输入用户昵称" size="large" allow-clear />
                    </a-form-item>
                    <a-form-item field="userName" label="用户名" :validate-trigger="['change', 'input']" hide-label
                        hide-asterisk>
                        <a-input v-model="signForm.userName" placeholder="请输入用户名" size="large" allow-clear />
                    </a-form-item>
                    <a-form-item field="password" label="密码" :validate-trigger="['change', 'input']" hide-label
                        hide-asterisk>
                        <a-input v-model="signForm.password" placeholder="请输入密码" size="large" allow-clear />
                    </a-form-item>

                    <a-form-item field="passwordRepeat" label="确认密码" :validate-trigger="['change', 'input']" hide-label
                        hide-asterisk>
                        <a-input v-model="signForm.passwordRepeat" placeholder="请确认密码" size="large" allow-clear />
                    </a-form-item>

                    <a-button html-type="submit">注册</a-button>
                </a-form>
            </div>
        </div>

    </div>

</template>
 
<style scoped lang='scss'>
// 背景渐变动态动画
@keyframes movement {

    0%,
    100% {
        background-size:
            130vmax 130vmax,
            80vmax 80vmax,
            90vmax 90vmax,
            110vmax 110vmax,
            90vmax 90vmax;
        background-position:
            -80vmax -80vmax,
            60vmax -30vmax,
            10vmax 10vmax,
            -30vmax -10vmax,
            50vmax 50vmax;
    }

    25% {
        background-size:
            100vmax 100vmax,
            90vmax 90vmax,
            100vmax 100vmax,
            90vmax 90vmax,
            60vmax 60vmax;
        background-position:
            -60vmax -90vmax,
            50vmax -40vmax,
            0vmax -20vmax,
            -40vmax -20vmax,
            40vmax 60vmax;
    }

    50% {
        background-size:
            80vmax 80vmax,
            110vmax 110vmax,
            80vmax 80vmax,
            60vmax 60vmax,
            80vmax 80vmax;
        background-position:
            -50vmax -70vmax,
            40vmax -30vmax,
            10vmax 0vmax,
            20vmax 10vmax,
            30vmax 70vmax;
    }

    75% {
        background-size:
            90vmax 90vmax,
            90vmax 90vmax,
            100vmax 100vmax,
            90vmax 90vmax,
            70vmax 70vmax;
        background-position:
            -50vmax -40vmax,
            50vmax -30vmax,
            20vmax 0vmax,
            -10vmax 10vmax,
            40vmax 60vmax;
    }
}

.login {
    @include flex-layout(column, center, center);
    height: 100vh;
    background-color: #e493d0;
    background-image:

        radial-gradient(closest-side, rgba(253, 121, 168, 1), rgba(253, 121, 168, 0)),
        radial-gradient(closest-side, rgb(129, 236, 236, 1), rgb(129, 236, 236, 0)),
        radial-gradient(closest-side, rgba(254, 234, 131, 1), rgba(254, 234, 131, 0)),
        radial-gradient(closest-side, rgb(162, 155, 254, 1), rgba(162, 155, 254, 0)),
        radial-gradient(closest-side, rgba(248, 192, 147, 1), rgba(248, 192, 147, 0));
    background-size:
        130vmax 130vmax,
        80vmax 80vmax,
        90vmax 90vmax,
        110vmax 110vmax,
        90vmax 90vmax;
    background-position:
        -80vmax -80vmax,
        60vmax -30vmax,
        10vmax 10vmax,
        -30vmax -10vmax,
        50vmax 50vmax;
    background-repeat: no-repeat;
    animation: 10s movement linear infinite;

    // 模糊滤镜 遮罩  
    &::after {
        content: '';
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }
}

.arco-form-item-message {
    min-height: 5px !important;
    line-height: 5px !important;
}


.bgBox {
    @include flex-layout(row, center, space-between);
    width: 730px;
    height: 400px;
    z-index: 999;

    .loginBg,
    .signBg {
        flex: 1;
        width: 100%;
        height: 100%;
        @include flex-layout();
        background-color: #fff;
        box-shadow: 5px 5px 20px 5px rgba(109, 108, 108, 0.3);
        border-radius: 4px;



        .title {
            letter-spacing: 5px;

            span {
                color: #7ed6df;
                cursor: pointer;
            }
        }

        .subtitle {
            line-height: 0px;
            margin-top: 0;
        }

        img {
            // width: 100%;
            height: 190px;
        }

        .arco-btn {
            &:hover {
                color: #fff;
                background-color: #165dff;
            }
        }
    }

    .loginBg {
        padding-right: 15px;
    }

    .signBg {
        padding-left: 15px;
    }
}

// 顶部动态输入框
.inputBox {
    z-index: 999;
    width: 350px;
    height: 500px;
    background-color: #74b9ff;
    position: absolute;
    transform: translateX(-140px);
    transition: all 0.5s ease;
    @include flex-layout(row, center, center);
    border-radius: 5px;

    .arco-input-wrapper {
        width: 250px;
        margin: 2px 0;
    }

    .arco-btn {
        margin-top: 10px;

        &:hover {
            background-color: #6c5ce7;
            color: #fff;
        }
    }


}
</style>