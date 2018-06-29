//INCIDENCE MATRIX
//Rows represent NODES
//Columns represent EDGES
// -1 represents an EDGE leaving a NODE
// 1 represents an EDGE entering a NODE

var incMat = [
    [1, 0, -1, 1],
    [-1, 1, 0, 0],
    [0, -1, 1, 0],
    [0, 0, 0, -1],
    ];
    
//this matrix is BINARY/NON-WEIGHTED 
//this matrix uses -1, 0 and 1 
//A NON-BINARY/WEIGHTED matrix could use -1, 0, ∞