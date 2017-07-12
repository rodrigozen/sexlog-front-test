<template lang="html">
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <div v-if="backButton" class="modal-back is-clicable" @click="$emit('goBack')">
                            <svg viewbox="0 0 10 10" width="15" height="15">
                              <path class="back-icon" d="M 5,7.5 L 10,12.5 M 10,2.5 L 5,7.5" />
                            </svg>
                        </div>
                        <div class="modal-title">
                            <slot name="header"></slot>
                        </div>
                        <div class="modal-close is-clicable" @click="$emit('close')">
                            <svg viewbox="0 0 10 10" width="15" height="15">
                              <path class="close-x" d="M 5,5 L 10,10 M 10,5 L 5,10" />
                            </svg>
                        </div>
                    </div>
                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">

                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        'back-button': {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {};
    },
};
</script>
