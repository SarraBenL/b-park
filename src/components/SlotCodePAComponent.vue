<template>
    <div>
        <ion-item>
        <ion-label position="floating">Slot Code</ion-label>
        <ion-input
            type="number"
            name="slotCodePA.slotCode"
            id="slotCode"
            v-model="slotCode"
            ></ion-input>
        </ion-item>
        <p>{{ errors["slotCodePA.slotCode"] }}</p>

    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { IonLabel, IonInput, IonItem } from '@ionic/vue';

//form validation
import * as yup from 'yup';
import { useField , useFormErrors } from 'vee-validate';

export const slotCodePAComponentSchema = yup
    .object({
        slotCodePA: yup.object({ 
            slotCode: yup
                .number().label("Slot Code is required")
                .required()
                .min(3)
        })
    })
    .required();


export default defineComponent({
  name: 'SlotCodePA',
  components: {IonLabel, IonInput, IonItem },
  setup() { 
      // fields defined to be used in this form
    // form validation, variables will be used from vee validate
      const {value: slotCode } = useField("slotCodePA.slotCode")


      return {
          slotCode,
          errors: useFormErrors() as any 
      };
  }

});
</script>