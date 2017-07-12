<template>
    <div class="wrapper">
        <div class="selectedPlan">
            <span class="lighter">Plano escolhido: </span><span class="semi-bold">{{selectedPlanTitle}}</span>
            <div class="divider is-dashed"></div>
        </div>
        <form>
            <div class="row">
                <div class="col col-8">
                    <label for="cardNumber" class="label">Número do cartão</label>
                    <div class="input" :class="{error: errors.numero.invalid}">
                        <input type="number" @keypress="keypressNumero" id="cardNumber" placeholder="Número do cartão" v-focus v-model="form.numero">
                    </div>
                    <span class="message is-error">{{errors.numero.message}}</span>
                </div>
                <div class="col col-2 col-4-sm">
                    <label for="mes" class="label">Validade</label>
                    <div class="select" :class="{error: errors.mes.invalid}">
                        <select type="text" id="mes" v-model="form.mes">
                            <option value="" class="placeholder" selected="selected">Mês</option>
                            <option value="0">Janeiro</option>
                            <option value="1">Fevereiro</option>
                            <option value="2">Março</option>
                            <option value="3">Abril</option>
                            <option value="4">Maio</option>
                            <option value="5">Junho</option>
                            <option value="6">Julho</option>
                            <option value="7">Agosto</option>
                            <option value="8">Setembro</option>
                            <option value="9">Outubro</option>
                            <option value="10">Novembro</option>
                            <option value="11">Dezembro</option>
                        </select>
                    </div>
                    <span class="message is-error">{{errors.mes.message}}</span>
                </div>
                <div class="col col-2 col-4-sm">
                    <label class="label">&nbsp</label>
                    <div class="select" :class="{error: errors.ano.invalid}">
                        <select type="text" id="ano" v-model="form.ano">
                            <option value="" class="placeholder" selected="selected">Ano</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                        </select>
                    </div>
                    <span class="message is-error">{{errors.ano.message}}</span>
                </div>
            </div>
            <div class="row">
                <div class="col col-8">
                    <label for="nome" class="label">Nome do titular</label>
                    <div class="input" :class="{error: errors.nome.invalid}">
                        <input type="text" id="nome" placeholder="Nome do titular" v-model="form.nome">
                    </div>
                    <span class="message is-error">{{errors.nome.message}}</span>
                </div>
                <div class="col col-4 col-8-sm">
                    <label for="codigo" class="label">Código de segurança</label>
                    <div class="input" :class="{error: errors.codigo.invalid}">
                        <input @keypress="keypressCodigo" type="number" id="codigo" placeholder="000" min="0" max="999" v-model="form.codigo">
                    </div>
                    <span class="message is-error">{{errors.codigo.message}}</span>
                </div>
            </div>
            <div class="row">
                <div class="col col-12 hidden-sm">
                    <div class="form-message is-warn center">
                        Para sua privacidade, a cobrança será feita em nome da "assinaet-pgto-sl"
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { postServerData } from '@/services/api';

const focus = {
    inserted(el) {
        el.focus();
    },
};

export default {
    props: {
        selectedPlan: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            validated: false,
            form: {
                numero: '',
                mes: '',
                ano: '',
                nome: '',
                codigo: '',
            },
        };
    },
    computed: {
        errors() {
            const errors = {};
            Object.keys(this.form).forEach((key) => {
                errors[key] = errors[key] || {};
            });

            if (this.validated) {
                return this.getErrorsObject();
            }

            return errors;
        },
        selectedPlanTitle() {
            return {
                1: 'Mensal - R$49,90',
                2: 'Trimestral - R$119,70',
                3: 'Semestral - R$179,40',
            }[this.selectedPlan.id];
        },
    },
    directives: { focus },
    methods: {
        getErrorsObject() {
            const errors = {};
            Object.keys(this.form).forEach((key) => {
                errors[key] = errors[key] || {};
            });


            if (!this.validCreditCcard(this.form.numero)) {
                errors.numero.message = 'Número inválido';
                errors.numero.invalid = true;
            }

            // Date Validation
            if (!this.validDate(new Date(), this.form.mes, this.form.ano)) {
                errors.mes.message = 'Expirado';
                errors.mes.invalid = true;
                errors.ano.invalid = true;
            }

            // Required validation
            Object.keys(this.form).forEach((key) => {
                if (this.form[key] === '') {
                    errors[key].message = 'Obrigatório';
                    errors[key].invalid = true;
                }
            });

            return errors;
        },
        keypressCodigo(e) {
            if (!e.key.match(/[0-9]/) || e.target.value.length >= 3) {
                e.preventDefault();
            }
        },
        keypressNumero(e) {
            if (!e.key.match(/[0-9-\s]/)) {
                e.preventDefault();
            }
        },

        isFormValid() {
            const invalids = [];
            const errors = this.getErrorsObject();
            Object.keys(errors).forEach((key) => {
                invalids.push(errors[key].invalid);
            });
            return !invalids.filter(i => i).length;
        },

        validDate(today, mes, ano) {
            return !(+ano === today.getFullYear() && today.getMonth() > +mes);
        },
        /*eslint-disable */
        validCreditCcard: (function (array) {
            return function luhn(number) {
                if (typeof number !== 'string') return false;
                if (!number) return false;
                let length = number.length;
                let bit = 1;
                let sum = 0;
                let value;

                while (length) {
                    value = parseInt(number.charAt(--length), 10)
                    sum += (bit ^= 1) ? array[value] : value
                }

                return !!sum && sum % 10 === 0
            }
        }([0, 2, 4, 6, 8, 1, 3, 5, 7, 9])),
        /*eslint-enable */
    },
    mounted() {
        this.$bus.$on('submit-singup', () => {
            this.validated = true;
            if (this.isFormValid()) {
                postServerData().then(() => {
                    this.$bus.$emit('submit-success');
                });
            }
        });
    },
};
</script>

<style scoped lang='scss'>
@import '../styles/vendors/mq';

.wrapper {
    padding: 20px 0;
    @include mq($from: tablet) {
        padding: 50px 120px;
    }

}
.selectedPlan {
    padding: 0 2%;
    @include mq($until: tablet) {
        display: none;
    }
    .divider {
        margin: 15px 0 5px;
    }
}
label {
    display: block;
};
</style>
