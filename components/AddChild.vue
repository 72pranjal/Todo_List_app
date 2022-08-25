<template>
  <div class=" ml-44 mb-10  mt-10 ">
    <table class="p-2 w-5/6 border-separate border-spacing-3 border-4 rounded-xl border-orange-300 bg-zinc-100 ... ">
      <thead class="pt-4 text-left">
        <tr>
          <th class="border-2 bg-stone-200 text-neutral-600 text-xl border-zinc-300">S.NO.</th>
          <th class="border-2 bg-stone-200 text-neutral-600 text-xl border-zinc-300">Todo Name</th>
          <th class="border-2 bg-stone-200 text-neutral-600 text-xl border-zinc-300">Todo Category</th>
          <th class="border-2 bg-stone-200 text-neutral-600 p-2 text-xl border-zinc-300">Action</th>
        </tr>
      </thead>
     
      <tbody>
        <tr  v-for="(items, index) in props.totaldata" :key="index" class="">
          <td class="border-2 p-2 border-zinc-300">{{ index + 1 }}</td>
          <td class="border-2  border-zinc-300">{{ items.name }}</td>
          <td class="border-2 border-zinc-300">{{ items.todoCategory }}</td>
          <td  class="border-2  border-zinc-300">
            <button class="bg-red-400 text-white w-20 hover:scale-110 duration-150 p-1 rounded-md" @click="remove(index)">Delete</button> /  
            <button class="bg-green-400 hover:scale-110 duration-300 text-zinc-500 w-20 p-1 rounded-md" @click="emit('edit',index)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["totaldata"]);
const emit = defineEmits(['edit']);

const remove = (index:number) => {
  alert('Are you sure you want to delete this record ?')
  props.totaldata.splice(index,1);
};

</script>