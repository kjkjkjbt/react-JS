    import { configureStore } from '@reduxjs/toolkit';

    export const store = configureStore({
    reducer: {
        // Chứa toàn bộ state global của ứng dụng
        number: (state = 10, action) => {
        console.log('action trên: ', action);
        switch (action.type) {
            case 'CHANGE_NUMBER_ACTION': {
                state= action.payload;
                return state;
            }
            default: {
                return state;
            }
        }
    },
        img: (state = '../components/img/products/black-car.jpg', action) => {
        console.log('action dưới: ', action);
        return state;
        },
    },
    });
