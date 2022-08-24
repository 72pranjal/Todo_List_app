<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>S.NO.</th>
          <th>Todo Name</th>
          <th>Todo Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items, index) in props.totaldata" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ items.name }}</td>
          <td>{{ items.todoCategory }}</td>
          <td>
            <button @click="remove(items,index)">Delete</button>/
            <button @click="emit('edit',index,items)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["totaldata"]);
const emit = defineEmits(['edit']);

const remove = (items:Object,index:number) => {
  props.totaldata.splice(index,1);
};

</script>