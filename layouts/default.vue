<script lang="ts" setup>
const route = useRoute()
// const router = useRouter()

// const goBack = () => {
//   router.go(-1)
// }

// type Link = {
//   text: string
//   href: string
//   icon: string
//   notification?: boolean
// }

// const announcementStore = useAnnouncementStore()

// const links = computed<Link[]>(() => {
//   return [
//     {
//       text: 'Home',
//       href: '/',
//       icon: 'feather:home'
//     },
//     {
//       text: 'Programs',
//       href: '/programs',
//       icon: 'feather:briefcase'
//     },
//     {
//       text: 'Updates',
//       href: '/updates',
//       icon: 'feather:bell',
//       notification: announcementStore.showNotification
//     }
//   ]
// })
</script>

<template>
  <main :class="route.meta.home ? 'home' : ''">
    <Navbar/>
    <slot/>
  </main>
</template>
