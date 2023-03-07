<template>
    <ion-page>
        <ToolBar />
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title class="ion-text-center">Organize New Meet Up</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-item>
                        <ion-label position="floating" color="success">Title</ion-label>
                        <ion-input placeholder="Enter Title" type="text"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating" color="success">Location</ion-label>
                        <ion-input placeholder="Enter Location" type="text"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating" color="success">Date</ion-label>
                        <ion-input type="date" placeholder=""></ion-input>

                    </ion-item>
                    <ion-item>
                        <ion-label position="floating" color="success">Image Url</ion-label>
                        <ion-input placeholder="Enter Url" type="url"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating" color="success">Description</ion-label>
                        <ion-textarea placeholder="Enter Description" rows="6" type="text"></ion-textarea>
                    </ion-item>
                </ion-card-content>
                <ion-button expand="block" fill="clear">Create</ion-button>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonInput, IonItem, IonLabel, IonTextarea, IonButton } from '@ionic/vue';
import ToolBar from '../../views/ToolBar.vue';

export default {
    components: {
        ToolBar,
        IonPage,
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonCardTitle,
        IonContent,
        IonInput,
        IonItem,
        IonLabel,
        IonTextarea,
        IonButton
    },
}
</script>