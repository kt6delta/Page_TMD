<template>
    <div>
        <h1 class="title_product mx-auto">Lista de Productos</h1>
       
         <p class="par_product">Lista de productos en la base de datos:
            <router-link :to="{ name: 'Create' }" class="ButtonAdd">Agregar Producto</router-link>
         </p>
        <table class="product_list mx-auto">
            <thead>
                <tr>
                  <th>Nombre del Producto</th>
                  <th>Precio</th>
                  <th class="tableAction">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.product_id">
                    <td>{{ item.product_name }}</td>
                    <td>{{ item.product_price }}</td>
                    <td class="tableButton mx-auto">
                        <router-link
                          :to="{ name: 'Edit', params: { id: item.product_id } }"
                          class="Buttonedit"
                          >Editar</router-link>&nbsp;&nbsp;
                        <a
                          class="Buttondelete"
                          @click="deleteProduct(item.product_id)"
                          >Eliminar</a>
                    </td>
                </tr>    
            </tbody>
        </table>
    
    </div><br>
</template>
  
<script>
// import axios
import axios from "axios";
  
export default {
    name: "ProductList",
    data() {
        return {
            items: [],
        };
    },
  
    created() {
        this.getProducts();
    },
  
    methods: {
        // Get All Products
        async getProducts() {
            try {
                const response = await axios.get(this.$store.state.backUrl+"/products");
                this.items = response.data;
            } catch (err) {
                console.log(err);
            }
        },
  
        // Delete Product
        async deleteProduct(id) {
            try {
                await axios.delete(`http://localhost:5000/products/${id}`);
                this.getProducts();
            } catch (err) {
                console.log(err);
            }
        },
    },
};
</script>

<style>

h1{
    padding-top: 1%;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-weight: bold;
    text-align: center;
    font-size: 30px;
}

.par_product{
    padding-left: 13%;
    font-size: 17px;
    padding-bottom: 1%;
    padding-top: 1%;
}

table.product_list {
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  background-color: #FFFFFF;
  width: 75%;
  text-align: left;
  border-collapse: collapse;
  padding-top: 2%;
}
table.product_list td, table.product_list th {
  border: 1px solid #AAAAAA;
  padding: 5px 8px;
}
table.product_list tbody td {
  font-size: 15px;
}
table.product_list tr:nth-child(even) {
  background: #FFFFBB;
}
table.product_list thead {
  background: #BC7528;
}
table.product_list thead th {
  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;
}
table.product_list tfoot td {
  font-size: 12px;
}
table.product_list tfoot .links {
  text-align: right;
}
table.product_list tfoot .links a{
  display: inline-block;
  background: #A4923E;
  color: #FFFFFF;
  padding: 2px 8px;
  border-radius: 5px;
}
.tableAction{
    width: 18%;
}

.Buttondelete {
	background-color:#cc0202;
	border-radius:8px;
	border:3px solid #ffffff;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:12px;
	padding:5px 14px;
	text-decoration:none;
}
.Buttondelete:hover {
	background-color:#4f2e34;
}
.Buttondelete:active {
	position:relative;
	top:1px;
}

        
.Buttonedit {
	background-color:#304a96;
	border-radius:8px;
	border:3px solid #ffffff;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:12px;
	padding:5px 14px;
	text-decoration:none;
}
.Buttonedit:hover {
	background-color:#0a0f33;
}
.Buttonedit:active {
	position:relative;
	top:1px;
}

.ButtonAdd {
	background-color:#158031;
	border-radius:28px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:12px;
	padding:5px 14px;
	text-decoration:none;
}
.ButtonAdd:hover {
	background-color:#5cbf2a;
}
.ButtonAdd:active {
	position:relative;
	top:1px;
}


        
        
</style>