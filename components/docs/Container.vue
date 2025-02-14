<template>
    <div class="container bd-gutter bd-layout margin">
        <NavSideBar :type="type" v-if="pageList" :page-list="pageList"/>

        <article class="bd-main order-1" v-if="page" :class="{'full': page.rightBar === false , 'docs' : isDoc}">
            <ContentRenderer :value="page">
                <div class="bd-title">
                    <Breadcrumb :slug="props.slug" :pageList="pageList"/>
                    <h1 v-html="transformTitle(page.title)" class="py-0 title "></h1>
                </div>

                <NavToc :page="page"/>

                <div class="bd-content">
                    <ContentRendererMarkdown
                        class="bd-markdown"
                        :value="page"
                        data-bs-spy="scroll"
                        data-bs-target="#nav-toc"
                    />
                    <PrevNext v-if="prevNext" :base-path="`/${type}`"/>
                </div>
            </ContentRenderer>
        </article>
    </div>
</template>

<script setup>
    import PrevNext from "./PrevNext.vue";
    import NavSideBar from "./NavSideBar.vue";
    import Breadcrumb from "./Breadcrumb.vue";
    import NavToc from "./NavToc.vue";
    import {hash} from "ohash";

    const props = defineProps({
        slug: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        prevNext: {
            type: Boolean,
            required: false,
            default: true
        },
    })
    const isDoc = computed(()=> props.type === 'docs')
    const {data: page, error} = await useAsyncData(`Container-${hash(props.slug)}`, () => {
        try {
            return queryContent(props.slug).findOne();
        } catch (error) {
            throw createError({statusCode: 404, message: error.toString(), data: error, fatal: true})
        }
    });

    if (error && error.value) {
        throw error.value;
    }

    const {data: pageList} = await useAsyncData(
        `Container-pageList-${hash(props.type)}`,
        () => queryContent(props.type).only("_path").find(),
        {
            transform: (pages) => pages.map(e => e._path)
        }
    );

    useContentHead(page)

    const transformTitle = (text) => {
        return text
            .replace(/([A-Z])/g, '&#x200B;$1')
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    }
    const {description, title} = page.value;
    const { origin } = useRequestURL()
    useHead({
        meta: [
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@kestra_io' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: `${origin}/landing/home/header-bg.png` },
            { name: 'twitter:image:alt', content: title }
        ]
    })
</script>
<style lang="scss" scoped >
@import "../../assets/styles/variable";
.container{
    max-width: 1500px;
    .title{
        font-size: 2.375rem;
        font-weight: 600;
        line-height: 3.25rem;
    }
}
:deep(p){
    font-weight: 400;
    line-height: 1.75rem;
}
:deep(p > a){
    text-decoration: underline;
}
:deep(h2 > a){
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2.375;
    margin: 0px;
}
:deep(h3 > a ){
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2.375;
}


.docs :deep(img){
    width: 100%;
}
</style>
 


