import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ProyectoInicial';

  data = {
    image: '',
    product: '',
    price: 0,
    currency: '',
    rating: 0,
    description: '',
  };

  productos = [
    {
      id: 0,
      image: '../assets/img/Paris1.jpg',
      product: 'PARIS',
      price: 450,
      currency: '€',
      rating: 4.1,
      description:
        'París es la capital de Francia y su ciudad más poblada. Capital de la región de Isla de Francia, constituye el único departamento unicomunal del país. La ciudad de París, dentro de sus estrechos límites administrativos, tiene una población de 2 273 305 habitantes en 2015. Sin embargo, en el siglo XX, el área metropolitana de París se expandió más allá de los límites del municipio de París, y es hoy en día, con una población de 12,997,058 habitantes en 2020, el área metropolitana más poblada del continente europeo y la 28ª del mundo.',
      similarProducts: [
        {
          image: '../assets/img/berlin.webp',
          product: 'BERLIN',
          price: 600,
          currency: '€',
          rating: 2.9,
          description:
            'La ciudad de Berlín está situada en el noroeste de Alemania, a orillas de los ríos Spree y Havel. Es la capital de la República Federal de Alemania y uno de los 16 Estados federales. Con sus más de 3,4 millones de habitantes, es la urbe más poblada de Alemania y la mayor de la Unión Europea.',
        },
        {
          image: '../assets/img/Amsterdam1.jpg',
          product: 'AMSTERDAM',
          price: 750,
          currency: '€',
          rating: 4.8,
          description:
            'La ciudad está situada entre la bahía del IJ, al norte, y a las orillas del río Amstel, al sureste. Fundada en el siglo XII como un pequeño pueblo pesquero, en la actualidad es la ciudad más grande del país y un gran centro financiero y cultural de proyección internacional.',
        },
        {
          image: '../assets/img/Marrakech1.jpg',
          product: 'MARRAKECH',
          price: 500,
          currency: '€',
          rating: 3.7,
          description:
            'Marrakech es una ciudad de Marruecos. Eterna, dorada, coloreada, Marrakech es la capital turística de Marruecos. Tercera ciudad del reino, se sitúa a 242 km de Casablanca, 334 km de Rabat y a 500 km de Fès. Se llama a Marrakech la ciudad roja por los colores tierras de todos los edificios y casas.',
        },
      ],
      reviews: [
        {
          image: '../assets/img/chico.jfif',
          name: 'Homer J. Simpson',
          raging: 5,
          opinion:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          date: 'Ayer por la tarde, 2023',
        },
        {
          image: '../assets/img/chica.jfif',
          name: 'Marge Simpson',
          raging: 4,
          opinion:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
          date: 'La semana pasada, 2023',
        },
      ],
    },
    {
      id: 1,
      image: '../assets/img/berlin.webp',
      product: 'BERLIN',
      price: 600,
      currency: '€',
      rating: 2.9,
      description:
        'La ciudad de Berlín está situada en el noroeste de Alemania, a orillas de los ríos Spree y Havel. Es la capital de la República Federal de Alemania y uno de los 16 Estados federales. Con sus más de 3,4 millones de habitantes, es la urbe más poblada de Alemania y la mayor de la Unión Europea.',
      similarProducts: [
        {
          image: '../assets/img/Paris1.jpg',
          product: 'PARIS',
          price: 450,
          currency: '€',
          rating: 4.1,
          description:
            'París es la capital de Francia y su ciudad más poblada. Capital de la región de Isla de Francia, constituye el único departamento unicomunal del país. La ciudad de París, dentro de sus estrechos límites administrativos, tiene una población de 2 273 305 habitantes en 2015. Sin embargo, en el siglo XX, el área metropolitana de París se expandió más allá de los límites del municipio de París, y es hoy en día, con una población de 12,997,058 habitantes en 2020, el área metropolitana más poblada del continente europeo y la 28ª del mundo.',
        },
        {
          image: '../assets/img/Amsterdam1.jpg',
          product: 'AMSTERDAM',
          price: 750,
          currency: '€',
          rating: 4.8,
          description:
            'La ciudad está situada entre la bahía del IJ, al norte, y a las orillas del río Amstel, al sureste. Fundada en el siglo XII como un pequeño pueblo pesquero, en la actualidad es la ciudad más grande del país y un gran centro financiero y cultural de proyección internacional.',
        },
        {
          image: '../assets/img/Marrakech1.jpg',
          product: 'MARRAKECH',
          price: 500,
          currency: '€',
          rating: 3.7,
          description:
            'Marrakech es una ciudad de Marruecos. Eterna, dorada, coloreada, Marrakech es la capital turística de Marruecos. Tercera ciudad del reino, se sitúa a 242 km de Casablanca, 334 km de Rabat y a 500 km de Fès. Se llama a Marrakech la ciudad roja por los colores tierras de todos los edificios y casas.',
        },
      ],
      reviews: [
        {
          image: '../assets/img/chica2.jfif',
          name: 'P. Escobar',
          raging: 5,
          opinion:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          date: 'Ayer por la tarde, 2023',
        },
        {
          image: '../assets/img/chico 2.jfif',
          name: 'M.A. Nestle',
          raging: 2,
          opinion:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
          date: 'La semana pasada, 2023',
        },
      ],
    },
    {
      id: 2,
      image: '../assets/img/Amsterdam1.jpg',
      product: 'AMSTERDAM',
      price: 750,
      currency: '€',
      rating: 4.8,
      description:
        'La ciudad está situada entre la bahía del IJ, al norte, y a las orillas del río Amstel, al sureste. Fundada en el siglo XII como un pequeño pueblo pesquero, en la actualidad es la ciudad más grande del país y un gran centro financiero y cultural de proyección internacional.',
      similarProducts: [
        {
          image: '../assets/img/Paris1.jpg',
          product: 'PARIS',
          price: 450,
          currency: '€',
          rating: 4.1,
          description:
            'París es la capital de Francia y su ciudad más poblada. Capital de la región de Isla de Francia, constituye el único departamento unicomunal del país. La ciudad de París, dentro de sus estrechos límites administrativos, tiene una población de 2 273 305 habitantes en 2015. Sin embargo, en el siglo XX, el área metropolitana de París se expandió más allá de los límites del municipio de París, y es hoy en día, con una población de 12,997,058 habitantes en 2020, el área metropolitana más poblada del continente europeo y la 28ª del mundo.',
        },
        {
          image: '../assets/img/berlin.webp',
          product: 'BERLIN',
          price: 600,
          currency: '€',
          rating: 2.9,
          description:
            'La ciudad de Berlín está situada en el noroeste de Alemania, a orillas de los ríos Spree y Havel. Es la capital de la República Federal de Alemania y uno de los 16 Estados federales. Con sus más de 3,4 millones de habitantes, es la urbe más poblada de Alemania y la mayor de la Unión Europea.',
        },
      ],
      reviews: [
        {
          image: '../assets/img/chico.jfif',
          name: 'Stan Marsh',
          raging: 1,
          opinion:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          date: 'Ayer por la tarde, 2023',
        },
        {
          image: '../assets/img/chico 2.jfif',
          name: 'Randy Marsh',
          raging: 5,
          opinion:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
          date: 'primer día, 2023',
        },
      ],
    },
    {
      id: 3,
      image: '../assets/img/Marrakech1.jpg',
      product: 'MARRAKECH',
      price: 500,
      currency: '€',
      rating: 3.7,
      description:
        'Marrakech es una ciudad de Marruecos. Eterna, dorada, coloreada, Marrakech es la capital turística de Marruecos. Tercera ciudad del reino, se sitúa a 242 km de Casablanca, 334 km de Rabat y a 500 km de Fès. Se llama a Marrakech la ciudad roja por los colores tierras de todos los edificios y casas.',
      similarProducts: [],
      reviews: null,
    },
  ];

  productSelec = this.productos[0];
  productFilter = this.productos;
  filtro: string = '';
  filtro2: number = 0;

  starCol = Array(5).fill(true);

  buttonClick(index: number) {
    for (let i = 0; i < this.productos.length; i++) {
      if (index == this.productos[i].id) {
        this.productSelec = this.productos[i];
        console.log(index);
      }
    }
  }

  Buscar() {
    this.productFilter = this.productos.filter((filtrado) => {
      if (
        filtrado.product.toLowerCase().includes(this.filtro.toLowerCase()) ||
        filtrado.description.toLowerCase().includes(this.filtro.toLowerCase())
      ) {
        return filtrado;
      } else {
        return null;
      }
    });
  }

  Reset() {
    this.productFilter = this.productos;
    this.filtro;
  }
  Borrar(index: number) {
    for (let i = 0; i < this.productos.length; i++) {
      if (index == this.productos[i].id) {
        this.productFilter.splice(i, 1);
        this.productSelec = this.productos[0];
      }
    }
  }

  // Borrar(index: number){
  //   this.productFilter.splice(index.indexSelected, 1);
  // }

  Filtro2() {
    this.productFilter = [];
    for (let i = 0; i < this.productos.length; i++) {
      if (this.filtro2 <= this.productos[i].price) {
        this.productFilter.push(this.productos[i]);
      }
    }
  }
  infoModal(info: any) {
    this.data = info;
  }
}

// private BuscarYFiltrar(palabra : any)
// return (
//   filtrado.product.toLowerCase().includes(this.filtro.toLowerCase()) ||
//   filtrado.description.toLowerCase().includes(this.filtro.toLowerCase())
// ) {
//   return filtrado;
// } else {
//   return null;
// }

// private Borrar()
// this.productFilter = this.productos.length !== ? this.productos[0]
