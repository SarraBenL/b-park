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
      
      <ExploreContainer name="Publish your parking space" />
      <!--qua mettere INPUT-->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'Tab3Publish',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
