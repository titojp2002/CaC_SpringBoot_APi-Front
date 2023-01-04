package com.cac.amigosCode.controllers;

import com.cac.amigosCode.models.*;
import com.cac.amigosCode.service.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "*")

public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    //Vamos a hacer los controllers para el CRUD

    //Esta seccion es para el C(CREATE)
    @PostMapping("/api/v1/student")
    public Student createStudent(@RequestBody Student student){
        return studentService.createStudent(student);
    }

    //Esta seccion es para el R(READ) que comprende dos opciones
    //all o por ID
    @GetMapping("/api/v1/students")
    public List<Student> getStudents(){
        return (List<Student>) studentService.getStudents();
    }

    @GetMapping("/api/v1/students/{id}")
    public Optional<Student> getStudentById(@PathVariable("id") Long id){
        return studentService.getStudentById(id);
    }

    //Esta seccion es para el U(UPDATE)
    @PatchMapping("/api/v1/student")
    public Student patchStudent(@RequestBody Student student){
        return studentService.patchStudent(student);
    }

    @PutMapping("/api/v1/student")
    public Student updateStudent(@RequestBody Student student){
        return studentService.updateStudent(student);
    }

    //Esta seccion es para el D(DELETE)
    @DeleteMapping("/api/v1/student/{id}")
    public Boolean deleteStudent(@PathVariable("id") Long id){
        return studentService.deleteStudent(id);
    }
}


