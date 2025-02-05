var maxPoints = function(points){
    let n = points.length
    let findSlope = function (p1 , p2){
        let [x1,y1] = p1
        let [x2,y2] = p2
        return (y2-y1)/(x2-x1)
    }
    let maxPoints = 1
    for (let i=0; i<n; i++){
        let map = {}
        let p1 = points[i]
        for(let j = 0;j < n; j++){
            if (j===i)continue
            let p2 = points[j]
            let slope = findSlope(p1,p2)
            if(!map[slope]) map[slope] = 0
            map[slope]++
        }
        for (let [slope,val] of Object.entries(map)){
            maxPoints = Math.max(maxPoints, val + 1)
        }
    }
    return maxPoints;
};
console.log(maxPoints([[1,1],[2,2],[3,3]]))