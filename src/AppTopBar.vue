<template>
  <ul class=" fixed h-16 w-full z-50 right-0 list-none overflow-hidden bg-surface-0 border-b">
    <li class=" float-left flex ml-4 mt-3 cursor-pointer w-1/2 ">
      <img src="/phoenix-squadron-svgrepo-com.svg" class="lg:mr-0 w-10 h-10">
      <IconField iconPosition="left" class=" ml-5 w-2/3">
        <InputIcon class="pi pi-search"> </InputIcon>
        <InputText size="small" type="text" class=" rounded-2xl bg-surface-50" placeholder="Pesquisar" />
      </IconField>
    </li>
    <li class=" float-right">
      <Button class="p-link no-underline text-surface-800 mr-2 mb-1" size="large" severity="secondary" text rounded>
        <img src="/bell.svg">
      </Button>
      <button class="p-link no-underline mt-2">
        <Avatar image="foto-perfil.png" class="mr-5" size="large" shape="circle" />
      </button>
    </li>
  </ul>
</template>
