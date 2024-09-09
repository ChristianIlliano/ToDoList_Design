const { createApp } = Vue;


createApp({
    data() {
        return {
            newTask: {
                taskText: "",
            },

            tasks: [{
                taskText: "ciaone",
            }
        ],
        };
    },

    created() {

    },

    methods: {
        AddTask: function() {
            this.tasks.push(this.newTask);
        }
    }
}).mount("#app");