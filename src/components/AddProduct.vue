<template>
    <div>
        <h1 class="title_product mx-auto">Agregue un Producto</h1><br>
        <table class="product_add mx-auto">
            <thead>
                <tr>
                    <th colspan="2">Insertar Producto</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><label  class="label">Nombre del Producto</label></td>
                    <td><input
                    class="input"
                    type="text"
                    placeholder="Ingrese el nombre del producto"
                    v-model="productName" 
                    required/></td>
                </tr>
                <tr>
                    <td> <label class="label">Precio</label></td>
                    <td><input
                    class="input"
                    type="text"
                    placeholder="Ingrese el precio del producto"
                    v-model="productPrice" 
                    required/>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td><router-link class="ButtonBack" to="/crud">Volver Atrás&nbsp;</router-link></td>
                       <td>
                    <div class="links">
                        
                        <button class="links" @click="saveProduct">Guardar Producto</button> 
                    </div>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div><br>
</template>
  
<script>
// import axios
import axios from "axios";
  
export default {
    name: "AddProduct",
    data() {
        return {
            productName: "",
            productPrice: "",
        };
    },
    methods: {
        // Create New product
        async saveProduct() {
            if (!this.productName || !this.productPrice) {
                alert("Por favor, rellene todos los campos.");
                return;
            }
            try {
                await axios.post(this.$store.state.backUrl+"/products", {
                    product_name: this.productName,
                    product_price: this.productPrice,
                });
                this.productName = "";
                this.productPrice = "";
                this.$router.push("/Crud");
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
.input{
    width: 95%;
}

table.product_add {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #EEEEEE;
  width: 30%;
   text-align: left;

}
table.product_add td, table.product_add th {
  border: 0px solid #AAAAAA;
  padding: 3px 2px;
  padding: 10px ;
}
table.product_add tbody td {
  font-size: 14px;
  height: 14%;
  color: #333333;
}
table.product_add thead {
  background: #22750F;
}
table.product_add thead th {
    text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: #FFFFFF;
}
table.product_add tfoot {
  font-size: 14px;
  
  font-weight: bold;
  color: #FFFFFF;
  background: #E8FFE2;
  background: -moz-linear-gradient(top, #eeffe9 0%, #eaffe5 66%, #E8FFE2 100%);
  background: -webkit-linear-gradient(top, #eeffe9 0%, #eaffe5 66%, #E8FFE2 100%);
  background: linear-gradient(to bottom, #eeffe9 0%, #eaffe5 66%, #E8FFE2 100%);
}
table.product_add tfoot td {
  font-size: 14px;
}
table.product_add tfoot .links {
  text-align: right;
}
table.product_add tfoot .links button {
  display: inline-block;
  background: #78A46C;
  color: #FFFFFF;
  padding: 2px 8px;
  border-radius: 5px;
}
.ButtonBack{
    text-align: left;
    display: inline-block;
  background: #78A46C;
  color: #FFFFFF;
  padding: 2px 6px;
  padding-right: 2%;
  border-radius: 5px;

}

</style>