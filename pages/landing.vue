<template>
    <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <header class="w-full p-6 mt-20 text-center">
            <h1 class="text-5xl font-bold text-gray-900">
                Automate. Connect. Simplify.
            </h1>
            <p class="text-xl text-gray-600 mt-4">
                Revolutionize the way you integrate and automate your workflows.
            </p>
        </header>

        <main class="flex flex-col items-center w-full">
            <div class="mt-8">
                <Button class="text-4xl" size="extra_lg" @click="redirectToLogin">
                    Get Started
                </Button>
            </div>
            <section class="mt-20 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
                <FeatureCard
                    title="Connect"
                    description="Easily link your favorite apps and tools."
                    :icon="connectIcon"
                />
                <FeatureCard
                    title="Automate"
                    description="Eliminate repetitive tasks with powerful workflows."
                    :icon="automateIcon"
                />
                <FeatureCard
                    title="Simplify"
                    description="Streamline your processes and save time."
                    :icon="simplifyIcon"
                />
            </section>
            <section class="mt-10 pt-12 pb-10 w-full bg-white">
                <div class="max-w-6xl mx-auto">
                    <h2 class="text-4xl font-bold text-gray-800 text-center mb-8">
                        Supported Services
                    </h2>
                    <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
                        <div v-for="service in services"
                                :key="service.name"
                                class="flex flex-col items-center justify-center p-4">
                            <img
                                :src="service.logo"
                                :alt="service.name"
                                class="h-16 w-16 object-contain"
                            />
                            <p class="mt-3 text-md font-medium text-gray-700">{{ service.name }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="pt-10 w-full bg-blue-50 py-10">
                <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between px-6 md:px-12">
                    <div class="text-center md:text-left">
                        <h2 class="text-3xl font-bold text-gray-800">
                            Download the App
                        </h2>
                        <p class="mt-2 text-gray-600">
                            Get the best experience on your mobile device. Available on iOS and Android.
                        </p>
                    </div>
                    <div class="ms-6 mt-6 md:mt-0 flex justify-center gap-4">
                        <a  href="https://www.apple.com/app-store/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/assets/images/badges/appstore.svg" alt="Download on the AppStore" class="w-60"/>
                        </a>
                        <a  href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/assets/images/badges/playstore.png" alt="Download on the PlayStore" class="w-60"/>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>

    import FeatureCard from '~/components/ui/FeatureCard.vue';
    import { Button } from '@/components/ui/button'
    import { useRouter } from 'vue-router'

    const $router = useRouter()

    const automateIcon = `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='size-10'>
                                <path stroke-linecap='round' stroke-linejoin='round' d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z' />
                                <path stroke-linecap='round' stroke-linejoin='round' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
                        </svg>`

    const connectIcon = `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='size-10'>
                                <path stroke-linecap='round' stroke-linejoin='round' d='M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244'/>
                        </svg>`

    const simplifyIcon =    `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='size-10'>
                                <path stroke-linecap='round' stroke-linejoin='round' d='m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z' />
                            </svg>`

    const services = [
        { name: 'Apple Music', logo: 'assets/images/service_icons/apple_music.png' },
        { name: 'Open AI', logo: 'assets/images/service_icons/open_ai.png' },
        { name: 'Spotify', logo: 'assets/images/service_icons/spotify.png' },
        { name: 'Discord', logo: 'assets/images/service_icons/discord.png' },
        { name: 'Revolut', logo: 'assets/images/service_icons/revolut.png' },
        { name: 'GitHub', logo: 'assets/images/service_icons/github.png' },
        { name: 'Shazam', logo: 'assets/images/service_icons/shazam.png' },
        { name: 'Notion', logo: 'assets/images/service_icons/notion.png' },
        { name: 'Slack', logo: 'assets/images/service_icons/slack.png' },
        { name: 'Trello', logo: 'assets/images/service_icons/trello.png' },
        { name: 'Google Trad', logo: 'assets/images/service_icons/google_trad.png' },
        { name: 'Bluesky', logo: 'assets/images/service_icons/bluesky.png' },
        ];

    const redirectToLogin = () => {
        $router.push('/login');
    }

</script>
