<template>
            <div id="topbar" class = "flex justify-between md:hidden">
                <img src="../assets/header-logo.png" alt="logo" class="w-10/12 mt-6"/>
                <button id="menuButton" class = "p-4 focus:outline-none focus: bg-white-700">
                    <svg class = "h-9 w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
</template>

<style>

#topbar {
    background-color: #093254;
    width: 100%;
}

#menuButton {
    background-color: #093254;
    color: white;
}

.img {
    background-color: #093254;
}
</style>