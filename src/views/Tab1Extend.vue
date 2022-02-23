<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Search</ion-title>
      </ion-toolbar>

      <!-- import MENU -->
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Extend</ion-title>
        </ion-toolbar>
  
      </ion-header>
    
      <!-- add active sessions and past ones -->

      <ion-grid>
        <ion-row>
          <ion-col class="ion-padding-start">
            <ion-text color="dark">
                <h2>Active session</h2>
            </ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-list>
        
        <ion-card  v-for="bookedSpace in bookedSpaces" :key="bookedSpace.id">

          <ion-card-header>
            <ion-card-subtitle>{{bookedSpace.streetName}}</ion-card-subtitle>
            <ion-card-title>{{bookedSpace.eth}} ETH/Hr</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-grid>
              <ion-row>
                <ion-col size="8" size-sm class="ion-padding-bottom">
                  Time Remaining: 
                </ion-col>
                <ion-col size="4" size-sm>
                  1h 30 min
                  <!--{{bookedSpace.startTime}}-->
                </ion-col>
              </ion-row>

            </ion-grid>

            <!-- fab placed to the (vertical) center and end -->
            <ion-fab vertical="center" horizontal="center" slot="fixed">
              <div :style="{ paddingTop: '10px'}">
                <ion-fab-button @click="openModal" size = "small">
                  <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
              </div>
            </ion-fab>
              

              

           


          </ion-card-content>
        </ion-card>

      </ion-list>


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
        IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
        IonFab, IonFabButton, IonIcon, modalController } from '@ionic/vue';
import { add } from 'ionicons/icons';
import bookedSpacesData from "../bookedSpacesData.json";
import SimpleModal from '@/components/SimpleModal.vue'

export default  defineComponent({
  name: 'Tab1Extend',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage,
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonFab, IonFabButton, IonIcon },
  data() {
   return {bookedSpaces: bookedSpacesData,};
  },
  setup() {
    return { add }
  },
  methods: {
  /** called when the modal is closed */
  modalCloseHandler(_value: { success: any; noteInfo: any; }) {
    console.log("modal-closed", _value);
    if (_value.success) {
      // only on success
      alert(JSON.stringify(_value.noteInfo, null, 2));
    }
  },
  /**
   * when the user clicks button, we open the modal
   */
  async openModal() {
    let modal = await modalController.create({
      component: SimpleModal,
      componentProps: {
        propsData: {
          timeStamp: new Date()
        }
      }
    });
    // show the modal
    await modal.present();
    // wait to see if i get a response
    let modalResponse = await modal.onDidDismiss();
    // when dismissed by clicking outside of modal,
    // data is undefined so we do not handle it
    modalResponse.data && this.modalCloseHandler({...modalResponse.data})
  }
}
});
</script>
