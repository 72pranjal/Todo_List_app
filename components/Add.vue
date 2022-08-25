<template>
  <div class="bg-zinc-300">
    <div class="pt-20">
      <transition name="slide-fade">
        <p
          v-if="line1Show"
          class="
            text-4xl
            ml-24
            p-4
            cursor-pointer
            hover:scale-105
            duration-1000
            hover:text-indigo-700
            text-amber-600
          "
        >
          =>You Can Add
        </p>
      </transition>

      <transition name="slide-fade">
        <p
          v-if="line2Show"
          class="
            text-4xl
            ml-44
            cursor-pointer
            hover:scale-105
            duration-1000
            hover:text-stone-50
            text-slate-500
          "
        >
          =>Your Items Hear
        </p>
      </transition>
      <transition name="slide-fade">
        <p
          v-if="line3Show"
          class="
            text-4xl
            ml-64
            cursor-pointer
            hover:scale-105
            duration-1000
            hover:text-red-600
            text-sky-600
            p-4
          "
        >
          =>This Is A Type Of Todo List
        </p>
      </transition>
      <transition name="slide-fade">
        <p
          v-if="line4Show"
          class="
            text-4xl
            hover:text-pink-800 hover:scale-105
            duration-1000
            cursor-pointer
            text-emerald-500
            ml-96
          "
        >
          =>Todo List Is Use For Store Data
        </p>
      </transition>
    </div>
    <form onsubmit="event.preventDefault()" autocomplete="off">
      <div
        class="
          mt-12
          bg-gray-600
          h-auto
          w-6/12
          text-center
          rounded-2xl
          border-8
          mx-auto
        "
      >
        <div class="p-6">
          <label class="text-2xl mr-56 text-neutral-300" for="name"
            >Your Item Name...</label
          ><br />
          <input
            class="
              h-10
              w-3/4
              p-4
              focus:bg-gray-100
              border-none
              bg-orange-100
              my-4
              rounded-md
            "
            type="text"
            id="name"
            placeholder="enter your items names"
            v-model="todoName"
          />
        </div>
        <div class="text-2xl text-neutral-300">
          <p>Choose Category of Your Item</p>
        </div>
        <div class="flex my-10 mx-auto">
          <div class="bg-orange-100 h-28 ml-24 rounded-2xl p-12 items-center">
            <label class="text-x" for="b">Business</label>
            <input
              type="radio"
              id="b"
              name="category"
              v-model="category"
              value="Business"
            />
          </div>
          <div class="bg-orange-100 h-28 ml-16 rounded-2xl p-12">
            <label for="p">Personal</label>
            <input
              type="radio"
              id="p"
              name="category"
              v-model="category"
              value="Personal"
            />
          </div>
        </div>
        <div
          class="
            mb-10
            mt-16
            rounded-xl
            cursor-pointer
            hover:bg-blue-400
            bg-orange-100
            h-10
            w-2/4
            mx-auto
            items-center
          "
        >
          <button class="text-center p-2" @click="Submitdata">Add Items</button>
        </div>
      </div>
      <teleport to="body">
        <div v-if="checkBlank" class="modal">
          <p>please Choose name of your todo</p>
          <p>and category</p>
          <button
            class="bg-red-400 text-white w-24 hover:scale-110 p-1 rounded-md"
            @click="checkBlank = false"
          >
            Close
          </button>
        </div>
      </teleport>
    </form>
    <div class="text-center mt-9">
      <p class="text-4xl bg-gray-300 text-rose-600 animate-bounce">
        ===Total Added Items===
      </p>
    </div>
    <AddChild :totaldata="totalTodo" @edit="editHandler" />
  </div>
</template>

<script setup lang="ts">
const dataIndex = ref(null);
function Submitdata() {
  if (dataIndex.value === null) {
    addTodo();
  } else {
    update();
    // alert("hi");
    dataIndex.value = null;
  }
}

enum radioType {
  BUSINESS = "Business",
  PERSONAL = "Personal",
}
interface typetodo {
  name: string;
  todoCategory: radioType;
}
const totalTodo = ref<typetodo[]>([]);
const todoName = ref<string>("");
const category = ref<radioType>(null);
const checkBlank = ref<boolean>(false);

const editHandler = (index: number) => {
  dataIndex.value = index;
  todoName.value = totalTodo.value[dataIndex.value].name;
  category.value = totalTodo.value[dataIndex.value].todoCategory;
};

watch(
  () => totalTodo.value,
  (newVal) => {
    alert("#changed");
  },
  {deep:true}
);
const update = () => {
  totalTodo.value[dataIndex.value].name = todoName.value;
  totalTodo.value[dataIndex.value].todoCategory = category.value;
  todoName.value = "";
  category.value = null;
};

const addTodo = () => {
  if (todoName.value.trim() === "" || category.value === null) {
    return (checkBlank.value = true);
  }
  totalTodo.value.push({
    name: todoName.value,
    todoCategory: category.value,
  });
  todoName.value = "";
  category.value = null;
  console.log(totalTodo.value);
};
watch(
  totalTodo,
  (newVal) => {
    localStorage.setItem("totalTodo", JSON.stringify(newVal));
  },
  { deep: true }
);

onMounted(() => {
  totalTodo.value = JSON.parse(localStorage.getItem("totalTodo")) || [];
});
const line1Show = ref(false);
onMounted(() => {
  setTimeout(() => {
    line1Show.value = true;
  }, 500);
});

const line2Show = ref(false);
onMounted(() => {
  setTimeout(() => {
    line2Show.value = true;
  }, 1500);
});

const line3Show = ref(false);
onMounted(() => {
  setTimeout(() => {
    line3Show.value = true;
  }, 2500);
});

const line4Show = ref(false);
onMounted(() => {
  setTimeout(() => {
    line4Show.value = true;
  }, 3500);
});
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.7s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.9s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  height: 170px;
  padding: 15px;
  background-color: lightgreen;
  color: red;
  font-weight: 800;
  text-align: center;
  font-size: 20px;
  border: none;
}
</style>