export default {
    name:"product",
    title:"Product",
    type:"document",
    fields:[
        {
           name:"name",
           title:"Product Name",
           type:"string" 
        },
        {
            name:"image",
            title:"Product Image",
            type:"image" 
         },
         {
            name:"price",
            title:"Product Price",
            type:"number" 
         },
         {
            name:"description",
            title:"Product Description",
            type:"text" 
         },
         
         {
            name: 'price_id',
            title: 'Stripe Price ID',
            type: 'string',
          },
         
         
    ]

}
















