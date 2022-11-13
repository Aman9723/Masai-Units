const a: number = 1;
const b: string = 'abc';
const c: boolean = true;
const d: null = null;
const e: undefined = undefined;

const f: Array<number> = [1, 2, 34];
const f1: number[] = [1, 2, 34];
const f2: string[] = ['a', 'b', 'c'];

// or operator in typescript
const g: Array<number | string> = [1, 'a'];

let h: number | string;
h = 1;
h = 'as';

const h2: Array<Array<number | string>> = [
    [0, '0'],
    [1, '1'],
];

// tuple in typescript (only 2 things are possible with same position)
const h3: Array<[number, string]> = [[0, 'a']];
const h4: [number[], string[]] = [
    [0, 1, 2],
    ['a', 'b', 'c'],
];

//? is used for option keys in typescript
const i: Array<{
    id: number;
    name: string;
    employeed: boolean;
    age?: number;
}> = [
    { id: 1, name: 'Name 1', employeed: true, age: 21 },
    { id: 2, name: 'Name 2', employeed: false },
    { id: 3, name: 'Name 3', employeed: true },
];

const j: {
    tasks: Array<number>;
    posts: Array<string>;
} = { tasks: [], posts: [] };

const k: Record<string, boolean> = {
    loading: true,
    error: true,
    success: true,
    requestSend: true,
};

const k1: Record<string, number[]> = {
    tasks: [1, 2, 3],
    posts: [4, 5, 6],
};

// Array of specific strings
const l: Array<'INDIA' | 'CHINA' | 'JAPAN'> = [
    'INDIA',
    'JAPAN',
    'CHINA',
    // 'IND',
    // 'CH',
    // 'ind',
    // 'japan',
];

type Country = 'INDIA' | 'CHINA' | 'JAPAN' | 'SRI LANKA';
const l1: Array<Country> = [
    'INDIA',
    'JAPAN',
    'CHINA',
    // 'IND',
    // 'CH',
    // 'ind',
    // 'japan',
];

type GENDER = 'MALE' | 'FEMALE' | 'OTHERS';
type User = {
    name: string;
    age: number;
    gender: GENDER;
};

const m: User[] = [
    {
        name: 'a',
        age: 22,
        gender: 'MALE',
    },
    {
        name: 'a',
        age: 22,
        gender: 'FEMALE',
    },
    {
        name: 'a',
        age: 22,
        gender: 'OTHERS',
    },
];

const add = (a: number, b: number): number => a + b;
add(1, 2);

const doSomething = (a: number, b: number): void => {
    console.log(a + b);
};
doSomething(1, 1);

type Engine = 'V8' | '4 Stroke' | '3 Stroke';
type EngineType = 'Petrol' | 'Desiel' | 'CNG' | 'EV';

enum EngineType1 {
    Petrol,
    Desiel,
    CNG,
    EV,
}

enum EngineType2 {
    Petrol = 'Petrol',
    Desiel = 'Diesel',
    CNG = 'CNG',
    EV = 'Electric Vehicle',
}

class Car {
    tyres: number;
    engine: string;
    engineType: EngineType[];
    constructor(tyres: number, engine: string, engineType: EngineType[]) {
        this.tyres = tyres;
        this.engine = engine;
        this.engineType = engineType;
    }
    getTypes() {
        return this.tyres;
    }
    getEngine() {
        return this.engine;
    }
    getEngineType() {
        return this.engineType;
    }
}

class Nexon extends Car {
    constructor(tyres: number, engine: string, engineType: EngineType[]) {
        super(tyres, engine, engineType);
    }
    setTyres(newTyresCount) {
        this.tyres = newTyresCount;
    }
}

// one assembly line
const indica = new Car(4, '3 Stroke', ['Petrol', 'EV']);
const nexon2 = new Nexon(5, 'V8', ['EV']);
const harier = new Car(4, '3 Stroke', [EngineType2.CNG, EngineType2.CNG]);
