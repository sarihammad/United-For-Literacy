<template>
    <div  class="relative min-h-screen md:flex" style="width: fit-content;">
        <MobileMenu />
        <Navbar />
        <slot />
    </div>
</template>

<style>
    .layoutContainer {
        display: flex;
    }
</style>