package ozgun.prkanban.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ozgun.prkanban.demo.domain.Todo;
import ozgun.prkanban.demo.repositories.TodoRepository;

import java.util.Optional;

@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public Todo saveTodo (Todo todo) {
        return todoRepository.save(todo);
    }

    public Optional<Todo> findTodoById(Long id) {
        return todoRepository.findById(id);
    }

    public Iterable<Todo> getAllTodos() { return todoRepository.findAll(); }
}
