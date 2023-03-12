Vue.eventBus = new Vue();

Vue.component('board', {
    template:`
        <div>
            <newBoard></newBoard>
            <table_1 :column_1="column_1"></table_1>
            <table_2 :column_2="column_2"></table_2>
            <table_3 :column_3="column_3"></table_3>
            <table_4 :column_4="column_4"></table_4>
        </div>
    `,
    data(){
        return{
            column_1:[],
            column_2:[],
            column_3:[],
            column_4:[],
        }
    },
    mounted(){
        eventBus.$on('addColumn_1', table_1 => {
            this.column_1.push(table_1);
        });
        eventBus.$on('addColumn_2', table_2 => {
            this.column_2.push(table_2);
        });
        eventBus.$on('addColumn_3', table_3 => {
            this.column_3.push(table_3);
        });
        eventBus.$on('addColumn_4', table_4 => {
            this.column_4.push(table_4);
        });
    }
})

Vue.component('newBoard', {
    template:`
        <section class="section-modal">
            <a href="#openModal" class="button">Создать задачу</a>
            <div id="openModal" class="modal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <a href="#" class="close">×</a>
                        </div>
                        <div class="modal-body">
                            <div class="create_form">
                                <form class="create" @submit.prevent="onSubmit">
                                    <label for="title">Title</label>
                                    <input id="title" v-model="title" type="text" placeholder="title" required maxlength="30">   
                                    <label for="description">Description</label>
                                    <textarea id="description" v-model="description" rows="5" columns="10" required maxlength="60"></textarea>
                                    <label for="deadline">Deadline</label>
                                    <input id="deadline" type="date" v-model="deadline" placeholder="дд.мм.гггг" required>                       
                                    <button type="submit">Создать</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    data(){
        return{
            title: null,
            description: null,
            date:null,
            deadline: null,
        }
    },
    methods:{
        onSubmit(){
            let table_1 = {
                title: this.title,
                description: this.description,
                date: new Date().toLocaleDateString().split('.').reverse().join('-'),
                deadline: this.deadline
            }
            eventBus.$emit('addColumn_1', table_1);
            this.title = null;
            this.description = null;
            this.date = null;
            this.deadline = null;
        }
    }
})


let app = new Vue({
    el: '#app',
    data:{
        name: 'Kanban board'
    }
})