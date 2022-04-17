
//index2 cu baloane
var images_array=['baloane/ball1.png','baloane/ball2.png','baloane/ball3.png','baloane/ball4.png','baloane/ball5.png',
    'baloane/ball6.png','baloane/ball7.png','baloane/ball8.png','baloane/ball9.png','baloane/ball10.png',
    'baloane/ball11.png','baloane/ball12.png','baloane/ball13.png','baloane/ball14.png','baloane/ball15.png',
    'baloane/ball16.png','baloane/ball17.png','baloane/ball18.png','baloane/ball19.png','baloane/ball20.png',
    'baloane/ball21.png','baloane/ball22.png','baloane/ball23.png','baloane/ball24.png','baloane/ball25.png',
    'baloane/ball26.png','baloane/ball27.png','baloane/ball28.png','baloane/ball29.png','baloane/ball30.png'];
var numbers=[1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,7,7,8,8,9,9];
var i,j,ok,cell,count=0;

Array.prototype.shuffle = function() {
    var input = this;
    for (var i = input.length-1; i >=0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}
numbers.shuffle();
function loadBallons(){
    var cards= new Array(40);
    for (i=1; i<31;i++){
        ok=true;
        while (ok){
            var x=1+ Math.floor(Math.random()*1000)%30;
            ok=false;
            for (j=1; j<i ;j++){
                if (cards[j]==images_array[x-1]) {ok=true;}
            }
        }
        cards[i]=images_array[x-1];
    }
    for(i=1; i<31; i++){
        cell=document.getElementById(i);
        if (cell){
            var elem=document.createElement("img");
            var numar=document.createElement("div");
            numar.innerHTML=numbers[i-1];
            numar.className="divNumber";
            elem.src=cards[i];
            elem.setAttribute('height','30%');
            elem.setAttribute("width","8%");
            document.getElementById(i).appendChild(numar);
            document.getElementById(i).insertBefore(elem,document.getElementById(i).firstChild);
        }

    }
}

function check(n){
    var sunetBravo=document.getElementById("bravoo");
    var nr=document.getElementById(n).innerText;
    var ok;
    if (nr == "1"){
        document.getElementById(n).style.visibility = "hidden";
        sunetBravo.play();
        count++;
    }else{
        ok=false;
        var y=document.getElementById("lose");
        y.play();
        //setTimeout("location.reload(true);",2000);
    }
    if (count == 10){
        count=0;
        var x = document.getElementById("win");
        x.play();
        document.getElementById("star5").style.visibility="hidden";
        document.getElementById("star52").style.visibility="visible";
        setTimeout("location.assign('index3.html');",3000);
    }

}

//index1 cu sunete animale
function sheepText() {
    var sunet=document.getElementById("sheepText");
    sunet.play();
}

function sheepSound() {
    var sunet=document.getElementById("sheepSound");
    sunet.play();
}

function cowSound(){
    var sunet=document.getElementById("cowSound");
    sunet.play();
}

function cowText(){
    var sunet=document.getElementById("cowText");
    sunet.play();
}

function pigText() {
    var sunet=document.getElementById("pigText");
    sunet.play();
}

function pigSound() {
    var sunet=document.getElementById("pigSound");
    sunet.play();
}

function chickenText() {
    var sunet=document.getElementById("chickenText");
    sunet.play();
}

function chickenSound() {
    var sunet=document.getElementById("chickenSound");
    sunet.play();
}

var listProduse1 = ['images/milk.png','images/grass.png','images/hay.png','images/meat.png'];
var listProduse2 = ['images/egs.png','images/meatchicken.png','images/feather.png','images/corn.png'];
var listProduse3 = ['images/cheese.png','images/wool.png','images/meat.png','images/wheat.png'];
var listProduse4 = ['images/corn.png','images/wheat.png','images/meat.png','images/leaves.png'];

function cowShow(){
    document.getElementById("horse-image").style.visibility="hidden";
    document.getElementById("cat-image").style.visibility="hidden";
    document.getElementById("chicken-image").style.visibility="hidden";
    document.getElementById("chicken1-image").style.visibility="hidden";
    document.getElementById("turkey-image").style.visibility="hidden";
    document.getElementById("pig-image").style.visibility="hidden";
    document.getElementById("sheep-image").style.visibility="hidden";
    document.getElementById("goat2-image").style.visibility="hidden";
    document.getElementById("goat-image").style.visibility="hidden";
    document.getElementById("horse2-image").style.visibility="hidden";
    document.getElementById("logoFarmer").style.visibility="hidden";
    document.getElementById("dog-image").style.visibility="hidden";
    document.getElementById("duck-image").style.visibility="hidden";
    document.getElementById("cow-image").style.visibility="hidden";
    document.getElementById("cow-image2").style.visibility="visible";
    document.getElementById("logoFarmer2").style.visibility="visible";

    var elem=document.createElement("img");
    elem.src=listProduse1[0];
    elem.setAttribute("height",70);
    elem.setAttribute("width",90);
    elem.id="milk";


    var elem1=document.createElement("img");
    elem1.src=listProduse1[1];
    elem1.setAttribute("height",70);
    elem1.setAttribute("width",90);
    elem1.id="grass";

    var elem2=document.createElement("img");
    elem2.src=listProduse1[2];
    elem2.setAttribute("height",70);
    elem2.setAttribute("width",90);
    elem2.id="hay";

    var elem3=document.createElement("img");
    elem3.src=listProduse1[3];
    elem3.setAttribute("height",70);
    elem3.setAttribute("width",90);
    elem3.id="meat";

    document.getElementById("produse").appendChild(elem);
    document.getElementById("produse").appendChild(elem1);
    document.getElementById("produse").appendChild(elem2);
    document.getElementById("produse").appendChild(elem3);

    document.getElementById("hay").addEventListener("click", function maiIncearca() {
        var sunet=document.getElementById("maiIncearcaText");
        sunet.play();
    });

    document.getElementById("grass").addEventListener("click", function maiIncearca() {
        var sunet=document.getElementById("maiIncearcaText");
        sunet.play();
    });

    document.getElementById("meat").addEventListener("click", function maiIncearca() {
        var sunet=document.getElementById("maiIncearcaText");
        sunet.play();
    });

    document.getElementById("logoFarmer2").addEventListener("click", cowText());
    document.getElementById("milk").addEventListener("click",function urmatorulAnimal() {
        var sunet=document.getElementById("urmatorul");
        sunet.play();
        document.getElementById("star1").style.visibility="hidden";
        document.getElementById("star12").style.visibility="visible";
        setTimeout("location.assign('index1Sheep.html');",2300);
    });
}

function chickenShow() {
    document.getElementById("logoFarmer").style.visibility="hidden";
    document.getElementById("horse-image").style.visibility="hidden";
    document.getElementById("cat-image").style.visibility="hidden";
    document.getElementById("cow-image").style.visibility="hidden";
    document.getElementById("chicken-image").style.visibility="hidden";
    document.getElementById("turkey-image").style.visibility="hidden";
    document.getElementById("pig-image").style.visibility="hidden";
    document.getElementById("sheep-image").style.visibility="hidden";
    document.getElementById("chicken1-image").style.visibility="hidden";
    document.getElementById("chicken1-image2").style.visibility="visible";
    document.getElementById("goat2-image").style.visibility="hidden";
    document.getElementById("goat-image").style.visibility="hidden";
    document.getElementById("horse2-image").style.visibility="hidden";
    document.getElementById("dog-image").style.visibility="hidden";
    document.getElementById("duck-image").style.visibility="hidden";
    document.getElementById("logoFarmer2").style.visibility="visible";

    var elem=document.createElement("img");
    elem.src=listProduse2[0];
    elem.setAttribute("height",70);
    elem.setAttribute("width",90);
    elem.id="egs";

    var elem1=document.createElement("img");
    elem1.src=listProduse2[1];
    elem1.setAttribute("height",70);
    elem1.setAttribute("width",90);
    elem1.id="meatchicken";

    var elem2=document.createElement("img");
    elem2.src=listProduse2[2];
    elem2.setAttribute("height",70);
    elem2.setAttribute("width",90);
    elem2.id="feather";

    var elem3=document.createElement("img");
    elem3.src=listProduse2[3];
    elem3.setAttribute("height",70);
    elem3.setAttribute("width",90);
    elem3.id="corn";

    document.getElementById("produse").appendChild(elem);
    document.getElementById("produse").appendChild(elem1);
    document.getElementById("produse").appendChild(elem2);
    document.getElementById("produse").appendChild(elem3);

    document.getElementById("egs").addEventListener("click", function maiIncearca() {
        var sunet=document.getElementById("maiIncearcaText");
        sunet.play();
    });

    document.getElementById("meatchicken").addEventListener("click", function maiIncearca() {
        var sunet=document.getElementById("maiIncearcaText");
        sunet.play();
    });

    document.getElementById("corn").addEventListener("click", function maiIncearca() {
        var sunet=document.getElementById("maiIncearcaText");
        sunet.play();
    });

    document.getElementById("logoFarmer").addEventListener("click", chickenText());

    document.getElementById("feather").addEventListener("click",function urmatorulAnimal() {
        var sunet=document.getElementById("urmatorul");
        sunet.play();
        document.getElementById("star4").style.visibility="hidden";
        document.getElementById("star42").style.visibility="visible";
        setTimeout("location.assign('index2.html');",2300);
    });
}

function sheepShow() {
    sheepText();
    document.getElementById("logoFarmer").style.visibility="hidden";
    document.getElementById("horse-image").style.visibility="hidden";
    document.getElementById("cat-image").style.visibility="hidden";
    document.getElementById("cow-image").style.visibility="hidden";
    document.getElementById("chicken-image").style.visibility="hidden";
    document.getElementById("turkey-image").style.visibility="hidden";
    document.getElementById("pig-image").style.visibility="hidden";
    document.getElementById("chicken1-image").style.visibility="hidden";
    document.getElementById("sheep-image").style.visibility="hidden";
    document.getElementById("sheep-image2").style.visibility="visible";
    document.getElementById("goat2-image").style.visibility="hidden";
    document.getElementById("goat-image").style.visibility="hidden";
    document.getElementById("horse2-image").style.visibility="hidden";
    document.getElementById("dog-image").style.visibility="hidden";
    document.getElementById("duck-image").style.visibility="hidden";
    document.getElementById("logoFarmer2").style.visibility="visible";

    var elem=document.createElement("img");
    elem.src=listProduse3[0];
    elem.setAttribute("height",70);
    elem.setAttribute("width",90);
    elem.id="cheese";

    var elem1=document.createElement("img");
    elem1.src=listProduse3[1];
    elem1.setAttribute("height",70);
    elem1.setAttribute("width",90);
    elem1.id="wool";

    var elem2=document.createElement("img");
    elem2.src=listProduse3[2];
    elem2.setAttribute("height",70);
    elem2.setAttribute("width",90);
    elem2.id="meat";

    var elem3=document.createElement("img");
    elem3.src=listProduse3[3];
    elem3.setAttribute("height",70);
    elem3.setAttribute("width",90);
    elem3.id="grass";

    document.getElementById("produse").appendChild(elem);
    document.getElementById("produse").appendChild(elem1);
    document.getElementById("produse").appendChild(elem2);
    document.getElementById("produse").appendChild(elem3);

    document.getElementById("grass").addEventListener("click", function maiIncearca() {
        var sunet=document.getElementById("maiIncearcaText");
        sunet.play();
    });

    document.getElementById("cheese").addEventListener("click", function maiIncearca() {
        var sunet=document.getElementById("maiIncearcaText");
        sunet.play();
    });

    document.getElementById("meat").addEventListener("click", function maiIncearca() {
        var sunet=document.getElementById("maiIncearcaText");
        sunet.play();
    });

    document.getElementById("wool").addEventListener("click",function urmatorulAnimal() {
        var sunet=document.getElementById("urmatorul");
        sunet.play();
        document.getElementById("star2").style.visibility="hidden";
        document.getElementById("star22").style.visibility="visible";
        setTimeout("location.assign('index1Pig.html');",2300);
    });
}

function pigShow() {
    document.getElementById("logoFarmer").style.visibility="hidden";
    document.getElementById("horse-image").style.visibility="hidden";
    document.getElementById("cat-image").style.visibility="hidden";
    document.getElementById("cow-image").style.visibility="hidden";
    document.getElementById("chicken-image").style.visibility="hidden";
    document.getElementById("turkey-image").style.visibility="hidden";
    document.getElementById("sheep-image").style.visibility="hidden";
    document.getElementById("chicken1-image").style.visibility="hidden";
    document.getElementById("pig-image").style.visibility="hidden";
    document.getElementById("pig-image2").style.visibility="visible";
    document.getElementById("goat2-image").style.visibility="hidden";
    document.getElementById("goat-image").style.visibility="hidden";
    document.getElementById("horse2-image").style.visibility="hidden";
    document.getElementById("dog-image").style.visibility="hidden";
    document.getElementById("duck-image").style.visibility="hidden";
    document.getElementById("logoFarmer2").style.visibility="visible";

    var elem=document.createElement("img");
    elem.src=listProduse4[0];
    elem.setAttribute("height",70);
    elem.setAttribute("width",90);
    elem.id="corn";

    var elem1=document.createElement("img");
    elem1.src=listProduse4[1];
    elem1.setAttribute("height",70);
    elem1.setAttribute("width",90);
    elem1.id="wheat";

    var elem2=document.createElement("img");
    elem2.src=listProduse4[2];
    elem2.setAttribute("height",70);
    elem2.setAttribute("width",90);
    elem2.id="meat";

    var elem3=document.createElement("img");
    elem3.src=listProduse4[3];
    elem3.setAttribute("height",70);
    elem3.setAttribute("width",90);
    elem3.id="leaves";

    document.getElementById("produse").appendChild(elem);
    document.getElementById("produse").appendChild(elem1);
    document.getElementById("produse").appendChild(elem2);
    document.getElementById("produse").appendChild(elem3);

    document.getElementById("leaves").addEventListener("click", function maiIncearca() {
        var sunet=document.getElementById("maiIncearcaText");
        sunet.play();
    });

    document.getElementById("wheat").addEventListener("click", function maiIncearca() {
        var sunet=document.getElementById("maiIncearcaText");
        sunet.play();
    });

    document.getElementById("meat").addEventListener("click", function maiIncearca() {
        var sunet=document.getElementById("maiIncearcaText");
        sunet.play();
    });

    document.getElementById("logoFarmer").addEventListener("click", pigText());

    document.getElementById("corn").addEventListener("click",function urmatorulAnimal() {
        var sunet=document.getElementById("urmatorul");
        sunet.play();
        document.getElementById("star3").style.visibility="hidden";
        document.getElementById("star32").style.visibility="visible";
        setTimeout("location.assign('index1Chicken.html');",2300);
    });
}

//index3

var listaUmbre=['images/umbraVacuta.png','images/umbraOita.png','images/umbraPorc.png','images/umbraRata.png','images/umbraCal.png',
    'images/umbraCapra.png','images/umbraGaina.png'];
var listaPesteUmbre=['images/vacaSingura.png','images/sheep1.png','images/porcSingur.png','images/rataSingura.png','images/calSingur.png',
    'images/capraSingura.png','images/gainaSingura.png'];

var listaIndiceUmbre=[0,1,2,3,4,5,6];
var nrUmbre=0;
var vecUmbre="0123456";
listaIndiceUmbre.shuffle();
function loadUmbre(){
    var elem1=document.createElement("img");
    elem1.id='el'+listaIndiceUmbre[0];
    elem1.src=listaUmbre[listaIndiceUmbre[0]];
    document.getElementById("elemente").appendChild(elem1);
    elem1.className='ell1';

    var elem2=document.createElement("img");
    elem2.id='el'+listaIndiceUmbre[1];
    elem2.src=listaUmbre[listaIndiceUmbre[1]];
    document.getElementById("elemente").appendChild(elem2);
    elem2.className='ell2';

    var elem3=document.createElement("img");
    elem3.id='el'+listaIndiceUmbre[2];
    elem3.src=listaUmbre[listaIndiceUmbre[2]];
    document.getElementById("elemente").appendChild(elem3);
    elem3.className='ell3';

    var elem4=document.createElement("img");
    elem4.id='el'+listaIndiceUmbre[3];
    elem4.src=listaUmbre[listaIndiceUmbre[3]];
    document.getElementById("elemente").appendChild(elem4);
    elem4.className='ell4';
}
function shadowChange(id){
    var i,j,xx;
    console.log(vecUmbre);
    console.log(vecUmbre.search(id));

    for (i=0;i<4;i++){
        if (id==listaIndiceUmbre[i]){
            var element=document.createElement("img");
            element.src=listaPesteUmbre[id];
            j=(i+1)*11;
            xx='ell'+(i+1);
            element.className='ell'+j;
            j++;
            document.getElementById("elemente").appendChild(element);
            if(vecUmbre.search(id)!=-1){
                nrUmbre++;
                vecUmbre=vecUmbre.replace(id,"9");
                if (nrUmbre!=4){
                var y=document.getElementById("bravoo");
                y.play();
                }
            }
            }
        }


    if (nrUmbre==4){
        var x=document.getElementById("final");
        x.play();
        nrUmbre=0;
        document.getElementById("star6").style.visibility="hidden";
        document.getElementById("star62").style.visibility="visible";
        setTimeout("location.assign('final.html');",4500);
        document.getElementById("grupCai").addEventListener("click", oprireGrup);
        document.getElementById("grupCapre").addEventListener("click", oprireGrup);
        document.getElementById("grupGaini").addEventListener("click", oprireGrup);
        document.getElementById("grupGaini2").addEventListener("click", oprireGrup);
        document.getElementById("grupOite").addEventListener("click", oprireGrup);
        document.getElementById("grupPorci").addEventListener("click", oprireGrup);
        document.getElementById("grupRate").addEventListener("click", oprireGrup);
        document.getElementById("grupVacute").addEventListener("click", oprireGrup);
    }
}

//farm pagina principala
//dupa ce termina de vorbit fermierul
function changeFarmer(){
    var sunet=document.getElementById("startSound");
    sunet.play();
    setTimeout("document.getElementById('farmer').style.visibility = 'hidden';", 8000);
    setTimeout("document.getElementById('farmer2').style.visibility = 'visible';", 8500);
}

function textFarmer2() {
    var sunet=document.getElementById("changeFarmer");
    sunet.play();
}

function salveazaSound() {
    var sunet=document.getElementById("sarcina");
    sunet.play();
}

function maiIncearca() {
    var sunet=document.getElementById("maiIncearcaText");
    sunet.play();
}

function gasesteSound() {
    var sunet=document.getElementById("gaseste");
    sunet.play();
}

function inapoiFarm() {
    var sunet=document.getElementById("inapoi");
    sunet.play();
    setTimeout("location.assign('farm.html');",1500);
}

function inapoiIndex1() {
    var sunet=document.getElementById("inapoi");
    sunet.play();
    setTimeout("location.assign('index1.html');",1500);
}

function inapoiIndex1Sheep() {
    var sunet=document.getElementById("inapoi");
    sunet.play();
    setTimeout("location.assign('index1Sheep.html');",1500);
}

function inapoiIndex1Pig() {
    var sunet=document.getElementById("inapoi");
    sunet.play();
    setTimeout("location.assign('index1Pig.html');",1500);
}

function inapoiIndex2() {
    var sunet=document.getElementById("inapoi");
    sunet.play();
    setTimeout("location.assign('index2.html');",1500);
}

function inapoiIndex3() {
    var sunet=document.getElementById("inapoi");
    sunet.play();
    setTimeout("location.assign('index3.html');",1500);
}

function reincepeSound(){
    var sunet=document.getElementById("reincepe");
    sunet.play();
}

var myVarMulti,myVarMulte;
function maiMultiSound() {
    var sunet=document.getElementById("maiMulti");
    sunet.play();
    myVarMulti=setTimeout("location.reload(true);",2000);
}

function maiMulteSound() {
    var sunet=document.getElementById("maiMulte");
    sunet.play();
    myVarMulte=setTimeout("location.reload(true);",2000);
}

function oprireGrup() {
    clearTimeout(myVarMulti);
    clearTimeout(myVarMulte);
}

