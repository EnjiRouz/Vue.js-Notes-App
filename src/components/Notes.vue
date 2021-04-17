<template>
    <div class="notes">
        <div class="note" :class="{ full: !grid}" v-for="(note) in notes" :key="note.id">
            <div class="note-header">
                <p>{{ note.title }}</p>
                <button class="close-btn" @click="removeNote(note.id)">x</button>
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
        width: 48%;
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