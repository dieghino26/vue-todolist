console.log("vue ok", Vue);

const {createApp} = Vue; 
const app = createApp({
    data: () => ({
        toDoList
    })
});
app.mount("#root")