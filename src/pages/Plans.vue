<template>
    <div class="wrapper">
        <div id="price">
            <div class="value">
                <div class="currency">
                    {{price.currency}}
                </div>
                <div class="integer">
                    {{price.integer}}
                </div>
                <div>
                    <div class="decimal">
                        {{price.decimal}}
                    </div>
                    <div class="periodicy">
                        {{price.periodicy}}
                    </div>
                </div>
            </div>
            <div class="total smaller" v-html="total">
            </div>
            <div class="payment-methods smaller" v-if="payments && payments.length">
                <ul>
                    <li v-for="(payment,key) in payments" class="smaller">
                        <img v-if="assets[key]" :src="'static/'+assets[key]" class="icon" >
                        <span v-html="payment"></span>
                    </li>
                </ul>
            </div>
        </div>
        <div id="paymentOptions">
            <ul>
                <li>
                    <v-big-radio name="a" checked>
                        <span slot='label'>
                            <h3 class="inline-block">
                                <strong>1 mês</strong>
                            </h3>
                        </span>
                    </v-big-radio>
                </li>
                <li>
                    <v-big-radio name="a">
                        <span slot='label'>
                            <h3 class="inline-block">
                                <strong>3 meses</strong>
                            </h3>
                            <span class="pull-right smaller">
                                Economize
                                <span class="percent">
                                    <strong>30%</strong>
                                </span>
                            </span>
                        </span>
                        <span slot='label-secondary'></span>
                    </v-big-radio>
                </li>
                <li>
                    <v-big-radio name="a">
                        <span slot='label'>
                            <h3 class="inline-block">
                                <strong>6 meses</strong>
                            </h3>
                            <span class="pull-right smaller">
                                Economize
                                <span class="percent">
                                    <strong>50%</strong>
                                </span>
                            </span>
                        </span>
                    </v-big-radio>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'plans',
    data() {
        return {
            assets: ['icon-credit-card.svg', 'icon-debit.svg', 'icon-boleto.svg'],
            name: '6 mês',
            discount: 'Economize 54%',
            total: 'Total: <b>R$ 89,70</b> em até 3x iguais no cartão de crédito',
            price: {
                currency: 'R$',
                integer: 29,
                decimal: 90,
                periodicy: '/mês',
            },
            parc: [
                'Parcelado em 1x de R$ 89,70',
                'Parcelado em 2x de R$ 44,85',
                'Parcelado em 3x de R$ 29,90',
            ],
            payments: [
                'Até 6x iguais no <b>cartão de crédito</b>',
                'Parcela única no <b>débito em conta</b>',
                'Pagamento no <b>boleto bancário</b>',
            ],
        };
    },
};
</script>

<style scoped lang='scss' >
@import '../styles/vendors/mq';
@import '../styles/abstracts/variables';

.wrapper {
    display: flex;
    flex-direction: column;
    padding: 25px 0px;
    @include mq($from: tablet) {
        padding: 25px 20px;
        flex-direction: row;
    }
}

#price {
    flex: 1 1 0;
    .value {
        display: flex;
        justify-content: center;
        padding: 10px;
        div {
            display: flex;
        }
        .currency {
            padding: 0 5px;
        }
        .integer {
            font-size: 7rem;
            color: $primary;
            font-weight: 700;
            line-height: 0.6;
            margin-bottom: 8px;
            vertical-align: top;
        }
        .decimal {
            position: absolute;
            font-size: 2.2rem;
            color: $primary;
            font-weight: 700;
            line-height: 1;
        }
        .periodicy {
            align-self: flex-end;
            color: lighten(adjust-color($primary, 140), 5%);
            font-size: 1.05rem;
            padding: 0 3px;
        }
    }

    .total {
        min-height: 35px;
        padding: 10px;
        text-align: center;
    }

    .payment-methods {
        @include mq($until: tablet) {
            display: none;
        }
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        ul {
            padding: 5px;
            border-top: 1px dashed gainsboro;
        }
        li {
            padding: 2px;;
            display: flex;
            align-items: center;
        }
        img {
            margin-right: 10px;
        }
    }
}
#paymentOptions {
    flex: 1 1 0;
    padding: 5px;
    li {
        flex-grow: 1;
    }
}

.percent {
    strong {
        transition: 0.2s;
    }
    color: #49cba4;
    font-size:1.1rem;
}

</style>
