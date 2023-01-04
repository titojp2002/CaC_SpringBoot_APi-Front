package com.cac.amigosCode.repositories;

import com.cac.amigosCode.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface StudentRepository
      // extends CrudRepository<Student, Long> {
            extends JpaRepository<Student, Long> {
}
