<template>
    <ion-page>
        <ToolBar />
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Profile</ion-card-title>
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
import { IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent } from '@ionic/vue';
import ToolBar from '../../views/ToolBar.vue';

export default {
    components: {
        ToolBar,
        IonPage,
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonCardSubtitle,
        IonCardTitle,
        IonContent
    },
}
</script>