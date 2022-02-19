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
      
      <!-- Searchbar with cancel button shown on focus -->
      <ion-searchbar show-cancel-button="focus" value="Ionic"></ion-searchbar>

      

      
      
      <ExploreContainer name="Search for parking space" />

      <!-- add search bar and list of cards here -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'Tab2Search',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSearchbar }
});
</script>
