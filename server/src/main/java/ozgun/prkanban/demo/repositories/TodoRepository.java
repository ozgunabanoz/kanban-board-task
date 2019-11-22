package ozgun.prkanban.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ozgun.prkanban.demo.domain.Todo;

import java.util.Optional;

@Repository
public interface TodoRepository extends CrudRepository<Todo, Long> {
    @Override
    Iterable<Todo> findAll();

    @Override
    Optional<Todo> findById(Long id);
}
