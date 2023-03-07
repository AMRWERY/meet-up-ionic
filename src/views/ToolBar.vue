<template>
    <ion-header class="ion-padding">
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button text="Previous" :icon="caretBack" defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title class="ion-text-center" router-link="/">dev - Meet Up</ion-title>
        </ion-toolbar>
    </ion-header>
</template>
  
<script>
import { IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/vue';
import { caretBack } from 'ionicons/icons';

export default {
    components: { IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons },

    data() {
        return {
            caretBack
        }
    }
};
</script>