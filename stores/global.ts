import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useGlobalStore = defineStore("globalStore", () => {
  const loading = ref(false);
  const rightKey = ref(false);
  const todos = reactive([]);
  todos.length = 0;

  const startLoader = (): void => {
    loading.value = true;
  };
  // const [function name] = (params): [return type] => {function}
  const stopLoader = (): void => {
    loading.value = false;
  };
  const checkExistence = (id: string): boolean => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        return true;
      }
    });
    return false;
  };
  const getTodo = async (key: string) => {
    loading.value = true;
    let response;
    let data;
    try {
      response = await fetch(
        "https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/nulmeting/todo",
        { headers: { "x-api-key": key } }
      );
      rightKey.value = false;
      data = await response.json();
      if (checkExistence(data.todo.id)) {
        loading.value = false;
        return;
      }
      todos.push(data.todo);
      loading.value = false;
    } catch (error) {
      console.log(error);
      rightKey.value = true;
      loading.value = false;
      console.log(rightKey.value)
      return;
    }
  };

  return { loading, todos, rightKey, startLoader, stopLoader, getTodo };
});
