import { Component } from '@angular/core';
import { NgtCanvas } from 'angular-three/dom';
import { Scene } from '../../scene/scene';

@Component({
  selector: 'app-home',
  imports: [NgtCanvas, Scene],
  template: `
    <ngt-canvas shadows [camera]="{ position: [3, 3, 3] }" [lookAt]="[0, 0, 0]">
      <app-scene *canvasContent />
    </ngt-canvas>
  `,
  styles: `:host { display: block; height: 100dvh; }`,
})
export class Home {}