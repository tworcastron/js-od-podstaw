export default function createCart(counter) {
  // // lista produktów
  let items = [];

  const refreshProductsCount = () => counter.innerText = items.length;

  const updateStore = () => {
    // zapisać dane do localStorage
    localStorage.setItem('items', JSON.stringify(items));
  }

  const setItems = newItems => {
    items = newItems;
    updateStore();
    refreshProductsCount();
  }

  const add = (id, title, price, quantity = 1) => { // parametry
    items.push({ id, title, price, quantity });
    refreshProductsCount();
    updateStore();
  }

  const remove = (id) => {
    const index = items.findIndex(item => item.id === id);
    items.splice(index, 1);
    refreshProductsCount();
    updateStore();
  }

  const hasItem = (id) => {
    return items.find(item => item.id === id);
  }

  return {
    add,
    remove,
    setItems,
    hasItem,
  };
}