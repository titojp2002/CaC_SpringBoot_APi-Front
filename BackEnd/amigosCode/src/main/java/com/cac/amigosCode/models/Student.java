package com.cac.amigosCode.models;

import jakarta.persistence.*;
import lombok.Data;


import java.time.LocalDate;
import java.util.Objects;

@Data
@Entity
@Table(name="students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private Integer yob;
    private Integer age;

    public Student() {
    }

    public Student(String name, String email, Integer yob, Integer age) {
        this.name = name;
        this.email = email;
        this.yob = yob;
        this.age = age;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Student other = (Student) obj;
        return Objects.equals(id, other.id);
    }

    public Student(Long id, String name, String email, Integer yob, Integer age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.yob = yob;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", dob=" + yob +
                ", age=" + age +
                '}';
    }
}


