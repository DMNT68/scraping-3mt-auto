import net from 'node:net';

/**
 * Function to find an available port.
 *
 * @param desiredPort - The desired port number.
 * @returns A Promise that resolves to the port number.
 */
export function findAvailablePort(desiredPort: number): Promise<number> {
    return new Promise((resolve, reject) => {
        // Create a TCP server
        const server = net.createServer();

        // Start listening on the desired port
        server.listen(desiredPort, () => {
            // Get the address information of the server
            const {port}: any = server.address();
            // Close the server and resolve with the port
            server.close(() => {
                resolve(port);
            });
        });

        // Handle errors
        server.on('error', (err: any) => {
            // If the error is 'EADDRINUSE', find an available port recursively
            if (err.code === 'EADDRINUSE') {
                findAvailablePort(0).then((port) => resolve(port));
            } else {
                // Reject the promise with the error
                reject(err);
            }
        });
    });
}
