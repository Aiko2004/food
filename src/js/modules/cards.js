import {getResource} from "../services/services";

function cards(){
    // Меню с использованием ООП

    class MenuCard{
        constructor(src, alt, title, description, price, parentSelector){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.parentSelector = document.querySelector(parentSelector);
            this.transfer = 475;
            this.changeToKZT();
        }

        changeToKZT(){
            this.price = this.price * this.transfer;
        }

        render(){
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="menu__item">
                    <img src="${this.src}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> тг/день</div>
                    </div>
                </div>
            `;
            this.parentSelector.append(element);
        }
    }

    getResource('http://localhost:3000/menu')
    .then(data => {
       data.forEach(({img, altimg, title, descr, price}) => {
           new MenuCard(img, altimg, title, descr, price,
               ".menu .menu__field .container").render();
       });
    });

    // axios.get('http://localhost:3000/menu')
    //     .then(response => {
    //         response.data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCard(img, altimg, title, descr, price,
    //                 ".menu .menu__field .container")
    //                 .render();
    //         });
    //     });
}

export default cards;