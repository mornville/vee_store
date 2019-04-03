<template>

        <div class="row">
                
            <div class="col-lg-4" style="padding:20px">
                <h5 style="letter-spacing:3px;text-align:center">STARTERS</h5>
                <br>
                <main class="mw6 center"   v-for="item in items">
                        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div class="dtc w2 w3-ns v-mid">
                            <img src="src/assets/tikka.jpg" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                        </div>
                        <div class="dtc v-mid pl3">
                            <h1 class="f6 f5-ns fw6 lh-title black mv0">{{ item.name }} </h1>
                            <h2 class="f6 fw4 mt0 mb0 black-60"> {{ item.price }}</h2>
                        </div>
                        <div class="dtc v-mid">
                            <form class="w-100 tr">
                            <button class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" id="but" v-on:click="addToCart(item)">+ Add To Cart</button>
                            </form>
                        </div>
                        </article>

                </main>






            </div>
            
             <div class="col-lg-4" style="padding:20px">
                <h5 style="letter-spacing:3px;text-align:center">MAIN COURSE</h5>
                <br>
                <main class="mw6 center"   v-for="i in main">
                        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div class="dtc w2 w3-ns v-mid">
                            <img src="src/assets/chick.jpeg" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                        </div>
                        <div class="dtc v-mid pl3">
                            <h1 class="f6 f5-ns fw6 lh-title black mv0">{{ i.name }} </h1>
                            <h2 class="f6 fw4 mt0 mb0 black-60"> {{ i.price }}</h2>
                        </div>
                        <div class="dtc v-mid">
                            <form class="w-100 tr">
                            <button class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" id="but" v-on:click="addToCart(i)" >+ Add To Cart</button>
                            </form>
                        </div>
                        </article>

                </main>

            </div>
              <div class="col-lg-4" style="padding:20px">
                <h5 style="letter-spacing:3px;text-align:center">Deserts</h5>
                <br>
                <main class="mw6 center"   v-for="i in deserts">
                        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div class="dtc w2 w3-ns v-mid">
                            <img src="src/assets/black.jpg" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                        </div>
                        <div class="dtc v-mid pl3">
                            <h1 class="f6 f5-ns fw6 lh-title black mv0">{{ i.name }} </h1>
                            <h2 class="f6 fw4 mt0 mb0 black-60"> {{ i.cost }}</h2>
                        </div>
                        <div class="dtc v-mid">
                            <form class="w-100 tr">
                            <button class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60 but" type="submit"  @click="reverse()">+ Add To Cart</button>
                            </form>
                        </div>
                        </article>

                </main>

            </div>

            <div class="interior"  id="mybutton">
                        <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" href="#open-modal" style="color:white;text-decoration:none;"><i class="fas fa-external-link-alt"></i>Cart ( {{ cart.length }} )</a>
            </div>
                   
            <div id="open-modal" class="modal-window" style="text-align:center">
                <div class="container">
                     <a href="#" title="Close" class="modal-close"><span class="fa fa-times"></span></a>
                        <h1>Cart({{ cart.length }})</h1>
                <div>
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
                            <span class="f6 db black-70">Rs. {{item.price}}</span>
                        </div>
                        <div>
                            <a  class="f6 link blue hover-dark-gray"> <button v-on:click="addToCart(item)">+</button> 
                                        {{ item.quantity }} 
                                        <button v-on:click="removeFromCart(item)">-</button> </a>
                        </div>
                    </li>     

    <br><br><br>
               <button v-on:click="checkout(item.quantity,item.price)">CheckOut ( {{ sum }}/- )  </button> 
               </ul>
               
    

                </div>
                       
                </div>
            </div>
            <div id="snackbar">Added To Cart..</div>
        </div>

</template>
<script>





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
                {name: 'Mango', cost:70},
                {name: 'Strawberry', cost:70},
                {name: 'ButterScotch', cost:70},
                {name: 'Black Currant', cost:70},
                {name: 'Vanilla', cost:70}
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
.feedback {

  padding: 10px 20px;
  
}

#mybutton {
  position: fixed;
  bottom: -4px;
  right: 10px;
}
.modal-window {
	 position: fixed;
	 background-color: rgba(255, 255, 255, 0.25);
	 top: 0;
	 right: 0;
	 bottom: 0;
	 left: 0;
	 z-index: 999;
	 opacity: 0;
	 pointer-events: none;
	 -webkit-transition: all 0.3s;
	 -moz-transition: all 0.3s;
	 transition: all 0.3s;
}
 .modal-window:target {
	 opacity: 1;
	 pointer-events: auto;
}
 .modal-window > div {
	 width: 80%;
	 position: absolute;
	 top: 50%;
	 left: 50%;
	 transform: translate(-50%, -50%);
	 padding: 2em;
	 background: #fff;
	 color: #333;
}
 .modal-window header {
	 font-weight: bold;
}
 .modal-window h1 {
	 font-size: 150%;
	 margin: 0 0 15px;
	 color: #333;
}
 .modal-close {
	 color: #aaa;
	 line-height: 50px;
	 font-size: 80%;
	 position: absolute;
	 right: 0;
	 text-align: center;
	 top: 0;
	 width: 70px;
	 text-decoration: none;
}
 .modal-close:hover {
	 color: #000;
}


 .btn {
	 background-color: #fff;
	 padding: 1em 1.5em;
	 border-radius: 3px;
	 text-decoration: none;
}
 .btn i {
	 padding-right: 0.3em;
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
