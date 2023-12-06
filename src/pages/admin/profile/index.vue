<template>
    <div class="bg-white rounded-md h-1/3">
        <update-profile />
    </div>
</template>
  
<script>
import updateProfile from '../../../components/form/updateProfile.vue';

export default {
    components: { updateProfile },

    name: "Profile",
    data() {
        return {
            isOpen: false,
            name: "",

            user: {

                email: "anhaaa@gmail.com",
                name: "Nguyễn Văn A",
                phoneNum: "0373650403",

                address: "123 Nguyen Hue, Da Kao Ward, District 8, Ho Chi Minh City",
                birthday: "05/4/2003",
                gender: true,
                avatar: "https://chuphinhthe.com/upload/product/5x5-8800.jpg"
            },

        };
    },


    methods: {
        onToggle() {
            this.isOpen = !this.isOpen;


        },
        onClose() {
            this.isOpen = false;
        },
        change() {
            this.name = this.user.name;
            console.log('dsfsd')
        }
    },
    computed: {
        isModalVisible() {
            return this.isOpen;
        }
    },
};
</script>
  
<style  scoped>


   body{
    background-color:#f5f5f9 ;
    overflow: hidden;
  }
  .coolinput {
  display: flex;
  flex-direction: column;
  width: 450px;
  position: static;
  max-width: 300px;
  margin-left: 10%;
}

.coolinput label.text {
  font-size: 0.75rem;
  color: #818CF8;
  font-weight: 700;
  position: relative;
  top: 0.5rem;
  margin: 0 0 0 7px;
  padding: 0 3px;
  background: #fff;
  width: fit-content;
}

.coolinput input[type=text].input {
  padding: 11px 10px;
  font-size: 0.75rem;
  border: 2px #818CF8 solid;
  border-radius: 5px;
 
}

.coolinput input[type=text].input:focus {
  outline: none;
}
.right{
    margin-left: 50%;
}
  </style>