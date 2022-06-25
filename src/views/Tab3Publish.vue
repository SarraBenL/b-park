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


      <ion-content :fullscreen="true" class="ion-padding">
        <publish-parking-space-form @doPublish="doPublish"/>
        <div>
          <pre>{{JSON.stringify(results, null, 1)}}</pre>
        </div>
        


      </ion-content>

    </ion-content>
  </ion-page>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import PublishParkingSpaceForm from '@/components/PublishParkingSpaceForm.vue';


export default defineComponent({
  name: 'Tab3Publish', 
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage,
  PublishParkingSpaceForm},
  setup() { 
    // form validation
    const results = ref<any>();

    return { 
      results,
      doPublish: (params: any) => {
        console.log("RESULTS: ")
        console.log(results)
        console.log("doPublish CON PARAMS")
        console.log("doPublish", params)
        results.value = params;

        // convert JSON object to string
        const parkingEntryData = JSON.stringify(results);
        // write JSON string to a file
        window.localStorage.setItem('arr', parkingEntryData);
        console.log("JSON data is saved.");


        //const fs = require('fs');
        //try { fs.writeFileSync('area.json', parkingEntryData, 'utf-8'); }
        //catch(e) { alert('Failed to save the file !'); }
        
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
