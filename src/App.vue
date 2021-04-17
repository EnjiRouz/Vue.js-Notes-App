<template>
    <!--  header-->
    <div class="wrapper">
        <div class="wrapper-content">
            <section>
                <div class="container">
                    <h1 class="title">{{ title }}</h1>

                    <!-- предупреждение -->
                    <message v-if="message" :message="message"/>

                    <!-- новая заметка -->
                    <new-note-creator :note="note" @addNote="addNewNote"/>

                    <!-- отображение заметок -->
                    <notes :notes="notes" @remove="removeNote"/>
                </div>
            </section>
        </div>
    </div>
    <!--  footer-->
</template>

<script>
    import message from '@/components/Message.vue'
    import newNoteCreator from "@/components/NewNoteCreator";
    import notes from "@/components/Notes";

    export default {
        components: {
            message,
            newNoteCreator,
            notes
        },
        data() {
            return {
                title: 'Notes App',
                message: null,
                note: {
                    title: '',
                    description: ''
                },
                notes: [
                    {
                        title: 'Welcome Note',
                        description: 'Start Creating Notes Now!',
                        date: new Date(Date.now()).toLocaleString()
                    },
                    {
                        title: 'Shopping List',
                        description: 'Milk, coffee, cookies',
                        date: new Date(Date.now()).toLocaleString()
                    },
                    {
                        title: 'TODO List',
                        description: 'Clean house, cook dinner',
                        date: new Date(Date.now()).toLocaleString()
                    }
                ]
            }
        },
        methods: {
            addNewNote() {
                let {title, description} = this.note;
                if (title === '') {
                    this.message = "Title can't be blank";
                    return false;
                }
                this.notes.push({
                    title,
                    description,
                    date: new Date(Date.now()).toLocaleString()
                });
                this.note.title = "";
                this.note.description = "";
                this.message = null;
            },
            removeNote(index) {
                this.notes.splice(index, 1)
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
