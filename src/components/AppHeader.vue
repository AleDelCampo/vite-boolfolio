<script>
export default {
    name: 'AppHeader',
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

                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                        <label class="btn btn-outline-danger fw-bold" for="btnradio1">PROVA</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                        <label class="btn btn-outline-warning fw-bold" for="btnradio2">PROVA</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                        <label class="btn btn-outline-danger fw-bold" for="btnradio3">PROVA</label>
                    </div>

                </div>
            </nav>
        </div>
    </header>

</template>

<style lang="scss">

</style>