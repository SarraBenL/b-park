<template>

    <form @submit.prevent="submitForm">
    <ion-slides pager="true" :options="slideOpts" ref="mySlides" @ionSlideDidChange="slideChanged">

        <ion-slide>
        <ion-grid>
            <ion-row>
            <div class="ion-text-start">
                <ion-text color="primary">
                <h2>Slide 1</h2>
                <p align="center"><ion-img :src="logo" :style="{height: '140px', width: '140px'}"/></p>
                <p align="center"><ion-img :src="eth" :style="{height: '100px', width: '100px'}"/></p>
                <h2>Easy Payment</h2>
                <p>Rent your parking space and get paid with Ethereum</p>
            
                </ion-text>        
            </div>
            </ion-row>


        <div :style="{textAlign : 'center', paddingTop: '16px'}">
        <!-- <ion-button @click="prevSlide" :disabled="disablePrevBtn" expand="block" color="dark">prev</ion-button> -->
        <ion-button @click="nextSlide" :disabled="disableNextBtn" expand="block" color="primary">Get Started</ion-button>
        </div>

        </ion-grid>



        </ion-slide>
        <ion-slide>
        <ion-text color="dark">
            <h1>Slide 2</h1>
            <p align="center"><ion-img :src="logo" :style="{height: '140px', width: '140px'}"/></p>
<!--------------------------------------------------------------------->
    
            <nameNrPAComponent/>


            <div :style="{textAlign : 'center', paddingTop: '106px'}">
            <ion-button @click="nextSlide" expand="block" color="primary">Add Space</ion-button>
            <ion-button @click="prevSlide" :disabled="disablePrevBtn" expand="block" color="dark"> Go back </ion-button>
            
            </div>
        </ion-text>
        </ion-slide>

        <ion-slide>
        <ion-text color="dark">
            <h1>Slide 3</h1>
            <p align="center"><ion-img :src="logo" :style="{height: '140px', width: '140px'}"/></p>
            <h2>Enter Slot Code Number</h2>
<!--------------------------------------------------------------------->
            <slotCodePAComponent/>


            <div :style="{textAlign : 'center', paddingTop: '106px'}">
            <ion-button @click="nextSlide" :disabled="disableNextBtn" expand="block" color="primary">Next</ion-button>
            <ion-button @click="prevSlide" :disabled="disablePrevBtn" expand="block" color="dark"> Go back</ion-button> 
            </div>
        </ion-text>
        </ion-slide>
        <ion-slide>
        <ion-text color="dark">
            <h1>Slide 4</h1>
            <p align="center"><ion-img :src="logo" :style="{height: '140px', width: '140px'}"/></p>
            <h2>Amount to get paid per hour</h2>
<!--------------------------------------------------------------------->
            <amountPAComponent/>


            <div :style="{textAlign : 'center', paddingTop: '106px'}">
            <ion-button @click="handeDoPublish" type="submit" :disabled="disableNextBtn" expand="block" color="primary">Next</ion-button>
<!--        <ion-button @click="nextSlide" type="submit" :disabled="disableNextBtn" expand="block" color="primary">Next</ion-button>  -->
            <!--handlePublishing goes on all the inputs and if the value fields are successful then we will
            get the result and show/pass the values on the container, handePublishing will go to next slide after validating everything-->
            <ion-button @click="prevSlide" :disabled="disablePrevBtn" expand="block" color="dark"> Go back</ion-button> 
            </div>
        </ion-text>
        </ion-slide>
        
        <ion-slide>
        <ion-text color="dark">
            <h1>Slide 5</h1>

            <h1>Space Succesfully Added</h1>
            <p>Your parking space has been added. You will receive your payments once people park on your space.</p>
            
            <p align="center"><ion-img :src="imageSuccesful" :style="{height: '250px', width: '250px'}" /></p>
            <div :style="{textAlign : 'center', paddingTop: '106px'}">
            <ion-button href="/tabs/tabSearch" expand="block" color="dark"> Go back to Home Screen </ion-button>
            </div>
        </ion-text>
        </ion-slide>

    </ion-slides>

    </form>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import { IonSlides, IonSlide } from '@ionic/vue';

