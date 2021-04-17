<template>
    <div class="message">
        <p>Error! {{ message }}</p>
    </div>
</template>

<script>
    export default {
        name: "Message",
        props: {
            message: {
                type: String,
                required: true,
                default: '-'
            }
        }
    }
</script>

<style scoped lang="scss">
    .message {
        text-align: center;
    }

    p {
        color: #fc5c65;
    }
</style>