package ozgun.prkanban.demo.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import ozgun.prkanban.demo.domain.Todo;
import ozgun.prkanban.demo.services.TodoService;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api/todo")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @PostMapping("/new")
    public ResponseEntity<?> createNewTodo(@Valid @RequestBody Todo todo, BindingResult result) {
        if (result.hasErrors()) {
            return new ResponseEntity<String>("Invalid object", HttpStatus.BAD_REQUEST);
        }

        Todo todo1 = todoService.saveTodo(todo);
        return new ResponseEntity<Todo>(todo1, HttpStatus.CREATED);
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateTodo(@Valid @RequestBody Todo todo, BindingResult result) {
        if (result.hasErrors()) {
            return new ResponseEntity<String>("Invalid object", HttpStatus.BAD_REQUEST);
        }

        Todo todo1 = todoService.saveTodo(todo);
        return new ResponseEntity<Todo>(todo1, HttpStatus.CREATED);
    }

    @GetMapping("/{taskId}")
    public ResponseEntity<?> getTodoById(@PathVariable("taskId") Long taskId) {
        Optional<Todo> todo = todoService.findTodoById(taskId);

        if (todo.isPresent()) {
            Todo todo1 = todo.get();
            return new ResponseEntity<Todo>(todo1, HttpStatus.OK);
        } else {
            return new ResponseEntity<String>("Invalid object", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/all")
    public Iterable<Todo> getAllTodos() { return todoService.getAllTodos(); }
}
