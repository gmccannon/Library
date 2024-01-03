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
    ('Book 11', '1', 'Author 1', 'Description for Book 1'),
    ('Book 22', '2', 'Author 2', 'Description for Book 2'),
    ('Book 332', '3', 'Author 3', 'Description for Book 3'),
    ('Book 442', '4', 'Author 4', 'Description for Book 4'),
    ('Book 1615', '5', 'Author 5', 'Description for Book 5'),
    ('Book 1151', '6', 'Author 6', 'Description for Book 16'),
    ('Book 1172', '7', 'Author 7', 'Description for Book 27'),
    ('Book 1183', '8', 'Author 8', 'Description for Book 38'),
    ('Book 1184', '9', 'Author 9', 'Description for Book 49'),
    ('Book 159', '10', 'Author 10', 'Description for Book 512'),
    ('Book 1981', '11', 'Author 11', 'Description for Book 114'),
    ('Book 135572', '12', 'Author 12', 'Description for Book 452'),
    ('Book 15763', '13', 'Author 13', 'Description for Book 367'),
    ('Book 14564', '14', 'Author 14', 'Description for Book 474'),
    ('Book 126', '15', 'Author 16', 'Description for Book 686');