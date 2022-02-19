<template>

  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Search</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Search</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- add search bar and list of cards here -->


      <!-- Searchbar with cancel button shown on focus -->
      <ion-searchbar show-cancel-button="focus" value="Via Ionic 18, Bolzano"></ion-searchbar>

      <ion-card>
        <ion-img :src="image"></ion-img>

        <ion-card-header>
          <ion-card-subtitle>Via Ionic 18, Bolzano</ion-card-subtitle>
          <ion-card-title>.0008 ETH/Hr</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-row>
            <ion-col size="6" size-sm>
              Spaces available: 
            </ion-col>
            <ion-col size="6" size-sm>
              25 slots
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="6" size-sm>
              Distance to Venue:
            </ion-col>
            <ion-col size="6" size-sm>
              3 mins
            </ion-col>
          </ion-row>

         
          <ion-button fill="solid">View Car Park</ion-button>
          
        </ion-card-content>
      </ion-card>
      

      
      
      

      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar,
IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg} from '@ionic/vue';


export default defineComponent({
  name: 'Tab2Search',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSearchbar,
                IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg },
  setup() {
  const image = computed(() => require('../../resources/parkinglot.jpeg'))

    return {
      image,
    }
  }
});
</script>
