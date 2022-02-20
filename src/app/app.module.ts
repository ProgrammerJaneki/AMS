import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './components/anime/anime.component';
import { BodyComponent } from './components/body/body.component';
import { BodyContentComponent } from './components/body-content/body-content.component';

const appRoutes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'anime', component: AnimeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnimeComponent,
    BodyComponent,
    BodyContentComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
