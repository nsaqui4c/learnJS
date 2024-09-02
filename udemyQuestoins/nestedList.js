// Transform flat list to nested list

const flatList = [
    {
      id: 1,
      name: "lvl 1 item 1",
      parentId: null,
    },
    {
      id: 2,
      name: "lvl 1 item 2",
      parentId: null,
    },
    {
      id: 3,
      name: "lvl 2 item 3",
      parentId: 1,
    },
    {
      id: 4,
      name: "lvl 3 item 4",
      parentId: 3,
    },
    {
      id: 5,
      name: "lvl 2 item 5",
      parentId: 2,
    },
  ];
  
  //[
  // {
  //    id: 1,
  //    children: [
  //      {
  //        id: 3,
  //        children: [
  //          {
  //            id: 4,
  //            children: []
  //          }
  //        ]
  //      }
  //    ]
  // },
  // {
  //    id: 2,
  //    children: [
  //      {
  //        id: 5,
  //        children: []
  //      }
  //    ]
  // }
  //]

function transformToNestedList(flatList) {
    const itemMap = new Map();
    const rootItems = [];
  
    // First pass: create a map of all items
    flatList.forEach(item => {
      itemMap.set(item.id, { id:item.id, children: [] });
    });

    console.log(itemMap)
  
    // Second pass: build the tree structure
    flatList.forEach(item => {
      const treeItem = itemMap.get(item.id);
      if (item.parentId === null) {
        rootItems.push(treeItem);
      } else {
        const parentItem = itemMap.get(item.parentId);
        parentItem.children.push(treeItem);             // adding to children to parent. Once the parent get added to root, parent will have children already added.
      }
      console.log(itemMap)
    });
  
    return rootItems;
  }
  
  // Usage
  const nestedList = transformToNestedList(flatList);
  console.log(JSON.stringify(nestedList, null, 2));


  
