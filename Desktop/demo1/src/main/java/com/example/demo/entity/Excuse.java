package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Excuse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, length = 1000)
    private String content;

    private String category;

    private String emotionTag;

    @Builder.Default
    private int likes = 0;

    @CreationTimestamp
    private LocalDateTime createdAt;

    public void incrementLikes() {
        this.likes++;
    }
}
