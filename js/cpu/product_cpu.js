cpuTypeDatalenght = cpuTypeData.length - 1;
count = Number(localStorage.getItem('index'));

let effectiveData= JSON.parse(localStorage.getItem("cpuDataTmp"));
console.log(effectiveData);

document.getElementById("titleData").innerHTML = effectiveData.name;


for (let i = 0; i <= cpuTypeDatalenght; i++) {
    let item = document.createElement("div");
    item.className = "col d-flex align-items-start container-property-item";
    document.getElementById("propertyContainer").appendChild(item);
}
for (let i = 0; i <= cpuTypeDatalenght; i++) {
    let item = document.createElement("h3");
    item.className = "fw-bold mb-0 fs-4 title-property";
    item.innerHTML = cpuTypeData[i];
    document.getElementsByClassName("container-property-item")[i].appendChild(item);
}

let propertyOne = document.createElement("h4");
propertyOne.className = "fw-light";
propertyOne.innerHTML = effectiveData.brand;
document.getElementsByClassName("title-property")[0].appendChild(propertyOne);

let propertyTwo = document.createElement("h4");
propertyTwo.className = "fw-light";
propertyTwo.innerHTML = effectiveData.scope;
document.getElementsByClassName("title-property")[1].appendChild(propertyTwo);

let propertyThree = document.createElement("h4");
propertyThree.className = "fw-light underseries";
propertyThree.innerHTML = effectiveData.series + " " + effectiveData.underseries;
document.getElementsByClassName("title-property")[2].appendChild(propertyThree);

let propertyFour = document.createElement("h4");
propertyFour.className = "fw-light";
propertyFour.innerHTML = effectiveData.underseriesb;
document.getElementsByClassName("title-property")[3].appendChild(propertyFour);

let propertyFive = document.createElement("h4");
propertyFive.className = "fw-light";
propertyFive.innerHTML = effectiveData.core;
document.getElementsByClassName("title-property")[4].appendChild(propertyFive);

let propertySix = document.createElement("h4");
propertySix.className = "fw-light";
propertySix.innerHTML = effectiveData.threads;
document.getElementsByClassName("title-property")[5].appendChild(propertySix);

let propertySeven = document.createElement("h4");
propertySeven.className = "fw-light";
propertySeven.innerHTML = effectiveData.tdp + " W";
document.getElementsByClassName("title-property")[6].appendChild(propertySeven);

let propertyEight = document.createElement("h4");
propertyEight.className = "fw-light";
propertyEight.innerHTML = effectiveData.socket;
document.getElementsByClassName("title-property")[7].appendChild(propertyEight);

let propertyNine = document.createElement("h4");
propertyNine.className = "fw-light";
propertyNine.innerHTML = effectiveData.microarchitecture;
document.getElementsByClassName("title-property")[8].appendChild(propertyNine);

let propertyTen = document.createElement("h4");
propertyTen.className = "fw-light";
propertyTen.innerHTML = effectiveData.basefrequency + " GHz";
document.getElementsByClassName("title-property")[9].appendChild(propertyTen);

let propertyEleven = document.createElement("h4");
propertyEleven.className = "fw-light";
propertyEleven.innerHTML = effectiveData.turbofrequency + " GHz";
document.getElementsByClassName("title-property")[10].appendChild(propertyEleven);

let propertyTwelve = document.createElement("h4");
propertyTwelve.className = "fw-light";
propertyTwelve.innerHTML = effectiveData.cache + " MB";
document.getElementsByClassName("title-property")[11].appendChild(propertyTwelve);

let propertyThirteen = document.createElement("h4");
propertyThirteen.className = "fw-light";
propertyThirteen.innerHTML = effectiveData.memorytype;
document.getElementsByClassName("title-property")[12].appendChild(propertyThirteen);

let propertyFourteen = document.createElement("h4");
propertyFourteen.className = "fw-light";
propertyFourteen.innerHTML = effectiveData.memoryspeed + " MHz";
document.getElementsByClassName("title-property")[13].appendChild(propertyFourteen);

let propertyFifteen = document.createElement("h4");
propertyFifteen.className = "fw-light";
propertyFifteen.innerHTML = effectiveData.memorychannels;
document.getElementsByClassName("title-property")[14].appendChild(propertyFifteen);

let propertySixteen = document.createElement("h4");
propertySixteen.className = "fw-light";
propertySixteen.innerHTML = effectiveData.memorysize + " GB";
document.getElementsByClassName("title-property")[15].appendChild(propertySixteen);

let propertySeventeen = document.createElement("h4");
propertySeventeen.className = "fw-light";
propertySeventeen.innerHTML = effectiveData.pciegeneration;
document.getElementsByClassName("title-property")[16].appendChild(propertySeventeen);

let propertyEighteen = document.createElement("h4");
propertyEighteen.className = "fw-light";
propertyEighteen.innerHTML = effectiveData.pcielanes + " Bit";
document.getElementsByClassName("title-property")[17].appendChild(propertyEighteen);

let propertyNineteen = document.createElement("h4");
propertyNineteen.className = "fw-light";
propertyNineteen.innerHTML = effectiveData.pcieconfiguration;
document.getElementsByClassName("title-property")[18].appendChild(propertyNineteen);

let propertyTwenty = document.createElement("h4");
propertyTwenty.className = "fw-light";
propertyTwenty.innerHTML = effectiveData.graphics.type;
document.getElementsByClassName("title-property")[19].appendChild(propertyTwenty);

let propertyTwentyOne = document.createElement("h4");
propertyTwentyOne.className = "fw-light";
propertyTwentyOne.innerHTML = effectiveData.graphics.processor;
document.getElementsByClassName("title-property")[20].appendChild(propertyTwentyOne);

let propertyTwentyTwo = document.createElement("h4");
propertyTwentyTwo.className = "fw-light";
propertyTwentyTwo.innerHTML = effectiveData.graphics.basefrequency + " MHz";
document.getElementsByClassName("title-property")[21].appendChild(propertyTwentyTwo);

let propertyTwentyThree = document.createElement("h4");
propertyTwentyThree.className = "fw-light";
propertyTwentyThree.innerHTML = effectiveData.graphics.turbofrequency + " MHz";
document.getElementsByClassName("title-property")[22].appendChild(propertyTwentyThree);

let propertyTwentyFour = document.createElement("h4");
propertyTwentyFour.className = "fw-light";
propertyTwentyFour.innerHTML = effectiveData.graphics.streamprocessor;
document.getElementsByClassName("title-property")[23].appendChild(propertyTwentyFour);