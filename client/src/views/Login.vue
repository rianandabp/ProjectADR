<template>
    <b-container fluid class="container">
      <form class="form">
          <h3>Login</h3>

          <div class="form-group">
                <label>Username</label>
                <b-form-input  aria-describedby="input-live-username"> </b-form-input>
                <b-form-invalid-feedback id="input-live-username">
                    Check your username
                </b-form-invalid-feedback>
            </div>

            <div class="form-group">
                <label>Password</label>
                <b-form-input  type="password" aria-describedby="input-live-password"> </b-form-input>
                <b-form-invalid-feedback id="input-live-password">
                    Check your password
                </b-form-invalid-feedback>
            </div>

          <b-button id="bb" variant="primary" size="md" >Submit</b-button>
          <b-modal id="ch">
          </b-modal>

          <p> For login issues please contact your administrator</p>

      </form>
    </b-container>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "App",
  components: {}
})

export default class ChangePassword extends Vue {
    
    
}
</script>

<style scoped>

  .form{
      text-align: center;
      padding: 30px;
      margin: 0 auto;
      margin-top: 5%;
      width: 30%;
      background-color:#F5F5F5 ;
      border-radius:20px ;
      box-shadow: 5px 10px 18px #888888;
  }

  h3{
    padding-bottom: 30px ;
  }
  .form-group{
    padding-left: 30px ;
    padding-right: 30px ;
  }

  #bb{
      margin-top: 20px;
  }

  p{
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 14px;
  }
</style>