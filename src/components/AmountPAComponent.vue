<template>
    <div>
        <ion-item>
        <ion-label position="floating">ETH</ion-label>
        <ion-input
            type="number"
            id="amount"
            name="amountPA.amount"
            v-model="amount"
            ></ion-input>
        </ion-item>
        <p>{{ errors["amountPA.amount"] }}</p> <!--will render the errors associated to that specific field--> 

    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { IonLabel, IonInput, IonItem } from '@ionic/vue';

//form validation
import * as yup from 'yup';
import { useField , useFormErrors } from 'vee-validate';

export const amountPAComponentSchema = yup
    .object({
        amountPA: yup.object({ 
            amount: yup
                .number().label("Amount is required")
                .required()
        })
    })
    .required();

export default defineComponent({
  name: 'AmountPA',
  components: {IonLabel, IonInput, IonItem },
  setup() { 
      // fields defined to be used in this form
    // form validation, variables will be used from vee validate
      const {value: amount } = useField("amountPA.amount")

      return {
          amount,
          errors: useFormErrors() as any 
      };
  }

});
</script>