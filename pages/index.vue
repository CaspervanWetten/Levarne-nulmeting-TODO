<script setup lang="ts">
const globalStore = useGlobalStore();
</script>

<template>
  <div class="page-wrapper">
    <div class="element-wrapper">
      <div class="element-body">
        <div class="header">
          <h1>TODO Apps</h1>
        </div>
        <div class="table">
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Assignee</th>
                <th>Due date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="todo in globalStore.todos" :key="todo.id">
                <td>{{ todo.description }}</td>
                <td>{{ todo.assignee }}</td>
                <td>
                  {{ new Date(todo.dueDateTime).toLocaleString("en-US") }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="button-wrapper">
          <button @click="globalStore.getTodo(key)">Get another TODO</button>
        </div>
        <div class="form-wrapper">
          <input
            type="text"
            class="key-input"
            placeholder="enter API key"
            v-model="key"
          />
        </div>
        <div v-if="globalStore.rightKey" class="wrong-key">
          <p>
            dat is de verkeerde API key!
            <br />
            Probeer het nog eens :)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #333;
  color: #fff;
  text-align: center;
}

h1 {
  margin-top: 80px;
  font-size: 65px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #222;
  color: #fff;
}

tr:hover {
  background-color: #444;
}

button {
  background-color: #006400;
  color: #fff;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #008000;
}
</style>
