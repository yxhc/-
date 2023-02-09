<template>
    <div class="container">
        <div class="login">
            <div class="tit">管理系统</div>
            <el-form action="" :model="form" ref="form" :rules="rules">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')">登录</el-button>
                </el-form-item>
            </el-form>
            <span>没有账号？<a href="#">去注册</a></span>
        </div>
        <div class="square">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="circle">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<script>
import { nameRule, passRule } from '../utils/vaildate.js'
import { setToken } from '../utils/setToken.js'
import { login } from '../api/api.js'
export default {
    data() {
        //以下代码进行了封装
        //         const validateName = (rule, value, callback) => {
        //             //请输入4-10位昵称
        //             let reg = /(^[a-zA-Z0-9]{4,10}$)/;
        //             if (value === "") {
        //                 callback(new Error('请输入用户名'));
        //             } else if (!reg.test(value)) {
        //                 callback(new Error("请输入4-10位用户名"))
        //             } else {
        //                 callback();
        //             }
        //         }
        // const validatePass = (rule, value, callback) => {
        //     let pass = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
        //     if (value === "") {
        //         callback(new Error('请输入密码'));
        //     } else if (!pass.test(value)) {
        //         callback(new Error("请输入6-12位密码"))
        //     } else {
        //         callback();
        //     }
        // }
        return {
            form: {
                username: "",
                password: ""
            },
            rules: {
                username: [{ validator: nameRule, trigger: 'blur' }],
                password: [{ validator: passRule, trigger: 'blur' }]
            }
        };
    },
    methods: {
        login(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    console.log(this.form);
                    //进行登录方法的封装api进行调用
                    // this.service.post('/login', this.form)
                    //     .then((res) => {
                    //         if (res.data.status === 200)
                    //             setToken('username', res.data.username)
                    //         setToken('token', res.data.token)
                    //         this.$message({ message: res.data.message, type: 'success' })
                    //         console.log(res)
                    //     })
                    login(this.form).then(res => {
                        if (res.data.status === 200)
                            setToken('username', res.data.username)
                        setToken('token', res.data.token)
                        this.$message({ message: res.data.message, type: 'success' })
                        this.$router.push('/home')
                    })
                } else {
                    console.error(this.form)
                }
            })
        }
    },
};
</script>
<style lang="scss">
* {
    /* 初始化 */
    margin: 0;
    padding: 0;
}

.container {
    /* 100%窗口高度 */
    height: 100vh;
    /* 弹性布局 居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 渐变背景 */
    background: linear-gradient(200deg, #e3c5eb, #a9c1ed);
    /* 溢出隐藏 */
    overflow: hidden;
}


.login {
    /* 相对定位 */
    position: absolute;
    z-index: 1;
    background-color: #fff;
    border-radius: 15px;
    /* 弹性布局 垂直排列 */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 500px;
    /* 阴影 */
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.login .tit {
    font-size: 26px;
    margin: 65px auto 70px auto;
}

.login input {
    width: 280px;
    height: 30px;
    text-indent: 8px;
    border: none;
    border-bottom: 1px solid #ddd;
    outline: none;
    margin: 12px auto;
}

.login button {
    width: 280px;
    height: 40px;
    margin: 35px auto 40px auto;
    border: none;
    background: linear-gradient(-200deg, #fac0e7, #aac2ee);
    color: #fff;
    font-weight: bold;
    letter-spacing: 8px;
    border-radius: 10px;
    cursor: pointer;
    /* 动画过渡 */
    transition: 0.5s;
}

.login button:hover {
    background: linear-gradient(-200deg, #aac2ee, #fac0e7);
    background-position-x: -280px;
}

.login span {
    font-size: 14px;
}

.login a {
    color: plum;
    text-decoration: none;
}

ul li {
    position: absolute;
    border: 1px solid #fff;
    background-color: #fff;
    width: 30px;
    height: 30px;
    list-style: none;
    opacity: 0;
}

.square li {
    top: 40vh;
    left: 60vw;
    /* 执行动画：动画名 时长 线性的 无限次播放 */
    animation: square 10s linear infinite;
}

.square li:nth-child(2) {
    top: 80vh;
    left: 10vw;
    /* 设置动画延迟时间 */
    animation-delay: 2s;
}

.square li:nth-child(3) {
    top: 80vh;
    left: 85vw;
    /* 设置动画延迟时间 */
    animation-delay: 4s;
}

.square li:nth-child(4) {
    top: 10vh;
    left: 70vw;
    /* 设置动画延迟时间 */
    animation-delay: 6s;
}

.square li:nth-child(5) {
    top: 10vh;
    left: 10vw;
    /* 设置动画延迟时间 */
    animation-delay: 8s;
}

.circle li {
    bottom: 0;
    left: 15vw;
    /* 执行动画 */
    animation: circle 10s linear infinite;
}

.circle li:nth-child(2) {
    left: 35vw;
    /* 设置动画延迟时间 */
    animation-delay: 2s;
}

.circle li:nth-child(3) {
    left: 55vw;
    /* 设置动画延迟时间 */
    animation-delay: 6s;
}

.circle li:nth-child(4) {
    left: 75vw;
    /* 设置动画延迟时间 */
    animation-delay: 4s;
}

.circle li:nth-child(5) {
    left: 90vw;
    /* 设置动画延迟时间 */
    animation-delay: 8s;
}

/* 定义动画 */
@keyframes square {
    0% {
        transform: scale(0) rotateY(0deg);
        opacity: 1;
    }

    100% {
        transform: scale(5) rotateY(1000deg);
        opacity: 0;
    }
}

@keyframes circle {
    0% {
        transform: scale(0) rotateY(0deg);
        opacity: 1;
        bottom: 0;
        border-radius: 0;
    }

    100% {
        transform: scale(5) rotateY(1000deg);
        opacity: 0;
        bottom: 90vh;
        border-radius: 50%;
    }
}
</style>