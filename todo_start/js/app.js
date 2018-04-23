// document.addEventListener('DOMContentLoaded', function() {
//   var taskInput = document.getElementById('new-task');
//   var todoParent = document.getElementById('incomplete-tasks');
//   var completeParent = document.getElementById('completed-tasks');
//   var addButton = document.getElementsByClassName('add-button')[0];

//   addButton.addEventListener('click', function(e) {
//   	if(validate(taskInput)) {
//   		var str = `<input type="checkbox"><label>` + taskInput.value.trim() + 
//   		`</label><input type="text" value="`+ taskInput.value.trim() + `"><button class="edit">Edit</button>
//   		<button class="delete">Delete</button>`;
//   		var item = document.createElement('li');
//   		item.innerHTML = str;
//   		todoParent.insertBefore(item, todoParent.firstChild);
//   		taskInput.value = '';

//   		var checkbox = item.firstChild;
//   		console.log(checkbox);
//   		checkbox.addEventListener('change', function(e) {
//   			if(this.checked) {
//   				completeParent.appendChild(e.target.parentNode);
//   			} else {
// 				todoParent.insertBefore(e.target.parentNode, todoParent.firstChild);
//   			}
//   		})
//   		taskInput.style.borderColor = 'rgb(221, 221, 221)';

//   		var deleteButton = item.getElementsByClassName('delete')[0];
//   		deleteButton.addEventListener('click', function(e) {
//   			deleteElem(e.target);
//   		})

//   		var editButton = document.getElementsByClassName('edit')[0];
//   		editButton.addEventListener('click', function(e) {
//   			editElemPhase1(e.target);
//   		})
//   	} else {
//   		taskInput.style.borderColor = 'red';
//   	}

//   });

//   addButton.addEventListener('keypress', function(e) {
//   	switch(e.which) {
//   		case 13:
//   			break;
//   		case 27:
//   			break;
//   		default: 
//   			break;
//   	}
  	
//   })

//   function validate(param) {
//   	if(param.value.trim()) {
//   		return true;
//   	}
//   	return false;
//   }

//   function deleteElem(elem) {
//     elem.parentNode.parentNode.removeChild(elem.parentNode);
//   }

//   function editElemPhase1(elem) {
//     elem.parentNode.querySelector('input[type="text"]').style.display = 'inline-block';
//     elem.parentNode.querySelector('label').style.display = 'none';
//     elem.parentNode.querySelector('input[type="text"]').addEventListener('blur', function(e) {
      
//   }

//   function editElemPhase2(elem) {
//       this.style.display = 'none';
//       this.parentNode.querySelector('label').style.display = 'block';
//       this.parentNode.querySelector('label').innerHTML = this.value.trim();
//   }
// })

document.addEventListener('DOMContentLoaded', function () {
    var todoParent = document.getElementById('incomplete-tasks');
    var completedParent = document.getElementById('completed-tasks');
    var addButton = document.getElementsByClassName('add-button')[0];
    var taskInput = document.getElementById('new-task');

    //add new task

    addButton.addEventListener('click', function (e) {
        if (validate(taskInput)) {
            var item = createElem(taskInput);
            //move task to completed on checkbox checked
            var checkbox = item.firstChild;
            checkbox.addEventListener('change', function (e) {
               toggleElement(this);
            })
            //delete item
            var deleteButton = item.getElementsByClassName("delete")[0];
            deleteButton.addEventListener('click', function (e) {
                deleteElement(this);
            })
            //edit item
            var editButton = item.getElementsByClassName("edit")[0];
            editButton.addEventListener('click', function (e) {
                editElementPhase1(this);
            })
        } else {
            taskInput.style.borderColor = "red";
        }
    });
    document.addEventListener('keyup', function (e) {
        switch (e.which) {
            case 13:
                console.log('enter');
                break;
            default:
                break;
        }
    });
    function validate(param) {
        if (param.value.trim().length) {
            return true;
        }
        return false;
    }
    function createElem(input) {
        input.style.borderColor = "rgb(221,221,221)";
        var str = `<input type="checkbox">
<label>` + input.value.trim() + `</label>
<input type="text" value="`+ input.value.trim() + `">
<button class="edit">Edit</button>
<button class="delete">Delete</button>`;
        var item = document.createElement('li');
        item.innerHTML = str;
        todoParent.insertBefore(item, todoParent.firstChild);
        input.value = "";
        return item;
    }
    function deleteElement(elem) {
        elem.parentNode.parentNode.removeChild(elem.parentNode)
    }
    function editElementPhase1(elem) {
        elem.parentNode.getElementsByTagName('label')[0].style.display = "none";
        elem.parentNode.querySelector('input[type="text"]').style.display = "inline-block";
        elem.parentNode.querySelector('input[type="text"]').addEventListener('blur', function (ev) {
            editElementPhase2(ev.target)
        })
    }
    function editElementPhase2(elem) {
        elem.parentNode.getElementsByTagName('label')[0].innerHTML = elem.value.trim();
        elem.parentNode.getElementsByTagName('label')[0].style.display = "inline-block";
        elem.parentNode.querySelector('input[type="text"]').value = elem.value.trim();
        elem.parentNode.querySelector('input[type="text"]').style.display = "none";
    }
    function toggleElement(checkbox) {
       if (checkbox.checked) {
          completedParent.appendChild(checkbox.parentNode);
      } else {
          todoParent.insertBefore(checkbox.parentNode, todoParent.firstChild);
      }
    }
});