package com.example.demo.controller;

import com.example.demo.dto.CommentRequestDto;
import com.example.demo.dto.CommentResponseDto;
import com.example.demo.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/excuses/{excuseId}/comments")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CommentController {

    private final CommentService commentService;

    @PostMapping
    public ResponseEntity<CommentResponseDto> addComment(@PathVariable Long excuseId, @RequestBody CommentRequestDto requestDto) {
        return ResponseEntity.ok(commentService.addComment(excuseId, requestDto));
    }

    @GetMapping
    public ResponseEntity<List<CommentResponseDto>> getComments(@PathVariable Long excuseId) {
        return ResponseEntity.ok(commentService.getComments(excuseId));
    }
}
