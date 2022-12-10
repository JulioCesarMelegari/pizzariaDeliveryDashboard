import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrderBoard';
import { Container } from './styles';

const orders: Order[] = [
    {
        '_id': '638a82887bb5f6a70380b54d',
        'table': '20',
        'status': 'WAITING',
        'products': [
            {
                'product': {
                    'name': 'Coca-Cola',
                    'imagePath': '1669338111455-coca-cola.png',
                    'price': 6,
                },
                'quantity': 1,
                '_id': '638a82887bb5f6a70380b54e'
            },
            {
                'product': {
                    'name': 'Pizza quatro queijos',
                    'imagePath': '1669338140655-quatro-queijos.png',
                    'price': 45,
                },
                'quantity': 1,
                '_id': '638a82887bb5f6a70380b54f'
            }
        ],
    },
]

export function Orders(){
    return (
        <Container>
            <OrdersBoard
                icon = "⏱"
                title = "fila de espera"
                orders={orders}
            />
            <OrdersBoard
                icon = "⏳"
                title = "Em preparação"
                orders={[]}
            />
            <OrdersBoard
                icon = "✅"
                title = "Pronto!"
                orders={[]}
            />
        </Container>
    );
}