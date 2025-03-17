### ReturnType 的使用
* ReturnType<T>
  * 是我们的 typescript 中的一个内置的类型检查工具，用于实现的是获取我们的一个函数的返回值类型
  * 可以帮助我们实现书写更加安全的 ts 代码吧
```typescript
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```
```typescript
function add(a: number, b: number): number {
  return a + b;
}
type AddReturnType = ReturnType<typeof add>; // AddReturnType 的类型为 number
```
* 在我们的 ts 类型体操以及 vue 和 react 开发中常用的呐

### InstanceType 的使用
* InstanceType
  * InstanceType<T>
  * 是我们的 typescript 中的一个内置的类型检查工具，用于实现的是获取我们的一个构造函数的实例类型
  * 它接受一个泛型参数 T，该参数必须是一个构造函数类型，并返回该构造函数的实例类型
  * 在组件化开发中可以用来实现的是获取一个组件实例吧
```typescript
type InstanceType<T extends abstract new (...args: any) => any> 
  = T extends abstract new (...args: any) => infer R ? R : any;
```
```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getPersonInfo() {
    return `${this.name} is ${this.age} years old`;
  }
}

type PersonInstance = InstanceType<typeof Person>;
const person: PersonInstance = new Person("Alice", 25);
console.log(person.getPersonInfo()); // Output: Alice is 25 years old
```

### Parameters 的使用
* Parameters<T>
* 是我们的 typescript 中的一个内置的类型检查工具，用于实现的是获取我们的一个函数的参数类型
```typescript
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
```

### ConstructorParameters 的使用
* ConstructorParameters<T>
* 是我们的 typescript 中的一个内置的类型检查工具，用于实现的是获取我们的一个构造函数的参数类型
```typescript
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
```

### Partial 的使用
* Partial<T>
* 是我们的 typescript 中的一个内置的类型检查工具，用于实现的是获取我们的一个类型中的所有属性，并设置为可选的
```typescript
type Person = {
  name: string;
  age: number;
};

type PartialPerson = Partial<Person>; // { name?: string; age?: number; }
```

### Readonly 的使用
* Readonly<T>
* 是我们的 typescript 中的一个内置的类型检查工具，用于实现的是获取我们的一个类型中的所有属性，并设置为只读的
```typescript
type Person = {
  name: string;
  age: number;
};

type ReadonlyPerson = Readonly<Person>; // { readonly name: string; readonly age: number; }
```

### ReadonlyArray 的使用
```typescript
let arr: number[] = [1, 2, 3];
let readonlyArr: ReadonlyArray<number> = arr;
// readonlyArr.push(4); // Error: Cannot assign to 'readonlyArr' because it is a read-only property.
```

### Pick 的使用
* Pick<T, K>
* 是我们的 typescript 中的一个内置的类型检查工具，用于实现的是获取我们的一个类型中的指定的属性
```typescript
type Person = {
  name: string;
  age: number;
  address: string;
};

type PersonNameAndAge = Pick<Person, 'name' | 'age'>; // { name: string; age: number; }
```

### Omit 的使用
* Omit<T, K>
* 是我们的 typescript 中的一个内置的类型检查工具，用于实现的是获取我们的一个类型中的除了指定的属性
```typescript
type Person = {
  name: string;
  age: number;
  address: string;
};

type PersonWithoutAddress = Omit<Person, 'address'>; // { name: string; age: number; }
```

### Record 的使用
* Record<K, T>
* 是我们的 typescript 中的一个内置的类型检查工具，用于实现的是获取我们的一个类型中的指定的属性
```typescript
type OptionsFlags = {
  enabled: boolean;
  timeout: boolean;
};

type FeatureOptions = Record<'darkMode' | 'newUser', OptionsFlags>;

const featureOptions: FeatureOptions = {
  darkMode: { enabled: true, timeout: false },
  newUser: { enabled: false, timeout: true }
};
```