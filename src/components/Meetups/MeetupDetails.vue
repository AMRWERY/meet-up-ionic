<template>
    <ion-page>
        <ToolBarVue />
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>{{ meetUp.title }}</ion-card-title>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                    Here's a small text description for the card content. Nothing more, nothing less.
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import ToolBarVue from '../../views/ToolBar.vue'

export default {
    components: { ToolBarVue, IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },

    props: ['id'],

    computed: {
        meetUp() {
            return this.$store.getters.loadedMeetup(this.id);
        }
    }
}
</script>