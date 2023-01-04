package com.cac.amigosCode.service;

import com.cac.amigosCode.models.*;
import com.cac.amigosCode.repositories.*;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Iterable<Student> getStudents(){
        return (studentRepository.findAll());
/*        Student student = new Student(
                1L,
                "Marian",
                "marian.jamal@gmail.com",
                1982,
                36);
//		return List.of("Hello", "World");+
        System.out.println(student);
        Gson gson = new Gson();
        System.out.println(gson.toJson(student));
        return (gson.toJson(student));*/
    }

    public Optional<Student> getStudentById(Long id) {
//        Gson gson = new Gson();
//        return (gson.toJson(studentRepository.findById(id)));
        return (studentRepository.findById(id));
    }

    public Student createStudent(Student student){
        return studentRepository.save(student);
    }

    public Boolean deleteStudent(Long id){
        if(studentRepository.existsById(id)){
            studentRepository.deleteById(id);
            return true;
        }else{
            return false;
        }
    }

    public Student updateStudent(Student student){
        return studentRepository.save(student);
    }

    public Student patchStudent(Student student){
        return studentRepository.save(student);
    }
}
