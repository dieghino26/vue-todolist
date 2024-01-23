console.log("vue ok", Vue);

const {createApp} = Vue; 
const app = createApp({
    data: () => ({
        toDoList,
        newTask: ""
    }),
    methods: {
        deleteTask(id){
            this.toDoList = this.toDoList.filter(task => id !== task.id)
        },
        addTask(){
            const newTask = {
                id: new Date().toISOString(),
                done: false,
                text: this.newTask
            }

            this.toDoList.push(newTask)
            this.newTask = ""

        }
    }
});
app.mount("#root");