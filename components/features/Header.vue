<template>
    <div class="container-fluid">
        <div class="hero container">
            <div class="row">
                <div class="col-md-6 align-items-center d-flex">
                    <div>
                        <h1 data-aos="fade-right">Fast, Scalable, and Declarative Data Management</h1>
                        <p class="baseline" data-aos="fade-left">Create and Deploy all kinds of Data Pipelines with Ease and Speed with Kestra: Your All-in-One Solution for Orchestrating Workflows</p>
                        <div class="cta">
                            <NuxtLink href="/docs/getting-started" class="btn btn-lg btn-primary mx-2 mt-2" data-aos="zoom-in">
                                <Flash /> Get started
                            </NuxtLink>
                            <a href="https://demo.kestra.io/ui/login?auto" target="_blank" class="btn btn-lg btn-purple-transparent mx-2 mt-2" data-aos="zoom-in">
                                <Console /> Live demo
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6" data-aos="zoom-in">
                    <img class="zoom img-fluid" src="/landing/features/header.png" alt="A screenshot of the user interface of Kestra's application"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Flash from "vue-material-design-icons/Flash.vue";
    import Console from "vue-material-design-icons/Console.vue"

    export default {
        components: {Flash, Console},
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/variable";

    .btn-purple-transparent {
        background: $purple-30;
        color: var(--bs-white);
    }

    .container-fluid {
        background: $purple-19;
        color: var(--bs-white);
        padding-top: 80px;
        margin-top: -80px;
    }
</style>

