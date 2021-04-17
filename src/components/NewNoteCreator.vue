<template>
    <div class="new-note">
        <label>Note Title</label>
        <input v-model="note.title" type="text">

        <label>Note Description</label>
        <textarea v-model="note.description"></textarea>

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
    .new-note {
        text-align: center;
    }
</style>