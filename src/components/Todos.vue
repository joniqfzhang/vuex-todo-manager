<template>
  <div>
    <h3>Todos</h3>
    <div class="lenged">
      <span>Double click to mark as complete</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = complete </span>
    </div>
    <div class="todos">
      <div
        @dblclick="onDbclick(todo)"
        v-for="todo in allTodos"
        v-bind:key="todo.id"
        class="todo"
        v-bind:class="{ 'is-completed': todo.completed }"
      >
        {{ todo.title }}
        <img
          @click="deleteTodo(todo.id)"
          class="svg"
          src="../assets/twitter.svg"
          alt="twitter icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Todos',
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    onDbclick(todo) {
      let updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      console.log(updTodo);
      this.updateTodo(updTodo);
    },
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.svg {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 18px;
  height: 18px;
  color: #fff;
  cursor: pointer;
}
.lenged {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  font-family: sans-serif;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-completed {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
