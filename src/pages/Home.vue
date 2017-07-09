<template>
    <div class="home">
        <button @click="openModal">Assine conteúdo VIP</button>
        <v-modal v-if="showModal" @close="closeModal">
            <h3 slot="header">Assine o Sexlog VIP</h3>
        </v-modal>
    </div>
</template>

<script>
// import Modal from '@/components/Modal';

export default {
    name: 'home',
    data() {
        return {
            showModal: false,
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
