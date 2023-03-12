let eventBus = new Vue();

Vue.component('board', {
    template:`
        <div class="tabs">
            <newBoard></newBoard>
            <div class="tabs-wrap">
                <table_1 :column_1="column_1"></table_1>
                <table_2 :column_2="column_2"></table_2>
                <table_3 :column_3="column_3"></table_3>
                <table_4 :column_4="column_4"></table_4>
            </div>   
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
        eventBus.$on('addColumn_1', tab => {
            this.column_1.push(tab);
        });
        eventBus.$on('addColumn_2', tab => {
            this.column_2.push(tab);
        });
        eventBus.$on('addColumn_3', tab => {
            this.column_3.push(tab);
        });
        eventBus.$on('addColumn_4', tab => {
            this.column_4.push(tab);
        });
    }
})

Vue.component('table_1',{
    props: {
        column_1: {
            type: Array,
        },
        tab: {
            type: Object
        },
    },
    template:`
        <div class="tab">
            
        </div>
    `,
})

Vue.component('table_2',{
    props: {
        column_2: {
            type: Array,
        },
        tab: {
            type: Object
        },
    },
    template:`
        <div class="tab">
            
        </div>
    `,
})

Vue.component('table_3',{
    props: {
        column_3: {
            type: Array,
        },
        tab: {
            type: Object
        },
    },
    template:`
        <div class="tab">
            
        </div>
    `,
})

Vue.component('table_4',{
    props: {
        column_4: {
            type: Array,
        },
        tab: {
            type: Object
        },
    },
    template:`
        <div class="tab">
            
        </div>
    `,
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
            let tab = {
                title: this.title,
                description: this.description,
                date: new Date().toLocaleDateString().split('.').reverse().join('-'),
                deadline: this.deadline
            }
            eventBus.$emit('addColumn_1', tab);
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