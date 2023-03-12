Vue.eventBus = new Vue();

Vue.component('board', {
    template:`
        <div>
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