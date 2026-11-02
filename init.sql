use listatarefas;

CREATE TABLE tarefas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL
);

INSERT INTO tarefas (descricao) VALUES ('Se increver no canal');
INSERT INTO tarefas (descricao) VALUES ('Estudar Docker');
INSERT INTO tarefas (descricao) VALUES ('Dar like no video');
INSERT INTO tarefas (descricao) VALUES ('Seguir no insta');