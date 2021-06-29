/*UNDERSTAND:
-input is given as two linked lists 
-return a sorted list by splicing together the two nodes
l1 = [0, 1, 2, 3]
l2 = [2, 3, 4, 5]
output = [0, 1, 2, 2, 3, 3, 4, 5]

PLAN:
create a helper function to traverse a linked list and push the values into a passed array
sort the array
create a helper function that takes in an array and returns a linked list
return the linked list helper function
*/

function traverseList(list, array) {
    let head = list
    while(head != null) {
        array.push(head.val)
        head = head.next
    }
    
    return array
}

// works backwards last # will be head node
function createList(array) {
    var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {val: array[i], next: list};
  return list;
}

var mergeTwoLists = function(l1, l2) {
    let holder = []
    traverseList(l1, holder)
    traverseList(l2, holder)
    let sortedHolder = holder.sort(function(a, b){return a-b})
    
    return createList(sortedHolder)
};