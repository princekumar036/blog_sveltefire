import crypto from 'crypto';

export function load() {
    return {
        uuid: crypto.randomUUID()
    };
}