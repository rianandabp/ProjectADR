<template>
    <b-container fluid class="container">
        <b-row class="header">
            <b-col id="left"> <b-button size="sm" variant="primary"  @click="$bvModal.show('dp2')"> Add Car </b-button> </b-col>
            <b-modal id="dp2">
                <b-form-group label="Car Model">
                    <b-form-input
                        required
                        value="Project"
                        size="sm"
                        placeholder="Write the car model.."
                        aria-describedby="input-live-name"
                    ></b-form-input>
                    <b-form-invalid-feedback id="input-live-username">
                        Max input length is 18 characters.
                    </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Color" @submit.stop.prevent>
                <b-form-input
                    required
                    size="sm"
                    placeholder="Write color of the car.."
                ></b-form-input>
                </b-form-group>

                <b-form-group label="Plate Number" @submit.stop.prevent>
                <b-form-input
                    required
                    size="sm"
                    placeholder="Write plate number.."
                ></b-form-input>
                </b-form-group>

                <b-form-group label="Description" @submit.stop.prevent>
                <b-form-input
                    required
                    size="sm"
                    placeholder="Add description.."
                ></b-form-input>
                </b-form-group>

                <b-form-group label="Customer" @submit.stop.prevent>
                <b-dropdown text="Choose Customer" size="sm"> 
                    <b-dropdown-item>First Action</b-dropdown-item>
                    <b-dropdown-item>Second Action</b-dropdown-item>
                    <b-dropdown-item>Third Action</b-dropdown-item>
                </b-dropdown>
                </b-form-group>

            </b-modal>
            <b-col cols="4"> <h4></h4> </b-col>
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
                <b-card-text class="text">Owner: <b-link>Ryan</b-link> </b-card-text>
                <b-card-text class="text">Color: Putih </b-card-text>
                <b-card-text class="text">Year: 2012 </b-card-text>
                <b-card-text class="text">Color: Putih </b-card-text>
                <b-card-text id="value">Total Spent: Rp.40.000.000 </b-card-text>
                
                <div class="button">
                    <div id="visit"> <b-button variant="success" @click="$router.push('/car/details')"> Visit </b-button></div>
                    <div id="edit">
                        <b-button id="be" variant="primary" @click="$bvModal.show('dp3-' + '1')"> Edit </b-button>
                        <b-modal :id="'dp3-' + '1'">
                            <b-form-group label="Car Model">
                                <b-form-input
                                    required
                                    value="Project"
                                    size="sm"
                                    placeholder="Write the car model.."
                                    aria-describedby="input-live-name"
                                ></b-form-input>
                                <b-form-invalid-feedback id="input-live-username">
                                    Max input length is 18 characters.
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <b-form-group label="Color" @submit.stop.prevent>
                            <b-form-input
                                required
                                size="sm"
                                placeholder="Write color of the car.."
                            ></b-form-input>
                            </b-form-group>

                            <b-form-group label="Plate Number" @submit.stop.prevent>
                            <b-form-input
                                required
                                size="sm"
                                placeholder="Write plate number.."
                            ></b-form-input>
                            </b-form-group>

                            <b-form-group label="Customer" @submit.stop.prevent>
                            <b-dropdown text="Choose Customer" size="sm"> 
                                <b-dropdown-item>First Action</b-dropdown-item>
                                <b-dropdown-item>Second Action</b-dropdown-item>
                                <b-dropdown-item>Third Action</b-dropdown-item>
                            </b-dropdown>
                            </b-form-group>
                        </b-modal>
                    </div>
                    <div id="delete"> <b-button variant="danger" @click="$bvModal.show('confirmationDelete-' + '1')"> Delete </b-button>
                    <b-modal :id="'confirmationDelete-' + '1'">
                        This car will be deleted and include all project for this car
                    </b-modal>
                    </div>
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
        text-align: left;
        font-size: 16px;
    }

    .button{
        display: flex;
        flex-direction: row;
        margin: 0 auto;
    }

    p{
        font-size: 14px;
    }

    h5{
        padding-top: 6px;
    }

    #value{
        text-align: left;
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