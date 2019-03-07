function getNodes(node) {
    return node.nodes;
}

function isDirectory(node) {
    return node.isDirectory;
}

function displayDir(node) {
    let map = new Map();
    calculateSize(map, 0, node);
    map.forEach((value,key)=>{
        console.log("|",getIndentation(value.indentation),value.name, ":", value.size );
    })
}

function calculateSize(map, indentation, node) {
    let size = 0;
    map.set(node.id, {name: node.name, indentation: indentation});
    if(isDirectory(node)) {
        const nodes = getNodes(node);
        nodes.forEach(node1=> {
            size+=calculateSize(map,indentation+1, node1);
        });
    } else {
        size = node.size;
    }
    map.get(node.id).size = size;
    
    return size;
}

function getIndentation(times) {
    let space = "--";
    for(let i=0;i<times; i++) {
        space = space + "--";
    }
    return space;
}

// file1 - 100
// folder1 - 400
//   file3 - 100
//   file4 - 100
//   folder12 - 200
//          file5 - 100
//          file6 - 100

const files = {
    id:1,    
    name : "parent",
    isDirectory : true,
    nodes :[
    {
        id: 12,
        name : "file1",
        size : 100,
        isDirectory : false,
        nodes: null
    },
    {
        id: 13,
        name : "folder1",
        isDirectory : true,
        nodes: [
            {
                id: 131,
                name : "file3",
                size : 100,
                isDirectory : false,
                nodes: null
            },
            {
                id: 132,
                name : "file4",
                size : 100,
                isDirectory : false,
                nodes: null
            },
            {
                id: 133,
                name : "folder12",
                isDirectory : true,
                nodes: [
                    {
                        id: 1331,
                        name : "file5",
                        size : 100,
                        isDirectory : false,
                        nodes: null
                    },
                    {
                        id: 1332,
                        name : "file6",
                        size : 100,
                        isDirectory : false,
                        nodes: null
                    }
                ]
            }
        ]
    },
    {
        id: 14,
        name : "folder2",
        isDirectory : true,
        nodes: [
            {
                id: 141,
                name : "file3",
                size : 200,
                isDirectory : false,
                nodes: null
            },
            {
                id: 142,
                name : "file4",
                size : 200,
                isDirectory : false,
                nodes: null
            },
            {
                id: 143,
                name : "folder21",
                isDirectory : true,
                nodes: [
                    {
                        id: 1431,
                        name : "file5",
                        size : 200,
                        isDirectory : false,
                        nodes: null
                    },
                    {
                        id: 1432,
                        name : "file6",
                        size : 200,
                        isDirectory : false,
                        nodes: null
                    }
                ]
            }
        ]
    }
]
}

displayDir(files);

