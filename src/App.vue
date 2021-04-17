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

                    <!-- режим отображения и поиск -->
                    <div class="note-header">
                        <h1>Created Notes</h1>

                        <search :value="search"
                                placeholder="Find a note"
                                @search="search = $event"/>

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

                    <!-- созданные заметки -->
                    <notes :notes="getFilteredNotes" :grid="grid" @remove="removeNote"/>
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
    import search from "@/components/Search";

    export default {
        components: {
            message,
            newNoteCreator,
            notes,
            search
        },

        data() {
            return {
                uniqueId: 2,
                title: 'Notes App',
                message: null,
                grid: true,
                search: '',
                note: {
                    id: null,
                    title: '',
                    description: ''
                },
                notes: [
                    {
                        id: 0,
                        title: 'Welcome Note',
                        description: 'Start Creating Notes Now!',
                        date: new Date(Date.now()).toLocaleString()
                    },
                    {
                        id: 1,
                        title: 'Shopping List',
                        description: 'Milk, coffee, cookies',
                        date: new Date(Date.now()).toLocaleString()
                    },
                    {
                        id: 2,
                        title: 'TODO List',
                        description: 'Clean house, cook dinner',
                        date: new Date(Date.now()).toLocaleString()
                    }
                ]
            }
        },

        computed: {
            getFilteredNotes() {
                let notesToShow = this.notes,
                    notesToSearch = this.search;
                if (!notesToSearch) return notesToShow;

                notesToSearch = notesToSearch.trim().toLowerCase();
                notesToShow = notesToShow.filter(function (item) {
                    if (item.title.toLowerCase().indexOf(notesToSearch) !== -1
                        || item.description.toLowerCase().indexOf(notesToSearch) !== -1) {
                        return item;
                    }
                });

                return notesToShow;
            }
        },

        methods: {
            addNewNote() {
                let {id, title, description} = this.note;
                if (title === '') {
                    this.message = "Title can't be blank";
                    return false;
                }
                this.notes.push({
                    id: this.getUniqueId(),
                    title,
                    description,
                    date: new Date(Date.now()).toLocaleString()
                });
                this.note.id = null;
                this.note.title = "";
                this.note.description = "";
                this.message = null;
            },

            removeNote(noteId) {
                let allNotes = this.notes;
                for (let index = 0; index < allNotes.length; index++) {
                    if (allNotes[index].id === noteId)
                        allNotes.splice(index, 1);
                }
            },

            getUniqueId() {
                return this.uniqueId += 1;
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
