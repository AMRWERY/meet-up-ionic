<template>
    <ion-page>
        <ToolBarVue />
        <ion-content>
            <ion-card class="ion-text-center" v-for="meetUp in meetUps" :key="meetUp.id">
                <img :src="meetUp.img" />
                <ion-card-header>
                    <ion-card-title>{{ meetUp.title }}</ion-card-title>
                    <ion-card-subtitle class="ion-margin">{{ meetUp.date }}</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                    Here's a small text description for the card content. Nothing more, nothing less.
                </ion-card-content>
                <ion-button :router-link="'/view/' + meetUp.id" shape="round" fill="clear">Check</ion-button>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/vue';
import ToolBarVue from '../../views/ToolBar.vue';

export default {
    components: { ToolBarVue, IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton },

    computed: {
        meetUps() {
            return this.$store.getters.featuredMeetups;
        }
    },

    /* methods: {
        onLoadedMeetup(id) {
            this.$router.push('/view' + id)
        }
    } */
}
</script>