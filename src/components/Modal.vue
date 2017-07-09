<template lang="html">
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
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
    data() {
        return {};
    },
};
</script>
