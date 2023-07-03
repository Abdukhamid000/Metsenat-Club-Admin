<template>
  <div class="bg-white middle p-5">
    <div
      class="mx-auto max-w-[1200px] w-full max-w-1200 gap-3 grid md:grid-cols-1-2max md:grid-rows-1 grid-cols-1 grid-rows-2 md:gap-5"
    >
      <div
        class="flex w-full max-w-full col-start-1 row-start-1 col-span-2 md:col-span-1 md:max-w-xl"
      >
        <router-link
          to="/"
          class="uppercase flex transition-300 hover:bg-primary hover:text-white items-center justify-center text-xs middle font-medium text-primary/60 transition-colors duration-200 tracking-widest border-2 border-[#E0E7FF] w-full h-10 rounded-l-md border-r-0"
        >
          Dashboard
        </router-link>
        <router-link
          to="/"
          class="uppercase flex transition-300 hover:bg-primary hover:text-white items-center justify-center text-xs middle font-medium text-primary/60 transition-colors duration-200 tracking-widest border-2 border-[#E0E7FF] w-full h-10 border-x-0"
        >
          Homiylar
        </router-link>
        <router-link
          to="/"
          class="uppercase flex transition-300 hover:bg-primary hover:text-white items-center justify-center text-xs middle font-medium text-primary/60 transition-colors duration-200 tracking-widest border-2 border-[#E0E7FF] w-full h-10 rounded-r-md border-l-0"
        >
          Talabalar
        </router-link>
      </div>

      <div
        class="h-10 bg-dark-gray px-3 md:w-[284px] w-full rounded-md flex gap-3 col-start-1 row-start-2 md:row-start-1 md:col-start-2"
      >
        <div class="middle">
          <i class="far fa-search text-silver" aria-hidden="true"></i>
        </div>
        <input
          type="search"
          class="block w-full h-full bg-transparent text-black"
          placeholder="Izlash"
        />
      </div>

      <div class="col-start-2 row-start-2 md:row-start-1 md:col-start-3">
        <button class="h-10 bg-light-purple px-8 text-sm text-primary font-medium rounded-md">
          <svg
            class="inline"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6668 0.333336H2.3335C1.80306 0.333336 1.29436 0.54405 0.919283 0.919122C0.54421 1.2942 0.333496 1.8029 0.333496 2.33334V3.11334C0.333401 3.38863 0.39014 3.66098 0.500163 3.91334V3.95334C0.594349 4.16732 0.727758 4.36178 0.893496 4.52667L5.00016 8.60667V13C4.99994 13.1133 5.02859 13.2248 5.08341 13.3239C5.13823 13.4231 5.21742 13.5066 5.3135 13.5667C5.41959 13.6324 5.54201 13.6671 5.66683 13.6667C5.77119 13.666 5.87395 13.6409 5.96683 13.5933L8.6335 12.26C8.74344 12.2046 8.83589 12.1198 8.90061 12.0151C8.96533 11.9104 8.99979 11.7898 9.00016 11.6667V8.60667L13.0802 4.52667C13.2459 4.36178 13.3793 4.16732 13.4735 3.95334V3.91334C13.5927 3.66296 13.6585 3.39052 13.6668 3.11334V2.33334C13.6668 1.8029 13.4561 1.2942 13.081 0.919122C12.706 0.54405 12.1973 0.333336 11.6668 0.333336ZM7.86016 7.86C7.79838 7.9223 7.74949 7.99617 7.71632 8.0774C7.68314 8.15862 7.66632 8.2456 7.66683 8.33334V11.2533L6.3335 11.92V8.33334C6.334 8.2456 6.31719 8.15862 6.28401 8.0774C6.25083 7.99617 6.20195 7.9223 6.14016 7.86L2.60683 4.33334H11.3935L7.86016 7.86ZM12.3335 3H1.66683V2.33334C1.66683 2.15652 1.73707 1.98696 1.86209 1.86193C1.98712 1.73691 2.15669 1.66667 2.3335 1.66667H11.6668C11.8436 1.66667 12.0132 1.73691 12.1382 1.86193C12.2633 1.98696 12.3335 2.15652 12.3335 2.33334V3Z"
              fill="#3365FC"
            />
          </svg>
          <span class="pl-2">Filter</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
const menus = ['Dashboard', 'Homiylar', 'Talabalar']
</script>

<style scoped>
input {
  outline: none;
}
</style>
