<template>
    <div class="new-note-creator">
        <label>Priority <br>
            <select class="priority" v-model="note.priorityLevel">
                <option disabled value="">Choose note priority</option>
                <option value="-1">Low</option>
                <option value="0">Normal</option>
                <option value="1">High</option>
            </select>
        </label>

        <label>Note Title
            <input v-model="note.title" type="text" maxlength="30">
        </label>

        <label> Note Description
            <textarea v-model="note.description" maxlength="50"></textarea>
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

    select.priority {
        width: 100%;
        height: 50px;
        padding: 0 20px;
        background-color: white;
        color: $neutral-primary;
        border-radius: 20px;
        margin-bottom: 30px;

        -moz-appearance:none; /* Firefox */
        -webkit-appearance:none; /* Safari and Chrome */
        appearance: none;

        background-image:
                linear-gradient(45deg, transparent 50%, gray 50%),
                linear-gradient(135deg, gray 50%, transparent 50%),
                linear-gradient(to right, #ccc, #ccc);
        background-position:
                calc(99% - 20px) calc(1em + 5px),
                calc(99% - 15px) calc(1em + 5px),
                calc(99% - 2.5em) 0.75em;
        background-size:
                5px 5px,
                5px 5px,
                1px 1.5em;
        background-repeat: no-repeat;
    }

    .new-note-creator {
        text-align: center;
        margin: 30px 0;
    }
</style>