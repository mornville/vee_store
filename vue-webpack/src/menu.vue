<template>

        <div class="row">
            
            <div class="col-lg-4" style="padding:20px">
              
                <h5 style="letter-spacing:3px;text-align:center;font-family: 'Montserrat', sans-serif;">STARTERS</h5>
                <br>
                <main class="mw6 center"   v-for="item in items">
                        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div class="dtc w2 w3-ns v-mid">
                            <img src="src/assets/tikka.jpg" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                        </div>
                        <div class="dtc v-mid pl3">
                            <h1 class="f6 f5-ns fw6 lh-title black mv0">{{ item.name }} </h1>
                            <h2 class="f6 fw4 mt0 mb0 black-60">&#8377; {{ item.price }}</h2>
                        </div>
                        <div class="dtc v-mid">
                            <form class="w-100 tr">
                            <button class="btn plus btn-info btn-sm" id="but" v-on:click="addToCart(item)"> + </button>

                            </form>
                        </div>
                        </article>

                </main>






            </div>
            
             <div class="col-lg-4" style="padding:20px">
                <h5 style="letter-spacing:3px;text-align:center;font-family: 'Montserrat', sans-serif; ">MAIN COURSE</h5>
                <br>
                <main class="mw6 center"   v-for="i in main">
                        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div class="dtc w2 w3-ns v-mid">
                            <img src="src/assets/chick.jpeg" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                        </div>
                        <div class="dtc v-mid pl3">
                            <h1 class="f6 f5-ns fw6 lh-title black mv0">{{ i.name }} </h1>
                            <h2 class="f6 fw4 mt0 mb0 black-60">&#8377; {{ i.price }}</h2>
                        </div>
                        <div class="dtc v-mid">
                            <form class="w-100 tr">
                            <button class="btn plus btn-info btn-sm" id="but" v-on:click="addToCart(i)" > + </button>
                            </form>
                        </div>
                        </article>

                </main>

            </div>
              <div class="col-lg-4" style="padding:20px">
                <h5 style="letter-spacing:3px;text-align:center;font-family: 'Montserrat', sans-serif;">DESERTS</h5>
                <br>
                <main class="mw6 center"   v-for="i in deserts">
                        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div class="dtc w2 w3-ns v-mid">
                            <img src="src/assets/black.jpg" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                        </div>
                        <div class="dtc v-mid pl3">
                            <h1 class="f6 f5-ns fw6 lh-title black mv0">{{ i.name }} </h1>
                            <h2 class="f6 fw4 mt0 mb0 black-60">&#8377; {{ i.price }}</h2>
                        </div>
                        <div class="dtc v-mid">
                            <form class="w-100 tr">
                            <button class="btn btn-info plus  btn-sm" id="but" v-on:click="addToCart(i)"> + </button>
                            </form>
                        </div>
                        </article>

                </main>

            </div>

            <!-- Button trigger modal -->
                <span style="color:black" id="mybutton" data-toggle="modal" data-target="#exampleModalLong"><span class="cart-notif" style="box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),
                        0 5px 15px 0 rgba(0,0,0,0.08);">{{ cart.length }}</span><i class=" car fa fa-shopping-bag "></i>
                </span>

                <!-- Modal -->
                <div class="modal fade" style="text-align:center" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle"  style="text-align:center !important">Cart({{ cart.length }})</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div v-if="!cart.length">
                            <h1>
                                Why Empty? Buy Somethinng :)
                            </h1>                   
                        </div>    
                        <ul class="list pl0 mt0 measure center">
                                <li    class="flex items-center lh-copy pa3 ph0-l bb b--black-10" v-for="item in cart"> 
                                    <img class="w2 h2 w3-ns h3-ns br-100" src="src/assets/tikka.jpg" />
                                    <div class="pl3 flex-auto">
                                        <span class="f6 db black-70"> {{ item.name }}</span>
                                        <span class="f6 db black-70">&#8377; {{item.price}}</span>
                                    </div>
                                    <div>
                                        <a  class="f6 link blue hover-dark-gray"> <button v-on:click="addToCart(item)">+</button> 
                                                    {{ item.quantity }} 
                                                    <button v-on:click="removeFromCart(item)">-</button> </a>
                                    </div>
                                </li>     

                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">BUY MORE?</button>
                        <button type="button" class="btn btn-primary">CHECKOUT ( &#8377; {{ sum }}  )</button>
                    </div>
                    </div>
                </div>
                </div>




            
            <div id="snackbar">Added To Cart..</div>
        </div>

</template>
<script>



    import but from './butt.vue';

            export default {
                
            mounted() {
                if(localStorage.getItem('cart')) {
                    try {
                        this.cart = JSON.parse(localStorage.getItem('cart'));
                        
                    }
                    catch(e) {
                        localStorage.removeItem('cart');
                    }
                }
                

                
            },
            name:'men',
            components:{
                but
            },
            data() {
                return{
                        total:0,
                        items: [
                            { 
                            name: 'Paneer Manchurian', 
                            itemID: 'jk778aA', 
                            price: 250, 
                            description: "",
                            quantity: 0
                            },
                            { 
                                name: 'Coca Cola', 
                                itemID: 'sadjlk823', 
                                price: 100,
                                description: "",
                                quantity: 0
                            },
                            { 
                                name: 'Bisleri 1L', 
                                itemID: 'kja767', 
                                price: 30,
                                description: "",
                                quantity: 0
                            },
                            { 
                                name: 'Chai', 
                                itemID: 'k2ja767', 
                                price: 30,
                                description: "",
                                quantity: 0
                            },
                            { 
                                name: 'Coffee', 
                                itemID: '33jhs', 
                                price: 30,
                                description: "",
                                quantity: 0
                            },
                            { 
                                name: 'LOL?', 
                                itemID: '334j3hs', 
                                price: 30000000,
                                description: "",
                                quantity: 0
                            },
                        ],
                        main: [
                        { 
                            name: 'Paneer Butter Masala', 
                            itemID: 'jk778a', 
                            price: 250, 
                            description: "",
                            quantity: 0
                            },
                            { 
                                name: 'Butter Chicken', 
                                itemID: 'sadj823', 
                                price: 100,
                                description: "",
                                quantity: 0
                            },
                            { 
                                name: 'tandoori Chicken', 
                                itemID: 'kj767', 
                                price: 30,
                                description: "",
                                quantity: 0
                            },
                            { 
                                name: 'Chana Masla', 
                                itemID: 'k2ja67', 
                                price: 30,
                                description: "",
                                quantity: 0
                            },
                        ],
                        deserts:[
                          { 
                            name: 'Mango', 
                            itemID: 'asasd', 
                            price: 50, 
                            description: "",
                            quantity: 0
                            },
                            { 
                                name: 'Black', 
                                itemID: 'sadjlk83', 
                                price: 100,
                                description: "",
                                quantity: 0
                            },
                            { 
                                name: 'Vanilla', 
                                itemID: 'kja7', 
                                price: 30,
                                description: "",
                                quantity: 0
                            },
                            { 
                                name: 'Scotch', 
                                itemID: 'k2a767', 
                                price: 30,
                                description: "",
                                quantity: 0
                            },
                            { 
                                name: 'Butter', 
                                itemID: '33hs', 
                                price: 30,
                                description: "",
                                quantity: 0
                            },
                            { 
                                name: 'Chocolate', 
                                itemID: '334j3s', 
                                price: 30000000,
                                description: "",
                                quantity: 0
                            },
                        ],
                        cart:[],
                        sum:0,

                
                    }
                
            },
            methods: {
                addToCart: function(item) {
                    console.log(this.sum);
                    
                    var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);

                    if (this.cart.length == 0) {
                        item.quantity += 1;
                        this.sum = this.sum + item.price;
                        this.cart.push(item);
                    }
                    else {
                        var found = false;
                        this.cart.forEach(element => {
                            if (element.itemID === item.itemID) {
                                element.quantity += 1;
                                this.sum = this.sum + item.price;
                                found = true;
                            }
                        });
                        if (found==false) {
                            item.quantity += 1
                            this.sum = this.sum + item.price;
                            this.cart.push(item);
                        }
                    }
                    // Saving item to cart
                    const parsed = JSON.stringify(this.cart);
                    localStorage.setItem('cart', parsed);
                },
                quantity: function(item) {
                    var quant = 0;
                    this.cart.forEach(element => {
                        if(element.itemID == item.itemID) {
                            quant = element.quantity
                        }
                    });
                    return quant;
                },
                reverse(){
                    this.total++;
                },
                removeFromCart: function(item) {
                        console.log("executing this!!");
                        if (this.cart.length == 0) {
                        return;
                        }
                        else {
                            var found = false;
                            this.cart.forEach(element => {
                                if (element.itemID === item.itemID) {
                                    
                                    element.quantity -= 1;
                                    this.sum = this.sum - item.price;
                                    found = true;
                                }
                            });
                            if (found==false) {
                                item.quantity -= 1
                                this.sum = this.sum - item.price;
                                this.cart.push(item);
                            }
                        }
                        // Saving item to cart
                        this.removeZero();
                        const parsed = JSON.stringify(this.cart);
                        localStorage.setItem('cart', parsed);
                    },
                    removeZero(){
                        var newCart = [];
                        this.cart.forEach(element => {
                            if(element.quantity != 0) {
                                newCart.push(element);
                            } 
                        });
                        this.cart = newCart;
                    },
            },
            }
</script>


<style>
h1{
    font-family: 'Montserrat', sans-serif;
}
.feedback {

  padding: 10px 20px;
  
}
.cart-notif {
  display: inline-block;
  position: relative;
  padding-left: 0px;
  width: 23px;
  height: 23px;
  top: -20px;
  right: -30px;
  border-radius: 100px;
  background: #EF413F;
  color: #fff;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
}

#mybutton {
  position: fixed;
  bottom:2px;
  right: 10px;
  
}
.plus{
      box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),
            0 5px 15px 0 rgba(0,0,0,0.08);
    padding:8px;
    
    border-radius: 50%;
    cursor:pointer;
}
.col{
   border : 1px solid black; 
}
.car{
  box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),
            0 5px 15px 0 rgba(0,0,0,0.08);
    padding:20px;
    font-size:40px;
    border-radius: 50%;
    cursor:pointer;
    

}
.starters{
    background: #fff;
    padding:20px;
    box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),
            0 5px 15px 0 rgba(0,0,0,0.08);
}



 #snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>
