//importamosel ElementRef para utilizar las etiquetas html
//El HostListener nos permite escuchar eventos
//El Input nos permite capturar enviado desde el html a la directiva
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log('directiva llamada');


  }

  /**
   * Declaramos la variable nuevoColor que viene como
   * parametro en la directiva appResaltado 
   * @type {string}
   * @memberof ResaltadoDirective
   */
  @Input("appResaltado") nuevoColor: string;

  /**
   * permite escuchar un evento del mouse cuando entra
   * a la directiva
   * 
   * @memberof ResaltadoDirective.mouseEntro
   */
  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'yellow');
  }

  /**
  * permite escuchar un evento del mouse cuando sale
  * a la directiva
  * 
  * @memberof ResaltadoDirective.mouseEntro
  */
  @HostListener('mouseleave') mouseSalio() {
    //esto nos permite agregar un estilo atravez de una directiva
    this.resaltar(null);
  }

  /**
   * /Funcion privada para cambiarle el color al texto
   * 
   * @private
   * @param {string} color 
   * @memberof ResaltadoDirective
   */
  private resaltar(color: string) {
    //esto nos permite agregar un estilo atravez de una directiva
    this.el.nativeElement.style.backgroundColor = color;
  }



}
