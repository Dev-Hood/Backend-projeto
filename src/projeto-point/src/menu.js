const list = [
    {
      title: "🍕🍕 Pizzas 🍕🍕",
      rows: [
        {
          title: "Calamussa ➡️ Pequena-R$19.00",
          description: "Mussarela, Calabresa, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "Calamussa ➡️ Média-R$25.00",
            description: "Mussarela, Calabresa, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "Calamussa ➡️ Grande-R$31.00",
            description: "Mussarela, Calabresa, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "Mista ➡️ Pequena-R$19.00",
            description: "Mussarela, Presunto, Calabresa, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "Mista ➡️ Média-R$25.00",
            description: "Mussarela, Calabresa, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "Mista ➡️ Grande-R$31.00",
            description: "Mussarela, Calabresa, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "Frango ➡️ Pequena-R$19.00",
            description: "Mussarela, Frango, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "Frango ➡️ Média-R$25.00",
            description: "Mussarela, Frango, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "Frango ➡️ Grande-R$31.00",
            description: "Mussarela, Frango, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "Portuguesa ➡️ Pequena-R$19.00",
            description: "Mussarela, Ovo, Presunto, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "Portuguesa ➡️ Média-R$25.00",
            description: "Mussarela, Ovo, Presunto, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "Portuguesa ➡️ Grande-R$31.00",
            description: "Mussarela, Ovo, Presunto, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "A Moda ➡️ Pequena-R$19.00",
            description: "Mussarela, Presunto, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "A Moda ➡️ Média-R$25.00",
            description: "Mussarela, Presunto, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "A Moda ➡️ Grande-R$31.00",
            description: "Mussarela, Presunto, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "Point ➡️ Pequena-R$22.00",
            description: "Mussarela, Presunto, Calabresa, Frango, Bacon, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "Point ➡️ Média-R$28.00",
            description: "Mussarela, Presunto, Calabresa, Frango, Bacon, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "Point ➡️ Grande-R$36.00",
            description: "Mussarela, Presunto, Calabresa, Frango, Bacon, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
        },
        {
            title: "4 Queijos ➡️ Pequena-R$22.00",
            description: "Mussarela, Queijo Minas, Cheddar, Tomate, Cebola, Orégano, Catupiry e Milho",
        },
        {
            title: "4 Queijos ➡️ Média-R$28.00",
            description: "Mussarela, Queijo Minas, Cheddar, Tomate, Cebola, Orégano, Catupiry e Milho",
        },
        {
            title: "4 Queijos ➡️ Grande-R$36.00",
            description: "Mussarela, Queijo Minas, Cheddar, Tomate, Cebola, Orégano, Catupiry e Milho",
        },
        {
            title: "Alho ➡️ Pequena-R$22.00",
            description: "Mussarela, Bacon, Alho Frito, Tomate, Cebola, Orégano, Catupiry e Milho",
        },
        {
            title: "Alho ➡️ Média-R$28.00",
            description: "Mussarela, Bacon, Alho Frito, Tomate, Cebola, Orégano, Catupiry e Milho",
        },
        {
            title: "Alho ➡️ Grande-R$36.00",
            description: "Mussarela, Bacon, Alho Frito, Tomate, Cebola, Orégano, Catupiry e Milho",
        },
        {
            title: "Master Point ➡️ Grande-R$50.00",
            description: "Mussare., Presun., Calabresa, Frango, Bacon, Chedder, Ovo, Tomate, Cebol., Oréga., Catupiry, Milho e Azeito.",
        },
        {
            title: "Banana com Chocolate ➡️ Pequena-R$16.00",
            description: "Mussarela, Chocolate, Banana",
        },
        {
            title: "Banana com Chocolate ➡️ Média-R$20.00",
            description: "Mussarela, Chocolate, Banana",
        },
        {
            title: "Banana com Chocolate ➡️ Grande-R$25.00",
            description: "Mussarela, Chocolate, Banana",
        },
        {
            title: "Banana com Canela ➡️ Pequena-R$16.00",
            description: "Mussarela, Canela, Banana",
        },
        {
            title: "Banana com Canela ➡️ Média-R$20.00",
            description: "Mussarela, Canela, Banana",
        },
        {
            title: "Banana com Canela ➡️ Grande-R$25.00",
            description: "Mussarela, Canela, Banana",
        },
        
      ]
    },
    {
      title: "🍔🍔 Hamburguers 🍔🍔",
      rows: [
        {
          title: "X-Burguer ➡️ R$6.00",
          description: "Pão, Queijo, Hambúrguer, Presunto e Alface",
        },
        {
            title: "X-Salada ➡️ R$8.00",
            description: "Pão, Queijo, Hambúrguer, Presunto, Tomate, Alface e Milho",
        },
        {
            title: "X-Bacon ➡️ R$10.00",
            description: "Pão, Queijo, Hambúrguer, Presunto, Bacon, Ovo, Milho e Alface",
        },
        {
            title: "X-Tudo ➡️ R$12.00",
            description: "Pão, Queijo, Hambúrguer, Presunto, Cheddar, Bacon, Ovo, Milho, Batata, Tomate e Alface",
        },
        {
            title: "X-Mamute ➡️ R$15.00",
            description: "Pão, 2 Queijo, 2 Hambúrguers, 2 Presunto, 2 Ovos, Cheddar, Bacon, Milho, Batata, Tomate e Alface",
        },
        {
            title: "X-Point ➡️ R$18.00",
            description: "Pão, 2 Queijo, 2 Hambúrguers, 2 Presunto, 2 Ovos, Calabresa, Catupiri, Cheddar, Bacon, Milho, Batata, Tomate e Alface",
        },
        {
            title: "X-Triplo ➡️ R$22.00",
            description: "Pão, 3 Queijo, 3 Hambúrguers, 3 Presunto, 3 Ovos, Calabresa, Catupiri, Cheddar, Bacon, Milho, Batata, Tomate e Alface",
        },
      ]
    }
  ];
module.exports = list