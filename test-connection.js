import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function testConnection() {
    // Debug: Check if URI is loaded
    console.log('🔍 MongoDB URI loaded:', process.env.MONGODB_URI ? 'Yes' : 'No');
    
    if (!process.env.MONGODB_URI) {
        console.error('❌ MONGODB_URI not found in environment variables');
        return;
    }
    
    const client = new MongoClient(process.env.MONGODB_URI);
    
    try {
        // Connect to MongoDB
        await client.connect();
        console.log('✅ Connected to MongoDB Atlas successfully!');
        
        // List databases
        const adminDb = client.db().admin();
        const databases = await adminDb.listDatabases();
        
        console.log('\n📊 Available databases:');
        databases.databases.forEach(db => {
            console.log(`  - ${db.name}`);
        });
        
        // Test our refugee database
        const refugeeDb = client.db('refugee_assistant');
        console.log('\n🎯 Refugee Assistant database is ready!');
        
    } catch (error) {
        console.error('❌ Connection failed:', error.message);
    } finally {
        await client.close();
        console.log('\n🔌 Connection closed.');
    }
}

testConnection();