import NameNrPAComponent, {nameNrPAComponentSchema} from './NameNrPAComponent.vue';
import SlotCodePAComponent, {slotCodePAComponentSchema} from './SlotCodePAComponent.vue';
import AmountPAComponent, {amountPAComponentSchema} from './AmountPAComponent.vue';

import { useForm } from 'vee-validate';

export default defineComponent({
  name: 'PublishParkingSpaceForm',
  components: { IonSlides, IonSlide, NameNrPAComponent, SlotCodePAComponent, AmountPAComponent},
  //methods: {
   // submitForm() {
     // console.log('Submitting form', this.parkingArea);
     // const json = JSON.stringify(this.parkingArea);
      //const fs = require('fs');
      //try {
        //fs.appendFile('./area.json', json)
        //file written successfully
      //} catch (err) {
        //console.error(err)
      //}
   // }
  //},
 // data() { 
   // return {
      //  parkingArea: {
            //namePA: 'Via ',
           // nrOfSlots: 1,
         //   slotCode: 216,
       //     amount: 0.005
     //   }
   // }
 // },
  emits: ["parkingArea", "doPublish"],
  setup(props, {emit}) { //for the slider setup(props, { emit }) {

    const mySlides = ref<any>(null) //default value
    const disablePrevBtn = ref<boolean>(true) //default value
    const disableNextBtn = ref<boolean>(false) //default value
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 0,
      speed: 400,
      allowTouchMove: false
    };

    // images
    const imageSuccesful = computed(() => require('../../resources/green-tick-circle.png'))
    const logo = computed(() => require('../../resources/logo.png'))
    const eth = computed(() => require('../../resources/eth-logo.png'))

    //SLIDES button
    onMounted(()=>{
      console.log(mySlides.value);
    });

    // when slide changes, enable and disable appropriate buttons
    const slideChanged = async () => {
      console.log("slide changed");
      
      const s = await mySlides?.value?.$el.getSwiper();
      const slideLength = s.slides.length;
      const activeSlide = s.activeIndex;
      // now unwrapping the variables
      disablePrevBtn.value = activeSlide === 0;
      disableNextBtn.value = activeSlide === slideLength-1;
    }

    const prevSlide = async () => {
      const s = await mySlides?.value?.$el.getSwiper(); // get reference of the slide to use it
      await s.slidePrev();
    }

    const nextSlide = async () => {
      const s = await mySlides?.value?.$el.getSwiper(); // get reference of the slide to use it
      await s.slideNext();
    }

    // form validation
    const theForm = useForm({
      validationSchema : nameNrPAComponentSchema.concat(slotCodePAComponentSchema.concat(amountPAComponentSchema))

    });

    return { 
      // properties
      slideOpts, mySlides, disablePrevBtn, disableNextBtn,
      // functions  (exposed methods)
      prevSlide, nextSlide, slideChanged, 
      //images
      imageSuccesful, logo, eth,


      handeDoPublish: async () => {  
        const response = await theForm.validate() // validate the form and if errors happen it will trigger the errors: useFromErrors object and then errors will get rendered on our page
        if (response.valid) {
          const { nameNrPA, slotCodePA, amountPA } = theForm.values;
          console.log(theForm.values);
          console.log("RESPONSE IS VALID");
          nextSlide();
          //var fs = require('fs');
          //fs.writeFile("./area.json", JSON.stringify(theForm.values, null, 1), function(err : any) {
            //if (err) {  console.error(err);  return; };
            //console.log("File has been created");
          //});
          emit("doPublish", {
            nameNrPA: { ...nameNrPA},
            slotCodePA: { ...slotCodePA},
            amountPA: { ...amountPA}
          });
          console.log("EMIT DO PUBLISH");
        }
      }
    }
  }

});
</script>

<style scoped>
ion-slide {
  height: 650px;
  background-color: #1f1f1f;
}
</style>
