function addList(event, listname) {
    switch (event.which) {
        case 13:
            newList.add(listname);
            $(".newList").val("");
            printPage();
            break;
    }
}
function addTask(event, name, listnum) {
    switch (event.which) {
        case 13:
            $(".newList").val("");
            newList.collection[listnum].add(name);
            printPage();
            break;
    }
}
function printPage() {
    $(".lists").html("");
    $(".tasks").html("");
    for (let i = 0; i < newList.collection.length; i++) {
        let list = newList.collection[i];
        $(".tasks").append(`<div class="listTitle ${list.name}">
                <span>${list.name}</span>
            </div>`);
        $(".tasks").append(`<div class="${list.name}">
            <input type="text" class="task" onkeyup="addTask(event, this.value, ${i})" placeholder="Write tasks here">
            </div>`
        );
        for (let j = 0; j < list.collection.length; j++) {
            $(".tasks").append(`<div class="tasksHide">
                <span>${list.collection[j].name}</span><i class="fas fa-trash" onclick="delItem(${i}, ${j}, this)"></i>
                </div>`);
        };
    }
}
function delItem(listnum, itemnum, el) {
    for (let l = 0; l < newList.collection.length; l++) {
        let nameList = newList.collection[l];
        if (l === listnum) {
            newList.collection[l].delete(itemnum);
            console.log($(el).parent());
            /*$(el).parent().fadeOut( "slow", function() {
                printPage();
            });*/
            $(el).parent().fadeOut();
        }
    }
}