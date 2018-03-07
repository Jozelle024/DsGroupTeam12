var data = getApp ();

$(document).ready (function () {
    for (var cont=0;cont<Math.ceil(data.news.length/2);cont++) {
        var divrowcontainerclearfix = document.createElement ("div");
        divrowcontainerclearfix.className += (" rowcontainer");
        divrowcontainerclearfix.className += (" clearfix");
        divrowcontainerclearfix.setAttribute("id", "containerrow"+ (cont+1));
            var divcolcontainer = document.createElement ("div");
            divcolcontainer.className += (" colcontainer");
            divcolcontainer.setAttribute("id", "containercol" + data.news [cont+cont].id);
            divrowcontainerclearfix.appendChild (divcolcontainer);
                var a = document.createElement ("a");
                a.setAttribute("id", "a"+ (cont+cont+1));
                a.setAttribute ("href", "#modale");
                a.setAttribute ("data-target", "#modale");
                a.setAttribute ("data-toggle", "modal");
                a.setAttribute ("onclick", "setModal (this.id)");
                divcolcontainer.appendChild (a);
                    var divimgcontainerimg = document.createElement ("div");
                    divimgcontainerimg.className += (" imgcontainer");
                    divimgcontainerimg.className += (" img");
                    a.appendChild (divimgcontainerimg);
                    var divcolcontainerfade = document.createElement ("div");
                    divcolcontainerfade.className += (" colcontainerfade");
                    a.appendChild (divcolcontainerfade);
                        var divtitlecontainer = document.createElement ("div");
                        divtitlecontainer.className += (" titlecontainer");
                        divcolcontainerfade.appendChild (divtitlecontainer);
                            var h1 = document.createElement ("h1");
                            h1.innerHTML = data.news [cont+cont].mainTitle;
                            divtitlecontainer.appendChild (h1);
                            var h2 = document.createElement ("h2");
                            h2.innerHTML = data.news [cont+cont].subTitle;
                            divtitlecontainer.appendChild (h2);
                            var span = document.createElement ("span");
                            span.innerHTML = "continua...";
                            divtitlecontainer.appendChild (span);
                        var divfootercontainer = document.createElement ("div");
                        divfootercontainer.className += (" footercontainer");
                        divcolcontainerfade.appendChild (divfootercontainer);
                            var h4section = document.createElement ("h4");
                            h4section.className += (" section");
                            h4section.innerHTML = data.news [cont+cont].headSection + "-" + data.news [cont+cont].subSection;
                            divfootercontainer.appendChild (h4section);
                            var h4author = document.createElement ("h4");
                            h4author.className += (" author");
                            h4author.innerHTML = data.news [cont+cont].author.name;
                            divfootercontainer.appendChild (h4author);
        if(cont+cont+1<data.news.length) {
            var divcolcontainer = document.createElement ("div");
            divcolcontainer.className += (" colcontainer");
            divcolcontainer.setAttribute("id", "containercol" + data.news [cont+cont+1].id);
            divrowcontainerclearfix.appendChild (divcolcontainer);
                var a = document.createElement ("a");
                a.setAttribute("id", "a"+ (cont+cont+2));
                a.setAttribute ("href", "#modale");
                a.setAttribute ("data-target", "#modale");
                a.setAttribute ("data-toggle", "modal");
                a.setAttribute ("onclick", "setModal (this.id)");
                divcolcontainer.appendChild (a);
                    var divimgcontainerimg = document.createElement ("div");
                    divimgcontainerimg.className += (" imgcontainer");
                    divimgcontainerimg.className += (" img");
                    a.appendChild (divimgcontainerimg);
                    var divcolcontainerfade = document.createElement ("div");
                    divcolcontainerfade.className += (" colcontainerfade");
                    a.appendChild (divcolcontainerfade);
                        var divtitlecontainer = document.createElement ("div");
                        divtitlecontainer.className += (" titlecontainer");
                        divcolcontainerfade.appendChild (divtitlecontainer);
                            var h1 = document.createElement ("h1");
                            h1.innerHTML = data.news [cont+cont+1].mainTitle;
                            divtitlecontainer.appendChild (h1);
                            var h2 = document.createElement ("h2");
                            h2.innerHTML = data.news [cont+cont+1].subTitle;
                            divtitlecontainer.appendChild (h2);
                            var span = document.createElement ("span");
                            span.innerHTML = "continua...";
                            divtitlecontainer.appendChild (span);
                        var divfootercontainer = document.createElement ("div");
                        divfootercontainer.className += (" footercontainer");
                        divcolcontainerfade.appendChild (divfootercontainer);
                            var h4section = document.createElement ("h4");
                            h4section.className += (" section");
                            h4section.innerHTML = data.news [cont+cont+1].headSection + "-" + data.news [cont+cont+1].subSection;
                            divfootercontainer.appendChild (h4section);
                            var h4author = document.createElement ("h4");
                            h4author.className += (" author");
                            h4author.innerHTML = data.news [cont+cont+1].author.name;
                            divfootercontainer.appendChild (h4author);
        }
        document.getElementById ("subcontainer").appendChild (divrowcontainerclearfix);
    }
});

function setModal (app) {
    app = app.substring(1);
    //modal header
    document.getElementById ("divsection").innerHTML = data.news [app].headSection + "-" + data.news [app].subSection;
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