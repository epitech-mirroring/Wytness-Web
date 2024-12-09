    <template>
    <div class="min-h-screen flex flex-col items-center justify-center">
        <header class="w-full p-6 text-center">
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

            <section class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
                <FeatureCard
                    title="Connect"
                    description="Easily link your favorite apps and tools."
                    icon="🔗"
                />
                <FeatureCard
                    title="Automate"
                    description="Eliminate repetitive tasks with powerful workflows."
                    icon="⚙️"
                />
                <FeatureCard
                    title="Simplify"
                    description="Streamline your processes and save time."
                    icon="✨"
                />
            </section>
        </main>
    </div>
</template>

<script setup>

    import FeatureCard from '~/components/ui/FeatureCard.vue';
    import { Button } from '@/components/ui/button'
    import { useRouter } from 'vue-router'

    const $router = useRouter()

    const redirectToLogin = () => {
        $router.push('/login');
    }

</script>
