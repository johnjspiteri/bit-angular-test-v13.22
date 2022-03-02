import { Component, NgModule } from '@angular/core';
import { TestModule } from './test.module';

@Component({
  selector: 'test-composition-cmp',
  template: `Test composition: <test></test>`
})
class TestCompositionComponent {}

@NgModule({
  declarations: [TestCompositionComponent],
  imports: [TestModule],
  bootstrap: [TestCompositionComponent]
})
export class TestCompositionModule {}
