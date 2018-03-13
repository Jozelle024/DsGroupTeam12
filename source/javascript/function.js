var data = getApp ();

function setPage () {
    var app = $("#sortselect").val();
    switch (app) {
        case "id" :
            cancellaPrecedenti ();
            addArticle (sortById ());
        break;
        case "article" :
            cancellaPrecedenti ();
            addArticle (sortByArticle ());
        break;
    }
}

$(document).ready (function () {
    var app = $("#sortselect").val();
    switch (app) {
        case "id" :
            cancellaPrecedenti ();
            addArticle (sortById ());
        break;
        case "article" :
            cancellaPrecedenti ();
            addArticle (sortByArticle ());
        break;
    }
});

function sortById () {
    var vetId = [];
    for (var cont=0;cont<data.news.length;cont++) {
        vetId.push (data.news [cont].id);
    }
    return vetId;
}

function sortByArticle () {
    var vet = [], vetId = [];
    for (var cont=0;cont<data.news.length;cont++) {
        vet.push (data.news [cont].mainTitle);
    }
    vet.sort ();
    for (cont=0;cont<data.news.length;cont++) {
        for (var conta=0;conta<data.news.length;conta++) {
            if (vet[cont]===data.news[conta].mainTitle) {
                vetId.push (data.news [conta].id);
            }
        }
    }
    return vetId;
}

function addArticle (vet) {
    for (var cont=0;cont<data.news.length;cont++) {
        for (var conta=0;conta<data.news.length;conta++) {
            if (vet[cont]===data.news[conta].id) {
                if (cont%2===0) {
                    var divrowcontainer = document.createElement ("div");
                    divrowcontainer.className += ("rowcontainer");
                    document.getElementById ("articlecontainer").appendChild (divrowcontainer);
                }
                var divcolcontainer = document.createElement ("div");
                divcolcontainer.className += (" colcontainer");
                divrowcontainer.appendChild (divcolcontainer);
                    var a = document.createElement ("a");
                    a.setAttribute("id", "a"+ (conta));
                    a.setAttribute ("href", "#modale");
                    a.setAttribute ("data-target", "#modale");
                    a.setAttribute ("data-toggle", "modal");
                    a.setAttribute ("onclick", "setModal (this.id)");
                    divcolcontainer.appendChild (a);
                        var divimgcontainerimg = document.createElement ("div");
                        divimgcontainerimg.className += ("imgcontainer img");
                        a.appendChild (divimgcontainerimg);
                            var img = document.createElement ("img");
                            img.setAttribute ("src", data.news [conta].img[0]);
                            img.setAttribute ("srcset", data.news [conta].img[1] + " 1050w, " + data.news [conta].img[2] + " 696w, " + data.news [conta].img[3] + " 400w");
                            divimgcontainerimg.appendChild (img);
                        var divcolcontainerfade = document.createElement ("div");
                        divcolcontainerfade.className += ("colcontainerfade");
                        a.appendChild (divcolcontainerfade);
                            var divtitlecontainer = document.createElement ("div");
                            divtitlecontainer.className += ("titlecontainer");
                            divcolcontainerfade.appendChild (divtitlecontainer);
                                var h1 = document.createElement ("h1");
                                h1.innerHTML = data.news [conta].mainTitle;
                                divtitlecontainer.appendChild (h1);
                                var h2 = document.createElement ("h2");
                                h2.innerHTML = data.news [conta].subTitle;
                                divtitlecontainer.appendChild (h2);
                                var span = document.createElement ("span");
                                span.innerHTML = "continua...";
                                divtitlecontainer.appendChild (span);
                            var divfootercontainer = document.createElement ("div");
                            divfootercontainer.className += ("footercontainer");
                            divcolcontainerfade.appendChild (divfootercontainer);
                                var h4section = document.createElement ("h4");
                                h4section.className += ("section");
                                h4section.innerHTML = data.news [conta].headSection + "-" + data.news [conta].subSection;
                                divfootercontainer.appendChild (h4section);
                                var h4author = document.createElement ("h4");
                                h4author.className += ("author");
                                h4author.innerHTML = data.news [conta].author.name;
                                divfootercontainer.appendChild (h4author);
            }
        }
    }
}

function cancellaPrecedenti () {
    var app = document.getElementById ("articlecontainer");
    while (app.firstChild) {
        app.removeChild(app.firstChild);
    }
}

function setModal (app) {
    app = app.substring(1);
    //modal header
    document.getElementById ("divsection").innerHTML = data.news[app].headSection + "-" + data.news[app].subSection;
    document.getElementById ("divday").innerHTML = data.news [app].author.day;
    //modal body
    if(document.getElementById ("imgmain")==null) {
        var imgmain = document.createElement ("img");
        imgmain.setAttribute ("id", "imgmain");
        imgmain.setAttribute ("src", data.news [app].img[0]);
        imgmain.setAttribute ("srcset", data.news [app].img[1] + " 1050w, " + data.news [app].img[2] + " 696w, " + data.news [app].img[3] + " 400w");
        document.getElementById ("containerarticleimg").appendChild (imgmain);
    } else {
        $("#imgmain").attr ("src", data.news [app].img[0]);
        $("#imgmain").attr ("srcset", data.news [app].img[1] + " 1050w, " + data.news [app].img[2] + " 696w, " + data.news [app].img[3] + " 400w");
    }
    var mainparagrph = document.getElementById ("containerparagraph");
    for (cont=0;cont<mainparagrph.childNodes.length;cont++) {
        mainparagrph.removeChild(mainparagrph.childNodes[cont]);
    }
    for (cont=0;cont<data.news [app].parapragh.length;cont++) {
        var parapragh = document.createElement ("p");
        parapragh.innerHTML = data.news [app].parapragh [cont];
        mainparagrph.appendChild (parapragh);
    }
    //modal footer
    if(document.getElementById ("imgauthor")==null) {
        var imgauthor = document.createElement ("img");
        imgauthor.setAttribute ("id", "imgauthor");
        imgauthor.setAttribute ("src", data.news [app].author.imga);
        document.getElementById ("authorimg").appendChild (imgauthor);
    } else {
        $("#imgauthor").attr ("src", data.news [app].author.imga);
    }
    document.getElementById ("divauthorname").innerHTML = data.news [app].author.name;
    document.getElementById ("authortype").innerHTML = data.news [app].author.type;
}