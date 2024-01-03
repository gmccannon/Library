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
    ('Excuess for Not Writing Documentaion', '1', 'Author 1', 'Description for Book 1'),
    ('Commentating Out Failed Tests', '2', 'Author 2', 'Description for Book 2'),
    ('JPEG Compression', '3', 'Author 3', 'Description for Book 3'),
    ('Writing Code that Nobody Else Can Read', '4', 'Author 4', 'Description for Book 4'),
    ('Exiting Vim', '5', 'Author 5', 'Description for Book 5'),
    ('Googling the Error Message', '6', 'Author 6', 'Description for Book 16'),
    ('Hoping Nobody Hacks You', '7', 'Author 7', 'Description for Book 27'),
    ('Ignoring Deprecation Warnings', '8', 'Author 8', 'Description for Book 38'),
    ('Pasting Code from Some Random 2012 Node.js Tutorial', '9', 'Author 9', 'Description for Book 49'),
    ('Regex By Trial and Error', '10', 'Author 10', 'Description for Book 512'),
    ('Trying STuff Until it Works', '11', 'Author 11', 'Description for Book 114'),
    ('Z-Index 100000000000', '12', 'Author 12', 'Description for Book 452'),
    ('Memorizing Six Git Commands', '13', 'Author 13', 'Description for Book 367'),
    ('Variable Naming', '14', 'Author 14', 'Description for Book 474'),
    ('Changing Stuff and Seeing What Happens', '15', 'Author 15', 'Description for Book 686');