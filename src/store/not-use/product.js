import { defineStore } from "pinia";

import axios from 'axios'

import { ref, computed } from 'vue'

export const useProductStore = defineStore('useProductStore', () => {
    const products = ref([])

    const input = ref('')

    const list_products = computed(() => products.value)

    const load_products = computed(() => products.value.length > 0)
    
    const fetch_products = async () => {
        await axios.get(`${import.meta.env.VITE_API2}getallproduct`)
        .then( async (response) => {
            // console.log(response.data)
            products.value = response.data.product
            
            

            for (let i = 0; i < products.value.length; i++) {
                try {
                    const imageSrc = await downloadImageAndDisplay(products.value[i].image);
                    const productImage = imageSrc;
                    products.value[i].image = productImage;
    
                    // Convert price to integer
                    products.value[i].price = parseInt(products.value[i].price);
                } catch (error) {
                    console.error("Error downloading image for product:", products.value[i].image, error);
                }
            }

        }).catch((err) => {
            console.log(err)
        })
    }
    

    const downloadImageAndDisplay = async (uuid) => {
        try {
            // Fetch the image content from the server
            const response = await axios.get(
                `${import.meta.env.VITE_API2}preview/${uuid}`,
                {
                    responseType: 'arraybuffer',
                }
            );
            // Convert the binary data to a data URL
            const imageSrc = `data:${response.headers['content-type']};base64,${btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`;

            // Return the image source
            return imageSrc;
        } catch (error) {
            console.error("Error downloading image:", error);
            // Propagate the error to the calling function
            throw error;
        }
    }

    const search_products = computed(() => {
        if (input.value.length < 3) return products.value

        return products.value.filter((prd) => {
            if (prd.title.toLowerCase().includes(input.value.toLowerCase()) == false) {
                return false
            } else {
                return prd.title.toLowerCase().includes(input.value.toLowerCase())
            }
        })
    })



    return { products, fetch_products, list_products, load_products, input, search_products }
})


