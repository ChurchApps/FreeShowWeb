<script>
    import "@svelteness/kit-docs/client/polyfills/index.js"
    import "@svelteness/kit-docs/client/styles/normalize.css"
    import "@svelteness/kit-docs/client/styles/fonts.css"
    import "@svelteness/kit-docs/client/styles/theme.css"
    import "$lib/styles/kit-docs.css"
    import "$lib/styles/main.css"

    import { page } from "$app/stores"

    import { createKitDocsLoader, KitDocs, KitDocsLayout, Button, SocialLink, createSidebarContext } from "@svelteness/kit-docs"
    import Footer from "../components/Footer.svelte"

    /* * @type {import('./$types').PageData} */
    /** @type any */
    export let data

    let { meta, sidebar } = data
    $: ({ meta, sidebar } = data)

    // $: console.log(sidebar, sidebar?.links?.["."])
    // $: if (sidebar?.links?.["."]?.length) removePage()
    // function removePage() {
    //     console.log(sidebar)
    //     /** @type any */
    //     let newSidebar = sidebar
    //     const formatLink = (/** @type any */ link) => {
    //         link.slug = link.slug.replace("\\+page", "")
    //         return link
    //     }
    //     if (sidebar) sidebar.links["."] = newSidebar.links["."].map(formatLink)
    //     console.log(sidebar)
    // }

    /** @type {import('@svelteness/kit-docs').SidebarConfig} */
    $: if (sidebar)
        sidebar = {
            links: {
                "Getting started": [
                    { title: "Introduction", slug: "/docs/introduction" },
                    { title: "Compare", slug: "/docs/compare" },
                    { title: "Features", slug: "/docs/features" },
                    // { title: "Application", slug: "/docs/application" },
                ],
                Installation: [
                    { title: "Windows", slug: "/docs/windows" },
                    { title: "MacOS", slug: "/docs/macos" },
                    { title: "Linux", slug: "/docs/linux" },
                ],
                Projects: [
                    { title: "Projects", slug: "/docs/projects" },
                    { title: "Project", slug: "/docs/project" },
                ],
                Show: [
                    { title: "Shows", slug: "/docs/show" },
                    { title: "Editing", slug: "/docs/editing" },
                    { title: "Items", slug: "/docs/items" },
                    { title: "Layouts", slug: "/docs/layouts" },
                    { title: "Tools", slug: "/docs/tools" },
                ],
                Drawer: [
                    { title: "Drawer", slug: "/docs/drawer" },
                    { title: "Scripture", slug: "/docs/scripture" },
                ],
                Outputs: [
                    { title: "Output", slug: "/docs/output" },
                    { title: "Multiple outputs", slug: "/docs/outputs" },
                ],
                Remote: [
                    // { title: "Remote", slug: "/docs/remote" },
                    { title: "Stage", slug: "/docs/stage" },
                ],
                Actions: [
                    { title: "Importing", slug: "/docs/importing" },
                    { title: "Exporting", slug: "/docs/exporting" },
                ],
                Tips: [
                    // { title: "Roadmap", slug: "/docs/roadmap" },
                    { title: "Styling", slug: "/docs/styling" },
                ],
            },
        }

    /** @type {import('@svelteness/kit-docs').NavbarConfig} */
    const navbar = {
        links: [
            { title: "Downloads", slug: "/downloads", match: /\/downloads/ },
            { title: "Docs", slug: "/docs", match: /\/docs/ },
        ],
    }

    const { activeCategory } = createSidebarContext(sidebar)

    $: category = $activeCategory ? `${$activeCategory}: ` : ""
    $: title = meta ? `FreeShow Docs | ${category}${meta.title}` : null
    $: description = meta?.description
</script>

<svelte:head>
    {#key $page.url.pathname}
        {#if title}
            <title>{title}</title>
        {/if}
        {#if description}
            <meta name="description" content={description} />
        {/if}
    {/key}
</svelte:head>

<KitDocs {meta}>
    <KitDocsLayout {navbar} {sidebar}>
        <!-- <input type="text" placeholder="Search documentation" slot="search" /> -->

        <div slot="navbar-left">
            <div class="logo">
                <Button href="/">
                    <div class="main-logo">
                        <img src="/favicon-32x32.png" alt="Logo" style="width: 30px;object-fit: contain;" />
                        FreeShow
                    </div>
                </Button>
            </div>
        </div>

        <div class="socials" slot="navbar-right-alt">
            <SocialLink type="gitHub" href="https://github.com/vassbo/freeshow" />
        </div>

        <slot />
    </KitDocsLayout>

    <Footer />
</KitDocs>

<style>
    .logo :global(a),
    .main-logo {
        color: rgb(var(--kd-color-inverse));
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-weight: bold;
        font-size: 1.1em;
    }

    .logo :global(svg) {
        height: 36px;
        overflow: hidden;
    }

    .socials {
        display: flex;
        margin-left: -0.25rem;
    }
</style>
