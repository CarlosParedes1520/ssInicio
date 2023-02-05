import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';

@NgModule({
  declarations: [
    InicioComponent,
    SobreComponent,
    HabilidadesComponent,
    PortafolioComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule, 
    PdfViewerModule

  ],
  exports:[
    InicioComponent,
    SobreComponent,
    HabilidadesComponent,
    PortafolioComponent,
    ContactoComponent
  ]
})
export class PagesModule { }
