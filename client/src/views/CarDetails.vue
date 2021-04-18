<template>
    <b-container fluid class="container">
      <b-row>
        <b-col cols="3" class="sidebar"> 
          <b-row> <h3 class="title"> Toyota Yaris TRD </h3></b-row>
          <b-row> <p> Color: Putih</p></b-row> 
          <b-row> <p> Plate Number: B 1787 WMR</p></b-row> 
          <b-row> <p> Year: 2012</p></b-row>
          <b-row> <p> Owner: <b-link> Ryan</b-link></p></b-row>  
          <b-row> <p id="desc"> description..</p></b-row>   
          <b-row> <p class="price" id="tp"> Total Project: 1 </p></b-row>
          <b-row> <p class="price" id="re"> Total Spent: Rp. 35.000.000 </p></b-row>
          <b-row>  <b-button class="button" size="sm" variant="primary"> Edit Description</b-button></b-row>
          
        </b-col>
        <b-col> 
          <b-row> <h4> Service Details </h4></b-row>
          <b-row> 
            <table>
                <tr>
                    <th class="desc"> Description </th>
                    <th class="date"> Date </th>
                    <th class="prices"> Price </th>
                    <th class="add"> Add Item </th>
                    <th class="used"> Item Used </th>
                </tr>
                <tr>
                    <td class="desc"> Turun Mesin </td>
                    <td class="date"> 21/04/2020 </td>
                    <td class="prices"> Rp.10.000.000</td>
                    <td class="add"> <b-icon icon="arrow-return-right"></b-icon> </td>
                    <td class="used"> <b-icon icon="arrows-fullscreen"></b-icon> </td>
                </tr>
                
            </table>
          </b-row>
        </b-col>
      </b-row>
    
    </b-container>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "App",
  components: {}
})

export default class CarDetails extends Vue {
    
    
}
</script>

<style scoped>
    .button{
      width: 170px;
      margin-top: 25px;
    }

    table{
      margin: 0 auto;
      margin-top: 20px;
    }

    .desc{
      width: 400px;
    }

    .date{
      width: 150px;
    }

    .prices{
      width: 200px;
    }

    .add{
      width: 100px;
    }

    .used{
      width: 100px;
    }

    #plate{
      font-size: 14px;
    }

    h4{
      margin: 0 auto;
      margin-top: 20px;
    }

    #tp{
      margin-top: 30px;
    }

    #desc{
        font-size: 14px;
    }

    .price{
      font-size: 14px;
      font-weight: bold;
    }

    #re{
      color: green;
    }

    #fp{
      color: red;
    }

    p{
      text-align: left;
    }
    .title{
      margin-top: 20px;
      text-align: left;
    }

</style>