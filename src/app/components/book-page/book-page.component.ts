import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css'
})
export class BookPageComponent {
  isSidebarOpen = false;

  books = [
    { title: 'The Great Gatsby', price: '$15.99', image: 'https://images.unsplash.com/photo-1547517023-7ca0c162f816' },
    { title: 'Atomic Habits', price: '$18.99', image: 'https://images.unsplash.com/photo-1547517023-7ca0c162f816' },
    { title: 'Harry Potter', price: '$20.99', image: 'https://images.unsplash.com/photo-1547517023-7ca0c162f816' },
    { title: 'Rich Dad Poor Dad', price: '$12.99', image: 'https://images.unsplash.com/photo-1547517023-7ca0c162f816' },
  ];

}
