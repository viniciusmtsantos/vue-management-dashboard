<template>
  <aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen " aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-surface-0 mt-16 border-r">
      <ul class="space-y-2 font-medium">
        <li v-for="(item, index) of     items    ">
          <div v-if="item.subitems">
            <button type="button"
              class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-primary-50"
              aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" @click.prevent="item.dropdownOpen = !item.dropdownOpen;
              " v-ripple>
              <svg :class="['mr-2 w-6 h-6', { 'text-primary-500': item.to == route.path }]" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path fill-rule="evenodd" :d="item.icon" />
              </svg>
              <!-- <i :class="[item.icon, { 'text-primary-500': item.to == route.path }]" /> -->
              <span class="flex-1 text-left rtl:text-right whitespace-nowrap">{{ item.label }}</span>
              <i
                :class="[item.dropdownOpen ? 'pi pi-chevron-up' : 'pi pi-chevron-down', { 'text-primary-500': item.to == route.path },]" />
            </button>

            <ul :id="'dropdown-example-' + index" :class="['py-2 space-y-2', { 'hidden': !item.dropdownOpen }]">
              <li v-for="(subitem, subIndex) of item.subitems" :key="subIndex">
                <router-link v-if="subitem.to" :to="subitem.to"
                  :class="['flex items-center font-semibold p-2 pl-11 transition duration-75 rounded-lg group hover:bg-primary-50', { 'text-primary-500': subitem.to == route.path }]"
                  exact role="menuitem" v-ripple>
                  <span>{{ subitem.label }}</span>
                  <span v-if="subitem.badge"
                    class="ml-auto flex items-center px-2 py-0.5 mx-2 text-sm rounded-full text-red-800 bg-red-100 ">
                    {{ subitem.badge }}
                  </span>
                </router-link>
              </li>
            </ul>
          </div>

          <div v-else>
            <router-link v-if="item.to" :to="item.to"
              :class="['flex items-center font-semibold p-2 hover:bg-primary-50 rounded-lg', { 'text-primary-500': item.to == route.path }]"
              exact role="menuitem" v-ripple>
              <svg :class="['mr-2 w-6 h-6', { 'text-primary-500': item.to == route.path }]" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path :d="item.icon[0]" />
                <path :d="item.icon[1]" />
              </svg>
              <!-- <i :class="[item.icon, { 'text-primary-500': item.to == route.path }]" /> -->
              <span>{{ item.label }}</span>
              <span v-if="item.badge"
                class="ml-auto flex items-center px-2 py-0.5 mx-2 text-sm rounded-full text-red-800 bg-red-100 ">
                {{ item.badge }}
              </span>
            </router-link>
          </div>

        </li>
      </ul>
      <Divider class="w-full" />
      <router-link :to="'/help'"
        :class="['flex items-center font-semibold p-2 hover:bg-primary-50 rounded-lg', { 'text-primary-500': '/help' == route.path }]"
        exact role="menuitem" v-ripple>
        <!-- <i :class="['pi pi-map mr-4', { 'text-primary-500': '/help' == route.path }]" /> -->
        <svg :class="['mr-2 w-6 h-6', { 'text-primary-500': '/help' == route.path }]" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
          <path fill-rule="evenodd"
            d="M18 10a8 8 0 1 1-16.001 0A8 8 0 0 1 18 10Zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 0 0 .078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10Zm-5.165 3.913 1.58 1.58A5.98 5.98 0 0 1 10 16a5.976 5.976 0 0 1-2.516-.552l1.562-1.562a4.005 4.005 0 0 0 1.789.027Zm-4.677-2.796a4.002 4.002 0 0 1-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 0 0 4 10c0 .954.223 1.856.619 2.657l1.54-1.54h-.001Zm1.088-6.45A5.974 5.974 0 0 1 10 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 0 0-2.346.033L7.246 4.668v-.001ZM12 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            clip-rule="evenodd" />
        </svg>
        <span> Ajuda </span>
      </router-link>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const items: any = ref([
  {
    label: 'Dashboard',
    icon: [
      'M2 10a8 8 0 0 1 8-8v8h8a8 8 0 0 1-16 0Z',
      'M12 2.252A8.014 8.014 0 0 1 17.748 8H12V2.252Z'],
    to: '/dashboard',
  },
  {
    label: 'Orientações',
    icon: ['M10 2a4 4 0 0 0-4 4v1H5a1 1 0 0 0-.994.89l-1 9A1 1 0 0 0 4 18h12a1 1 0 0 0 .994-1.11l-1-9A1 1 0 0 0 15 7h-1V6a4 4 0 0 0-4-4Zm2 5V6a2 2 0 1 0-4 0v1h4Zm-6 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z'],
    dropdownOpen: false,
    subitems: [
      {
        label: 'Estatísticas',
        to: '/stats-advisor',
      },
      {
        label: 'Cobrança',
        to: '/charge-advisor',
      },
    ],
  },
  {
    label: 'Relatórios',
    // icon: 'pi pi-file mr-2',
    icon: ['M7.2 2.4a2.4 2.4 0 0 0-2.4 2.4v14.4a2.4 2.4 0 0 0 2.4 2.4h9.6a2.4 2.4 0 0 0 2.4-2.4V8.897a2.4 2.4 0 0 0-.703-1.697L14.4 3.103a2.4 2.4 0 0 0-1.697-.703H7.2Zm2.4 12a1.2 1.2 0 0 0-2.4 0V18a1.2 1.2 0 0 0 2.4 0v-3.6Zm2.4-3.6a1.2 1.2 0 0 1 1.2 1.2v6a1.2 1.2 0 1 1-2.4 0v-6a1.2 1.2 0 0 1 1.2-1.2Zm4.8-1.2a1.2 1.2 0 1 0-2.4 0V18a1.2 1.2 0 1 0 2.4 0V9.6Z'],
    dropdownOpen: false,
    subitems: [
      {
        label: 'Lista de Clientes',
        to: '/client-advisor',
      },
      {
        label: 'Erros de transferências',
        to: '/fail-reports',
      },
    ],
  },

  {
    label: 'Mensagens',
    // icon: 'pi pi-inbox mr-4',
    icon: [
      'M8.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414L11 7.586V3a1 1 0 1 0-2 0v4.586l-.293-.293Z',
      'M3 5a2 2 0 0 1 2-2h1a1 1 0 0 1 0 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 1 1 0-2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z'],
    to: '/messages',
    badge: 2,
  },
])
</script>