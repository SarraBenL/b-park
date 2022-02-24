<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Publish</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Publish</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <p> Publish your parking space </p>


      <ion-content class="ion-padding">
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
              <ion-item>
                <ion-label position="floating">Name Parking Area</ion-label>
                <ion-input></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Numer of slots available</ion-label>
                <ion-input></ion-input>
              </ion-item>

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
              <h2>Number of slots available</h2>

              <ion-item>
                <ion-label position="floating">Name Parking Area</ion-label>
                <ion-input></ion-input>
              </ion-item>

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
              <h2>Enter Slot Code Number</h2>

              <ion-item>
                <ion-label position="floating">Slot Code</ion-label>
                <ion-input></ion-input>
              </ion-item>

              <div :style="{textAlign : 'center', paddingTop: '106px'}">
                <ion-button @click="nextSlide" :disabled="disableNextBtn" expand="block" color="primary">Next</ion-button>
                <ion-button @click="prevSlide" :disabled="disablePrevBtn" expand="block" color="dark"> Go back</ion-button> 
              </div>
            </ion-text>
          </ion-slide>
          <ion-slide>
            <ion-text color="dark">
              <h1>Slide 5</h1>
              <p align="center"><ion-img :src="logo" :style="{height: '140px', width: '140px'}"/></p>
              <h2>Amount to get paid per hour</h2>

              <ion-item>
                <ion-label position="floating">ETH</ion-label>
                <ion-input></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">EUR</ion-label>
                <ion-input></ion-input>
              </ion-item>

              <div :style="{textAlign : 'center', paddingTop: '106px'}">
                <ion-button @click="nextSlide" :disabled="disableNextBtn" expand="block" color="primary">Next</ion-button>
                <ion-button @click="prevSlide" :disabled="disablePrevBtn" expand="block" color="dark"> Go back</ion-button> 
              </div>
            </ion-text>
          </ion-slide>
          <ion-slide>
            <ion-text color="dark">
              <h1>Slide 6</h1>

              <h1>Space Succesfully Added</h1>
              <p>Your parking space has been added. You will receive your payments once people park on your space.</p>
              
              <p align="center"><ion-img :src="imageSuccesful" :style="{height: '250px', width: '250px'}" /></p>
              <div :style="{textAlign : 'center', paddingTop: '106px'}">
                <ion-button href="/tabs/tabSearch" expand="block" color="dark"> Go back to Home Screen </ion-button>
              </div>
            </ion-text>
          </ion-slide>

        </ion-slides>

    </ion-content>

    </ion-content>
  </ion-page>

</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
IonSlides, IonSlide, IonLabel, IonInput, IonItem } from '@ionic/vue';


export default defineComponent({
  name: 'Tab3Publish',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage,
  IonSlides, IonSlide, IonLabel, IonInput, IonItem },
  setup() { //for the slider

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

    return { 
      // properties
      slideOpts, mySlides, disablePrevBtn, disableNextBtn,
      // functions  (exposed methods)
      prevSlide, nextSlide, slideChanged, imageSuccesful, logo, eth}
  }

});
</script>

<style scoped>
ion-slide {
  height: 650px;
  background-color: #141172;
}
</style>
