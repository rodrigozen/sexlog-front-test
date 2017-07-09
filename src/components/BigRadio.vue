<template lang="html">
    <label class="big-radio">
        <input :name='name' type="radio" :checked="checked ? checked : null">
        <div class="big-radio-wrapper">
            <div class="big-radio-dot"></div>
            <div class="big-radio-label">
                <slot name='label'></slot>
            </div>
        </div>
    </label>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
        },
        checked: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
