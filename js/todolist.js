console.log("vue ok", Vue);

const {createApp} = Vue; 
const app = createApp({
    data: () => ({
        toDoList
    }),
    methods: {
        deleteTask(id){
            this.toDoList = this.toDoList.filter(task => id !== task.id)
        }
    }
});
app.mount("#root")