<template>
    <div class="new-note">
        <label>Note Title
            <input v-model="note.title" type="text">
        </label>

        <label> Note Description
            <textarea v-model="note.description"></textarea>
        </label>

        <button class="btn btnPrimary" @click="addNewNote">Create New Note</button>
    </div>
</template>

<script>
    export default {
        name: "NewNoteCreator",
        props: {
            note: {
                type: Object,
                required: true
            }
        },
        methods: {
            addNewNote() {
                this.$emit('addNote', this.note)
            }
        }
    }
</script>

<style lang="scss">
    textarea {
        font-family: $mainFont;
    }

    .new-note {
        text-align: center;
    }
</style>