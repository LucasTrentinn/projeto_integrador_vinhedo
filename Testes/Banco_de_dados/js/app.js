const App = {
    data() {
        return {
            vinhos: [],
            vinho: {
                nome: '',
                volume: '',
                teorAlcóolico: '',
                uva: '',
                safra: '',
                país: ''
            }
        }
    },
    methods: {
        cadastrar() {
            if (this.vinho.nome == '') {
                alert("Insira um nome válido.")
            } else if (this.vinho.volume == '') {
                alert("Insira um volume válido.")
            } else if (this.vinho.teorAlc == '') {
                alert("Insira um teor alcóolico válido.")
            } else if (this.vinho.uva == '') {
                alert("Insira um tipo de uva válido.")
            } else if (this.vinho.safra == '') {
                alert("Insira uma safra válida.")
            } else if (this.vinho.pais == '') {
                alert("Insira um país válido.")
            } else {
                fetch("https://vinhos-dad4.restdb.io/rest/vinhos?apikey=d815307d94c90d5acdf9777002277880e7b3d", {
                    method: 'POST',
                    body: JSON.stringify(this.vinho),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(response => {
                    this.vinho = {
                        nome: '',
                        volume: '',
                        teorAlc: '',
                        uva: '',
                        safra: '',
                        pais: ''
                    }
                })
            }
        }
    },
    mounted() {
        fetch("https://vinhos-dad4.restdb.io/rest/vinhos?apikey=d815307d94c90d5acdf9777002277880e7b3d")
            .then(response => response.json())
            .then(data => this.vinhos = data);
    }
}

Vue.createApp(App).mount('#app');