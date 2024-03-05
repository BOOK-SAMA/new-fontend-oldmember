import { defineStore } from 'pinia'
import axios from 'axios'

export const productsStore = defineStore('products', {
    state: () => ({
        products: [],
        cart: []
    }),

    actions: {
        async fetchProductsFromDB() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API2}getallproduct`);
                this.products = response.data.product;
                console.log(this.products)
                // Loop through each product and call downloadImageAndDisplay
                await Promise.all(this.products.map(async (product) => {
                    product.image = await this.downloadImageAndDisplay(product.image);
                }));

            } catch (error) {
                console.log("Error fetching products:", error);
            }
        },

        addToCart(product) {
            this.cart.push(product);
        },

        removeFromCart(id) {
            console.log('>>>>> ID', id);
            this.cart = this.cart.filter((item) => item.ID !== id);
        },

        async downloadImageAndDisplay(uuid) {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API2}preview/${uuid}`,
                    {
                        responseType: 'arraybuffer',
                    }
                );
                const imageSrc = `data:${response.headers['content-type']};base64,${btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`;
                return imageSrc;
            } catch (error) {
                console.error("Error downloading image:", error);
                throw error;
            }
        }
    }
});
