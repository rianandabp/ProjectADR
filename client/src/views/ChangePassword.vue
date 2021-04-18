<template>
    <b-container fluid class="container">
      <form class="form">
          <h3>Change Password</h3>

          <b-row class="form-group">
              <b-col>New Password</b-col>
              <b-col><b-form-input  type="password"> </b-form-input></b-col>
          </b-row>

          <b-row class="form-group">
              <b-col>Re-type New Password</b-col>
              <b-col>
                  <b-form-input  type="password" aria-describedby="input-live-password"> </b-form-input>
                  <b-form-invalid-feedback id="input-live-password">
                      Password does not match!
                  </b-form-invalid-feedback>
              </b-col>
          </b-row>

          <b-button id="bb" variant="primary" size="md" >Submit</b-button>
          <b-modal id="ch">
          </b-modal>

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
      width: 45%;
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
</style>