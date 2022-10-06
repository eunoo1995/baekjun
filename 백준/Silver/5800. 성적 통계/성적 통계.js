let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let K = parseInt(input[0]);
for(let i=1; i<=K; i++){
    let arr = input[i].split(' ').map(n=>parseInt(n));
    let [N, ...score] = arr;
    score.sort((a,b) => b-a);
    let max = score[0];
    let min = score[N-1];
    
    let gap = []
    for(let j=0; j<N-1; j++){
        gap.push(score[j]-score[j+1]);
    }
    gap.sort((a,b) => b-a);
    let maxGap = gap[0];
    
    console.log(`Class ${i}`);
    console.log(`Max ${max}, Min ${min}, Largest gap ${maxGap}`)
}