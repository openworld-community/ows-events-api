<template>
    <footer
        class="lg:pt-15 bg-accent-navy-dark text-white sm:px-6 md:px-8 md:pb-8 md:pt-10 lg:px-10 lg:pb-10 xl:px-16 xl:pb-12 xl:pt-20"
    >
        <div class="flex items-center justify-between">
            <div class="flex w-1/2 items-center gap-32">
                <div class="w-full max-w-[150px]">
                    <Logo />
                </div>
                <SocialIcons />
            </div>
            <div class="flex w-1/2 items-center justify-between">
                <FooterNav />
            </div>
        </div>
        <div class="flex items-center pt-8">
            <FooterBottomNav />
            <Copyright />
        </div>
    </footer>
</template>

<style></style>
