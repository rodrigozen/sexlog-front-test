<template>
    <div class="home">
        <button @click="openModal">Assine conteúdo VIP</button>
        <v-modal v-if="showModal" @close="closeModal">
            <h3 slot="header">Assine o Sexlog VIP</h3>
            <div slot="body" class='content'>
                <ul id="stepsAssinatura" class="steps">
                    <li class="step is-active">Escolha o plano ideal pra você</li>
                    <li class="step">Escolha a forma de pagamento</li>
                </ul>
            </div>
        </v-modal>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            showModal: true,
        };
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
    },
};
</script>

<style scoped lang="scss">
@import '../styles/vendors/mq';
#stepsAssinatura {
    @include mq($until: tablet) {
        height: 0;
    }
}
</style>
