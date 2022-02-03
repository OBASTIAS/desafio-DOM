function header() {
    let div = document.createElement('div');
        div.setAttribute("class", "py-5 text-center");

    let img = document.createElement('img');
        img.setAttribute("class", "d-block mx-auto mb-4");
        img.setAttribute("src","https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg");
        img.width = 72;
        img.height = 72;

        div.appendChild(img);
  
    let h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Checkout form"));

        div.appendChild(h2);
  
    let p = document.createElement("p");
        p.classList.add("lead");
        p.appendChild(document.createTextNode("Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."));

        div.appendChild(p);
  
    return div;
  }
  
  function cartsItem(name, description, price, promo=false) {
        let li = document.createElement("li");
        let div = document.createElement("div");
        if (promo) {
            div.setAttribute("class", "text-success");
            li.setAttribute("class", "list-group-item d-flex justify-content-between bg-light");
         }
        else {
            li.setAttribute("class", "list-group-item d-flex justify-content-between lh-condensed");
        }

        let h6 = document.createElement("h6");
            h6.setAttribute("class", "my-0");

        let small = document.createElement("small");
             small.setAttribute("class", "text-muted");

        let span = document.createElement("span");
            span.setAttribute ("class", "text-muted");
  
        h6.appendChild(document.createTextNode(name));
        small.appendChild(document.createTextNode(description));
        div.appendChild(h6);
        div.appendChild(small);
        li.appendChild(div);
        span.appendChild(document.createTextNode(price));
        li.appendChild(span);
  
    return li;
  }
  
  function promoCode() {

    let form = document.createElement("form");
        form.setAttribute("class", "card p-2");

    let div = document.createElement("div");
        div.setAttribute("class", "input-group");

        form.appendChild(div);

    let input = document.createElement("input");
        input.type = "text";
        input.setAttribute("class", "form-control");
        input.setAttribute("class", "Promo code");
        
        div.appendChild(input);

    let divButton = document.createElement("div");
        divButton.setAttribute("class", "input-group-append");

    let button = document.createElement("button");
        button.type = "submit";
        button.setAttribute("class", "btn btn-secondary");
        button.appendChild(document.createTextNode("Redeem"));
        divButton.appendChild(button);

        div.appendChild(divButton);
  
    return form;            
  }
  
  function cartsContainer() {
    let container = document.createElement("div");
        container.setAttribute("class", "col-md-4 order-md-2 mb-4");

    let h4 = document.createElement("h4");
        h4.setAttribute("class", "d-flex justify-content-between align-items-center mb-3");

    let span = document.createElement("span");
        span.setAttribute("class", "text-muted");

        span.appendChild(document.createTextNode("Your cart"));
        h4.appendChild(span);

    let spanNumber = document.createElement("span");
        spanNumber.setAttribute("class", "badge badge-secondary badge-pill");

        spanNumber.appendChild(document.createTextNode("3"));

        h4.appendChild(span);
        h4.appendChild(spanNumber);
        container.appendChild(h4);
  
    let ul = document.createElement("ul");
        ul.setAttribute("class", "list-group mb-3");

        ul.appendChild(cartsItem("Product name", "Brief description", "$12"));
        ul.appendChild(cartsItem("Second Product", "Brief description", "$8"));
        ul.appendChild(cartsItem("Third item", "Brief description", "$5"));
        ul.appendChild(cartsItem("Promo code", "EXAMPLECODE", "-$5", true));
  
    let total = document.createElement("li");
        total.setAttribute("class", "list-group-item d-flex justify-content-between");

    let totalSpan = document.createElement("span");

        totalSpan.appendChild(document.createTextNode("Total (USD)"));

    let totalPrice = document.createElement("strong");

        totalPrice.appendChild(document.createTextNode("$20"));
        total.appendChild(totalSpan);
        total.appendChild(totalPrice);
        ul.appendChild(total);
  
  
    container.appendChild(ul);
    container.appendChild(promoCode());
    
    return container;

  }
  
  
    let body = document.getElementsByTagName("body")[0];
        body.setAttribute("class","bg-light");

    let containerPagina = document.createElement("div");
        containerPagina.setAttribute("class","container");

        body.appendChild(containerPagina);
        containerPagina.appendChild(header());

    let rowPagina = document.createElement("div");
        rowPagina.setAttribute("class","row");

        containerPagina.appendChild(rowPagina);
        rowPagina.appendChild(cartsContainer());
   