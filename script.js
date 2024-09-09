const { createApp } = Vue;


createApp({
    data() {
        return {
            newTask: {
                taskText: "",
                done: false,
            },

            tasks: [{
                taskText: "ciaone",
                done: true,
            }
        ],
        };
    },

    created() {
        const localName = localStorage.getItem("username");
        this.username = localName !== null ? localName : ""; 

        const localTasks = localStorage.getItem("tasks");
        if (localTasks !== null) {
            this.tasks = JSON.parse(localTasks);
        } else {
            this.tasks = "";
        }
    },

    methods: {
        AddTask: function() {
            this.tasks.push({...this.newTask});
            const jsonTasks = JSON.stringify(this.tasks);
            localStorage.setItem("tasks", jsonTasks);
        },

        save: function() {
            localStorage.setItem("username", this.username);
        },
    }

}).mount("#app");