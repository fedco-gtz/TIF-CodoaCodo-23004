const { createApp } = Vue;

createApp({
  data() {
    return {
      // Inicializa las variables
      productos: [], // Arreglo para almacenar los productos
      cargando: true, // Variable para indicar si se están cargando los productos
      error: false, // Variable para indicar si se produjo un error al cargar los productos
    };
  },
  methods: {
    fetchData() {
      const url = "https://fedco.pythonanywhere.com/productos";

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.productos = data;
          this.cargando = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    eliminar(id) {
      if (confirm("¿Está seguro que desea eliminar el producto de id " + id + " ?")) {
        const url = "https://fedco.pythonanywhere.com/productos/" + id;
        var options = {
          method: "DELETE", // Establece el método HTTP como DELETE
        };

        fetch(url, options)
          .then((res) => res.text()) // Convierte la respuesta en texto (or res.json())
          .then((res) => {
            alert("Producto eliminado!");
            location.reload(); // Recarga la página actual después de eliminar el producto
          });
      }
    }
  },
  mounted() {
    this.fetchData(); // Llama a la función fetchData() al cargar el componente
  }
}).mount("#app");
