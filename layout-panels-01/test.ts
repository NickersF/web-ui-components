export class Test {
    testMe() {
        console.log("testing TS");
    }
    
    buttonTest(): void {
        let testTSButton = document.getElementById("testTS");
        
        testTSButton?.addEventListener("click", (ev) => {
            console.log(ev);
        });
    }
}

let testClassInstance = new Test();

testClassInstance.testMe();
testClassInstance.buttonTest();