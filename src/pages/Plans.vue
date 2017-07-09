<template>
    <div class="wrapper">
        <div id="price">
            <div class="valor">
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
};
</script>

<style scoped lang='scss'>
@import '../styles/vendors/mq';
@import '../styles/abstracts/variables';
.wrapper {
    display: flex;
    flex-direction: column;
    padding: 20px;
    @include mq($from: tablet) {
        flex-direction: row;
    }
}

#price {
    flex: 1 1 0;
}
#paymentOptions {
    flex: 1 1 0;
}

.percent {
    strong {
        transition: 0.2s;
    }
    color: #49cba4;
    font-size:1.1rem;
}



</style>
