export class LogginService {
    logStatusChanged(status: string) {
        console.log('A server status changed, new status: ' + status)
    }

    log(message: string) {
        console.log('Loggin service : message: ' + message);
    }
}