<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tabExtend" href="/tabs/TabExtend">
          <ion-icon :icon="time" />
          <ion-label>Extend</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tabSearch" href="/tabs/TabSearch">
          <ion-icon :icon="navigate" />
          <ion-label>Search</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tabPublish" href="/tabs/TabPublish">
          <ion-icon :icon="add" />
          <ion-label>Publish</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { navigate, add, time} from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      navigate,
      add,
      time,
    }
  }
});
</script>
