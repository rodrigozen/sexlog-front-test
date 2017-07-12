<template>
    <div class="center signup-feedback">
        <svg width="97.5px" height="97.5px" viewBox="0 0 97.5 97.5">
            <path class="icon" d="M48.8,0C21.8,0,0,21.8,0,48.8c0,26.9,21.8,48.8,48.8,48.8s48.8-21.8,48.8-48.8C97.5,21.8,75.7,0,48.8,0z
        	    M42,69.8L25.4,53.2l4.9-4.9L42,59.9L69.9,32l4.9,4.9L42,69.8z"/>
        </svg>
        <h1 class="mensagem" >
            <div><strong>Parabéns!</strong></div>
            <div>Você agora é um assinante Sexlog!</div>
        </h1>
        <button class="button is-primary is-large" @click="closeModal"><strong>Explorar o Sexlog</strong></button>
    </div>
</template>

<script>
export default {
    props: {
        closeModal: {
            type: Function,
        },
    },
};
</script>

<style scoped lang='scss'>
@import '../styles/vendors/mq';
@import '../styles/abstracts/variables';

.signup-feedback {
    padding: 50px 0px;
    div {
        font-size: 0.8em;
        font-weight: 400;
    }
    @include mq($until: tablet) {
        button {
            position: fixed;
            bottom: 0px;
            width: 100%;
            margin: 0;
            border-radius: 0;
        }
    }
    @include mq($from: tablet) {
        padding: 80px 10px;
        div {
            font-size: 1.15em;
        }
        button {
            position: relative;
            margin: 50px auto 20px;
            padding-left: 100px;
            padding-right: 100px;
        }
    }

    .icon {
        fill: #1EB771;
    }

}
</style>
