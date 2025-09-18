import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function displaySampleData() {
    const client = new MongoClient(process.env.MONGODB_URI);
    
    try {
        await client.connect();
        console.log('🔗 Connected to MongoDB Atlas');
        
        // Get the sample_mflix database (movies dataset)
        const sampleDb = client.db('sample_mflix');
        
        // List all collections in sample_mflix
        const collections = await sampleDb.listCollections().toArray();
        console.log('\n📊 Collections in sample_mflix database:');
        collections.forEach(collection => {
            console.log(`  - ${collection.name}`);
        });
        
        // Display some movies from the movies collection
        console.log('\n🎬 Sample Movies:');
        const moviesCollection = sampleDb.collection('movies');
        const movies = await moviesCollection.find({}).limit(5).toArray();
        
        movies.forEach((movie, index) => {
            console.log(`\n--- Movie ${index + 1} ---`);
            console.log(`Title: ${movie.title}`);
            console.log(`Year: ${movie.year}`);
            console.log(`Plot: ${movie.plot ? movie.plot.substring(0, 100) + '...' : 'No plot available'}`);
            console.log(`Genres: ${movie.genres ? movie.genres.join(', ') : 'Not specified'}`);
            console.log(`IMDB Rating: ${movie.imdb?.rating || 'N/A'}`);
        });
        
        // Display some users
        console.log('\n👥 Sample Users:');
        const usersCollection = sampleDb.collection('users');
        const users = await usersCollection.find({}).limit(3).toArray();
        
        users.forEach((user, index) => {
            console.log(`\n--- User ${index + 1} ---`);
            console.log(`Name: ${user.name}`);
            console.log(`Email: ${user.email}`);
        });
        
        // Display some comments
        console.log('\n💬 Sample Comments:');
        const commentsCollection = sampleDb.collection('comments');
        const comments = await commentsCollection.find({}).limit(3).toArray();
        
        comments.forEach((comment, index) => {
            console.log(`\n--- Comment ${index + 1} ---`);
            console.log(`Name: ${comment.name}`);
            console.log(`Email: ${comment.email}`);
            console.log(`Text: ${comment.text.substring(0, 80)}...`);
            console.log(`Date: ${comment.date}`);
        });
        
        // Get collection statistics
        console.log('\n📈 Collection Statistics:');
        const movieCount = await moviesCollection.countDocuments();
        const userCount = await usersCollection.countDocuments();
        const commentCount = await commentsCollection.countDocuments();
        
        console.log(`Movies: ${movieCount} documents`);
        console.log(`Users: ${userCount} documents`);
        console.log(`Comments: ${commentCount} documents`);
        
    } catch (error) {
        console.error('❌ Error displaying sample data:', error.message);
    } finally {
        await client.close();
        console.log('\n🔌 Connection closed');
    }
}

// Run the function
displaySampleData();