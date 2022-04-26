const App = {
    data () {
        return {
            nome: '',
            vinhos: [],
            vinhosFiltrados: []
        }
    },
    methods: {
        filtrar () {
            this.vinhosFiltrados = [];
            this.vinhos.forEach(vinho => {
                if (vinho.nome.toUpperCase().indexOf(this.nome.toUpperCase()) >= 0)
                    this.vinhosFiltrados.push(vinho);
            });
        }
    },
    watch: {
        nome: function (novoValor, valorAnterior) {
            this.filtrar();
        }
    },
    mounted () {
        fetch("json/vinhos.json")
        .then(response => response.json())
        .then(data => {
            this.vinhos = data.vinho;
            this.filtrar();
        });
    }
};

Vue.createApp(App).mount('#app');