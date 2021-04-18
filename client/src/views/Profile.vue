<template>
    <b-container fluid class="container">
      <form class="form">
          <h3>Profile</h3>

          <b-row >
                <b-col class="lf">Company Name: </b-col>
                <b-col class="rh">ADR MOTORSPORT </b-col>
            </b-row>

            <b-row >
                <b-col class="lf">Address:  </b-col>
                <b-col class="rh">Jalan Pondok Jengkol No. 101 Gading Serpong </b-col>
            </b-row>

            <b-row  >
                <b-col class="lf">Owner Name:  </b-col>
                <b-col class="rh">Andre </b-col>
            </b-row>

            <b-row  >
                <b-col class="lf">Account Number:  </b-col>
                <b-col class="rh">288 1717 109 </b-col>
            </b-row>

            <b-row  >
                <b-col class="lf">Bank:  </b-col>
                <b-col class="rh">BCA </b-col>
            </b-row>

            <b-row  >
                <b-col class="lf">Phone Number:  </b-col>
                <b-col class="rh">081806111149 </b-col>
            </b-row>

            <b-col>
                <b-button class="bb" variant="primary" size="md" >Edit</b-button>
                <b-button class="bb" variant="dark" size="md" @click="$router.push('/changepassword')">Change Password</b-button>
                <b-button class="bb" variant="danger" size="md"  @click="$router.push('/')">Logout</b-button>
            </b-col>

      </form>
    </b-container>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "App",
  components: {}
})

export default class Profile extends Vue {
    
    
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
      padding-left: 10px ;
      padding-right: 10px ;
  }

  #bb{
      margin-top: 20px;
  }

  .lf{
    text-align: right;
    font-weight: bold;
    }

    .rh{
    text-align: left;
    padding-bottom:15px;
    }

    .bb{
    margin: 15px;
    }
</style>