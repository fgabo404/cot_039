<template>
  <div>
    <pre>{{ valueString }}</pre>
  </div>
</template>
<script>
    export default {
        name: "tool-displayer",
        props: {
            title: {
                type: String,
            },
            value: {
                required: true,
            },
        },
        computed: {
            valueString() {
                return JSON.stringify(this.value, null, 2);
            },
        },
    };
</script>
<style scoped>
    pre {
        text-align: start;
        font-family: "Montserrat";
        font-size: 11px;
    }
</style>
