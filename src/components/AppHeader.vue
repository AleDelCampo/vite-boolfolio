<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            filterQuery: ''
        };
    },
    methods: {
        filterProjects() {
            this.$emit('filter-projects', this.filterQuery);
        }
    }
}
</script>


<template>

    <header class="bg-body-tertiary">
        <div class="container">
            <nav class="navbar">
                <div class="container-fluid d-flex justify-content-between">

                    <a href="#">
                        <img src="https://fontmeme.com/permalink/240430/990fbe74ade8eac19477253ccd13ab23.png" alt="casper-font" border="0">
                    </a>

                    <div>
                        <input type="text" v-model="filterQuery" placeholder="Filtra progetti..." @input="filterProjects">
                    </div>

                </div>
            </nav>
        </div>
    </header>

</template>

<style lang="scss">
    
</style>