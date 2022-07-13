<template>
  
    <ion-header>
      <ion-toolbar>
        <ion-title>View Car Park</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-slides pager="true" :options="slideOpts" ref="mySlides" @ionSlideDidChange="slideChanged">
        <ion-slide>
          <ion-grid>
            <ion-row>
              <div class="ion-text-start">
                <ion-text color="primary">
                  <h2>Slide 1</h2>
                </ion-text>
                Estimate duration:             
              </div>
            </ion-row>

              <!--RANGE-->
              <ion-item>
                <ion-range min="0" max="10" color="secondary">
                  <ion-label slot="start">0</ion-label>
                  <ion-label slot="end">10</ion-label>
                </ion-range>
              </ion-item> 
    

            <div class="ion-text-start">
              Check-in Time:            
            </div>

            <ion-row>
                <!-- Custom locale -->
                <ion-datetime locale="it-IT"></ion-datetime>
            </ion-row>

            <div class="ion-text-start">
              <h3>Specifications</h3>           
            </div>
            <ion-row>
              <ion-col size="6" size-sm>
                 Disabled parking:   
              </ion-col>
              <ion-col size="6" size-sm>
                <!-- Disabled Toggle -->
                <ion-toggle color="tertiary"></ion-toggle>
              </ion-col>
                    
            </ion-row>

          <div :style="{textAlign : 'center', paddingTop: '16px'}">
          <!-- <ion-button @click="prevSlide" :disabled="disablePrevBtn" expand="block" color="dark">prev</ion-button> -->
            <ion-button @click="nextSlide" :disabled="disableNextBtn" expand="block" color="primary">Book Space</ion-button>
          </div>

          </ion-grid>



        </ion-slide>
        <ion-slide>
          <ion-text color="dark">
            <h1>Slide 2</h1>
            <h1>Space Successfully Booked</h1>
            <p>Your payment transaction has been successful. Your parking space has been reserved.</p>
            
            <p align="center"><ion-img :src="imageSuccesfulBooking" /></p>
            <div :style="{textAlign : 'center', paddingTop: '106px'}">
              <ion-button @click="nextSlide" :disabled="disableNextBtn" expand="block" color="primary">View Booking Details</ion-button>
              <ion-button href="/tabs/tabSearch" expand="block" color="dark"> Go back to Home Screen </ion-button>
              
            </div>
          </ion-text>
        </ion-slide>
        <ion-slide>

          <ion-grid>
            <ion-text color="dark">
              <h1>Slide 3</h1>
              <h2>Booking details</h2>
            </ion-text>
            <ion-row>
              <ion-col size="6" size-sm>
                Check-in Time:
              </ion-col>
              <ion-col size="6" size-sm>
                11am read value
              </ion-col>
                    
            </ion-row>
            <ion-row>
              <ion-col size="6" size-sm>
                Check-out Time:
              </ion-col>
              <ion-col size="6" size-sm>
                5pm read value
              </ion-col>          
            </ion-row>
            <ion-row>
              <ion-col size="6" size-sm>
                Specifications:
              </ion-col>
              <ion-col size="6" size-sm>
                None read value
              </ion-col>          
            </ion-row>

            <div :style="{textAlign : 'center', paddingTop: '106px'}">
              <ion-button href="/tabs/tabSearch" expand="block" color="dark"> Go back to Home Screen </ion-button>  
            </div>

          </ion-grid>


        </ion-slide>
      </ion-slides>

    </ion-content>



  
</template>


<script lang="ts">
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSlides, IonSlide,
IonItem, IonLabel, IonRange, IonDatetime, IonToggle, IonImg} from '@ionic/vue';
import { defineComponent, onMounted, ref, computed } from 'vue';
declare function myMethod(): any;

export default defineComponent({
  name: "SimpleModal",
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonSlides, IonSlide,
  IonItem, IonLabel, IonRange, IonDatetime, IonToggle, IonImg },
  
  props: {
    title: { type: String, default: 'Super Modal' },
  },
  data() {
    return {
      content: 'Content',
    }
  },
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

    // for slide 2 SuccesfulBooking
    const imageSuccesfulBooking = computed(() => require('../../resources/green-tick-circle.png'))

    //SLIDES button
    onMounted(()=>{
      console.log(mySlides.value);
      console.log("ciao ciao qua mettiamo web 3");
      myMethod();



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
      prevSlide, nextSlide, slideChanged,
      imageSuccesfulBooking}
  },

// for the RANGE
  mounted() {
    // Sets initial value for dual-knob ion-range
  //  this.$refs.rangeDualKnobs.value = { lower: 0, upper: 10 };
  }

  //--methods: {
   
   //-- async bookSpaceClick() {
     // alert("ciao")
   //--   const swiper = document.querySelector('#slides');
  //--    console.log(swiper)
     // console.log(swiper.getSwiper())
      // Now you can use all slider methods like
      //swiper.slideNext();
  //--  }
 //__ }
 // setupS() {
 //   const customFormatter = (value: number) => `${value}%`;
    
 //   return { customFormatter };
 // }
});
</script>

<style scoped>
ion-slide {
  height: 800px;
  background-color: #313149;
}
ion-img{
  height:250px;
  width: 250px;
}
ion-grid{
  padding-left: 10px;
  padding-right: 10px;
}
</style>


    <!-- tra header e template
    <ion-content padding>
      <ion-item>
        <ion-label color="primary" position="floating">Title</ion-label>
        <ion-input-vue
          type="text"
          name="title"
          placeholder="Title for note..."
          v-model="noteInfo.title"
        ></ion-input-vue>
      </ion-item>

      <ion-item>
        <ion-label color="primary" position="floating">Description</ion-label>
        <ion-textarea-vue rows="5" placeholder="Note description" v-model="noteInfo.description"></ion-textarea-vue>
      </ion-item>

      <ion-item style="font-size:smaller; text-align: center" lines="none">
        <ion-label>{{(timeStamp +"").split('(')[0]}}</ion-label>
      </ion-item>
      <ion-row>
        <ion-col>
          <ion-button expand="block" @click="modalClose(true)">Save Note</ion-button>
        </ion-col>
        <ion-col>
          <ion-button expand="block" color="danger" @click="modalClose(false)">Cancel</ion-button>
        </ion-col>
      </ion-row>
    </ion-content>
    -->


<!--
<script>
export default {
  name: "SimpleModal",
  props: ["timeStamp"],
  methods: {
    modalClose: function(success) {
      let response = {
        success,
        noteInfo: success ? this.noteInfo : null
      };
      this.$ionic.modalController.dismiss(response);
    }
  },
  data() {
    return {
      noteInfo: {
        title: "",
        description: ""
      }
    };
  }
};
</script>
<style scoped>
.errors {
  font-size: smaller;
  color: red;
  font-weight: bold;
}
</style>

-->