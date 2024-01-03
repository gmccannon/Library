-- Create the 'books' table
CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    number TEXT NOT NULL,
    author TEXT NOT NULL,
    description TEXT
);

-- Insert some sample data
INSERT INTO books (title, number, author, description) VALUES
    ('Book 1', '1', 'Author 1', 'Description for Book 1'),
    ('Book 2', '2', 'Author 2', 'Description for Book 2'),
    ('Book 3', '3', 'Author 3', 'Description for Book 3'),
    ('Book 4', '4', 'Author 4', 'Description for Book 4'),
    ('Book 5', '5', 'Author 5', 'Description for Book 5'),
    ('Book 6', '6', 'Author 6', 'Description for Book 6');