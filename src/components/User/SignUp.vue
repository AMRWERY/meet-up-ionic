<template>
    <ion-page>
        <ToolBarVue />
        <ion-content>
            Sign Up
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import ToolBarVue from '../../views/ToolBar.vue'

export default {
    components: { ToolBarVue, IonPage, IonContent },
}
</script>