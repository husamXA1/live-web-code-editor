const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");

const savedCodes = localStorage.getItem("codes");
if (savedCodes) {
    const codeObj = JSON.parse(savedCodes);
    htmlCode.value = codeObj.html;
    cssCode.value = codeObj.css;
    jsCode.value = codeObj.js;
} else {
    htmlCode.value = "<div>\n\n</div>";
    cssCode.value = "<style>\n\n</style>";
    jsCode.value = "<script>\n\n</script>";
}

function saveEdits() {
    localStorage.setItem("codes", JSON.stringify({
        html: htmlCode.value,
        css: cssCode.value,
        js: jsCode.value
    }));
}

function showPreview(){
    saveEdits();
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}
