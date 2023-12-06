<template>
    <!-- <p class="heading text-center text-xl mt-96">WeighNPay</p> -->
    <div class="absolute lg:left-1/3 algin-center justify-center mt-32 ">

        <form class="form_main " @submit.prevent="handleSubmit">
            <p class="heading">Đăng ký</p>
            <div class="inputContainer">
                <svg viewBox="0 0 16 16" fill="#2e2e2e" height="16" width="16" xmlns="http://www.w3.org/2000/svg"
                    class="inputIcon">

                </svg>
                <input placeholder="Email" id="username" class="inputField" type="text" v-model="formData.email"
                    v-bind:class="{'border-red-500': errors.email}" @input="validateEmail">
                <div class="text-red-500 absolute mt-12 pt-3 left-8 text-xs ">{{ errors.email }}</div>
            </div>


            <!-- Họ và tên -->
            <div class="inputContainer">
                <svg viewBox="0 0 16 16" fill="#2e2e2e" height="16" width="16" xmlns="http://www.w3.org/2000/svg"
                    class="inputIcon">

                </svg>
                <input placeholder="Họ và tên" id="username" class="inputField" type="text" v-model="formData.name"
                    v-bind:class="{'border-red-500': errors.email}" @input="validateEmail">
                <div class="text-red-500 absolute mt-12 pt-3 left-8 text-xs ">{{ errors.email }}</div>
            </div>
            <!-- password -->
            <div class="inputContainer">
                <svg viewBox="0 0 16 16" fill="#2e2e2e" height="16" width="16" xmlns="http://www.w3.org/2000/svg"
                    class="inputIcon">

                </svg>
                <input placeholder="Mật khẩu" id="password" class="inputField" type="password" v-model="formData.password"
                    @input="validatePassword" :class="{'border-red-500': errors.password}">
                <div class="text-red-500 absolute mt-12 pt-3 left-8 text-xs b">{{ errors.password }}</div>
            </div>
            <div class="inputContainer">
                <svg viewBox="0 0 16 16" fill="#2e2e2e" height="16" width="16" xmlns="http://www.w3.org/2000/svg"
                    class="inputIcon">

                </svg>
                <input placeholder="Nhập lại mật khẩu" id="password" class="inputField" type="password"
                    v-model="formData.password" @input="validatePassword" :class="{'border-red-500': errors.password}">
                <div class="text-red-500 absolute mt-12 pt-3 left-8 text-xs b">{{ errors.password }}</div>
            </div>
            <button id="button" type="submit" class="bg-blue-500 mt-4 active:scale-90 mt-4 px-4 py-2">Đăng ký</button>
            <div class="signupContainer">


            </div>
        </form>
    </div>
</template>
    
<script>
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            formData: {
                email: '',
                password: ''
            },
            errors: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        handleSubmit() {
            this.validateEmail();
            this.validatePassword();

            if (!this.errors.email && !this.errors.password) {
                this.$router.push('/home')
            }
        },
        validateEmail() {
            this.errors.email = '';
            if (!this.formData.email) {
                this.errors.email = 'Vui lòng nhập email!';
            } else if (!this.isValidEmail(this.formData.email)) {
                this.errors.email = 'Email không hợp lệ!';
            }
        },
        validatePassword() {
            this.errors.password = '';
            if (!this.formData.password) {
                this.errors.password = 'Vui lòng nhập mật khẩu!';
            } else if (this.formData.password.length < 6) {
                this.errors.password = 'Mật khẩu phải có ít nhất 6 ký tự!';
            }
        },
        isValidEmail(email) {

            return /^[^@]+@\w+(\.\w+)+\w$/.test(email);
        }
    }
}
</script>
    
<style>.form_main {
      width: 375px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: rgb(255, 255, 255);
      padding: 30px 30px 30px 30px;
      border-radius: 30px;
      box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
    }
    
    .heading {
      font-size: 2em;
      color: #2e2e2e;
      font-weight: 700;
      margin: 15px 0 30px 0;
    }
    
    .inputContainer {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 0;
    }
    
    .inputIcon {
      position: absolute;
      left: 10px;
    }
    
    .inputField {
      width: 100%;
      height: 40px;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid rgb(173, 173, 173);
      border-radius: 10px;
      margin: 10px 0;
      color: black;
      font-size: .8em;
      font-weight: 500;
      box-sizing: border-box;
      padding-left: 30px;
    }
    
    .inputField:focus {
      outline: none;
      border-bottom: 2px solid #696cff;
    }
    
    .inputField::placeholder {
      color: rgb(80, 80, 80);
      font-size: 1em;
      font-weight: 500;
    }
    
    #button {
      position: relative;
      width: 100%;
      border: 2px solid #696cff;
      
      height: 40px;
      color: white;
      font-size: .8em;
      font-weight: 500;
      letter-spacing: 1px;
      border-radius: 10px;
      margin: 10px;
      cursor: pointer;
      overflow: hidden;
    }
    
    #button::after {
      content: "";
      position: absolute;
      background-color: rgba(255, 255, 255, 0.253);
      height: 100%;
      width: 150px;
      top: 0;
      left: -200px;
      border-bottom-right-radius: 100px;
      border-top-left-radius: 100px;
      filter: blur(10px);
      transition-duration: .5s;
    }
    
    #button:hover::after {
      transform: translateX(600px);
      transition-duration: .5s;
    }
    
    .signupContainer {
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
    
    .signupContainer p {
      font-size: .9em;
      font-weight: 500;
      color: black;
    }
    
    .signupContainer a {
      font-size: .7em;
      font-weight: 500;
      background-color: #2e2e2e;
      color: white;
      text-decoration: none;
      padding: 8px 15px;
      border-radius: 20px;
    }
    
    
  
  </style>