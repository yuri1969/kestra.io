<template>
    <div>
        <BlueprintsHeader :page="page" :graph="graph" :slug="slug" :icons="icons" :flow="flowAsMd"/>
        <div class="container">
            <BlueprintsDetail :page="page" :description="descriptionAsMd"/>
            <BlueprintsRelated
                v-if="relatedBlueprints.length > 0"
                :related-blueprints="relatedBlueprints"
                :icons="icons"
                :tags="tags"
            />
            <BlueprintsNewToKestra />
        </div>
    </div>
</template>

<script setup>
    const route = useRoute()
    const slug = ref("/blueprints/" + (route.params.slug instanceof Array ? route.params.slug.join('/') : route.params.slug));
    const page = ref()
    const icons = ref()
    const relatedBlueprints = ref([])
    const graph = ref({})
    const descriptionAsMd = ref("")
    const flowAsMd = ref("")

    const {data: tags} = await useAsyncData('blueprints-tags', () => {
        return $fetch('https://api.kestra.io/v1/blueprints/tags')
    })

    const {data: blueprintInformations} = await useAsyncData('blueprints-informations', () => {
        return $fetch(`/api/blueprint?query=${route.params.id}`)
    })

    page.value = blueprintInformations.value.page
    relatedBlueprints.value = blueprintInformations.value.relatedBlueprints
    graph.value = blueprintInformations.value.graph
    descriptionAsMd.value = blueprintInformations.value.descriptionAsMd
    flowAsMd.value = blueprintInformations.value.flowAsMd
</script>