export class Test {
    testMe() {
        console.log("testing TS");
    }
    buttonTest() {
        let testTSButton = document.getElementById("testTS");
        testTSButton === null || testTSButton === void 0 ? void 0 : testTSButton.addEventListener("click", (ev) => {
            console.log(ev);
        });
    }
}
let testClassInstance = new Test();
testClassInstance.testMe();
testClassInstance.buttonTest();
//# sourceMappingURL=test.js.map