<template>
    <div class="home">
        <button class="button is-primary" @click="openModal">Assine conteúdo VIP</button>
        <v-modal v-if="showModal" @close="closeModal" @goBack="goBack" :back-button="(panel !== 'Plans')" class="modal">
            <h3 slot="header">Assine o Sexlog VIP</h3>
            <div slot="body" class='content'>
                <ul class="steps semi-bold stepsAssinatura">
                    <li v-if="panel !== 'SignUpFeedback'" @click="goToPanel('Plans')" class="step" :class='{"is-active": (panel == "Plans")}'>
                        Escolha o plano ideal pra você
                    </li>
                    <li v-if="panel !== 'SignUpFeedback'" @click="goToPanel('Payment')" class="step" :class='{"is-active": (panel == "Payment")}'>
                        Escolha a forma de pagamento
                    </li>
                </ul>
                <plans
                    v-if="panel === 'Plans'"
                    :serverPlans="plans"
                    :selectedPlanId="selectedPlanId"
                    @input="(id) => selectedPlanId = id"
                    />
                <payment :selectedPlan='selectedPlan' v-if="panel === 'Payment'"></payment>
                <signUpFeedback :closeModal="closeModal" v-if="panel === 'SignUpFeedback'"></signUpFeedback>
            </div>
            <div class="footer" slot="footer" v-if="panel !== 'SignUpFeedback'">
                <img :src="'static/icon-secure.png'">
                <button class="button is-secondary is-large semi-bold pull-right" v-if="panel === 'Plans'" @click="goToPanel('Payment')">Próximo passo: pagamento</button>
                <button class="button is-secondary is-large semi-bold pull-right" v-if="panel === 'Payment'" @click="$bus.$emit('submit-singup')">Concluir minha assinatura</button>
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
            showModal: false,
            plans: [],
            panel: 'Plans',
            selectedPlanId: 1,
        };
    },
    computed: {
        selectedPlan() {
            return this.plans.find(p => p.id === this.selectedPlanId) || {};
        },
    },
    methods: {
        goToPanel(panel) {
            this.panel = panel;
        },
        openModal() {
            this.showModal = true;
            this.panel = 'Plans';
        },
        closeModal() {
            this.showModal = false;
        },
        goBack() {
            const sequence = ['Plans', 'Payment', 'SignUpFeedback'];
            this.panel = sequence[sequence.indexOf(this.panel) - 1];
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
        this.$bus.$on('submit-success', () => {
            this.goToPanel('SignUpFeedback');
        });
    },
};
</script>

<style scoped lang="scss">
@import '../styles/vendors/mq';

.home > button {
    margin: 30px auto;
}

.stepsAssinatura {
    @include mq($until: tablet) {
        display: none;
    }
}

.footer {

    img {
        display: none;
    }

    @include mq($from: tablet) {
        img {
            display: inline-block;
            padding: 10px 20px;
        }
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
