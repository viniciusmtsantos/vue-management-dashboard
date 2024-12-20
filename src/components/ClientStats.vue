<template>
  <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
    <!-- Client statistics -->
    <div class=" p-5 bg-white rounded-2xl shadow">
      <div class=" text-xl font-semibold">Usuários Ativos</div>
      <div class="flex items-center justify-between pt-3">
        <i v-if="props.isLoading" class="pi pi-spin pi-spinner"></i>
        <div class="text-base font-semibold">
          {{ abbrNum(numberOfClients, 1) }}
        </div>
        <span class="flex items-center px-2 py-0.5 text-sm rounded-full text-green-600 bg-green-100">
          +8%
        </span>
      </div>
    </div>
    <div class=" p-5 bg-white rounded-2xl shadow">
      <div class=" text-xl font-semibold">Ativos Totais</div>
      <div class="flex items-center justify-between pt-3">
        <i v-if="props.isLoading" class="pi pi-spin pi-spinner"></i>
        <div class="text-base font-semibold">
          {{ abbrNum(totalEquality, 1) }}
        </div>
        <span class="flex items-center px-2 py-0.5 text-sm rounded-full text-red-600 bg-red-100">
          -3%
        </span>
      </div>
    </div>
    <div class=" p-5 bg-white rounded-2xl shadow">
      <div class=" text-xl font-semibold">Média de Ativos por Usuário</div>
      <div class="flex items-center justify-between pt-3">
        <i v-if="props.isLoading" class="pi pi-spin pi-spinner"></i>
        <div class="text-base font-semibold">
          {{ abbrNum(averageEquality, 1) }}
        </div>
        <span class="flex items-center px-2 py-0.5 text-sm rounded-full text-green-600 bg-green-100">
          +6%
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  numberOfClients: Number,
  totalEquality: Number,
  averageEquality: Number,
  isLoading: Boolean
});

const abbrNum = (number: any, decPlaces: number) => {
  decPlaces = Math.pow(10, decPlaces);

  // Enumerar abreviações de números
  var abbrev = [" mil", " mi", " bi", " tri"];

  // Percorrer o array de trás para frente, para que façamos as maiores abreviações primeiro
  for (var i = abbrev.length - 1; i >= 0; i--) {

    // Converter o índice do array para "1000", "1000000", etc
    var size: number = Math.pow(10, (i + 1) * 3);

    // Se o número for maior ou igual, fazer a abreviação
    if (size <= number) {
      // Aqui, multiplicamos pelo número de casas decimais, arredondamos e depois dividimos pelo número de casas decimais.
      number = Math.round(number * decPlaces / size) / decPlaces;

      // Lidar com o caso especial onde arredondamos para cima para a próxima abreviação
      if ((number == 1000) && (i < abbrev.length - 1)) {
        number = 1;
        i++;
      }

      // Adicionar a unidade para a abreviação
      number += abbrev[i];

      break;
    }
  }
  return number
}
</script>
