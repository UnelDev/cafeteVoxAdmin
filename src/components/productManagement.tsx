import { useState } from 'react';
export default function ProductManagement() {
    let path = '/';
    const [selected, setselected] = useState({ name: 'non selectionnée', stock: 0, startingStock: 0, price: 0, margin: 0, color: '#FFFFFF', type: 'product' });
    const [ListProduct, setListProduct] = useState(createListProduct);
    function createListProduct() {
        const list = getProductList(path);
        const elementList = list.map((Element) => {
            if (Element.type === 'product') {
                return (<div onClick={() => { setselected(Element as any) }} className='productButton'>
                    {Element.name}
                </div>)
            } else {
                return (<div onClick={() => { path = Element.path ?? '/'; setListProduct(createListProduct()) }} className='productButton'>
                    {Element.name}
                </div>)
            }
        })
        console.log(path);
        if (path !== '/') {
            elementList.unshift(<div className='productButton' onClick={() => {
                // tempPath = /truc/truc
                const tempPath = path.split('/');
                tempPath.pop();
                // tempPath = /truc/
                tempPath.pop();
                // tempPath = /truc
                path = tempPath.join('/');
                //path = /truc
                path += '/'
                setListProduct(createListProduct());
            }}>../</div>);
        }
        return elementList;

    }
    return (<div className="ProductManagementPage">
        <div className="listProduct">
            {ListProduct}
        </div>
        <div className="ProductManagementbox">
            <div className='ProductManagementboxTitle'>{selected.name}</div>
            <div className='ProductManagementboxText'>prix: {selected.price}€</div>
            <div className='ProductManagementboxText'>marge: {selected.margin}€</div>
            <div className='ProductManagementboxText'>stock actuelle: {selected.stock}€</div>
            <div className='ProductManagementboxText'>stock initial: {selected.startingStock}€</div>
            <div className='ProductManagementboxText'>couleur: {selected.color}€</div>
        </div>
    </div>)
}

function getProductList(path: string) {
    if (path === '/boisson/') {
        return [
            {
                name: 'boisson',
                path: '/boisson/boisson/',
                type: 'directory',
                color: '#5eccd3'
            },
            {
                name: 'café',
                stock: 2000,
                startingStock: 2000,
                price: 0.50,
                margin: 0.25,
                color: '#7b4529',
                type: 'product'
            },
            {
                name: 'thé',
                stock: 2000,
                startingStock: 2000,
                price: 0.50,
                margin: 0.25,
                color: '#ef8203',
                type: 'product'
            }
        ]
    } else if (path === '/boisson/boisson/') {
        return [
            {
                name: 'café',
                stock: 2000,
                startingStock: 2000,
                price: 0.50,
                margin: 0.25,
                color: '#7b4529',
                type: 'product'
            },
            {
                name: 'thé',
                stock: 2000,
                startingStock: 2000,
                price: 0.50,
                margin: 0.25,
                color: '#ef8203',
                type: 'product'
            }
        ]
    } else {
        return [
            {
                name: 'boisson',
                path: '/boisson/',
                type: 'directory',
                color: '#5eccd3'
            },
            {
                name: 'café',
                stock: 2000,
                startingStock: 2000,
                price: 0.50,
                margin: 0.25,
                color: '#7b4529',
                type: 'product'

            },
            {
                name: 'thé',
                stock: 2000,
                startingStock: 2000,
                price: 0.50,
                margin: 0.25,
                color: '#ef8203',
                type: 'product'

            },
            {
                name: 'capri sun',
                stock: 2000,
                startingStock: 2000,
                price: 0.50,
                margin: 0.25,
                color: '#b1b0ae',
                type: 'product'

            },
            {
                name: 'eau',
                stock: 2000,
                startingStock: 2000,
                price: 0.50,
                margin: 0.25,
                color: '#5eccd3',
                type: 'product'

            },
            {
                name: 'chocolat',
                stock: 2000,
                startingStock: 2000,
                price: 0.50,
                margin: 0.25,
                color: '#805538',
                type: 'product'

            },
            {
                name: 'b-ready',
                stock: 2000,
                startingStock: 2000,
                margin: 0.50,
                price: 0.50,
                color: '#791d11',
                type: 'product'

            },
            {
                name: 'coca',
                stock: 2000,
                startingStock: 2000,
                price: 1,
                margin: 0.50,
                color: '#ca0a23',
                type: 'product'

            },
            {
                name: 'coca chery',
                stock: 2000,
                startingStock: 2000,
                price: 1,
                margin: 0.50,
                color: '#7a3150',
                type: 'product'

            },
            {
                name: 'fanta',
                stock: 2000,
                startingStock: 2000,
                price: 1,
                margin: 0.50,
                color: '#80c33c',
                type: 'product'

            },
            {
                name: 'oasis',
                stock: 2000,
                startingStock: 2000,
                price: 1,
                margin: 0.50,
                color: '#f17301',
                type: 'product'

            },
            {
                name: '7up',
                stock: 2000,
                startingStock: 2000,
                price: 1,
                margin: 0.50,
                color: '#008437',
                type: 'product'

            },
            {
                name: 'drPepper',
                stock: 2000,
                startingStock: 2000,
                price: 1,
                margin: 0.50,
                color: '#ab2322',
                type: 'product'

            },
            {
                name: 'lipton',
                stock: 2000,
                startingStock: 2000,
                price: 1,
                margin: 0.50,
                color: '#b03500',
                type: 'product'

            },
            {
                name: 'orangina',
                stock: 2000,
                startingStock: 2000,
                price: 1,
                margin: 0.50,
                color: '#f2d200',
                type: 'product'

            },
            {
                name: 'kinder',
                stock: 2000,
                startingStock: 2000,
                price: 1,
                margin: 0.50,
                color: '#d78e56',
                type: 'product'

            },
            {
                name: 'oreo',
                stock: 2000,
                startingStock: 2000,
                price: 1,
                margin: 0.50,
                color: '#032666',
                type: 'product'

            },
            {
                name: 'lion',
                stock: 2000,
                startingStock: 2000,
                price: 1,
                margin: 0.50,
                color: '#270102',
                type: 'product'

            },
            {
                name: 'M&M\'s',
                stock: 2000,
                startingStock: 2000,
                price: 1,
                margin: 0.50,
                color: '#f2c008',
                type: 'product'

            },
            {
                name: 'kit-kat',
                stock: 2000,
                startingStock: 2000,
                price: 1,
                margin: 0.50,
                color: '#e13e13',
                type: 'product'

            },
            {
                name: 'twix',
                stock: 2000,
                startingStock: 2000,
                price: 1,
                margin: 0.50,
                color: '#ab8935',
                type: 'product'

            },
            {
                name: 'snicker',
                stock: 2000,
                startingStock: 2000,
                price: 1,
                margin: 0.50,
                color: '#0d3fb8',
                type: 'product'

            },
            {
                name: 'malteser',
                stock: 2000,
                startingStock: 2000,
                price: 1,
                margin: 0.50,
                color: '#f21d25',
                type: 'product'

            },
            {
                name: 'nutela Biscuit',
                stock: 2000,
                startingStock: 2000,
                price: 1,
                margin: 0.50,
                color: '#791d11',
                type: 'product'

            }
        ];
    }
}