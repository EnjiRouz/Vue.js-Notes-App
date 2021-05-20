<template>
    <div class="notes">
        <div class="note" :class="{ full: !grid}" v-for="(note) in notes" :key="note.id">
            <div class="priority" :class="{ high: note.priorityLevel > 0, low: note.priorityLevel < 0}"></div>
            <div class="text-content">
                <div class="note-header">
                    <input class="note-editor"
                           v-if="note.titleEditModeEnabled"
                           v-model="note.title"
                           @blur="[note.titleEditModeEnabled = false, note.date = new Date(Date.now()).toLocaleString(), $emit('update')]"
                           @keyup.enter="[note.titleEditModeEnabled=false, note.date = new Date(Date.now()).toLocaleString(), $emit('update')]"
                           v-focus>
                    <p v-else @click="note.titleEditModeEnabled = true">{{ note.title }}</p>
                    <button class="close-btn" @click="removeNote(note.id)">x</button>
                </div>
                <div class="note-body">
                    <input class="note-editor"
                           v-if="note.descriptionEditModeEnabled"
                           v-model="note.description"
                           @blur="[note.descriptionEditModeEnabled = false, note.date = new Date(Date.now()).toLocaleString(), $emit('update')]"
                           @keyup.enter="[note.descriptionEditModeEnabled=false, note.date = new Date(Date.now()).toLocaleString(), $emit('update')]"
                           v-focus>
                    <p v-else @click="note.descriptionEditModeEnabled = true">{{ note.description }}</p>
                    <span>{{ note.date }}</span>
                </div>
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
            },
            grid: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            removeNote(noteId) {
                this.$emit('remove', noteId)
            }
        },
        directives: {
            focus: {
                // когда привязанный элемент вставлен в DOM - переключаем фокус на элемент
                // Подробнее о директивах: https://ru.vuejs.org/v2/guide/custom-directive.html
                inserted (note) {
                    note.focus()
                }
            }
        }
    }
</script>

<style lang="scss">
    .notes {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 40px 0;
    }

    .note {
        display: flex;
        align-items: center;
        justify-content: left;

        width: 48%;
        height: 200px;
        padding: 18px 20px;
        margin-bottom: 20px;
        background-color: white;

        transition: all .25s cubic-bezier(.025, .01, .50, 1);
        box-shadow: 0 30px 30px rgba(0, 0, 0, .025);

        &:hover {
            box-shadow: 0 30px 30px rgba(0, 0, 0, .04);
            transform: translate(0, -5px);
            transition-delay: 0s !important;
        }

        &.full {
            width: 100%;
        }
    }

    .text-content {
        width: 100%;
    }

    .note-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            font-weight: bold;
            color: #494ce8;
        }

        svg {
            margin-right: 12px;
            color: grey;
            cursor: pointer;

            &.active {
                color: #494ce8;
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }

    .note-editor {
        height: auto;
        padding: 0;
        margin-bottom: 0;
        border-radius: 5px;

        font-family: "Montserrat", Helvetica, Arial, sans-serif;
        font-size: 100%;
        font-weight: bold;
        color: #494ce8;
    }

    .note-body {
        p {
            margin: 20px 0;
            max-height: 50px;
            overflow-x: hidden;
            overflow-y: auto;
        }

        span {
            font-size: 14px;
            color: grey;
        }

        .note-editor {
            margin: 20px 0;
            max-height: 50px;
            overflow-x: hidden;
            overflow-y: auto;

            font-weight: normal;
            color: black;
        }
    }

    .close-btn {
        color: #494ce8;
        background-color: white;
        border: none;
        cursor: pointer;
    }

    .priority {
        width: 15px;
        height: 110px;
        margin-right: 30px;

        border-radius: 20px;
        background-color: $success-color;

        &.high {
            background-color: $danger-color;
        }

        &.low {
            background-color: $primary-color;
        }
    }
</style>