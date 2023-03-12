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
            <h2>Запланированные задачи</h2>
            <ul class="tab-li">
                <li v-for="tab in column_1">
                    <a @click="deleteTab(tab)">Удалить</a> &emsp; <a @click="tab.editButton = true">Редактировать</a><br>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.editButton === true">
                            <form @submit.prevent="updateTab(tab)">
                                <label for="title">Новый заголовок</label>
                                <input id="title" type="text" v-model="tab.title" maxlength="30" placeholder="Заголовок">
                                <label for="description">Новое описание:</label> 
                                <textarea id="description" v-model="tab.description" cols="20" rows="5"></textarea>
                                <input type="submit" value="Редактировать">
                            </form>                      
                        </li>
                    </ul>
                    <a @click="nextTab(tab)">Следующая колонка</a>
                </li>
            </ul>
        </div>
    `,
    methods: {
        nextTab(tab){
            this.column_1.splice(this.column_1.indexOf(tab), 1);
            eventBus.$emit('addColumn_2', tab);
        },
        deleteTab(tab){
            this.column_1.splice(this.column_1.indexOf(tab), 1);
        },
        updateTab(tab){
            tab.editButton = false;
            this.column_1.push(tab);
            this.column_1.splice(this.column_1.indexOf(tab), 1);
            tab.edit = new Date().toLocaleString();
        }
    }
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
            <h2>Задачи в работе</h2>
            <ul class="tab-li">
                <li v-for="tab in column_2">
                    <a @click="tab.editButton = true">Редактировать</a><br>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.editButton === true">
                            <form @submit.prevent="updateTab(tab)">
                                <label for="title">Новый заголовок</label>
                                <input id="title" type="text" v-model="tab.title" maxlength="30" placeholder="Заголовок">
                                <label for="description">Новое описание:</label> 
                                <textarea id="description" v-model="tab.description" cols="20" rows="5"></textarea>
                                <input type="submit" value="Редактировать">
                            </form>                      
                        </li>
                    </ul>
                    <a @click="nextTab(tab)">Следующая колонка</a>
                </li>
            </ul>
        </div>
    `,
    methods:{
        nextTab(tab){
            this.column_2.splice(this.column_2.indexOf(tab), 1);
            eventBus.$emit('addColumn_3', tab);
        },
        updateTab(tab){
            tab.editButton = false;
            this.column_2.push(tab);
            this.column_2.splice(this.column_2.indexOf(tab), 1);
            tab.edit = new Date().toLocaleString();
        }
    }
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
            <h2>Тестирование</h2>
            <ul class="tab-li">
                <li v-for="tab in column_3">
                    <a @click="tab.editButton = true">Редактировать</a><br>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.editButton === true">
                            <form @submit.prevent="updateTab(tab)">
                                <label for="title">Новый заголовок</label>
                                <input id="title" type="text" v-model="tab.title" maxlength="30" placeholder="Заголовок">
                                <label for="description">Новое описание:</label> 
                                <textarea id="description" v-model="tab.description" cols="20" rows="5"></textarea>
                                <input type="submit" value="Редактировать">
                            </form>                      
                        </li>
                    </ul>
                    <a @click="nextTab(tab)">Следующая колонка</a>
                </li>
            </ul>
        </div>
    `,
    methods: {
        nextTab(tab){
            this.column_3.splice(this.column_3.indexOf(tab), 1);
            eventBus.$emit('addColumn_4', tab);
        },
        updateTab(tab){
            tab.editButton = false;
            this.column_3.push(tab);
            this.column_3.splice(this.column_3.indexOf(tab), 1);
            tab.edit = new Date().toLocaleString();
        }
    }
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
            <h2>Выполненные задачи</h2>
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
                                    <label for="title">Заголовок</label>
                                    <input id="title" v-model="title" type="text" placeholder="Заголовок" required maxlength="30">   
                                    <label for="description">Описание</label>
                                    <textarea id="description" v-model="description" rows="5" columns="10" required maxlength="60"></textarea>
                                    <label for="deadline">Дедлайн</label>
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
                deadline: this.deadline,
                edit: null,
                editButton: false,
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
        name: 'Kanban доска'
    }
})