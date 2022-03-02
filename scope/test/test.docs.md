---
labels: ['angular', 'typescript', 'test']
description: 'A `test` component.'
---

# Test documentation

Import `TestModule` into your application:

```ts
import { TestModule } from './test.module';

// add it to your module imports
@NgModule({
  imports: [
    TestModule
  ]
})
export class AppModule {}
```

Use `TestComponent` in your templates:

```html
<test></test>
```
