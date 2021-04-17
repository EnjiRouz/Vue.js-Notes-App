<template>
    <div class="notes">
        <div class="note" v-for="(note, index) in notes" :key="index">
            <div class="note-header">
                <p>{{ note.title }}</p>
                <button class="close-btn" @click="removeNote(index)">x</button>
            </div>
            <div class="note-body">
                <p>{{ note.description }}</p>
                <span>{{ note.date }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Notes",
        props: {
            notes: {
                type: Array,
                required: true
            }
        },
        methods: {
            removeNote(index) {
                this.$emit('remove', index)
            }
        }
    }
</script>

<style scoped lang="scss">
    .notes {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 40px 0;
    }

    .note {
        width: 48%;
        padding: 18px 20px;
        margin-bottom: 20px;
        background-color: white;
    }

    .note-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            font-weight: bold;
            color: #494ce8;
        }
    }

    .note-body {
        p {
            margin: 20px 0;
        }

        span {
            font-size: 14px;
            color: grey;
        }
    }

    .close-btn {
        color: #494ce8;
        background-color: white;
        border: none;
        cursor: pointer;
    }
</style>