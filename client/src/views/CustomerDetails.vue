<template>
    <b-container fluid class="container">
        <b-row class="header">
            <b-col> <h5> Car owned list: </h5></b-col>
            <b-col id="right">
                <b-dropdown right text="Sort By" size="sm">
                    <b-dropdown-item>Date</b-dropdown-item>
                    <b-dropdown-item>Price</b-dropdown-item>
                    <b-dropdown-item>Alphabet</b-dropdown-item>
                </b-dropdown>
            </b-col>
        </b-row>
        <b-row class="content"> 

            <b-card
                title="Toyota Yaris TRD"
                img-height="90rem"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <p> Plate Number: B 1787 WMR </p>
                <b-card-text class="text">Year: 2012 </b-card-text>
                <b-card-text class="text">Color: Putih </b-card-text>
                <b-card-text id="value">Total Spent: Rp.40.000.000 </b-card-text>
                
                <div class="button">
                    <div id="visit"> <b-button variant="success" @click="$router.push('/car/details')"> Visit </b-button></div>
                </div>
            </b-card>

        </b-row>
    </b-container>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "App",
  components: {}
})

export default class Project extends Vue {
    
    
}
</script>

<style scoped>

    .content{
        display: flex;
        flex-direction:row;
        max-height: 950px;
        overflow-y: scroll;
        margin-top: 20px;
        padding-top: 10px;
    }

    .header{
        display: flex;
        width: 100%;
        padding-top: 15px;
    }

    .text{
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: center;
        font-size: 16px;
    }

    .button{
        margin: 0 auto;
    }

    p{
        font-size: 14px;
    }

    h5{
        text-align: left;
        padding-top: 6px;
    }

    #value{
        text-align: center;
        font-weight: bold;
        font-size: 16px;
    }
    #desc{
        font-size: 14px;
    }
    #left{
        text-align: left;
    }

    #right{
        text-align: right;
    }

    #be{
        margin-top: 8px;
        margin-left: 3px;
        margin-right: 3px;
    }

    .b-link{
        overflow: hidden;
    }

    #delete{
        padding:8px ;
    }
    #visit{
        padding:8px ;
    }

    .mb-2, .my-2 {
        margin-bottom: 0rem!important;
    }

    .card{
        margin-top:20px ;
        margin-left:20px ;
        width: 350px;
    }
</style>