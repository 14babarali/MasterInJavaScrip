// Try-catch example
try {
    const a = 10;
    const b = 0;
    if (b === 0) {
        throw new Error('Division by zero');
    }
    const c = a / b;
    console.log(c);
} catch (error) {
    console.error(error.message); // Output: Division by zero
} finally {
    console.log('Execution completed.'); // Output: Execution completed.
}

// Custom error class
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

try {
    throw new CustomError('This is a custom error');
} catch (error) {
    console.error(error.name); // Output: CustomError
    console.error(error.message); // Output: This is a custom error
}
