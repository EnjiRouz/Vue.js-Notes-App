<template>
    <div class="wrapper__search">
        <div class="search">
            <div class="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="feather feather-search">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>
        </div>

        <input type="text" :placeholder="placeholder" v-model="search"/>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                required: true
            },
            placeholder: {
                type: String,
                default: 'Search'
            }
        },
        data() {
            return {search: this.value}
        },
        watch: {
            search(value) {
                this.$emit('search', value);
            }
        }
    }
</script>

<style scoped>
    svg {
        color: #e4e4e4;
    }

    .wrapper__search {
        position: relative;
    }

    .search {
        top: 0;
        bottom: 0;
        left: 0;
        position: absolute;
    }

    .search-icon {
        height: 100%;
        padding-left: 16px;
        padding-right: 16px;
        align-items: center;
        display: flex;
    }

    input {
        padding: 16px 16px 16px 56px !important;
        margin-bottom: 0;
        border-radius: 30px;
        color: #909399;
        font-size: 16px;
        min-width: 4000px;
        height: auto;
    }
</style>


