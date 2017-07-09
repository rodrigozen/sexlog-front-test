<template>
    <div class="home">
        <button @click="openModal">Assine conteúdo VIP</button>
        <v-modal v-if="showModal" @close="closeModal" class="modal">
            <h3 slot="header">Assine o Sexlog VIP</h3>
            <div slot="body" class='content'>
                <ul id="stepsAssinatura" class="steps">
                    <li @click="goToPanel('Plans')" class="step" :class='{"is-active": (panel == "Plans")}'>Escolha o plano ideal pra você</li>
                    <li @click="goToPanel('Payment')" class="step" :class='{"is-active": (panel == "Payment")}'>Escolha a forma de pagamento</li>
                </ul>
                <component :is='panel'></component>
            </div>
        </v-modal>
    </div>
</template>

<script>
import Plans from '@/pages/Plans';
import Payment from '@/pages/Payment';
import SignUpFeedback from '@/pages/SignUpFeedback';

export default {
    name: 'home',
    data() {
        return {
            showModal: true,
            panel: 'Plans',
        };
    },
    methods: {
        goToPanel(panel) {
            this.panel = panel;
        },
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
    },
    components: {
        Plans,
        Payment,
        SignUpFeedback,
    },
};
</script>

<style scoped lang="scss">
@import '../styles/vendors/mq';
.modal {
    .modal-container {
        max-width: 800px;
    }
}
#stepsAssinatura {
    @include mq($until: tablet) {
        display: none;
    }
}
</style>
