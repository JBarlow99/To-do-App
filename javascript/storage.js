let newList = new listCollection();

function listCollection() {
    this.collection = [];
    this.add = function(listName) {
        this.collection.push(new task(listName));
    };
    // this.delete = function (item) {
    //     this.collection.splice(item, 1);
    // }
}

function task(name) {
    this.collection = [];
    this.name = name;
    this.add = function (name) {
        this.collection.push(new taskItem(name))
    };
    this.delete = function (item) {
        console.log(`${item} was to delete`);
        this.collection.splice(item, 1);
    }
}

function taskItem(name) {
    this.name = name;
    // this.delete = function (item) {
    //     this.collection.splice(item, 1);
    // }
}