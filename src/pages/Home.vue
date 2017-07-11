<template>
    <div class="home">
        <button @click="openModal">Assine conteúdo VIP</button>
        <v-modal v-if="showModal" @close="closeModal" @goBack="goBack" class="modal">
            <h3 slot="header">Assine o Sexlog VIP</h3>
            <div slot="body" class='content'>
                <ul id="stepsAssinatura" class="steps semi-bold">
                    <li @click="goToPanel('Plans')" class="step" :class='{"is-active": (panel == "Plans")}'>Escolha o plano ideal pra você</li>
                    <li @click="goToPanel('Payment')" class="step" :class='{"is-active": (panel == "Payment")}'>Escolha a forma de pagamento</li>
                </ul>
                <plans
                    v-if="panel === 'Plans'"
                    :serverPlans="plans"
                    :selectedPlanId="selectedPlanId"
                    @input="(id) => selectedPlanId = id"
                    />
                <payment v-if="panel === 'Payment'"></payment>
                <signUpFeedback :closeModal="closeModal" v-if="panel === 'SignUpFeedback'"></signUpFeedback>
            </div>
            <div class="footer" slot="footer">
                <button class="button is-secondary is-large semi-bold pull-right" v-if="panel === 'Plans'" @click="goToPanel('Payment')">Próximo passo: pagamento</button>
                <button class="button is-secondary is-large semi-bold pull-right" v-if="panel === 'Payment'" @click="$broadcast('submit')">Concluir minha assinatura</button>
            </div>
        </v-modal>
    </div>
</template>

<script>
import Plans from '@/pages/Plans';
import Payment from '@/pages/Payment';
import SignUpFeedback from '@/pages/SignUpFeedback';
import { getServerData } from '@/services/api';

export default {
    name: 'home',
    data() {
        return {
            showModal: true,
            plans: [],
            panel: 'Plans',
            selectedPlanId: 1,
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
    mounted() {
        getServerData().then((data) => {
            this.plans = data.plans;
        });
    },
};
</script>

<style scoped lang="scss">
@import '../styles/vendors/mq';

#stepsAssinatura {
    @include mq($until: tablet) {
        display: none;
    }
}

.footer {

    @include mq($from: tablet) {
        padding: 10px 30px;
    }
    button {
        width: 100%;
        @include mq($until: tablet) {
            border: 0;
            border-radius: 0;
        }
        @include mq($from: tablet) {
            width:50%;
        }
    }
}

</style>
