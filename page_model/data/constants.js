import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: 'standard_user',
        PASSWORD: 'secret_sauce'
    },

    invalid_user:{
        USERNAME:'standard_user2',
        PASSWORD:'secret_sauce'
    },
    infoUser:{
        firstName:'Eduardo',
        lastName:'Leal',
        postalCode:'22800'
    },
    errorMessages:{
        firstName:'Error: First Name is required',
        lastName:'Error: Last Name is required',
        postalCode:'Error: Postal Code is required'
    },

    subHeaders:{
        yourCart:'Your Cart',
        information:'Checkout: Your Information',
        overview:'Checkout: Overview',
    }
}


