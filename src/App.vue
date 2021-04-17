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

                    <!-- режим отображения -->
                    <div class="note-header">
                        <h1>Your Notes</h1>
                        <div class="icons">
                            <svg :class="{ active: grid }" @click="grid = true" xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                            <svg :class="{ active: !grid }" @click="grid = false" xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                <line x1="3" y1="6" x2="3" y2="6"></line>
                                <line x1="3" y1="12" x2="3" y2="12"></line>
                                <line x1="3" y1="18" x2="3" y2="18"></line>
                            </svg>
                        </div>
                    </div>

                    <!-- отображение заметок -->
                    <notes :notes="notes" :grid="grid" @remove="removeNote"/>
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
                grid: true,
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
