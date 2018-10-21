<template>
  <div class="wrapper">
    <div class="container">
      <h1>Welcome to <img src="../assets/New Project (6).png" width="100" class="align-top" alt="">!</h1>
      <Login v-if="showlogin" v-on:toggleloginfalse="toggleshowlogin" ></Login>
      <Register v-if="!showlogin" v-on:togglelogintrue="toggleshowlogin"></Register>
      
    </div>
    
    <ul class="bg-bubbles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>


<script>
//  $("#login-button").click(function(event){
// 		 event.preventDefault();
	 
// 	 $('form').fadeOut(500);
// 	 $('.wrapper').addClass('form-success');
// });
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

export default {
    name: 'Loginpage',
    components : {
      Login,
      Register
    },
    data() {
      return {
        showlogin: true
      }
    },
    methods: {
      toggleshowlogin(value) {
        this.showlogin = value
      }
    }
}
</script>

<style scoped>
 

</style>

