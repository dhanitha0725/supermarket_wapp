import prisma from "../prisma";
import { auth } from "../lib/auth";

/**
 * Seed Admin Script
 * 
 * Creates a default admin user for the Supermarket project.
 * Uses Better Auth's signup API then elevates the role in Prisma.
 */
async function main() {
    const adminEmail = "admin@supermarket.com";
    const adminPassword = "SuperSecretPassword123!";
    const adminName = "Main Admin";

    console.log(`Checking if admin user ${adminEmail} already exists...`);

    const existingUser = await prisma.users.findUnique({
        where: { email: adminEmail }
    });

    if (existingUser) {
        console.log("Admin user already exists. Updating role to ensure admin status...");
        await prisma.users.update({
            where: { email: adminEmail },
            data: { role: 'admin' }
        });
        console.log("Admin role verified.");
        return;
    }

    console.log("Creating admin user...");
    
    // Better Auth signUpEmail creates the user and the account entry
    try {
        await auth.api.signUpEmail({
            body: {
                email: adminEmail,
                password: adminPassword,
                name: adminName,
            }
        });

        // Manually elevate to admin role in the users table
        await prisma.users.update({
            where: { email: adminEmail },
            data: { role: 'admin' }
        });

        console.log("Admin user seeded successfully.");
    } catch (error) {
        console.error("Failed to seed admin user:", error);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
