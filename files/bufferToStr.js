const buffer = new Buffer.alloc(128);
let i;
for (i = 0; i < 128; i++) {
    buffer[i] = i;
}

console.log(buffer.toString('utf-8', 0, buffer.length));
