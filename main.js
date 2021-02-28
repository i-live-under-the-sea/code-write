function script(id){
    var name = idmaker(6)
    var tag = id.tagName;
    var html = id.outerHTML;
    var len = tag.length += 1
    var output = insert(html, ' onclick="'+name+'()" ', len);
    id.outerHTML = output;
    alert(id.outerHTML)
    document.getElementById("canvas").innerHTML += `<script>function `+name+`(){
        `+document.getElementById("jseditor").value+`
    }
    </script>`;
}

insert = function insert(main_string, ins_string, pos) {
    if(typeof(pos) == "undefined") {
        pos = 0;
    }
    if(typeof(ins_string) == "undefined") {
        ins_string = '';
    }
    return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
}