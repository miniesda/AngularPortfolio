import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
import { beforeRender, extend } from 'angular-three';
import * as THREE from 'three';

extend(THREE);

@Component({
  selector: 'app-scene',
  template: `
    <ngt-ambient-light [intensity]="0.5" />
    <ngt-directional-light [position]="[3, 3, 3]" />
    <ngt-mesh #mesh>
      <ngt-box-geometry />
      <ngt-mesh-standard-material color="hotpink" />
    </ngt-mesh>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Scene {
  mesh = viewChild.required<ElementRef<THREE.Mesh>>('mesh');

  constructor() {
    beforeRender(({ delta }) => {
      this.mesh().nativeElement.rotation.y += delta;
    });
  }
}