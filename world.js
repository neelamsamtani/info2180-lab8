window.onload = search;

function search() {
    $("lookup").addEventListener("click",function() {
        new Ajax.Request("world.php?lookup="+$("term").val(), {
          method: "get",
          onSuccess: giveresult}
        );
    });
}

function giveresult(data) {
    alert(data.responseText);
}
