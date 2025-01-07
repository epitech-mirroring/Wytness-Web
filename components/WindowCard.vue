<template>
    <div :class="$style.frameParent">
        <div :class="$style.frameRedButton" />
        <div :class="$style.frameYellowButton" />
        <div :class="$style.frameGreenButton" />

        <template v-if="variant === 'card1'">
            <div :class="$style.frameChild" id="frameChild1Format1"/>
            <div :class="$style.frameChild" id="frameChild2Format1" />
            <div :class="$style.frameChild" id="frameChild3Format1" />
            <div :class="$style.frameChild" id="frameChild4Format1" />
        </template>

        <template v-else-if="variant === 'card2'">
            <div :class="$style.frameChildFormat2" id="frameChild1Format2" />
            <div :class="$style.frameChildFormat2" id="frameChild2Format2" />
            <div :class="$style.frameChildFormat2" id="frameChild3Format2" />
            <div :class="$style.frameChildFormat2" id="frameChild4Format2" />
            <div :class="$style.frameChildFormat2" id="frameChild5Format2" />
            <div :class="$style.frameChildFormat2" id="frameChild6Format2" />
            <div :class="$style.frameChildFormat2" id="frameChild7Format2" />
        </template>


    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'WindowCard',
        props: {
            variant: {
            type: String,
            required: true,
            validator: (value) => ['card1', 'card2'].includes(value),
            },
        },
    });
</script>
<style  module>
    .frameRedButton {
        position: absolute;
        top: 15px;
        left: 16px;
        border-radius: 32px;
        background-color: #ea695f;
        width: 8px;
        height: 8px;
        overflow: hidden;
    }
    .frameYellowButton {
        position: absolute;
        top: 15px;
        left: 29px;
        border-radius: 32px;
        background-color: #f2be4e;
        width: 8px;
        height: 8px;
        overflow: hidden;
    }
    .frameGreenButton {
        position: absolute;
        top: 15px;
        left: 42px;
        border-radius: 32px;
        background-color: #66c455;
        width: 8px;
        height: 8px;
        overflow: hidden;
    }
    .frameChild, .frameChildFormat2, .frameDiv {
        position: absolute;
        border-radius: 19px;
        overflow: hidden;
    }
    .frameChildFormat2 {
        transform:  rotate(90deg);
        transform-origin: 0 0;
    }
    .frameParent {
        width: 254px;
        position: relative;
        box-shadow: 0px 3px 14.4px -2px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(39.5px);
        border-radius: 21px;
        background-color: rgba(255, 255, 255, 0.75);
        height: 191px;
        overflow: hidden;
    }
</style>
<style>
    #frameChild1Format1 {
        top: 52px;
        left: 16px;
        background-color: #d9d9d9;
        width: 123px;
        height: 12px;
    }
    #frameChild2Format1 {
        top: 75px;
        left: 16px;
        background-color: #d9d9d9;
        width: 146px;
        height: 12px;
    }
    #frameChild3Format1 {
        top: 98px;
        left: 16px;
        background-color: #d9d9d9;
        width: 139px;
        height: 12px;
    }
    #frameChild4Format1 {
        top: 150px;
        left: 16px;
        background-color: #000;
        width: 91px;
        height: 12px;
    }
    #frameChild1Format2 {
        top: 92px;
        left: 62px;
        background-color: #000;
        width: 82px;
        height: 12px;
    }
    #frameChild2Format2 {
        top: 66px;
        left: 91px;
        background-color: #776de3;
        width: 108px;
        height: 12px;
    }
    #frameChild3Format2 {
        top: 108px;
        left: 120px;
        background-color: #000;
        width: 66px;
        height: 12px;
    }
    #frameChild4Format2 {
        top: 40px;
        left: 149px;
        background-color: #776de3;
        width: 134px;
        height: 12px;
    }
    #frameChild5Format2 {
        top: 54px;
        left: 178px;
        background-color: #000;
        width: 120px;
        height: 12px;
    }
    #frameChild6Format2 {
        top: 134px;
        left: 207px;
        background-color: #ea695f;
        width: 40px;
        height: 12px;
    }
    #frameChild7Format2 {
        top: 126px;
        left: 238px;
        background-color: #000;
        width: 48px;
        height: 12px;
    }
</style>
