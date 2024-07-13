import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, CdkDrag, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem,} from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

  todo = ['Sistemas', 'Procesos', 'Distribuidos', 'Arquitecturas', 'Sistema', 'modelo'];

  done1: any [] = [];
  done2: any [] = [];
  done3: any [] = [];
  done4: any [] = [];
  done5: any [] = [];
  done6: any [] = [];
  attempts = 0

  drop(event: CdkDragDrop<string[]>) {
    console.log('VER EVENTO', event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.data.length == 0 && event.container.id != "cdk-drop-list-6" || event.previousContainer.id != "cdk-drop-list-6") {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
    }

  }

  checkIt() {
    let right = ["modelo", "Sistemas", "Distribuidos", "Sistema", "Procesos", "Arquitecturas"];
    let userSelected = [this.done1[0], this.done2[0], this.done3[0], this.done4[0], this.done5[0], this.done6[0]];


    if (JSON.stringify(right) === JSON.stringify(userSelected)) {
      const felicidadesElement = document.getElementById("felicidades");
      if (felicidadesElement) {
        felicidadesElement.innerHTML = "¡Felicidades! Los arreglos son iguales";
        felicidadesElement.style.cssText = `
            font-size: 24px;
            font-weight: bold;
            color: #008000;
        `;

        // Agregamos la animación de confeti
        const confetiContainer = document.createElement("div");
        confetiContainer.className = "confeti-container";
        felicidadesElement.appendChild(confetiContainer);

        for (let i = 0; i < 50; i++) {
          const confeti = document.createElement("div");
          confeti.className = "confeti";
          confeti.style.top = `${Math.random() * 100}%`;
          confeti.style.left = `${Math.random() * 100}%`;
          confeti.style.animationDelay = `${Math.random() * 2}s`;
          confetiContainer.appendChild(confeti);
        }
      } else {
        console.error("No se encontró el elemento con el id 'felicidades'");
      }
    } else {


      let differences = right.filter((item, index) => item !== userSelected[index]);


      for(let i of differences){

        this.todo.push(i);

        switch (i) {
          case 'modelo':
            this.done1 = [];
            break;
          case 'Sistemas':
            this.done2 = [];
            break;
          case 'Distribuidos':
            this.done3 = [];
            break;
          case 'Sistema':
            this.done4 = [];
            break;
          case 'Procesos':
            this.done5 = [];
            break;
          case 'Arquitecturas':
            this.done6 = [];
            break;
          default:
            console.log("This is the default case");
            break;
        }
      }

      this.attempts++; // Incrementamos el contador de intentos
      const sigueIntentandoElement = document.getElementById("sigueIntentando");
      if (sigueIntentandoElement) {
        sigueIntentandoElement.innerHTML = `Sigue intentando! (Intento ${this.attempts} de 2)`;
        sigueIntentandoElement.style.cssText = `
            font-size: 18px;
            font-weight: bold;
            color: #FF0000;
        `;
      } else {
        console.error("No se encontró el elemento con el id 'igueIntentando'");
      }

      if (this.attempts == 2) {
        // Reiniciamos la página cuando llega a 2 intentos
        alert("Perdiste");
        location.reload();
      }
    }



  }

}
