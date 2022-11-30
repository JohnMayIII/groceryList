/**
 * This is the assignment.
 * 
 * Create a form.
 * Form should contain grocery inputs
 * 
 * 1 input for the type of item
 * 1 input for the amount of items
 * 1 input for the grocery store aisle
 * 1 input for the price
 * 
 * tally the total based on all of the prices
 * 
 * Capture those input values in javascript like we did earlier today.
 * Display them on the page. Make it look nice.
 * Bonus points if you dont allows duplicate items.
 */

class Shop{
    constructor(){
        this.shopArr = [];
        
        this.form = document.getElementById('form');
        this.shopItemInput = document.getElementById('item')
        this.qtyInput = document.getElementById('qty')
        this.aisleInput = document.getElementById('aisle')
        this.priceInput = document.getElementById('price')
        this.displayArea = document.getElementById('displayArea')
    }

    init(){
        this.formSubmit();
    }

    formSubmit(){
        this.form.addEventListener('submit', (e)=>{
            e.preventDefault();
            // console.log('click')
            this.addItem();

        })
    }

    addItem(){
        let found = false;
        console.log(this.shopItemInput.value)

        this.shopArr.forEach(item => {
            if(item.toLowerCase() === this.shopItemInput.value.toLowerCase()){
                found = true;
            }
        });

        if(!found){
            this.displayArea.innerHTML +=`
            <div class="card mb-3" style="max-width: 300px">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body shop-card">
                            <p class="card-text item-info">Item: ${this.shopItemInput.value}</p>
                            <p class="card-text item-info">Quantity: ${this.qtyInput.value}</p>
                            <p class="card-text item-info">Aisle: ${this.aisleInput.value}</p>
                            <p class="card-text item-info">Price: $${this.priceInput.value * this.qtyInput.value}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
            this.shopArr.push(this.shopItemInput.value);
        }
    }
}

let action = new Shop();
action.init();