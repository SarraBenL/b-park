<template>
    <div>
        <ion-item>
        <ion-label position="floating">Name Parking Area</ion-label>
        <ion-input
            type="text"
            name="nameNrPA.namePA"
            id="namePA"
            v-model="namePA"
            ></ion-input>
        </ion-item>
        <p>{{ errors["nameNrPA.namePA"] }}</p> <!--will show us the errors related to the fields-->

        <ion-item>
        <ion-label position="floating">Numer of slots available</ion-label>
        <ion-input
            type="number"
            name="nameNrPA.nrOfSlots"
            id="nrOfSlots"
            v-model="nrOfSlots"
            ></ion-input>
        </ion-item>
        <p>{{ errors["nameNrPA.nrOfSlots"] }}</p>

    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { IonLabel, IonInput, IonItem } from '@ionic/vue';

//form validation
import * as yup from 'yup';
import { useField , useFormErrors } from 'vee-validate';

// to validate this values of vee validate we need to use yup and we need to create a schema
export const nameNrPAComponentSchema = yup
    .object({
        nameNrPA: yup.object({  // nameNrPA is a key contained in the nameNrPAComponentSchema object
            namePA: yup
                .string().label("Address of the parking area")
                .required(),
            nrOfSlots: yup
                .number().label("Number of Slots in the area")
                .required()
        })
    })
    .required(); // this whole object is required
    

export default defineComponent({
  name: 'NameNrPA',
  components: {IonLabel, IonInput, IonItem },
  setup() { 
      // fields defined to be used in this form
    // form validation, variables will be used from vee validate
    const {value: namePA } = useField("nameNrPA.namePA")
    const {value: nrOfSlots } = useField("nameNrPA.nrOfSlots")

      return {
          namePA,
          nrOfSlots,
          errors: useFormErrors() as any // if there are any errors generated, errors variable can contain it
      };
  }

});
</script>