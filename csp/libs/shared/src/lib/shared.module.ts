//import Agastya from 'agastya'; // Fails Cypress on CI.
import { CommonModule } from '@angular/common';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MomentModule } from 'ngx-moment';
import { NgModule } from '@angular/core';

//new Agastya(String(process.env.AGASTYA_API_KEY));// Fails Cypress on CI.

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FooterComponent,
    FormsModule,
    HeaderComponent,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MomentModule,
    ReactiveFormsModule,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MomentModule,
    ReactiveFormsModule,
  ],
  providers: [
    // Display errors instantly.
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
})
export class SharedModule {}
