

document.getElementById('taskInputForm').addEventListener('submit',saveTask);

function saveTask(e){
		var taskId = chance.guid();
		var task_Name = document.getElementById('taskNameInput').value;
		var taskPriority = document.getElementById('priorityInput').value;
		var taskLocation = document.getElementById('locationInput').value;
		var taskContact = document.getElementById('contactInput').value;

		var task = {
			id: taskId,
			taskName: task_Name,
			priority: taskPriority,
			location: taskLocation,
			contact: taskContact

		}

		if(localStorage.getItem('tasks') == null){
			var tasks = [];
			tasks.push(task);
			localStorage.setItem('tasks',JSON.stringify(tasks));

		}else{
			var tasks = JSON.parse(localStorage.getItem('tasks'));
			tasks.push(task);
			localStorage.setItem('tasks',JSON.stringify(tasks)); 
		}
		document.getElementById('taskInputForm').reset();
		fetchTasks();
		e.preventDefault();
}

function fetchTasks(){
	var tasks = JSON.parse(localStorage.getItem('tasks'));
	var tasksListe = document.getElementById('tasksList');

	tasksList.innerHTML = '';
	for( var i=0; i< tasks.length;i++){
		var id = tasks[i].id;
		var name = tasks[i].taskName;
		var priority = tasks[i].priority;
		var location = tasks[i].location;
		var contact =tasks[i].contact;

		tasksList.innerHTML += '<div class="well">'+
                              '<h6>Task ID: ' + id + '</h6>'+
                              //'<p><span class="label label-info">' + status + '</span></p>'+
                              '<h3>' + name + '</h3>'+
                              '<p><span class="glyphicon glyphicon-time"></span> ' + priority + ' '+
                              '<span class="glyphicon glyphicon-user"></span> ' + location + '</p>'+
                              '<span class="glyphicon glyphicon-user"></span> ' + contact + '</p>'+
                              //'<a href="#" class="btn btn-warning" onclick="setStatusClosed(\''+id+'\')">Close</a> '+
                              '<a href="#" class="btn btn-danger" onclick="deleteTask(\''+id+'\')">Delete</a>'+
                              '</div>';

	}

}

function deleteTask(id){
    var tasks = JSON.parse(localStorage.getItem('tasks'));
  
  for(var i = 0; i < tasks.length; i++) {
    if (tasks[i].id == id) {
      tasks.splice(i,1);   // removes one element from ith position,can be elemenated more..
    }
  }
    
  localStorage.setItem('tasks', JSON.stringify(tasks));
  
  fetchTasks();
}