<template>
    <div class="wrapper">
        <div id="price" v-if='selectedPlan'>
            <div class="value">
                <div class="currency">
                    {{selectedPlan.price.currency}}
                </div>
                <div class="integer">
                    {{selectedPlan.price.integer}}
                </div>
                <div>
                    <div class="decimal">
                        {{selectedPlan.price.decimal}}
                    </div>
                    <div class="periodicy">
                        {{selectedPlan.price.periodicy}}
                    </div>
                </div>
            </div>
            <div class="total smaller" v-html="selectedPlan.total">
            </div>
            <div class="payment-methods smaller" v-if="selectedPlan.payments && selectedPlan.payments.length">
                <ul>
                    <li v-for="(payment,key) in selectedPlan.payments" class="smaller">
                        <img v-if="assets[key]" :src="'static/'+assets[key]" class="icon" >
                        <span v-html="payment"></span>
                    </li>
                </ul>
            </div>
        </div>
        <div id="paymentOptions">
            <ul>
                <li v-for='plan in plans'>
                    <v-big-radio name="plan"
                        :value='plan.id'
                        @input='selectPlan' :model="selectedPlanId"
                        :checked="selectedPlanId == plan.id" >
                        <span slot='label'>
                            <h3 class="inline-block">
                                <strong>{{plan.name}}</strong>
                            </h3>
                            <span class="pull-right smaller">
                                {{plan.discount[0]}}
                                <span class="percent">
                                    <strong>{{plan.discount[1]}}</strong>
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
    props: {
        serverPlans: {
            type: Array,
        },
        selectedPlanId: {
            type: Number,
            default: 1,
        },
    },
    data() {
        return {
            assets: ['icon-credit-card.svg', 'icon-debit.svg', 'icon-boleto.svg'],
        };
    },
    computed: {
        plans() {
            return this.serverPlans.map(plan => Object.assign({}, plan, {
                discount: plan.discount ? plan.discount.match(/(.*?)(\d*%)/).slice(1) : '',
            }));
        },
        selectedPlan() {
            return this.plans.find(p => p.id === this.selectedPlanId);
        },
    },
    methods: {
        selectPlan(id) {
            this.$emit('input', +id);
        },
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
        position: relative;
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
    color: $secondary;
    font-size:1.1rem;
}

</style>
