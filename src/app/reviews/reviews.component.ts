import { Component } from '@angular/core';

interface Review {
  name: string;
  age: number;
  image: string;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews: Review[] = [
    {
      name: 'Maria',
      age: 25,
      image: 'assets/maria.jpg', // Ruta de la imagen
      rating: 5,
      comment: '¡Me encantó la suscripción, sin dudas voy a mantenerla!'
    },
    {
      name: 'Jorge',
      age: 45,
      image: 'assets/jorge.jpg',
      rating: 4,
      comment: 'La idea es original. Me gustaría que tenga más opciones.'
    },
    {
      name: 'Nicolás',
      age: 31,
      image: 'assets/nicolas.jpg',
      rating: 4,
      comment: 'Soy bastante exigente con mis lecturas, pero esta suscripción me sorprendió.'
    },
    {
      name: 'Samantha',
      age: 20,
      image: 'assets/samantha.jpg',
      rating: 3,
      comment: 'Me gusta el contenido, prefiero que hayan más opciones.'
    }
  ];
}