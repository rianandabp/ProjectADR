<template>
    <b-container fluid class="container">
        <b-row class="header">
            <b-col id="left"> <b-button size="sm" variant="primary"  @click="$bvModal.show('dp2')"> Add Project </b-button> </b-col>
            <b-modal id="dp2">
                <b-form-group label="Project Name">
                    <b-form-input
                        required
                        value="Project"
                        size="sm"
                        placeholder="Write the project name.."
                        aria-describedby="input-live-name"
                    ></b-form-input>
                    <b-form-invalid-feedback id="input-live-username">
                        Max input length is 18 characters.
                    </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Description" @submit.stop.prevent>
                <b-form-input
                    required
                    size="sm"
                    placeholder="Write description.."
                ></b-form-input>
                </b-form-group>

                <b-form-group label="Customer" @submit.stop.prevent>
                <b-dropdown text="Choose Customer" size="sm"> 
                    <b-dropdown-item>First Action</b-dropdown-item>
                    <b-dropdown-item>Second Action</b-dropdown-item>
                    <b-dropdown-item>Third Action</b-dropdown-item>
                </b-dropdown>
                </b-form-group>

                <b-form-group label="Car" @submit.stop.prevent>
                <b-dropdown text="Choose Car" size="sm"> 
                    <b-dropdown-item>First Action</b-dropdown-item>
                    <b-dropdown-item>Second Action</b-dropdown-item>
                    <b-dropdown-item>Third Action</b-dropdown-item>
                </b-dropdown>
                </b-form-group>

                <b-form-group label="Start Date" @submit.stop.prevent>
                    <b-form-datepicker required size="sm" class="mb-2"></b-form-datepicker>
                </b-form-group>

                <b-form-group label="End Date" @submit.stop.prevent>
                    <b-form-datepicker required size="sm" class="mb-2"></b-form-datepicker>
                </b-form-group>

                <table>
                    <tr>
                        <th> Reduction </th>
                        <th> Price </th>
                        <th> Delete </th>
                    </tr>
                    <tr>
                        <td> Discount </td>
                        <td> 10.000.000</td>
                        <td> <b-button size="sm" variant="danger"> Delete </b-button></td>
                    </tr>
                    
                </table>
            </b-modal>
            <b-col cols="4"> <h5> Total Value: Rp.100.000.000.000</h5> </b-col>
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
                title="Pasang Turbo Yaris Ryan"
                img-height="90rem"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <b-row no-gutters>
                    <b-col> <p> Start Date: <br> 29-10-2019</p> </b-col>
                    <b-col> <p> End Date: <br> 29-10-2020</p> </b-col>
                </b-row>
                <b-card-text class="text" id="desc">Pasang Turbo, dll </b-card-text>
                <b-card-text class="text">Owner: <b-link>Ryan, Bintaro</b-link> </b-card-text>
                <b-card-text class="text">Car: <b-link>Toyota Yaris TRD, Putih</b-link> </b-card-text>
                <b-card-text class="text">Plate Number: B 1787 WMR </b-card-text>
                <b-card-text class="text">Status: Awaiting Payment </b-card-text>
                <b-card-text id="value">Project Value: Rp.40.000.000 </b-card-text>
                
                <div class="button">
                    <div id="visit"> <b-button variant="success" @click="$router.push('/project/details')"> Visit </b-button></div>
                    <div id="edit">
                        <b-button id="be" variant="primary" @click="$bvModal.show('dp3-' + '1')"> Edit </b-button>
                        <b-modal :id="'dp3-' + '1'" >
                        <b-form-group label="Project Name">
                            <b-form-input
                                required
                                value="Project"
                                size="sm"
                                placeholder="Write the project name.."
                                aria-describedby="input-live-name"
                            ></b-form-input>
                            <b-form-invalid-feedback id="input-live-username">
                                Max input length is 18 characters.
                            </b-form-invalid-feedback>
                        </b-form-group>

                        <b-form-group label="Description" @submit.stop.prevent>
                        <b-form-input
                            required
                            size="sm"
                            placeholder="Write description.."
                        ></b-form-input>
                        </b-form-group>

                        <b-form-group label="Customer" @submit.stop.prevent>
                        <b-dropdown text="Choose Customer" size="sm"> 
                            <b-dropdown-item>First Action</b-dropdown-item>
                            <b-dropdown-item>Second Action</b-dropdown-item>
                            <b-dropdown-item>Third Action</b-dropdown-item>
                        </b-dropdown>
                        </b-form-group>

                        <b-form-group label="Car" @submit.stop.prevent>
                        <b-dropdown text="Choose Car" size="sm"> 
                            <b-dropdown-item>First Action</b-dropdown-item>
                            <b-dropdown-item>Second Action</b-dropdown-item>
                            <b-dropdown-item>Third Action</b-dropdown-item>
                        </b-dropdown>
                        </b-form-group>

                        <b-form-group label="Start Date" @submit.stop.prevent>
                            <b-form-datepicker required size="sm" class="mb-2"></b-form-datepicker>
                        </b-form-group>

                        <b-form-group label="End Date" @submit.stop.prevent>
                            <b-form-datepicker required size="sm" class="mb-2"></b-form-datepicker>
                        </b-form-group>
                    </b-modal>
                    </div>
                    <div id="delete"> <b-button variant="danger" @click="$bvModal.show('confirmationDelete-' + '1')"> Delete </b-button>
                    <b-modal :id="'confirmationDelete-' + '1'">
                        This project will be deleted
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

    h5{
        padding-top: 6px;
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