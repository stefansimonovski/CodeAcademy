var broj: string = "5";

const nameX: string[] = [];

for (let index = 0; index < 100; index++) {
    const element = index;
    
}

function suma(a: number, b: number): boolean {
    var result: boolean = !!(a + b);
    return result;
}

var res: boolean = suma(50, 435);
console.log(res);



type MyName = string | string[] | number;

interface IWorker {
    salary: number;
    workHard(): string;
}

class Human implements IWorker {
    public name: MyName;
    private age: number = 24;
    public salary: number;
    private readonly extraSalary: number;

    constructor(name: MyName, salary: number) {
        this.name = name;
        this.salary = salary;
        this.extraSalary = 5000;
    }

    public walk(): void {
        console.log(this.name + " is walking");
    }

    public workHard(): string {
        return "Blabla";
    }
}

class Orc implements IWorker {
    public salary: number = 5;

    public workHard(): string {
        return "Blabla";
    }
}

class Student extends Human {

    public checkWhatHeCanDo(): void {
        console.log(this.name);
        console.log(this.salary);
        this.workHard();
        this.walk();
    }
}

function returnWorker(): IWorker {
    var bla = new Human(345, 54);
    return bla;
}

var arr: IWorker[] = [];
arr.push(returnWorker())

class Artist {}
class Album {}
class Track {}

class Repository<T>{
    create(item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
}

var userRepo = new Repository<Artist>();
var albRepo = new Repository<Album>();
var trackRepo = new Repository<Track>();